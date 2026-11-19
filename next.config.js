/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false
  },
  // Next.js does not prefix the default locale. Expose /id explicitly so both
  // slugs (/id/... and /en/...) work on localhost and in offline builds.
  async rewrites() {
    return [
      { source: '/id', destination: '/', locale: false },
      { source: '/id/:path*', destination: '/:path*', locale: false }
    ];
  }
};

module.exports = nextConfig;