import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { contract as contractData, studio, nuha, sessionState, allPages } from '@/data.js';
import Layout from 'components/Layout';
import useTranslation from '@/hooks/useTranslation';

const ContractPage = () => {
  const { t } = useTranslation();
  const [accepted, setAccepted] = useState(false);
  const [acceptMode, setAcceptMode] = useState(null);
  const [notes, setNotes] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(60 * 60);
  const timerRef = useRef(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('rwt_session');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.accepted && parsed.startTime) {
          setAccepted(true);
          setAcceptMode(parsed.acceptMode);
          setNotes(parsed.acceptNotes || '');
          setStartTime(parsed.startTime);
        }
      } catch (e) {
        console.warn('Invalid session storage');
      }
    }
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (accepted && startTime) {
      timerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(0, 60 * 60 - elapsed);
        setTimeRemaining(remaining);
        if (remaining === 0) {
          clearInterval(timerRef.current);
        }
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [accepted, startTime]);

  const handleAccept = (mode) => {
    const now = Date.now();
    let userNotes = '';
    if (mode === 'notes') {
      userNotes = prompt('Maksimal 3 catatan/pertanyaan ke studio (pisahkan dengan ;):') || '';
    }
    setAccepted(true);
    setAcceptMode(mode);
    setNotes(userNotes);
    setStartTime(now);
    sessionStorage.setItem('rwt_session', JSON.stringify({
      ...sessionState,
      accepted: true,
      acceptMode: mode,
      acceptNotes: userNotes,
      startTime: now,
    }));
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const c = t.contract;

  if (accepted) {
    return (
      <Fragment>
        <Head>
          <title>{c.acceptedTitle} — {t.common.appName}</title>
        </Head>
        <div className="page-header">
          <p className="eyebrow">Contract Status</p>
          <h1 className="page-title-main">{c.acceptedTitle}</h1>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="fw-bold mb-1">{c.acceptedMessage}</h5>
                <p className="mb-0 text-secondary">
                  {acceptMode === 'notes' ? c.acceptedNotes : c.acceptedNoNotes}
                  60-minute countdown started at {new Date(startTime).toLocaleTimeString('en-AU', { timeZone: 'Australia/Melbourne', hour12: false })} AEDT.
                </p>
              </div>
              <div className="text-end">
                <div className="text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.common.timeRemaining}</div>
                <div className="text-mono" style={{ fontSize: '2rem', fontWeight: 700 }}>
                  {formatTime(timeRemaining)}
                </div>
              </div>
            </div>

            {notes && (
              <div className="mt-3 p-3" style={{ background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h6 className="fw-bold mb-2">{c.yourNotes}</h6>
                <pre className="text-mono" style={{ fontSize: '0.8rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {notes}
                </pre>
              </div>
            )}
          </div>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div className="card-body">
            <h6 className="fw-bold mb-3">{c.nextBrief}</h6>
            <p className="mb-3 text-secondary">{c.readBrief}</p>
            <Link href="/brief" className="btn btn-primary w-100">
              {c.openBrief}
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6 className="fw-bold mb-2">{c.keyDeadlines}</h6>
            <ul className="checklist" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ border: 'none', padding: '0.5rem 0', background: 'transparent' }}>
                <strong>{c.submitDeadline}:</strong> <span className="text-mono">{new Date(startTime + 60 * 60 * 1000).toLocaleTimeString('en-AU', { timeZone: 'Australia/Melbourne', hour12: false })} AEDT</span>
              </li>
              <li style={{ border: 'none', padding: '0.5rem 0', background: 'transparent' }}>
                <strong>{c.disruptionExpected}</strong>
              </li>
              <li style={{ border: 'none', padding: '0.5rem 0', background: 'transparent' }}>
                <strong>{c.lateSubmission}</strong>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{c.title} — {t.common.appName}</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">{c.parties.studio}</p>
        <h1 className="page-title-main">{c.title}</h1>
        <div className="page-meta">
          {c.projectName} <span className="ms-2 fw-semibold">{c.projectCode}</span>
        </div>
      </div>

      <div className="section-block">
        <h3>Parties</h3>
        <div className="document-text">
          <p><strong>{c.parties.studio}:</strong> {studio.name}, {c.parties.address}, {c.parties.city} | {c.parties.timezone}</p>
          <p><strong>ABN:</strong> {c.parties.abn} | <strong>Email:</strong> {c.parties.email}</p>
          <p><strong>Senior Architect:</strong> {c.parties.seniorArchitect} | <strong>Project Manager:</strong> {c.parties.pm}</p>
          <p><strong>Freelancer:</strong> {nuha.name}, {nuha.role}, {nuha.rate} {nuha.currency}/hr ({nuha.rateNote})</p>
        </div>
      </div>

      <div className="section-block">
        <h3>1. Role & Scope</h3>
        <div className="document-text">
          <p><strong>Role:</strong> {c.role}</p>
          <p><strong>Engagement:</strong> Project-based, single assignment.</p>
          <p><strong>Scope:</strong></p>
          <ol>
            {c.scope.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section-block" style={{ background: 'var(--accent-gold-light)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
        <h3>⚠ Read Carefully — Two Clauses Are Problematic</h3>
        <p className="mb-3">Two clauses below are ambiguous or unfavorable. Spot them. You can note concerns when accepting.</p>
        <ol>
          {c.problematicClauses.map((clause, i) => (
            <li key={clause.id}><strong>Clause {clause.id}:</strong> &ldquo;{clause.text}&rdquo;</li>
          ))}
        </ol>
      </div>

      <div className="section-block">
        <h3>2. Fee & Payment</h3>
        <div className="document-text">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <p className="mb-1"><strong>Fixed Fee:</strong> {c.fee.amount} {c.fee.currency}</p>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{c.fee.breakdown}</p>
            </div>
            <div>
              <p className="mb-1"><strong>Rate Reference:</strong> {nuha.rate} {nuha.currency}/hr</p>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{nuha.rateNote}</p>
            </div>
          </div>
          <p>{c.paymentTerms}</p>
        </div>
      </div>

      <div className="section-block" style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
        <h3>3. Deadline — 60 Minutes From Accept</h3>
        <div className="document-text">
          <p><strong>Trigger:</strong> {c.deadline.startTrigger}</p>
          <p><strong>Duration:</strong> {c.deadline.minutes} minutes</p>
          <p><strong>Timezone:</strong> {c.deadline.timezone}</p>
          <p><strong>Example:</strong> {c.deadline.example}</p>
        </div>
      </div>

      <div className="section-block">
        <h3>4. Deliverables Format & Naming</h3>
        <ul>
          {c.deliverablesFormat.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section-block" style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
        <h3>5. Late / Non-Conforming Submission</h3>
        <p className="mb-0">{c.latePolicy}</p>
      </div>

      <div className="section-block">
        <p className="text-secondary"><strong>Jurisdiction:</strong> {c.jurisdiction}</p>
      </div>

      <div className="d-flex gap-3 flex-wrap" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
        <button
          onClick={() => handleAccept('clean')}
          className="btn btn-primary"
        >
          Accept
        </button>
        <button
          onClick={() => handleAccept('notes')}
          className="btn btn-outline"
        >
          Accept with Notes
        </button>
      </div>

      <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>
        Clicking either button starts the 60-minute countdown. You cannot pause.
      </p>
    </Fragment>
  );
};

export default ContractPage;