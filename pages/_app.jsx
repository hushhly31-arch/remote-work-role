import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

import 'styles/style.css';
import 'styles/responsive.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

    const register = () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .catch((error) => console.warn('Service worker registration failed:', error));
    };

    if (document.readyState === 'complete') register();
    else window.addEventListener('load', register, { once: true });

    return () => window.removeEventListener('load', register);
  }, []);

  useEffect(() => {
    const path = router.asPath.split('?')[0].replace(/^\/(id|en)(?=\/|$)/, '') || '/';
    if (path === '/login') return;
    if (typeof window !== 'undefined' && sessionStorage.getItem('rwt_auth') !== '1') {
      router.replace('/login');
    }
  }, [router, router.asPath]);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Remote Work Training — Nuha Simulation</title>
        <meta
          name="description"
          content="Single-session remote work simulation for architectural designers. 60 minutes, one contract, one deliverable set."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Remote Work Training — Nuha Simulation" />
        <meta property="og:description" content="Single-session remote work simulation for architectural designers. 60 minutes, one contract, one deliverable set." />
        <meta property="og:url" content="/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Remote Work Training — Nuha Simulation" />
        <meta name="twitter:description" content="Single-session remote work simulation for architectural designers. 60 minutes, one contract, one deliverable set." />
      </Head>

      <Layout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;