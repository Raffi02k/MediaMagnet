import { FormEvent, useState } from 'react';

type State = {
  kind: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: 'idle', message: '' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

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

    setState({ kind: 'loading', message: 'Skickar din förfrågan...' });

    try {
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
      form.reset();
    } catch {
      setState({
        kind: 'error',
        message: 'Formuläret kunde inte nå servern. Du kan också kontakta mig direkt via e-post eller telefon.'
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>Namn *</span>
          <input name="name" required placeholder="Ditt namn" />
        </label>
        <label>
          <span>E-post *</span>
          <input name="email" type="email" required placeholder="namn@foretag.se" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Företag</span>
          <input name="company" placeholder="Företagsnamn" />
        </label>
        <label>
          <span>Telefon</span>
          <input name="phone" type="tel" placeholder="070-000 00 00" />
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

      {state.kind !== 'idle' && <div className={`form-status ${state.kind}`}>{state.message}</div>}
    </form>
  );
}
