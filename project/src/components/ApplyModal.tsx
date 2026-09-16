import { useState } from 'react';
import { Check, X, Loader2, AlertCircle, Mail, Copy } from 'lucide-react';
import { faculties, universityInfo } from '@/data/university';

const intakes = ['January', 'May', 'August', 'September'];
const ADMISSIONS_EMAIL =
  (universityInfo as { admissionsEmail?: string }).admissionsEmail || 'admissions@aviu.ac.ug';
const INTL_EMAIL =
  (universityInfo as { internationalEmail?: string }).internationalEmail || 'international@aviu.ac.ug';

function makeRef() {
  const t = Date.now().toString(36).toUpperCase();
  const r = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `AVIU-${t}-${r}`;
}

export function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    nationality: '',
    faculty: '',
    programme: '',
    intake: '',
    message: '',
    documents_note: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [refNo, setRefNo] = useState('');
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const buildBody = (ref: string) =>
    [
      `Application reference: ${ref}`,
      `Full name: ${form.full_name}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Nationality: ${form.nationality || 'Not specified'}`,
      `Faculty: ${form.faculty}`,
      `Programme: ${form.programme || 'Not specified'}`,
      `Preferred intake: ${form.intake}`,
      `Documents to follow: ${form.documents_note || 'Will send by email'}`,
      '',
      'Message:',
      form.message || '(none)',
      '',
      '— AVIU website application enquiry',
    ].join('\n');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const ref = makeRef();

    const payload = { ...form, reference: ref, submitted_at: new Date().toISOString() };

    try {
      const apiUrl = import.meta.env.VITE_SUPABASE_URL
        ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-application`
        : null;
      const redesUrl = import.meta.env.VITE_REDES_API_URL as string | undefined;

      if (redesUrl) {
        const res = await fetch(redesUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(import.meta.env.VITE_REDES_API_KEY
              ? { Authorization: `Bearer ${import.meta.env.VITE_REDES_API_KEY}` }
              : {}),
          },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setRefNo(ref);
          try {
            localStorage.setItem(`aviu_app_${ref}`, JSON.stringify(payload));
          } catch {
            /* ignore */
          }
          setStatus('success');
          return;
        }
      }

      if (apiUrl && import.meta.env.VITE_SUPABASE_ANON_KEY) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(payload),
        });
        if (response.ok) {
          const data = await response.json().catch(() => ({}));
          if (!data.error) {
            setRefNo(ref);
            try {
              localStorage.setItem(`aviu_app_${ref}`, JSON.stringify(payload));
            } catch {
              /* ignore */
            }
            setStatus('success');
            return;
          }
        }
      }
    } catch {
      /* fall through to mailto */
    }

    const subject = encodeURIComponent(
      `AVIU Application ${ref} — ${form.full_name} — ${form.programme || form.faculty}`
    );
    const body = encodeURIComponent(buildBody(ref));
    window.location.href = `mailto:${ADMISSIONS_EMAIL}?subject=${subject}&body=${body}`;
    setRefNo(ref);
    try {
      localStorage.setItem(`aviu_app_${ref}`, JSON.stringify(payload));
    } catch {
      /* ignore */
    }
    setStatus('success');
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    setRefNo('');
    setCopied(false);
    setForm({
      full_name: '',
      email: '',
      phone: '',
      nationality: '',
      faculty: '',
      programme: '',
      intake: '',
      message: '',
      documents_note: '',
    });
    onClose();
  };

  const copyRef = () => {
    if (!refNo) return;
    navigator.clipboard?.writeText(refNo).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="modal-success">
            <span className="success-icon">
              <Check size={28} />
            </span>
            <h3>Application enquiry recorded</h3>
            <p>
              Your reference number is <strong>{refNo}</strong>. Keep this for follow-up.
            </p>
            <button type="button" className="button button-outline" onClick={copyRef} style={{ marginBottom: 12 }}>
              <Copy size={16} /> {copied ? 'Copied' : 'Copy reference'}
            </button>
            <p>
              An email draft to <strong>{ADMISSIONS_EMAIL}</strong> may have opened — please send it
              if prompted. Attach certified transcripts and ID/passport when you can.
            </p>
            <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 8 }}>
              International applicants: also copy {INTL_EMAIL} for visa guidance after an offer.
            </p>
            <button className="button button-primary" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h3>Apply to AVIU</h3>
              <p>
                Enquire about any of our 25 NCHE-accredited programmes. You will receive a reference
                number. Submissions go to {ADMISSIONS_EMAIL}
                {import.meta.env.VITE_REDES_API_URL ? ' via REDES' : ''}.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Full name
                <input required value={form.full_name} onChange={(e) => update('full_name', e.target.value)} placeholder="Your full name" />
              </label>
              <label>
                Email address
                <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
              </label>
              <label>
                Phone / WhatsApp
                <input required type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+256 700 000 000" />
              </label>
              <label>
                Nationality
                <input value={form.nationality} onChange={(e) => update('nationality', e.target.value)} placeholder="e.g. Ugandan, Kenyan, Nigerian" />
              </label>
              <label>
                Faculty / School
                <select required value={form.faculty} onChange={(e) => update('faculty', e.target.value)}>
                  <option value="" disabled>
                    Select a faculty
                  </option>
                  {faculties.map((f) => (
                    <option key={f.id} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Specific programme
                <input
                  list="programme-list"
                  value={form.programme}
                  onChange={(e) => update('programme', e.target.value)}
                  placeholder="Start typing programme name…"
                />
                <datalist id="programme-list">
                  {faculties.flatMap((f) => f.programs.map((p) => <option key={p.name} value={p.name} />))}
                </datalist>
              </label>
              <label>
                Preferred intake
                <select required value={form.intake} onChange={(e) => update('intake', e.target.value)}>
                  <option value="" disabled>
                    Select an intake
                  </option>
                  {intakes.map((i) => (
                    <option key={i} value={i}>
                      {i} Intake
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Documents you will send (list)
                <input
                  value={form.documents_note}
                  onChange={(e) => update('documents_note', e.target.value)}
                  placeholder="e.g. UACE results, passport copy, IELTS"
                />
              </label>
              <label>
                Message (optional)
                <textarea rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Prior study, visa needs, questions…" />
              </label>
              {status === 'error' && (
                <div className="form-error">
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}
              <button className="button button-primary" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>
                    Submitting… <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Submit application <Mail size={16} />
                  </>
                )}
              </button>
              <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 10 }}>
                Fees and bursaries: Coming Soon. File uploads will attach via your email client or
                REDES when configured. By submitting you agree to be contacted by AVIU Admissions.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
