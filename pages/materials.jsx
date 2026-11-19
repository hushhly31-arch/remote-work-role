import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { inputMaterials } from '@/data.js';
import useTranslation from '@/hooks/useTranslation';

const MaterialsPage = () => {
  const { t } = useTranslation();
  const m = t.materials;

  return (
    <Fragment>
      <Head>
        <title>{m.title} — {t.common.appName}</title>
      </Head>

      <div className="page-header">
        <p className="eyebrow">{m.providedBy}</p>
        <h1 className="page-title-main">{m.title}</h1>
      </div>

      <div className="section-block">
        <h3>{m.sketch.title}</h3>
        <figure style={{ margin: 0 }}>
          <img src={m.sketch.image || '/img/refs/unit-sketch.svg'} alt={m.sketch.imageAlt || 'Concept sketch reference'} style={{ width: '100%', maxWidth: 900, border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', background: '#fff' }} />
          <figcaption className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{m.sketch.caption || m.sketch.description}</figcaption>
        </figure>
        <details style={{ marginTop: '1rem' }}>
          <summary className="fw-semibold" style={{ cursor: 'pointer' }}>{m.sketch.notesTitle || 'Sketch notes'}</summary>
          <pre className="text-mono" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7, fontSize: '0.9rem', background: 'var(--bg-warm)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', margin: '0.75rem 0 0' }}>
{inputMaterials.sketchDescription}
          </pre>
        </details>
      </div>

      <div className="section-block">
        <h3>{m.sitePhotos.title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {(m.sitePhotos.items || m.sitePhotos.photos.map((text) => ({ text, image: '/img/refs/plan-reference.svg' }))).map((p, i) => (
            <div key={i} style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img src={p.image || '/img/refs/plan-reference.svg'} alt={p.alt || `Reference ${i + 1}`} style={{ width: '100%', height: 170, objectFit: 'cover', background: '#fff', borderBottom: '1px solid var(--border-light)' }} />
              <p style={{ padding: '0.75rem', margin: 0, fontSize: '0.92rem' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3>{m.asBuilt.title}</h3>
        <div className="document-text" style={{ marginBottom: '1rem' }}>
          <p><strong>Scale:</strong> {m.asBuilt.scale} | <strong>Paper:</strong> {m.asBuilt.paper} | <strong>Date:</strong> {m.asBuilt.notes}</p>
        </div>

        <h4>Dimensions (mm, internal face of wall)</h4>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {Object.entries(m.asBuilt.dimensions).map(([key, value]) => (
                <tr key={key}>
                  <td className="fw-semibold" style={{ width: '40%' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                  <td className="text-mono">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {m.standards && (
        <div className="section-block">
          <h3>{m.standards.title}</h3>
          <p className="text-secondary" style={{ marginBottom: '1rem' }}>{m.standards.intro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
            {m.standards.groups.map((g, i) => (
              <div key={i} style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{g.region}</h4>
                <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                  {g.items.map((it, j) => (
                    <li key={j} style={{ marginBottom: '0.45rem', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      <strong>{it.code}:</strong> {it.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {m.standards.note && <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.75rem', marginBottom: 0 }}>{m.standards.note}</p>}
        </div>
      )}

      <div className="section-block" style={{ background: 'var(--accent-gold-light)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
        <h3 style={{ color: 'var(--accent-gold-hover)' }}>{m.asBuilt.errorsTitle}</h3>
        <p className="mb-3">{m.asBuilt.errorsDesc}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
          {m.asBuilt.errors.map((e) => (
            <div key={e.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0 }}>{e.location}</h4>
              <p className="mb-1"><strong>Given:</strong> {e.given}</p>
              <p className="mb-0"><strong>Issue:</strong> {e.issue}</p>
            </div>
          ))}
        </div>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '1rem' }}>
          {m.asBuilt.answerKeyNote}
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/deliverables" className="btn btn-primary w-100">
          {m.nextDeliverables}
        </Link>
      </div>
    </Fragment>
  );
};

export default MaterialsPage;