/* Remote Work Training — offline service worker */
const CACHE = 'rwt-pwa-v2';

const PAGES = ['', 'intro', 'contract', 'brief', 'materials', 'deliverables', 'disruption', 'submit', 'results'];
const SHELL = [
  '/',
  '/intro',
  '/en/intro',
  '/id/intro',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/img/favicon/favicon.ico',
  '/img/favicon/apple-touch-icon.png',
  '/img/favicon/web-app-manifest-192x192.png',
  '/img/favicon/web-app-manifest-512x512.png'
];

const OFFLINE_HTML = `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline — Remote Work Training</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#faf8f5;color:#1a1a2e;font-family:system-ui,sans-serif;text-align:center;padding:24px}main{max-width:420px}h1{font-size:1.4rem}p{color:#4a4a5a;line-height:1.6}a{display:inline-block;margin-top:16px;background:#1a1a2e;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none}</style></head><body><main><h1>Sedang offline</h1><p>Halaman ini belum tersimpan di perangkat. Buka halaman yang sudah pernah dikunjungi saat masih online, lalu coba lagi.</p><a href="/intro">Kembali ke Introduction</a></main></body></html>`;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.allSettled(SHELL.map((url) => cache.add(url)));

    // Warm every simulation page in both locales so offline navigation works.
    const routes = PAGES.flatMap((page) => [
      `/${page}`,
      `/en/${page}`,
      `/id/${page}`
    ]);
    await Promise.allSettled(routes.map((url) => cache.add(url)));

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

const put = async (request, response) => {
  if (response && response.ok && response.type === 'basic') {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  }
  return response;
};

const networkFirstDocument = async (request, url) => {
  try {
    return await put(request, await fetch(request));
  } catch (_) {
    const cached = await caches.match(request);
    if (cached) return cached;

    const fallback = url.pathname.startsWith('/en') ? '/en/intro' : '/intro';
    return (await caches.match(fallback))
      || (await caches.match('/intro'))
      || new Response(OFFLINE_HTML, { status: 200, headers: { 'content-type': 'text/html; charset=utf-8' } });
  }
};

const networkFirstData = async (request) => {
  try {
    return await put(request, await fetch(request));
  } catch (_) {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Next.js page data: let the router render from client-side state/session.
    return new Response(JSON.stringify({ pageProps: {} }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }
};

const cacheFirstAsset = async (request) => {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  return put(request, response);
};

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const path = url.pathname;

  // Dev-only endpoints must stay live (HMR / error overlay).
  if (
    path.includes('/_next/webpack-hmr') ||
    path.includes('/__nextjs') ||
    path === '/_next/static/development/_devPagesManifest.json' ||
    path === '/_next/static/development/_devBuildManifest'
  ) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstDocument(request, url));
    return;
  }

  if (path.startsWith('/_next/data/')) {
    event.respondWith(networkFirstData(request));
    return;
  }

  event.respondWith(cacheFirstAsset(request));
});
