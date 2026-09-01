# Deploy to Vercel

1. Push the contents of this folder to GitHub/GitLab, or upload the project to Vercel.
2. Keep the Vercel Root Directory at the repository root.
3. `vercel.json` runs `cd frontend && npm install && npm run build`.
4. The React app is served from `frontend/dist`.
5. `/api/contact` is routed to the FastAPI app in `api/index.py`.
6. SPA routes such as `/services`, `/work/...` and `/about` rewrite to `index.html`.

## Email form in production
Configure these Vercel Environment Variables:

- CONTACT_TO_EMAIL
- SMTP_HOST
- SMTP_PORT
- SMTP_USERNAME
- SMTP_PASSWORD
- SMTP_FROM_EMAIL
- SMTP_USE_TLS=true
- ENVIRONMENT=production

Without SMTP the form stays in safe preview mode and does not pretend a real email was sent.
