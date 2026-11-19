import { Fragment, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { disruption as disruptionData, sessionState } from '@/data.js';
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

const DisruptionPage = () => {
  const { t } = useTranslation();
  const d = t.disruption;
  const [replied, setReplied] = useState(false);
  const [reply, setReply] = useState('');
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const session = getSession();
    if (session?.startTime) {
      setStartTime(session.startTime);
      if (session.disruptionReplied) {
        setReplied(true);
        setReply(session.disruptionReply);
      }
    }
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [startTime]);

  const handleReply = (decision) => {
    const text = prompt(`Reply to PM (one sentence). Decision: ${decision}`);
    if (text) {
      const newReply = `${decision.toUpperCase()}: ${text}`;
      setReply(newReply);
      setReplied(true);
      const session = getSession();
      if (session) {
        saveSession({ ...session, disruptionReplied: true, disruptionReply: newReply });
      }
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const elapsedFormatted = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`;

  return (
    <Fragment>
      <Head>
        <title>{d.title} — {t.common.appName}</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">{d.elapsedLabel} {elapsedFormatted}</p>
        <h1 className="page-title-main">{d.title}</h1>
      </div>

      <div className="disruption-card">
        <div className="disruption-header">
          <span style={{ fontSize: '1.5rem' }}>⚠</span>
          <div>
            <h4 className="mb-1" style={{ margin: 0 }}>{d.incomingTitle}</h4>
            <p className="disruption-meta" style={{ margin: 0 }}>{d.incomingDesc}</p>
          </div>
        </div>
        <div className="disruption-body">
{d.clientMessage}
        </div>
      </div>

      <div className="disruption-card" style={{ background: 'var(--bg-warm)', borderColor: 'var(--border-light)' }}>
        <h4 className="mb-3" style={{ margin: 0 }}>{d.pmNoteTitle}</h4>
        <div className="disruption-pm-note">
          <strong>S. Chen, PM:</strong>
          <pre className="text-mono" style={{ 
            whiteSpace: 'pre-wrap', 
            lineHeight: 1.6, 
            fontSize: '0.85rem',
            margin: '0.5rem 0 0',
            background: 'transparent',
            border: 'none',
            padding: 0
          }}>
{d.pmNote}
          </pre>
        </div>
      </div>

      {!replied ? (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div className="card-body">
            <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{d.replyTitle}</h4>
            <p className="text-secondary mb-3">{d.replyDesc}</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleReply('accept')}
                className="btn btn-primary"
              >
                {d.options.accept}
              </button>
              <button
                onClick={() => handleReply('reject')}
                className="btn btn-outline"
                style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}
              >
                {d.options.reject}
              </button>
              <button
                onClick={() => handleReply('counter')}
                className="btn btn-gold"
              >
                {d.options.counter}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card" style={{ marginBottom: '1.5rem', borderColor: 'var(--success)', background: '#f8fdf9' }}>
          <div className="card-body">
            <h4 className="fw-bold mb-3" style={{ fontSize: '1rem', color: 'var(--success)' }}>{d.replySentTitle}</h4>
            <pre className="text-mono" style={{ 
              whiteSpace: 'pre-wrap', 
              lineHeight: 1.6, 
              fontSize: '0.85rem',
              background: 'var(--bg-card)',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              margin: 0
            }}>
{reply}
            </pre>
            <p className="text-secondary" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
              {d.replySaved}
            </p>
          </div>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <Link href="/submit" className="btn btn-primary w-100">
          {d.nextSubmit}
        </Link>
      </div>
    </Fragment>
  );
};

export default DisruptionPage;