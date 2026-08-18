# MediaMagnet

Min personliga portfolio byggd för att visa webbdesign, systemutveckling och digital närvaro i en modern, mörk och premium-inspirerad presentation.

Projektet är refaktorerat till en riktig React + TypeScript-arkitektur där varje sida nu är byggd som riktiga komponenter och page-filer, i stället för att ladda gammal statisk HTML.

## Vad projektet innehåller

- startsida med hero, erfarenhet, tjänster, utvalda case och CTA
- tjänstesida för `Build`, `Run` och `Grow`
- worksida med strukturerad projektdata
- case-sidor för `Penselverket` och `Laddinsikt`
- about-sida med profil, filosofi och arbetssätt
- kontaktsida med formulär mot FastAPI-backend

## Tech stack

- React
- TypeScript
- Vite
- React Router
- Python
- FastAPI

## Projektstruktur

- `frontend/src/pages` innehåller alla riktiga React-sidor
- `frontend/src/components` innehåller återanvändbara UI-komponenter
- `frontend/src/data/projects.ts` innehåller portfolio-casen
- `frontend/src/content/siteContent.ts` innehåller gemensamt innehåll
- `frontend/src/styles/global.css` innehåller den visuella designen
- `backend/app/main.py` innehåller API och servering av byggd frontend

## Lokal utveckling

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend kör då på `http://localhost:5173`.

### Backend

```bash
cd ..
python3 -m uvicorn backend.app.main:app --reload
```

Backend kör då på `http://localhost:8000`.

## Produktion lokalt

Bygg frontend:

```bash
cd frontend
npm run build
```

Starta sedan FastAPI från projektroten:

```bash
python3 -m uvicorn backend.app.main:app --reload
```

Öppna sedan `http://localhost:8000`.

## Portfolio-case

### Penselverket

Live site:

`https://penselverket.edgeone.dev`

### Laddinsikt

Ett konceptcase för sales intelligence och laddinfrastruktur med fokus på data, dashboard-UX och B2B-systemtänk.

## Kontaktformulär

Kontaktformuläret postar till:

`POST /api/contact`

För att aktivera riktig e-post, kopiera och fyll i:

`backend/.env.example`

Utan SMTP-konfiguration kör formuläret i preview-läge med tydligt svar tillbaka till användaren.

## Snabb preview

Det finns också en portabel previewfil:

`OPEN_WEBSITE.html`

Den är praktisk om du snabbt vill visa portfolion utan att starta hela utvecklingsmiljön.
