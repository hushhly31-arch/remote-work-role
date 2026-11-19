import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { deliverables } from '@/data.js';
import useTranslation from '@/hooks/useTranslation';

const refImages = {
  1: { src: '/img/refs/plan-reference.svg', alt: 'Plan and RCP reference' },
  2: { src: '/img/refs/elevation-reference.svg', alt: 'Interior elevations reference' },
  3: { src: '/img/refs/unit-sketch.svg', alt: 'Render composition reference' },
};

const DeliverablesPage = () => {
  const { t } = useTranslation();
  const d = t.deliverables;
  const totalTime = deliverables.reduce((sum, item) => sum + item.suggestedTime, 0);

  return (
    <Fragment>
      <Head>
        <title>{d.title} — {t.common.appName}</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">{d.subtitle}</p>
        <h1 className="page-title-main">{d.title}</h1>
      </div>

      <div className="card" style={{ 
        background: 'var(--accent-gold-light)', 
        border: '1px solid var(--accent-gold)', 
        borderRadius: 'var(--radius-lg)', 
        padding: '1.5rem',
        marginBottom: '1.5rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>⏱</span>
          <div>
            <strong>{d.totalTimeNote.replace('{total}', totalTime)}</strong>
          </div>
        </div>
      </div>

      {d.items.map((item) => (
        <div key={item.id} className="card" style={{ marginBottom: '1.5rem' }}>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h4 className="fw-bold mb-1" style={{ margin: 0 }}>{item.name}</h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', background: 'var(--accent-gold-light)', color: 'var(--accent-gold)', padding: '0.2rem 0.5rem', borderRadius: '999px' }}>
                  {item.suggestedTime} min
                </span>
              </div>
              {item.scale !== 'N/A' && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', background: 'var(--bg-warm)', color: 'var(--text-secondary)', padding: '0.2rem 0.5rem', borderRadius: '999px' }}>
                  Scale {item.scale}
                </span>
              )}
            </div>
            {refImages[item.id] && (
              <figure style={{ margin: '0 0 1rem' }}>
                <img src={refImages[item.id].src} alt={refImages[item.id].alt} style={{ width: '100%', maxWidth: 760, border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', background: '#fff' }} />
                <figcaption className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.4rem' }}>{d.referenceLabel || 'Reference image (example guidance)'}</figcaption>
              </figure>
            )}
            <p className="text-secondary" style={{ marginBottom: '1rem' }}>{item.description}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <p className="text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.25rem' }}>Format</p>
                <code style={{ fontSize: '0.85rem' }}>{item.format}</code>
              </div>
              <div>
                <p className="text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.25rem' }}>File Name</p>
                <code style={{ fontSize: '0.85rem' }}>{item.fileName}</code>
              </div>
            </div>
            <h5 className="fw-bold mb-2" style={{ fontSize: '0.9rem' }}>QA Checklist</h5>
            <ul className="checklist" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {item.checklist.map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.5rem', background: 'transparent', border: 'none', marginBottom: '0.25rem', borderRadius: 0 }}>
                  <input type="checkbox" readOnly style={{ marginTop: '0.125rem' }} />
                  <label style={{ margin: 0, fontWeight: 400, lineHeight: 1.5, fontSize: '0.9rem' }}>{c}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="card">
        <div className="card-body">
          <h4 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>{d.timeBreakdown.title}</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {d.timeBreakdown.breakdown.map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.25rem', background: item.color === 'text-primary' ? 'var(--text-primary)' : item.color === 'accent-gold' ? 'var(--accent-gold)' : item.color === 'text-secondary' ? 'var(--text-secondary)' : 'var(--accent-gold-light)', color: item.color === 'text-primary' || item.color === 'text-secondary' ? '#fff' : 'var(--text-primary)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 700 }}>{item.time}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/disruption" className="btn btn-primary w-100">
          {d.nextDisruption}
        </Link>
      </div>
    </Fragment>
  );
};

export default DeliverablesPage;