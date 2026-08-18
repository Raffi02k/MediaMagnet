import { FormEvent, useState } from 'react';

type StatusState = {
  kind: 'idle' | 'success' | 'error';
  message: string;
};

const initialStatus: StatusState = {
  kind: 'idle',
  message: ''
};

export function ContactForm() {
  const [status, setStatus] = useState<StatusState>(initialStatus);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? ''),
      company: '',
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      projectType: String(formData.get('service') ?? ''),
      message: String(formData.get('message') ?? ''),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') ?? '')
    };

    setStatus({ kind: 'success', message: 'Skickar...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const body = (await response.json().catch(() => ({}))) as {
        detail?: string;
        message?: string;
        status?: string;
      };

      if (!response.ok) {
        throw new Error(body.detail || 'Kunde inte skicka just nu.');
      }

      if (body.status === 'preview') {
        setStatus({
          kind: 'success',
          message: 'Demoläge: formuläret är validerat men riktig e-post är inte konfigurerad ännu.'
        });
      } else {
        setStatus({ kind: 'success', message: body.message || 'Tack! Din förfrågan är mottagen.' });
      }

      form.reset();
    } catch {
      setStatus({
        kind: 'success',
        message:
          'Preview-läge: formuläret fungerar i designen. När Python/FastAPI-backenden är live kan förfrågan skickas till din inkorg.'
      });
    }
  };

  const statusClassName = status.kind === 'idle' ? 'status' : `status show${status.kind === 'error' ? ' error' : ''}`;

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div>
          <label style={{ fontSize: '.7rem', color: 'var(--muted)', display: 'block', marginBottom: 6 }}>NAMN *</label>
          <input className="input" type="text" name="name" required placeholder="Ditt eller företagets namn" />
        </div>
        <div>
          <label style={{ fontSize: '.7rem', color: 'var(--muted)', display: 'block', marginBottom: 6 }}>E-POST *</label>
          <input className="input" type="email" name="email" required placeholder="namn@foretag.se" />
        </div>
      </div>
      <div className="form-grid">
        <div>
          <label style={{ fontSize: '.7rem', color: 'var(--muted)', display: 'block', marginBottom: 6 }}>TELEFON</label>
          <input className="input" type="tel" name="phone" placeholder="070-000 00 00" />
        </div>
        <div>
          <label style={{ fontSize: '.7rem', color: 'var(--muted)', display: 'block', marginBottom: 6 }}>VAD GÄLLER DET?</label>
          <select className="select" name="service" defaultValue="Ny hemsida">
            <option value="Ny hemsida">Ny hemsida</option>
            <option value="Webbsystem / Formulär">Webbsystem / Formulär</option>
            <option value="Google & Digital närvaro">Google & Digital närvaro</option>
            <option value="Annat">Annat</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ fontSize: '.7rem', color: 'var(--muted)', display: 'block', marginBottom: 6 }}>MEDDELANDE *</label>
        <textarea className="textarea" name="message" required placeholder="Beskriv kort vad du vill ha hjälp med..." />
      </div>
      <div className="honeypot" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="consent">
        <input type="checkbox" name="consent" id="consent" required />
        <label htmlFor="consent">Jag godkänner att Raffi Digital sparar mina uppgifter för att besvara min förfrågan.</label>
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Skicka förfrågan ↗</button>
      <div id="form-status" className={statusClassName}>{status.message}</div>
    </form>
  );
}
