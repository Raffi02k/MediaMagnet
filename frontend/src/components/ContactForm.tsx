import { FormEvent, useState } from 'react';
import { site } from '../content/siteContent';

// Set to false when the CRM endpoint is ready.
const useWeb3Forms = true;
const contactFormPaused = false;
const pausedMessage = 'Jag arbetar på kontaktformuläret just nu. Din förfrågan har inte skickats. Kontakta mig via telefon eller e-post så hjälper jag dig direkt.';

type State = {
  kind: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: 'idle', message: '' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (contactFormPaused) {
      setState({ kind: 'error', message: pausedMessage });
      return;
    }
    if (state.kind === 'loading') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;

    setState({ kind: 'loading', message: 'Skickar din förfrågan...' });

    try {
      if (useWeb3Forms) {
        data.set('botcheck', String(data.get('website') ?? ''));
        data.delete('website');
        data.set('access_key', 'fa263251-5860-4fc9-9952-30c818055d93');
        data.set('subject', 'Ny projektförfrågan från MediaMagnet');
        data.set('from_name', 'MediaMagnet kontaktformulär');
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data
        });
        const body = await response.json() as { success?: boolean };
        if (!response.ok || body.success !== true) throw new Error('Kunde inte skicka just nu.');

        setState({
          kind: 'success',
          message: 'Tack! Din förfrågan har skickats. Jag hör av mig så snart jag kan.'
        });
      } else {
        const payload = {
          name: String(data.get('name') ?? ''),
          email: String(data.get('email') ?? ''),
          phone: String(data.get('phone') ?? ''),
          company: String(data.get('company') ?? ''),
          service: String(data.get('service') ?? ''),
          websiteUrl: String(data.get('websiteUrl') ?? ''),
          message: String(data.get('message') ?? ''),
          consent: data.get('consent') === 'on',
          website: String(data.get('website') ?? '')
        };

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const body = await response.json().catch(() => ({})) as { message?: string; detail?: string; status?: string };
        if (!response.ok) throw new Error(body.detail || 'Kunde inte skicka just nu.');

        setState({
          kind: 'success',
          message: body.status === 'preview'
            ? 'Formuläret är i preview-läge. Koppla SMTP-miljövariabler i produktion för riktig e-post.'
            : body.message || 'Tack! Jag hör av mig så snart jag kan.'
        });
      }
      form.reset();
    } catch {
      setState({
        kind: 'error',
        message: 'Förfrågan kunde inte skickas just nu. Försök igen eller kontakta mig direkt via e-post eller telefon.'
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={contactFormPaused}>
      {contactFormPaused && (
        <div className="form-status">
          <p>Kontaktformuläret är tillfälligt pausat medan jag arbetar på det. Ring eller mejla mig under tiden.</p>
          <div className="hero-buttons">
            <a className="button button-dark" href={`tel:${site.phone.replace(/\s+/g, '')}`}>Ring {site.phone}</a>
            <a className="button button-light" href={`mailto:${site.email}`}>Mejla mig</a>
          </div>
        </div>
      )}
      <div className="form-row">
        <label>
          <span>Namn *</span>
            <input name="name" autoComplete="name" required placeholder="Ditt namn" />
        </label>
        <label>
          <span>E-post *</span>
            <input name="email" type="email" autoComplete="email" required placeholder="namn@foretag.se" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Företag</span>
            <input name="company" autoComplete="organization" placeholder="Företagsnamn" />
        </label>
        <label>
          <span>Telefon</span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="070-000 00 00" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Vad vill du ha hjälp med?</span>
          <select name="service" defaultValue="Ny hemsida">
            <option>Ny hemsida</option>
            <option>Redesign av nuvarande hemsida</option>
            <option>Google & lokal SEO</option>
            <option>Reviews & Google Business</option>
            <option>Digitala menyboards</option>
            <option>Hosting & löpande hjälp</option>
            <option>Annat</option>
          </select>
        </label>
        <label>
          <span>Nuvarande hemsida</span>
          <input name="websiteUrl" placeholder="https://..." />
        </label>
      </div>

      <label>
        <span>Berätta kort om projektet *</span>
        <textarea name="message" required minLength={15} placeholder="Vad vill du förbättra och vad ska hemsidan hjälpa företaget med?" />
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>Jag godkänner att MediaMagnet använder uppgifterna för att besvara min förfrågan.</span>
      </label>

      <button className="button button-dark submit-button" type="submit" disabled={state.kind === 'loading'}>
        {state.kind === 'loading' ? 'Skickar...' : 'Skicka förfrågan ↗'}
      </button>

      <div role="status" aria-live="polite" aria-atomic="true">
        {state.kind !== 'idle' && <div className={`form-status ${state.kind}`}>{state.message}</div>}
      </div>
    </form>
  );
}
