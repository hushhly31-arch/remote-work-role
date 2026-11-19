import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from '@/hooks/useTranslation';

const USER = 'remotework_design';
const PASS = 'remotework_design';

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('rwt_auth') === '1') {
      router.replace('/intro');
    }
  }, [router]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === USER && password === PASS) {
      sessionStorage.setItem('rwt_auth', '1');
      router.replace('/intro');
    } else {
      setError(t?.common?.invalidCredentials || 'Username atau password salah.');
    }
  };

  return (
    <>
      <Head>
        <title>Login — {t?.common?.appName || 'Remote Work Training'}</title>
      </Head>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'var(--bg-page, #f6f3ee)' }}>
        <div className="card" style={{ width: '100%', maxWidth: 420, background: 'var(--bg-card, #fff)', border: '1px solid var(--border-light, #e5e7eb)', borderRadius: 'var(--radius-lg, 12px)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
          <div className="card-body" style={{ padding: '2rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>{t?.common?.projectCode || 'AW-2026-047'}</p>
            <h1 className="page-title-main" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Login</h1>
            <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>{t?.common?.appName || 'Remote Work Training'}</p>
            <form onSubmit={onSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder="Username" style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--border-medium, #d1d5db)', borderRadius: 'var(--radius-md, 8px)', background: 'var(--bg-card, #fff)', color: 'var(--text-primary, #111)', fontFamily: 'var(--font-sans)' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="Password" style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid var(--border-medium, #d1d5db)', borderRadius: 'var(--radius-md, 8px)', background: 'var(--bg-card, #fff)', color: 'var(--text-primary, #111)', fontFamily: 'var(--font-sans)' }} />
              </div>
              {error && <div style={{ marginBottom: '1rem', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md, 8px)', background: 'rgba(220,38,38,0.08)', color: '#b91c1c', fontSize: '0.9rem', border: '1px solid rgba(220,38,38,0.2)' }}>{error}</div>}
              <button type="submit" className="btn btn-primary w-100" style={{ padding: '0.8rem 1rem', fontSize: '1rem' }}>Login</button>
            </form>
            <p className="text-muted" style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.8rem', textAlign: 'center' }}>
              Gunakan kredensial yang diberikan untuk mengakses simulasi.<br />
              <span style={{ fontFamily: 'var(--font-mono, monospace)' }}>remotework_design / remotework_design</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
