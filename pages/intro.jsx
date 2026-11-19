import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { allPages, sessionState } from '@/data.js';
import Layout from '@/components/Layout';
import useTranslation from '@/hooks/useTranslation';

const Intro = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('rwt_session');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.introCompleted) {
          router.replace('/contract');
        }
      } catch (e) {
        console.warn('Invalid session storage');
      }
    }
  }, [router]);

  const handleStart = () => {
    const now = Date.now();
    const newState = {
      ...sessionState,
      startTime: now,
      introCompleted: true,
    };
    sessionStorage.setItem('rwt_session', JSON.stringify(newState));
    setTimerStarted(true);
    router.push('/contract');
  };

  const intro = t.intro;

  return (
    <Fragment>
      <div className="bg-warm" style={{ minHeight: '100vh' }}>
        <Layout showLanguageSwitcher={false}>
          <main className="intro-main" role="main">
            <div className="container intro-container">
              <header className="intro-header">
                <p className="intro-eyebrow">{t.common.appName} Simulation</p>
                <h1 className="intro-title">{intro.title}</h1>
                <p className="intro-subtitle">{intro.subtitle}</p>
              </header>

              <section className="intro-section" aria-labelledby="pembuka">
                <h2 id="pembuka" className="section-title">{intro.pembuka.title}</h2>
                <div className="intro-card">
                  <p>{intro.pembuka.content}</p>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="situasi">
                <h2 id="situasi" className="section-title">{intro.situasi.title}</h2>
                <div className="intro-card">
                  <p>{intro.situasi.content}</p>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="peran">
                <h2 id="peran" className="section-title">{intro.peran.title}</h2>
                <div className="intro-card">
                  <p>{intro.peran.content}</p>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="aturan">
                <h2 id="aturan" className="section-title">{intro.aturan.title}</h2>
                <div className="intro-card">
                  <ol className="rules-list">
                    {intro.aturan.items.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ol>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="tahapan">
                <h2 id="tahapan" className="section-title">{intro.tahapan.title}</h2>
                <div className="intro-card">
                  <table className="stages-table" role="table">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: '60px' }}>#</th>
                        <th scope="col">{t.navigation.intro === 'Introduction' ? 'Stage' : 'Tahapan'}</th>
                        <th scope="col">Description</th>
                        <th scope="col" style={{ width: '120px', textAlign: 'right' }}>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intro.tahapan.stages.map((stage) => (
                        <tr key={stage.step}>
                          <td><span className="step-number">{stage.step}</span></td>
                          <td className="fw-semibold">{stage.name}</td>
                          <td>{stage.desc}</td>
                          <td className="text-end text-mono">{stage.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="stages-note mt-3"><strong>{intro.tahapan.totalNote}</strong></p>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="dinilai">
                <h2 id="dinilai" className="section-title">{intro.dinilai.title}</h2>
                <div className="intro-card">
                  <div className="criteria-grid">
                    {intro.dinilai.criteria.map((c) => (
                      <div key={c.key} className="criteria-card">
                        <div className="criteria-label">{c.label}</div>
                        <p className="criteria-desc">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="hasil">
                <h2 id="hasil" className="section-title">{intro.hasil.title}</h2>
                <div className="intro-card">
                  <p>{intro.hasil.content}</p>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="kredensial">
                <h2 id="kredensial" className="section-title">{intro.kredensial.title}</h2>
                <div className="intro-card">
                  <p>{intro.kredensial.content}</p>
                  <div className="credential-levels mt-3">
                    <h3 className="h6 mb-2">Three Credential Levels</h3>
                    <ul className="level-list">
                      {intro.kredensial.levels.map((level, i) => (
                        <li key={i}><strong>{level.name}</strong> {level.desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="karakter">
                <h2 id="karakter" className="section-title">{intro.karakter.title}</h2>
                <div className="intro-card">
                  <div className="characters-grid">
                    {intro.karakter.characters.map((c) => (
                      <div key={c.initials} className="character-card">
                        <div className="avatar">{c.initials}</div>
                        <h4 className="character-role">{c.role}</h4>
                        <p className="character-style">{c.style}</p>
                        <details className="character-sample">
                          <summary>Sample message</summary>
                          <p className="mt-2 small">{c.sample}</p>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="intro-section" aria-labelledby="persiapan">
                <h2 id="persiapan" className="section-title">{intro.persiapan.title}</h2>
                <div className="intro-card">
                  <ul className="prep-list">
                    {intro.persiapan.items.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <footer className="intro-footer">
                <div className="intro-card start-card">
                  <p className="start-note">{intro.start.note}</p>
                  <button
                    className="btn btn-gold btn-lg start-btn w-100"
                    onClick={handleStart}
                    disabled={timerStarted}
                    aria-label="Start simulation - 60 minute timer begins"
                  >
                    {timerStarted ? 'Starting...' : intro.start.label}
                  </button>
                </div>
              </footer>
            </div>
          </main>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Intro;