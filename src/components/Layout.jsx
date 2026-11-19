'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { allPages } from '@/data.js';
import useTranslation from '@/hooks/useTranslation';

const LanguageSwitcher = ({ floating = false }) => {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const target = locale === 'en' ? 'id' : 'en';

  const changeLanguage = () => {
    const path = router.asPath.split('?')[0].replace(/^\/(id|en)(?=\/|$)/, '');
    const query = router.asPath.includes('?') ? router.asPath.slice(router.asPath.indexOf('?')) : '';
    router.push(`${path || '/'}${query}`, `${path || '/'}${query}`, { locale: target });
  };

  return (
    <button
      type="button"
      onClick={changeLanguage}
      aria-label={t.common.language}
      title={target === 'en' ? t.common.english : t.common.indonesian}
      className="lang-switch"
      style={floating ? { position: 'fixed', top: '12px', right: '12px', zIndex: 9999 } : undefined}
    >
      {target.toUpperCase()}
    </button>
  );
};

const Layout = ({ children, showLanguageSwitcher = true }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('?')[0].replace(/^\/(id|en)(?=\/|$)/, '') || '/';
  const [timeLeft, setTimeLeft] = useState(null);
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);
  const [pageStatuses, setPageStatuses] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem('rwt_session');
    if (!saved) {
      setPageStatuses({});
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      const statuses = {};
      allPages.forEach((page) => {
        if (page.id >= 1 && page.id <= 8) {
          if (page.key === 'contract') statuses[page.key] = parsed.accepted ? 'done' : 'active';
          else if (page.key === 'brief') statuses[page.key] = parsed.accepted ? 'active' : 'locked';
          else if (page.key === 'materials') statuses[page.key] = parsed.accepted ? 'active' : 'locked';
          else if (page.key === 'deliverables') statuses[page.key] = parsed.accepted ? 'active' : 'locked';
          else if (page.key === 'disruption') statuses[page.key] = parsed.accepted ? 'active' : 'locked';
          else if (page.key === 'submit') statuses[page.key] = parsed.accepted ? 'active' : 'locked';
          else if (page.key === 'results') statuses[page.key] = parsed.submitted ? 'active' : 'locked';
          else if (page.key === 'credentials') statuses[page.key] = parsed.submitted ? 'active' : 'locked';
          else statuses[page.key] = page.locked ? 'locked' : 'active';
        }
      });
      setPageStatuses(statuses);

      if (parsed.startTime) {
        const deadline = parsed.startTime + 60 * 60 * 1000;
        const updateTimer = () => {
          const now = Date.now();
          const remaining = deadline - now;
          if (remaining <= 0) {
            setTimeLeft(0);
            setIsCritical(true);
            return;
          }
          setTimeLeft(remaining);
          setIsWarning(remaining <= 10 * 60 * 1000);
          setIsCritical(remaining <= 5 * 60 * 1000);
        };
        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
      }
    } catch (e) {
      console.warn('Invalid session storage');
    }
  }, []);

  const formatTime = (ms) => {
    if (ms <= 0) return '0:00';
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const isIntro = currentPath === '/' || currentPath === '/intro';
  const isLogin = currentPath === '/login';

  const simPages = allPages.filter(p => p.id >= 1 && p.id <= 7);
  const credentialPage = allPages.find(p => p.id === 8);

  const getPageStatus = (page) => {
    if (!mounted) return page.locked ? 'locked' : 'active';
    return pageStatuses[page.key] || (page.locked ? 'locked' : 'active');
  };

  if (isIntro || isLogin) {
    return (
      <>
        {showLanguageSwitcher && <LanguageSwitcher floating />}
        <main className="intro-layout">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <div className="app-shell">
        <aside className="sidebar" role="navigation" aria-label="Simulation stages">
          <div className="sidebar-header">
            <span className="studio-badge">AW</span>
            <span className="project-code">AW-2026-047</span>
          </div>
          <nav className="sidebar-nav">
            <ul className="stage-list" role="list">
              {simPages.map((page) => {
                const status = getPageStatus(page);
                const isActive = currentPath === page.path;
                return (
                  <li key={page.id} className={`stage-item ${status} ${isActive ? 'active' : ''}`}>
                    <Link
                      href={page.path}
                      className="stage-link"
                      aria-current={isActive ? 'page' : undefined}
                      aria-disabled={status === 'locked'}
                    >
                      <span className="stage-indicator" aria-hidden="true">
                        {status === 'done' && <svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>}
                        {status === 'locked' && <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a2 2 0 012 2v4H6V3a2 2 0 012-2zm3 6V3a3 3 0 00-6 0v4a2 2 0 00-2 2v5a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg>}
                        {status === 'active' && <span className="stage-dot" aria-hidden="true"></span>}
                      </span>
                      <span className="stage-title">{page.title}</span>
                      <span className="stage-status" aria-label={status}>
                        {status === 'done' && 'Done'}
                        {status === 'locked' && 'Locked'}
                        {status === 'active' && 'Active'}
                      </span>
                    </Link>
                  </li>
                );
              })}
              {credentialPage && (
                <li key={credentialPage.id} className={`stage-item ${getPageStatus(credentialPage)} ${currentPath === credentialPage.path ? 'active' : ''}`}>
                  <Link
                    href={credentialPage.path}
                    className="stage-link"
                    aria-current={currentPath === credentialPage.path ? 'page' : undefined}
                    aria-disabled={getPageStatus(credentialPage) === 'locked'}
                  >
                    <span className="stage-indicator" aria-hidden="true">
                      {getPageStatus(credentialPage) === 'done' && <svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>}
                      {getPageStatus(credentialPage) === 'locked' && <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a2 2 0 012 2v4H6V3a2 2 0 012-2zm3 6V3a3 3 0 00-6 0v4a2 2 0 00-2 2v5a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg>}
                      {getPageStatus(credentialPage) === 'active' && <span className="stage-dot" aria-hidden="true"></span>}
                    </span>
                    <span className="stage-title">{credentialPage.title}</span>
                    <span className="stage-status" aria-label={getPageStatus(credentialPage)}>
                      {getPageStatus(credentialPage) === 'done' && 'Done'}
                      {getPageStatus(credentialPage) === 'locked' && 'Locked'}
                      {getPageStatus(credentialPage) === 'active' && 'Active'}
                    </span>
                  </Link>
                </li>
              )}
              <li className="stage-separator" aria-hidden="true" style={{ margin: '0.75rem 0', borderTop: '1px solid var(--border-light, #e5e7eb)' }}></li>
              <li className={`stage-item ${currentPath === '/sop' ? 'active' : ''}`}>
                <Link href="/sop" className="stage-link" aria-current={currentPath === '/sop' ? 'page' : undefined}>
                  <span className="stage-indicator" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 3.5A1.5 1.5 0 013.5 2h6.086a1.5 1.5 0 011.06.44l2.915 2.914A1.5 1.5 0 0114 6.414V12.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-9zM4 6.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5H4zm0 3a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5H4z"/></svg>
                  </span>
                  <span className="stage-title">{t.sop?.menu || 'SOP Remote Work'}</span>
                  <span className="stage-status">{t.sop?.badge || 'Guide'}</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="sidebar-footer">
            <p className="sidebar-note">Remote Work Training Simulation</p>
          </div>
        </aside>

        <div className="main-wrapper">
          <header className="top-bar" role="banner">
            <div className="top-bar-left">
              <h1 className="page-title">
                {currentPath === '/sop' ? (t.sop?.menu || 'SOP Remote Work') : (simPages.find(p => p.path === currentPath)?.title || (currentPath === '/credentials' ? 'Credential' : 'Results'))}
              </h1>
            </div>
            <div className="top-bar-right">
              <LanguageSwitcher />
              <div className={`timer-display ${isWarning ? 'warning' : ''} ${isCritical ? 'critical' : ''}`} role="timer" aria-live="polite" aria-label={`Time remaining: ${formatTime(timeLeft)}`}>
                <span className="timer-label">Time</span>
                <span className="timer-value text-mono">{timeLeft !== null ? formatTime(timeLeft) : '—:—'}</span>
              </div>
            </div>
          </header>

          <main className="content" role="main">
            <div className="content-inner">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;