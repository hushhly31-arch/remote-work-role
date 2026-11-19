import Head from 'next/head';
import { Fragment } from 'react';
import useTranslation from '@/hooks/useTranslation';

const h3s = { fontSize: '1.1rem', fontWeight: 700, margin: '1.75rem 0 0.75rem' };
const h4s = { fontSize: '1rem', fontWeight: 700, margin: '1.1rem 0 0.4rem' };
const ps = { margin: '0 0 0.6rem', lineHeight: 1.7, fontSize: '0.95rem' };
const uls = { margin: '0 0 0.75rem', paddingLeft: '1.2rem', lineHeight: 1.7, fontSize: '0.95rem' };
const table = { width: '100%', borderCollapse: 'collapse', margin: '0.5rem 0 1rem', fontSize: '0.92rem' };
const thtd = { border: '1px solid var(--border-light, #e5e7eb)', padding: '0.55rem 0.7rem', textAlign: 'left', verticalAlign: 'top' };
const ths = { ...thtd, background: 'var(--bg-warm, #f8f6f2)', fontWeight: 700 };
const box = { background: 'var(--bg-warm, #f8f6f2)', border: '1px solid var(--border-light, #e5e7eb)', borderRadius: 'var(--radius-md, 8px)', padding: '1rem 1.1rem', marginBottom: '1rem' };
const H = ({ h }) => <span dangerouslySetInnerHTML={{ __html: h }} />;

export default function SopPage() {
  const { t } = useTranslation();
  const s = t.sop || {};

  return (
    <Fragment>
      <Head><title>{s.title || 'SOP'} — {t.common?.appName || 'Remote Work Training'}</title></Head>
      <div className="page-header">
        <p className="eyebrow">{s.eyebrow}</p>
        <h1 className="page-title-main">{s.title}</h1>
        <p className="text-secondary" style={{ maxWidth: 900 }}>{s.intro}</p>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s1?.heading}</h3>
        <p style={ps}>{s.s1?.p}</p>
        <ul style={uls}>{(s.s1?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
        <div style={box}><H h={s.s1?.box || ''} /></div>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s2?.heading}</h3>
        <h4 style={h4s}>{s.s2?.ukTitle}</h4>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={table}><thead><tr>{(s.s2?.tableHead || []).map((h, i) => <th key={i} style={ths}>{h}</th>)}</tr></thead><tbody>
            {(s.s2?.ukRows || []).map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={thtd}>{c}</td>)}</tr>)}
          </tbody></table>
        </div>
        <p style={ps}>{s.s2?.ukRef}</p>
        <h4 style={h4s}>{s.s2?.usTitle}</h4>
        <p style={ps}>{s.s2?.usP}</p>
        <p style={ps}><H h={s.s2?.usTerms || ''} /></p>
        <h4 style={h4s}>{s.s2?.meTitle}</h4>
        <p style={ps}>{s.s2?.meP}</p>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s3?.heading}</h3>
        <p style={ps}>{s.s3?.p}</p>
        <ul style={uls}>{(s.s3?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
        <p style={ps}><H h={s.s3?.cde || ''} /></p>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s4?.heading}</h3>
        <ul style={uls}>{(s.s4?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
        <p style={ps}><H h={s.s4?.must || ''} /></p>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s5?.heading}</h3>
        <h4 style={h4s}>{s.s5?.uk?.title}</h4>
        <ul style={uls}>{(s.s5?.uk?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
        <h4 style={h4s}>{s.s5?.us?.title}</h4>
        <ul style={uls}>{(s.s5?.us?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
        <h4 style={h4s}>{s.s5?.me?.title}</h4>
        <ul style={uls}>{(s.s5?.me?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s6?.heading}</h3>
        <ul style={uls}>{(s.s6?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s7?.heading}</h3>
        <ul style={uls}>{(s.s7?.items || []).map((it, i) => <li key={i}><H h={it} /></li>)}</ul>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s8?.heading}</h3>
        <h4 style={h4s}>{s.s8?.wfTitle}</h4>
        <ol style={{ ...uls, paddingLeft: '1.25rem' }}>{(s.s8?.wf || []).map((it, i) => <li key={i}>{it}</li>)}</ol>
        <h4 style={h4s}>{s.s8?.qaTitle}</h4>
        <ul style={uls}>{(s.s8?.qa || []).map((it, i) => <li key={i}>{it}</li>)}</ul>
        <h4 style={h4s}>{s.s8?.comTitle}</h4>
        <ul style={uls}>{(s.s8?.com || []).map((it, i) => <li key={i}>{it}</li>)}</ul>
        <h4 style={h4s}>{s.s8?.bizTitle}</h4>
        <ul style={uls}>{(s.s8?.biz || []).map((it, i) => <li key={i}>{it}</li>)}</ul>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s9?.heading}</h3>
        <p style={ps}><H h={s.s9?.online || ''} /></p>
        <p style={ps}><H h={s.s9?.books || ''} /></p>
      </div>

      <div className="section-block">
        <h3 style={h3s}>{s.s10?.heading}</h3>
        <div style={box}><H h={s.s10?.m1 || ''} /></div>
        <div style={box}><H h={s.s10?.m2 || ''} /></div>
        <div style={box}><H h={s.s10?.m3 || ''} /></div>
      </div>
    </Fragment>
  );
}
