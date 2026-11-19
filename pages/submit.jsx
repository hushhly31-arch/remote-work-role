import { Fragment, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { submitForm, deliverables, sessionState } from '@/data.js';
import Layout from 'components/Layout';
import useTranslation from '@/hooks/useTranslation';

const getSession = () => {
  if (typeof window === 'undefined') return null;
  const saved = sessionStorage.getItem('rwt_session');
  return saved ? JSON.parse(saved) : null;
};

const saveSession = (data) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('rwt_session', JSON.stringify(data));
  }
};

const SubmitPage = () => {
  const { t } = useTranslation();
  const s = t.submit;
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60 * 60);
  const [email, setEmail] = useState('');
  const [assumptions, setAssumptions] = useState('');
  const [asBuiltFindings, setAsBuiltFindings] = useState('');
  const [qaChecks, setQaChecks] = useState({});
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitTime, setSubmitTime] = useState(null);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const session = getSession();
    if (session?.startTime) {
      setStartTime(session.startTime);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const elapsedSec = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(0, 60 * 60 - elapsedSec);
      setElapsed(elapsedSec);
      setTimeRemaining(remaining);
      if (remaining === 0 && !submitted) {
        clearInterval(timerRef.current);
        alert('Time expired. Contract void.');
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [startTime, submitted]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const validateQA = () => {
    const checked = Object.values(qaChecks).filter(Boolean).length;
    return checked === submitForm.qaCheckboxes.length;
  };

  const readFileAsBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      resolve(result.includes(',') ? result.split(',')[1] : result);
    };
    reader.onerror = () => reject(reader.error || new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (wordCount(email) > 120) {
      alert('Email exceeds 120 words. Current: ' + wordCount(email));
      return;
    }
    if (!validateQA()) {
      alert('All QA checkboxes must be checked honestly.');
      return;
    }
    if (files.length === 0) {
      alert('At least one file required.');
      return;
    }

    setSending(true);
    setSendStatus(null);
    try {
      const preparedFiles = await Promise.all(files.map(async (f) => ({
        name: f.name,
        type: f.type || 'application/octet-stream',
        size: f.size,
        content: await readFileAsBase64(f),
      })));

      const now = Date.now();
      const usedSec = Math.floor((now - startTime) / 1000);
      const payload = {
        email,
        assumptions,
        asBuiltFindings,
        qaChecks,
        files: preparedFiles,
        meta: {
          submittedAt: new Date(now).toISOString(),
          timeUsed: formatTime(usedSec),
          qaCheckedCount: Object.values(qaChecks).filter(Boolean).length,
          projectCode: 'AW-2026-047',
        },
      };

      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to send submission');

      setSubmitted(true);
      setSubmitTime(now);
      setSendStatus('sent');
      clearInterval(timerRef.current);

      const session = getSession();
      if (session) {
        saveSession({
          ...session,
          submitted: true,
          submitTime: now,
          email,
          assumptions,
          asBuiltFindings,
          qaChecks,
          files: files.map(f => f.name),
          emailSent: true,
          emailId: data.id || null,
        });
      }

      setTimeout(() => { window.location.href = '/results'; }, 1200);
    } catch (err) {
      setSendStatus('error');
      alert((s.submitted?.sendError || 'Submission email failed') + ': ' + (err.message || 'Unknown error'));
    } finally {
      setSending(false);
    }
  };

  const submittedView = (
    <Fragment>
      <Head>
        <title>{s.submitted.title} — {t.common.appName}</title>
      </Head>
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h1 className="page-title-main" style={{ marginBottom: '0.5rem' }}>{s.submitted.title}</h1>
        <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
          {s.submitted.timeUsed.replace('{time}', formatTime(Math.floor((submitTime - startTime) / 1000)))}
        </p>
        <p className="text-muted" style={{ marginTop: '1rem' }}>{sendStatus === 'sent' ? (s.submitted.sent || s.submitted.preparingResults) : s.submitted.preparingResults}</p>
        <div className="spinner-border" style={{ borderColor: 'var(--text-primary)', width: '2rem', height: '2rem', marginTop: '1.5rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </Fragment>
  );

  const formView = (
    <Fragment>
      <Head>
        <title>{s.title} — {t.common.appName}</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">{s.finalStep}</p>
        <h1 className="page-title-main">{s.title}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{s.filesUpload.title}</h4>
                <input
                  type="file"
                  multiple
                  accept=".dwg,.pdf,.jpg"
                  onChange={handleFileChange}
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    padding: '0.625rem 0.875rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    border: '2px dashed var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    marginBottom: '1rem'
                  }}
                />
                <div className="uploaded-files">
                  {files.map((f, i) => (
                    <div key={i} className="uploaded-file">
                      <span className="file-name">{f.name}</span>
                      <span className="file-size text-mono">{(f.size / 1024).toFixed(1)} KB</span>
                      <button type="button" className="remove-file" onClick={() => removeFile(i)} aria-label="Remove file">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.75rem', marginBottom: 0 }}>
                  {s.filesUpload.acceptedTypes}
                </p>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{s.coverEmail.title}</h4>
                <textarea
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  rows="4"
                  placeholder={s.coverEmail.placeholder}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem' }}>
                  <span className="text-muted">{s.coverEmail.wordCount.replace('{count}', wordCount(email))}</span>
                  <span className={wordCount(email) > 120 ? 'text-danger' : 'text-success'} style={{ fontWeight: 600 }}>
                    {wordCount(email) > 120 ? s.coverEmail.overLimit : s.coverEmail.ok}
                  </span>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{s.assumptions.title}</h4>
                <textarea
                  value={assumptions}
                  onChange={(e) => setAssumptions(e.target.value)}
                  rows="4"
                  placeholder={s.assumptions.placeholder}
                />
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  {s.assumptions.note}
                </p>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{s.asBuiltErrors.title}</h4>
                <textarea
                  value={asBuiltFindings}
                  onChange={(e) => setAsBuiltFindings(e.target.value)}
                  rows="4"
                  placeholder={s.asBuiltErrors.placeholder}
                />
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  {s.asBuiltErrors.note}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card" style={{ position: 'sticky', top: '80px' }}>
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{s.qaChecklist.title}</h4>
                <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>{s.qaChecklist.desc}</p>
                <div className="checklist">
                  {submitForm.qaCheckboxes.map((q, i) => (
                    <label key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.75rem', 
                      padding: '0.75rem', 
                      background: 'var(--bg-card)', 
                      border: '1px solid var(--border-light)', 
                      borderRadius: 'var(--radius-md)', 
                      marginBottom: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}>
                      <input
                        type="checkbox"
                        checked={qaChecks[i] || false}
                        onChange={(e) => setQaChecks({ ...qaChecks, [i]: e.target.checked })}
                        style={{ marginTop: '0.125rem' }}
                      />
                      <span style={{ fontWeight: 400, lineHeight: 1.5, fontSize: '0.9rem' }}>{q}</span>
                    </label>
                  ))}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={sending || !validateQA() || files.length === 0 || wordCount(email) > 120}
                  style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
                >
                  {sending ? (s.submitted?.sending || 'Sending...') : s.qaChecklist.submitButton}
                </button>
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem', marginBottom: 0, textAlign: 'center' }}>
                  {s.qaChecklist.earlySubmit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );

  return submitted ? submittedView : formView;
};

export default SubmitPage;