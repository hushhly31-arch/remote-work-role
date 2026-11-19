import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { results, sessionState, contract, credentials } from '@/data.js';
import Layout from 'components/Layout';

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState('senior');
  const [scores, setScores] = useState({});

  const tabs = [
    { id: 'senior', label: 'Senior Architect Feedback' },
    { id: 'pm', label: 'PM Comment' },
    { id: 'contract', label: 'Contract Evaluation' },
    { id: 'rubric', label: 'Score Rubric' },
    { id: 'email', label: 'Email Examples' },
    { id: 'decision', label: 'Final Decision' },
    { id: 'credential', label: 'Credential' },
  ];

  const calculateScore = () => {
    let total = 0;
    let max = 0;
    Object.entries(results.rubric).forEach(([key, r]) => {
      const score = scores[key] || 0;
      total += (score / r.weight) * r.weight;
      max += r.weight;
    });
    return max > 0 ? Math.round((total / max) * 100) : 0;
  };

  const totalScore = calculateScore();
  const offered = totalScore >= 70;
  const getLevel = (score) => {
    if (score >= 95) return 'distinction';
    if (score >= 85) return 'proficient';
    if (score >= 70) return 'completed';
    return null;
  };
  const level = getLevel(totalScore);
  const levelInfo = credentials.levels.find(l => l.key === level) || { name: 'Not Earned', desc: 'Score below 70%' };

  return (
    <Fragment>
      <Head>
        <title>Results — Remote Work Training</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">Post-Session Review</p>
        <h1 className="page-title-main">Results</h1>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-body">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`btn ${activeTab === t.id ? 'btn-primary' : 'btn-outline'} btn-sm`}
                onClick={() => setActiveTab(t.id)}
                role="tab"
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === 'senior' && (
            <div role="tabpanel">
              {results.seniorArchitectFeedback.map((f, i) => (
                <div key={i} className="feedback-item">
                  <div className="feedback-header">
                    <h5 className="feedback-title" style={{ margin: 0 }}>{f.item}</h5>
                    <span className={`feedback-verdict ${f.verdict === 'Acceptable' ? 'verdict-pass' : f.verdict.includes('Partially') ? 'verdict-partial' : f.verdict.includes('omissions') ? 'verdict-partial' : 'verdict-fail'}`}>
                      {f.verdict}
                    </span>
                  </div>
                  <ul className="feedback-markup">
                    {f.markup.map((m, j) => (
                      <li key={j}>{m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pm' && (
            <div role="tabpanel">
              <div className="feedback-item">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>Project Manager Comment</h4>
                <pre className="text-mono" style={{ 
                  whiteSpace: 'pre-wrap', 
                  lineHeight: 1.7, 
                  fontSize: '0.9rem',
                  background: 'var(--bg-warm)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  margin: 0
                }}>
{results.pmComment}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'contract' && (
            <div role="tabpanel">
              <div className="feedback-item">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>Contract Clause Evaluation</h4>
                <p className="text-secondary mb-4">Did Nuha catch the 3 problematic clauses? What notes should have been written?</p>
                {results.contractEvaluation.caughtClauses.map((c, i) => (
                  <div key={i} style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '1.25rem', 
                    marginBottom: '1rem' 
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h5 className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>Clause {i + 1}: {c.clause}</h5>
                      <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.65rem', 
                        fontWeight: 600, 
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '999px',
                        background: c.caught ? '#e8f8f0' : '#fdf2f2',
                        color: c.caught ? 'var(--success)' : 'var(--danger)'
                      }}>
                        {c.caught ? 'Caught' : 'Missed'}
                      </span>
                    </div>
                    <p className="mb-2" style={{ fontSize: '0.9rem' }}><strong>Nuha's Note:</strong> {c.note || '(none)'}</p>
                    <p className="mb-0" style={{ fontSize: '0.9rem' }}><strong>Should Have Written:</strong> {results.contractEvaluation.recommendedNotes[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rubric' && (
            <div role="tabpanel">
              <div className="feedback-item">
                <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>Scoring Rubric — Self-Assessment</h4>
                <p className="text-secondary mb-4">Rate each criterion 0–100%. Weighted total shown below.</p>
                {results.rubric.map((r, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h5 className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>{r.criteria} <span className="fw-normal text-muted" style={{ fontSize: '0.8rem' }}>({r.weight}%)</span></h5>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={scores[r.criteria] || 0}
                        onChange={(e) => setScores({ ...scores, [r.criteria]: parseInt(e.target.value) })}
                        style={{ width: '200px', flex: 1, maxWidth: '300px' }}
                      />
                      <span className="fw-bold text-mono" style={{ width: '50px', textAlign: 'right' }}>
                        {scores[r.criteria] || 0}%
                      </span>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      {r.indicators.map((ind, j) => (
                        <li key={j}>{ind}</li>
                      ))}
                    </ul>
                    <div>
                      <small className={((scores[r.criteria] || 0) >= 60) ? 'text-success' : 'text-danger'}>
                        Pass threshold: {r.pass}
                      </small>
                    </div>
                  </div>
                ))}
                <hr style={{ borderColor: 'var(--border-light)', margin: '1.5rem 0' }} />
                <div style={{ textAlign: 'center' }}>
                  <p className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Weighted Total</p>
                  <div className="text-mono" style={{ fontSize: '3rem', fontWeight: 700, color: offered ? 'var(--success)' : 'var(--danger)' }}>
                    {totalScore}/100
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div role="tabpanel">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="card" style={{ borderColor: 'var(--success)' }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <h4 className="fw-bold mb-0" style={{ fontSize: '1rem' }}>Pass Level Email</h4>
                    </div>
                    <pre className="text-mono" style={{ 
                      whiteSpace: 'pre-wrap', 
                      lineHeight: 1.6, 
                      fontSize: '0.85rem',
                      background: 'var(--bg-warm)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      margin: 0
                    }}>
{results.emailExamples.pass}
                    </pre>
                  </div>
                </div>
                <div className="card" style={{ borderColor: 'var(--danger)' }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <h4 className="fw-bold mb-0" style={{ fontSize: '1rem' }}>Fail Level Email</h4>
                    </div>
                    <pre className="text-mono" style={{ 
                      whiteSpace: 'pre-wrap', 
                      lineHeight: 1.6, 
                      fontSize: '0.85rem',
                      background: 'var(--bg-warm)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      margin: 0
                    }}>
{results.emailExamples.fail}
                    </pre>
                    <p className="text-danger" style={{ fontSize: '0.8rem', marginTop: '0.75rem', marginBottom: 0 }}>
                      <strong>Why it fails:</strong> {results.emailExamples.failReason}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'decision' && (
            <div role="tabpanel">
              <div className={`decision-badge ${offered ? 'decision-offered' : 'decision-declined'}`} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                  {offered ? (
                    <polyline points="22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  ) : (
                    <circle cx="12" cy="12" r="10" />
                  )}
                  {offered ? (
                    <polyline points="22 4 12 14.01 9 11.01" />
                  ) : (
                    <>
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </>
                  )}
                </svg>
                <h1 className="page-title-main" style={{ margin: '0 0 0.5rem' }}>
                  {offered ? 'Offered Next Project' : 'Not Moving Forward'}
                </h1>
                <p className="text-secondary" style={{ fontSize: '1.125rem', margin: 0 }}>
                  Score: <strong className="text-mono">{totalScore}/100</strong> | Threshold: 70
                </p>
                <div style={{ width: '100%', maxWidth: '500px', marginTop: '1.5rem', textAlign: 'left' }}>
                  <h5 className="fw-bold mb-2" style={{ fontSize: '0.9rem' }}>Decision Logic</h5>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', opacity: 0.85 }}>
                    <li>Total ≥ 70 AND all pass thresholds met → Offered</li>
                    <li>Total {"<"} 70 OR any critical fail (0 clauses caught, 0 errors found, late) → Not Moving Forward</li>
                  </ul>
                </div>
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.2)',
                  width: '100%',
                  maxWidth: '500px',
                  textAlign: 'left'
                }}>
                  <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                    {offered 
                      ? 'Senior Architect: "Clean enough to iterate. Fix the wardrobe internals and emergency light. Next brief comes Monday."'
                      : 'Senior Architect: "Missed the portfolio clause. That\'s a career limiter. Contract reading is not optional."'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'credential' && (
            <div role="tabpanel">
              {level ? (
                <div className="credential-card">
                  <div className="credential-header">
                    <div>
                      <h3 className="credential-title" style={{ margin: 0 }}>{credentials.name}</h3>
                      <p className="text-secondary" style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{credentials.description}</p>
                    </div>
                    <span className="credential-level">{levelInfo.name}</span>
                  </div>
                  <div className="credential-body">
                    <div className="credential-field">
                      <div className="credential-field-label">Project Code</div>
                      <div className="credential-field-value text-mono">{credentials.projectCode}</div>
                    </div>
                    <div className="credential-field">
                      <div className="credential-field-label">Issued</div>
                      <div className="credential-field-value">{new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                    <div className="credential-field">
                      <div className="credential-field-label">Verification ID</div>
                      <div className="credential-field-value text-mono">{credentials.previewData.verificationId}</div>
                    </div>
                    <div className="credential-field">
                      <div className="credential-field-label">Total Score</div>
                      <div className="credential-field-value text-mono fw-bold" style={{ fontSize: '1.25rem' }}>{totalScore}%</div>
                    </div>
                  </div>
                  <div className="credential-scores">
                    {Object.entries(credentials.previewData.scores).map(([key, value]) => (
                      <div key={key} className="score-item">
                        <div className="score-value">{value}</div>
                        <div className="score-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="credential-actions">
                    <button className="btn btn-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download PDF
                    </button>
                    <button className="btn btn-gold">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <path d="M8 21h8" />
                        <path d="M12 17v4" />
                      </svg>
                      Add to LinkedIn
                    </button>
                    <button className="btn btn-outline">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Embed Badge
                    </button>
                    <button className="btn btn-outline">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Verify
                    </button>
                  </div>
                  <p className="verification-link">
                    Public verification: <a href={credentials.previewData.credentialUrl} target="_blank" rel="noopener noreferrer">{credentials.previewData.credentialUrl}</a>
                  </p>
                  <hr style={{ borderColor: 'var(--border-light)', margin: '1.5rem 0' }} />
                  <h5 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>Privacy Settings</h5>
                  <p className="text-secondary mb-3" style={{ fontSize: '0.9rem' }}>Choose what appears on your public verification page.</p>
                  <div className="privacy-toggle">
                    {credentials.privacyOptions.map((opt) => (
                      <label key={opt.key} className="privacy-option">
                        <input type="radio" name="privacy" defaultChecked={opt.key === 'minimal'} />
                        <div>
                          <div className="privacy-option-label">{opt.label}</div>
                          <div className="privacy-option-desc">{opt.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                    <line x1="12" y1="8" x2="12" y2="8.01" />
                  </svg>
                  <h3 className="fw-bold mb-1" style={{ fontSize: '1.5rem' }}>Credential Not Earned</h3>
                  <p className="text-secondary mb-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    Minimum 70% total score with no criterion below 50% required. Your score: <strong className="text-mono">{totalScore}%</strong>
                  </p>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                    You still receive full feedback and rubric scores. Retake the simulation to earn a credential.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/intro" className="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          Restart Simulation
        </Link>
      </div>
    </Fragment>
  );
};

export default ResultsPage;