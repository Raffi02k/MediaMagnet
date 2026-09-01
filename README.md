# MediaMagnet — SiteRabbits-inspired rebuild

A completely new MediaMagnet portfolio/site built from scratch in React + TypeScript + Vite, with Python/FastAPI for the contact flow.

## Design direction
The page flow is inspired by the reference SiteRabbits experience:
- strong hero + single primary CTA
- interactive website upgrade / before-after section
- trusted client marquee
- three-step process
- horizontally moving work showcase
- FAQ accordion
- strong final CTA
- simple About and Work pages

All copy, branding, client projects, imagery and contact information are MediaMagnet-specific.

## Structure

```text
MediaMagnet/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── PageMeta.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectPreview.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── content/siteContent.ts
│   │   ├── data/projects.ts
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   ├── WorkPage.tsx
│   │   │   ├── ProcessPage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── ProjectDetailPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   ├── styles/global.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── backend/app/main.py
├── api/index.py
└── vercel.json
```

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Build:

```bash
npm run build
```

Backend locally:

```bash
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload
```

## Contact form
Without SMTP variables the backend returns a safe preview response. For real email delivery, configure the variables shown in `backend/.env.example` in Vercel.

## Live project previews
Project cards use public screenshot thumbnails of the live client URLs. If that service cannot load, the component automatically shows a branded fallback card. Project detail pages also provide a direct live-site button.
