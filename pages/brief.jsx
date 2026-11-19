import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { brief as briefData } from '@/data.js';
import Layout from 'components/Layout';
import useTranslation from '@/hooks/useTranslation';

const BriefPage = () => {
  const { t } = useTranslation();
  const b = t.brief;

  return (
    <Fragment>
      <Head>
        <title>{b.title} — {t.common.appName}</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">{b.from}</p>
        <h1 className="page-title-main">{b.title}</h1>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-body">
          <div className="document-text" style={{ marginBottom: '1.5rem' }}>
            <p><strong>{b.meta.from}</strong></p>
            <p><strong>{b.meta.to}</strong></p>
            <p><strong>{b.meta.subject}</strong></p>
          </div>
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
{b.body}
          </pre>
        </div>
      </div>

      <div className="section-block">
        <h3>Key Numbers</h3>
        <ul className="checklist" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {b.keyNumbers.map((item, i) => (
            <li key={i} style={{ border: 'none', padding: '0.5rem 0', background: 'transparent', justifyContent: 'space-between', display: 'flex' }}>
              <span>{item.label}</span>
              <span className="text-mono fw-semibold">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h3>Undecided — You Resolve</h3>
        <ul className="checklist" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {b.undecided.map((item, i) => (
            <li key={i} style={{ border: 'none', padding: '0.75rem', background: 'var(--bg-warm)', justifyContent: 'flex-start', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>{item.icon}</span>
              <div>
                <strong>{item.title}:</strong> {item.desc}
              </div>
            </li>
          ))}
        </ul>
        <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.75rem' }}>
          {b.undecidedNote}
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/materials" className="btn btn-primary w-100">
          {b.nextMaterials}
        </Link>
      </div>
    </Fragment>
  );
};

export default BriefPage;