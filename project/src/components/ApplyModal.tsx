import { useState } from 'react';
import { ArrowRight, Check, X, Loader2, AlertCircle } from 'lucide-react';
import { faculties } from '@/data/university';

const intakes = ['January', 'May', 'August'];

export function ApplyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    faculty: '',
    programme: '',
    intake: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-application`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || `Request failed (${response.status})`);
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    setForm({
      full_name: '',
      email: '',
      phone: '',
      faculty: '',
      programme: '',
      intake: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <X size={19} />
        </button>
        {status === 'success' ? (
          <div className="success-state">
            <span className="success-icon">
              <Check size={25} />
            </span>
            <h3>Application received.</h3>
            <p>
              Thank you, {form.full_name.split(' ')[0]}. Your application has been
              submitted successfully. Our admissions team will contact you via
              email and WhatsApp shortly.
            </p>
            <button className="button button-primary" onClick={handleClose}>
              Done <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Begin your journey
            </div>
            <h3>
              Tell us a little<br /><em>about yourself.</em>
            </h3>
            <p>Our admissions team will help you find the right path at Avance.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Full name
                <input
                  required
                  placeholder="Your full name"
                  value={form.full_name}
                  onChange={(e) => update('full_name', e.target.value)}
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </label>
              <label>
                Phone / WhatsApp number
                <input
                  required
                  type="tel"
                  placeholder="+256 700 000 000"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </label>
              <label>
                What would you like to study?
                <select
                  required
                  defaultValue=""
                  value={form.faculty}
                  onChange={(e) => update('faculty', e.target.value)}
                >
                  <option value="" disabled>Select a faculty</option>
                  {faculties.map((f) => (
                    <option key={f.id} value={f.name}>{f.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Specific programme (optional)
                <input
                  placeholder="e.g. Bachelor of Business Administration"
                  value={form.programme}
                  onChange={(e) => update('programme', e.target.value)}
                />
              </label>
              <label>
                Preferred intake
                <select
                  required
                  defaultValue=""
                  value={form.intake}
                  onChange={(e) => update('intake', e.target.value)}
                >
                  <option value="" disabled>Select an intake</option>
                  {intakes.map((i) => (
                    <option key={i} value={i}>{i} Intake</option>
                  ))}
                </select>
              </label>
              <label>
                Message (optional)
                <textarea
                  rows={3}
                  placeholder="Tell us anything else..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </label>
              {status === 'error' && (
                <div className="form-error">
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}
              <button
                className="button button-primary"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>Submitting... <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>Submit application <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
