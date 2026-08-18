from __future__ import annotations
import asyncio, os, re, smtplib, time
from collections import defaultdict, deque
from email.message import EmailMessage
from pathlib import Path
from typing import Deque
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field, field_validator

ROOT=Path(__file__).resolve().parents[2]
DIST=ROOT/'frontend'/'dist'
RATE_WINDOW_SECONDS=15*60
RATE_LIMIT=5
REQUESTS:dict[str,Deque[float]]=defaultdict(deque)
app=FastAPI(title='Raffi Digital API',version='1.0.0',docs_url='/api/docs' if os.getenv('ENVIRONMENT','development')!='production' else None,redoc_url=None)

class ContactPayload(BaseModel):
    name:str=Field(min_length=2,max_length=120)
    company:str=Field(default='',max_length=160)
    email:str=Field(min_length=5,max_length=160)
    phone:str=Field(default='',max_length=40)
    projectType:str=Field(min_length=2,max_length=160)
    message:str=Field(min_length=20,max_length=5000)
    consent:bool
    website:str=Field(default='',max_length=200)
    @field_validator('email')
    @classmethod
    def valid_email(cls,v):
        v=v.strip()
        if not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',v): raise ValueError('Ogiltig e-postadress')
        return v
    @field_validator('name','company','phone','projectType','message','website')
    @classmethod
    def strip_text(cls,v): return v.strip()

def client_ip(request:Request)->str:
    f=request.headers.get('x-forwarded-for')
    return f.split(',')[0].strip() if f else (request.client.host if request.client else 'unknown')

def rate_limit(key:str):
    now=time.time();q=REQUESTS[key]
    while q and now-q[0]>RATE_WINDOW_SECONDS:q.popleft()
    if len(q)>=RATE_LIMIT: raise HTTPException(status_code=429,detail='För många försök. Vänta en stund och prova igen.')
    q.append(now)

def smtp_ready(): return all(os.getenv(k,'').strip() for k in ['CONTACT_TO_EMAIL','SMTP_HOST','SMTP_FROM_EMAIL'])

def send_email(p:ContactPayload):
    msg=EmailMessage();msg['Subject']=f'Ny projektförfrågan – {p.projectType} – {p.name}';msg['From']=os.environ['SMTP_FROM_EMAIL'];msg['To']=os.environ['CONTACT_TO_EMAIL'];msg['Reply-To']=p.email
    msg.set_content('\n'.join(['Ny förfrågan från Raffi Digital','',f'Namn: {p.name}',f'Företag: {p.company or "-"}',f'E-post: {p.email}',f'Telefon: {p.phone or "-"}',f'Projekttyp: {p.projectType}','','Meddelande:',p.message]))
    with smtplib.SMTP(os.environ['SMTP_HOST'],int(os.getenv('SMTP_PORT','587')),timeout=20) as smtp:
        if os.getenv('SMTP_USE_TLS','true').lower() in {'1','true','yes'}: smtp.starttls()
        user=os.getenv('SMTP_USERNAME','')
        if user:smtp.login(user,os.getenv('SMTP_PASSWORD',''))
        smtp.send_message(msg)

@app.get('/api/health')
def health(): return {'status':'ok','email':'configured' if smtp_ready() else 'preview'}

@app.post('/api/contact')
async def contact(payload:ContactPayload,request:Request):
    rate_limit(client_ip(request))
    if payload.website:return JSONResponse(status_code=202,content={'status':'accepted'})
    if not payload.consent:raise HTTPException(status_code=422,detail='Samtycke krävs.')
    if not smtp_ready():return JSONResponse(status_code=202,content={'status':'preview','message':'Formuläret är validerat men SMTP är inte konfigurerat.'})
    try: await asyncio.to_thread(send_email,payload)
    except (OSError,smtplib.SMTPException) as exc: raise HTTPException(status_code=502,detail='E-posttjänsten kunde inte ta emot meddelandet just nu.') from exc
    return {'status':'sent','message':'Tack! Din förfrågan har skickats.'}

@app.get('/{full_path:path}')
def serve(full_path:str):
    if not DIST.exists(): raise HTTPException(status_code=503,detail='Frontend är inte byggd.')
    path=(DIST/(full_path or 'index.html')).resolve()
    try:path.relative_to(DIST.resolve())
    except ValueError as exc:raise HTTPException(status_code=403,detail='Otillåten sökväg.') from exc
    if path.is_file():return FileResponse(path)
    html_candidate=(DIST/(full_path+'.html')).resolve()
    if html_candidate.is_file():return FileResponse(html_candidate)
    raise HTTPException(status_code=404,detail='Sidan finns inte.')
