import { Fragment, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { submitForm } from '@/data.js';
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

const emptyActionItem = () => ({ owner: '', task: '', deadline: '' });
const emptyTimelineRow = () => ({ phase: '', task: '', owner: '', start: '', deadline: '', status: 'Not started', notes: '' });
const emptyRiskRow = () => ({ risk: '', impact: '', backup: '', owner: '' });

const SubmitPage = () => {
  const { t } = useTranslation();
  const s = t.submit;
  const [startTime, setStartTime] = useState(Date.now());
  const [timeRemaining, setTimeRemaining] = useState(60 * 60);
  const [email, setEmail] = useState('');
  const [assumptions, setAssumptions] = useState('');
  const [findings, setFindings] = useState('');

  const [notesDate, setNotesDate] = useState('');
  const [notesDecisions, setNotesDecisions] = useState('');
  const [actionItems, setActionItems] = useState([emptyActionItem(), emptyActionItem()]);
  const [notesRisks, setNotesRisks] = useState('');

  const [timelineRows, setTimelineRows] = useState([emptyTimelineRow(), emptyTimelineRow(), emptyTimelineRow(), emptyTimelineRow(), emptyTimelineRow()]);
  const [riskRows, setRiskRows] = useState([emptyRiskRow(), emptyRiskRow(), emptyRiskRow()]);

  const [dailyDone, setDailyDone] = useState('');
  const [dailyProgress, setDailyProgress] = useState('');
  const [dailyBlocker, setDailyBlocker] = useState('');
  const [dailyTomorrow, setDailyTomorrow] = useState('');

  const [qaChecks, setQaChecks] = useState({});
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitTime, setSubmitTime] = useState(null);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [validationMsg, setValidationMsg] = useState('');
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
      setTimeRemaining(remaining);
      if (remaining === 0 && !submitted) {
        clearInterval(timerRef.current);
        alert('Waktu habis. Perjanjian batal.');
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

  const filledActionItems = actionItems.filter((r) => r.owner.trim() && r.task.trim() && r.deadline.trim());
  const filledTimelineRows = timelineRows.filter((r) => r.phase.trim() && r.task.trim() && r.owner.trim() && r.deadline.trim());
  const filledRiskRows = riskRows.filter((r) => r.risk.trim() && r.impact.trim() && r.backup.trim());

  const validate = () => {
    const checked = Object.values(qaChecks).filter(Boolean).length;
    if (!notesDate.trim()) return s.validation.dateRequired;
    if (!notesDecisions.trim()) return s.validation.decisionsRequired;
    if (filledActionItems.length < 2) return s.validation.actionItemsRequired;
    if (filledTimelineRows.length < 5) return s.validation.timelineRequired;
    if (filledRiskRows.length < 3) return s.validation.risksRequired;
    if (!dailyDone.trim() || !dailyProgress.trim() || !dailyBlocker.trim() || !dailyTomorrow.trim()) return s.validation.dailyReportRequired;
    if (!email.trim()) return s.validation.emailRequired;
    if (wordCount(email) > 120) return s.validation.emailOverLimit;
    if (!findings.trim()) return s.validation.findingsRequired;
    if (checked !== submitForm.qaCheckboxes.length) return s.validation.qaRequired;
    return '';
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
    const error = validate();
    if (error) {
      setValidationMsg(error);
      alert(error);
      return;
    }
    setValidationMsg('');

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
        asBuiltFindings: findings,
        qaChecks,
        files: preparedFiles,
        meetingNotes: {
          dateParticipants: notesDate,
          decisions: notesDecisions,
          actionItems: filledActionItems,
          risks: notesRisks,
        },
        timeline: {
          rows: filledTimelineRows,
          riskLog: filledRiskRows,
        },
        dailyReport: {
          done: dailyDone,
          inProgress: dailyProgress,
          blocker: dailyBlocker,
          tomorrow: dailyTomorrow,
        },
        meta: {
          submittedAt: new Date(now).toISOString(),
          timeUsed: formatTime(usedSec),
          qaCheckedCount: Object.values(qaChecks).filter(Boolean).length,
          projectCode: 'TDA-2026-012',
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
          asBuiltFindings: findings,
          qaChecks,
          meetingNotes: payload.meetingNotes,
          timeline: payload.timeline,
          dailyReport: payload.dailyReport,
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

  const inputStyle = { width: '100%', padding: '0.55rem 0.7rem', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' };
  const cellStyle = { padding: '0.35rem', minWidth: 130 };
  const thStyle = { padding: '0.45rem 0.5rem', textAlign: 'left', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' };
  const smallBtn = { padding: '0.35rem 0.7rem', fontSize: '0.8rem' };

  const sectionCard = (title, subtitle, body) => (
    <div className="card" style={{ marginBottom: '1.5rem' }}>
      <div className="card-body">
        <h4 className="fw-bold" style={{ fontSize: '1rem', marginBottom: '0.15rem' }}>{title}</h4>
        {subtitle && <p className="text-muted" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>{subtitle}</p>}
        {!subtitle && <div style={{ marginBottom: '1rem' }} />}
        {body}
      </div>
    </div>
  );

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
        <p className="text-secondary" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          {s.timeNote.replace('{time}', formatTime(timeRemaining))}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">

            {sectionCard('1. ' + s.notes.title, s.notes.subtitle, (
              <>
                <input
                  value={notesDate}
                  onChange={(e) => setNotesDate(e.target.value)}
                  placeholder={s.notes.datePlaceholder}
                  style={{ ...inputStyle, marginBottom: '0.75rem' }}
                />
                <textarea
                  value={notesDecisions}
                  onChange={(e) => setNotesDecisions(e.target.value)}
                  rows="3"
                  placeholder={s.notes.decisionsPlaceholder}
                  style={{ ...inputStyle, marginBottom: '1rem', resize: 'vertical' }}
                />
                <p className="fw-semibold" style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>{s.notes.actionItemsTitle}</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-warm)' }}>
                        <th style={thStyle}>{s.notes.colOwner}</th>
                        <th style={thStyle}>{s.notes.colTask}</th>
                        <th style={thStyle}>{s.notes.colDeadline}</th>
                        <th style={{ ...thStyle, width: 44 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {actionItems.map((row, i) => (
                        <tr key={i}>
                          <td style={cellStyle}><input value={row.owner} onChange={(e) => setActionItems(actionItems.map((r, j) => j === i ? { ...r, owner: e.target.value } : r))} placeholder="Rani / Klien A / PM" style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.task} onChange={(e) => setActionItems(actionItems.map((r, j) => j === i ? { ...r, task: e.target.value } : r))} placeholder={s.notes.taskPlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.deadline} onChange={(e) => setActionItems(actionItems.map((r, j) => j === i ? { ...r, deadline: e.target.value } : r))} placeholder={s.notes.deadlinePlaceholder} style={inputStyle} /></td>
                          <td style={{ padding: '0.35rem' }}>
                            <button type="button" className="remove-file" onClick={() => setActionItems(actionItems.length > 1 ? actionItems.filter((_, j) => j !== i) : actionItems)} aria-label="Remove row">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button type="button" className="btn btn-outline" style={{ ...smallBtn, marginTop: '0.5rem' }} onClick={() => setActionItems([...actionItems, emptyActionItem()])}>
                  + {s.notes.addRow}
                </button>
                <textarea
                  value={notesRisks}
                  onChange={(e) => setNotesRisks(e.target.value)}
                  rows="2"
                  placeholder={s.notes.risksPlaceholder}
                  style={{ ...inputStyle, marginTop: '1rem', resize: 'vertical' }}
                />
              </>
            ))}

            {sectionCard('2. ' + s.timeline.title, s.timeline.subtitle, (
              <>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-warm)' }}>
                        <th style={thStyle}>{s.timeline.colPhase}</th>
                        <th style={thStyle}>{s.timeline.colTask}</th>
                        <th style={thStyle}>{s.timeline.colOwner}</th>
                        <th style={thStyle}>{s.timeline.colStart}</th>
                        <th style={thStyle}>{s.timeline.colDeadline}</th>
                        <th style={thStyle}>{s.timeline.colStatus}</th>
                        <th style={{ ...thStyle, width: 44 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {timelineRows.map((row, i) => (
                        <tr key={i}>
                          <td style={cellStyle}><input value={row.phase} onChange={(e) => setTimelineRows(timelineRows.map((r, j) => j === i ? { ...r, phase: e.target.value } : r))} placeholder={s.timeline.phasePlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.task} onChange={(e) => setTimelineRows(timelineRows.map((r, j) => j === i ? { ...r, task: e.target.value } : r))} placeholder={s.timeline.taskPlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.owner} onChange={(e) => setTimelineRows(timelineRows.map((r, j) => j === i ? { ...r, owner: e.target.value } : r))} placeholder={s.timeline.ownerPlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.start} onChange={(e) => setTimelineRows(timelineRows.map((r, j) => j === i ? { ...r, start: e.target.value } : r))} placeholder={s.timeline.datePlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.deadline} onChange={(e) => setTimelineRows(timelineRows.map((r, j) => j === i ? { ...r, deadline: e.target.value } : r))} placeholder={s.timeline.datePlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}>
                            <select value={row.status} onChange={(e) => setTimelineRows(timelineRows.map((r, j) => j === i ? { ...r, status: e.target.value } : r))} style={inputStyle}>
                              <option value="Not started">{s.timeline.statusNotStarted}</option>
                              <option value="In progress">{s.timeline.statusInProgress}</option>
                              <option value="Blocked">{s.timeline.statusBlocked}</option>
                              <option value="Done">{s.timeline.statusDone}</option>
                            </select>
                          </td>
                          <td style={{ padding: '0.35rem' }}>
                            <button type="button" className="remove-file" onClick={() => setTimelineRows(timelineRows.length > 1 ? timelineRows.filter((_, j) => j !== i) : timelineRows)} aria-label="Remove row">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button type="button" className="btn btn-outline" style={{ ...smallBtn, marginTop: '0.5rem' }} onClick={() => setTimelineRows([...timelineRows, emptyTimelineRow()])}>
                  + {s.timeline.addRow}
                </button>

                <p className="fw-semibold" style={{ fontSize: '0.85rem', margin: '1.25rem 0 0.4rem' }}>{s.timeline.riskLogTitle}</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-warm)' }}>
                        <th style={thStyle}>{s.timeline.colRisk}</th>
                        <th style={thStyle}>{s.timeline.colImpact}</th>
                        <th style={thStyle}>{s.timeline.colBackup}</th>
                        <th style={thStyle}>{s.timeline.colOwner}</th>
                        <th style={{ ...thStyle, width: 44 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {riskRows.map((row, i) => (
                        <tr key={i}>
                          <td style={cellStyle}><input value={row.risk} onChange={(e) => setRiskRows(riskRows.map((r, j) => j === i ? { ...r, risk: e.target.value } : r))} placeholder={s.timeline.riskPlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.impact} onChange={(e) => setRiskRows(riskRows.map((r, j) => j === i ? { ...r, impact: e.target.value } : r))} placeholder={s.timeline.impactPlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.backup} onChange={(e) => setRiskRows(riskRows.map((r, j) => j === i ? { ...r, backup: e.target.value } : r))} placeholder={s.timeline.backupPlaceholder} style={inputStyle} /></td>
                          <td style={cellStyle}><input value={row.owner} onChange={(e) => setRiskRows(riskRows.map((r, j) => j === i ? { ...r, owner: e.target.value } : r))} placeholder={s.timeline.ownerPlaceholder} style={inputStyle} /></td>
                          <td style={{ padding: '0.35rem' }}>
                            <button type="button" className="remove-file" onClick={() => setRiskRows(riskRows.length > 1 ? riskRows.filter((_, j) => j !== i) : riskRows)} aria-label="Remove row">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button type="button" className="btn btn-outline" style={{ ...smallBtn, marginTop: '0.5rem' }} onClick={() => setRiskRows([...riskRows, emptyRiskRow()])}>
                  + {s.timeline.addRow}
                </button>
              </>
            ))}

            {sectionCard('3. ' + s.dailyReport.title, s.dailyReport.subtitle, (
              <>
                <label className="fw-semibold" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>{s.dailyReport.done}</label>
                <input value={dailyDone} onChange={(e) => setDailyDone(e.target.value)} placeholder={s.dailyReport.donePlaceholder} style={{ ...inputStyle, marginBottom: '0.75rem' }} />
                <label className="fw-semibold" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>{s.dailyReport.inProgress}</label>
                <input value={dailyProgress} onChange={(e) => setDailyProgress(e.target.value)} placeholder={s.dailyReport.inProgressPlaceholder} style={{ ...inputStyle, marginBottom: '0.75rem' }} />
                <label className="fw-semibold" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>{s.dailyReport.blocker}</label>
                <input value={dailyBlocker} onChange={(e) => setDailyBlocker(e.target.value)} placeholder={s.dailyReport.blockerPlaceholder} style={{ ...inputStyle, marginBottom: '0.75rem' }} />
                <label className="fw-semibold" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>{s.dailyReport.tomorrow}</label>
                <input value={dailyTomorrow} onChange={(e) => setDailyTomorrow(e.target.value)} placeholder={s.dailyReport.tomorrowPlaceholder} style={{ ...inputStyle, marginBottom: 0 }} />
              </>
            ))}

            {sectionCard('4. ' + s.coverEmail.title, null, (
              <>
                <textarea
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  rows="4"
                  placeholder={s.coverEmail.placeholder}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem' }}>
                  <span className="text-muted">{s.coverEmail.wordCount.replace('{count}', wordCount(email))}</span>
                  <span className={wordCount(email) > 120 ? 'text-danger' : 'text-success'} style={{ fontWeight: 600 }}>
                    {wordCount(email) > 120 ? s.coverEmail.overLimit : s.coverEmail.ok}
                  </span>
                </div>
              </>
            ))}

            {sectionCard('5. ' + s.assumptions.title, null, (
              <>
                <textarea
                  value={assumptions}
                  onChange={(e) => setAssumptions(e.target.value)}
                  rows="4"
                  placeholder={s.assumptions.placeholder}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  {s.assumptions.note}
                </p>
              </>
            ))}

            {sectionCard('6. ' + s.asBuiltErrors.title, null, (
              <>
                <textarea
                  value={findings}
                  onChange={(e) => setFindings(e.target.value)}
                  rows="4"
                  placeholder={s.asBuiltErrors.placeholder}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: 0 }}>
                  {s.asBuiltErrors.note}
                </p>
              </>
            ))}

            {sectionCard('7. ' + s.filesUpload.title, s.filesUpload.subtitle, (
              <>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.xlsx,.csv,.txt,.md"
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
              </>
            ))}
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
                  disabled={sending}
                  style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
                >
                  {sending ? (s.submitted?.sending || 'Mengirim...') : s.qaChecklist.submitButton}
                </button>
                {validationMsg && (
                  <p className="text-danger" style={{ fontSize: '0.8rem', marginTop: '0.75rem', marginBottom: 0, textAlign: 'center' }}>
                    {validationMsg}
                  </p>
                )}
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
