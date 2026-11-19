import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE = 'http://localhost:3000';
const OUT = join(process.cwd(), 'recordings');
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const HERO_MENU = [
  'Beranda',
  'Layanan',
  'Armada',
  'Harga',
  'Sistem',
  'Tentang',
  'FAQ',
  'Kontak',
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function recordPage(browser, url, videoPath, steps) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    recordVideo: { dir: OUT, size: { width: 1280, height: 800 } },
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await wait(1200);
  for (const step of steps) {
    try {
      await step(page);
    } catch (e) {
      console.log('step error:', e.message);
    }
    await wait(500);
  }
  await wait(800);
  const video = page.video();
  await context.close();
  const src = await video.path();
  return { src, video };
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  // --- 1. Homepage: scroll all sections + open estimator + fleet modal ---
  results.push(
    await recordPage(browser, BASE, null, [
      async (p) => {
        for (const id of ['armada', 'harga', 'sistem', 'tentang', 'faq', 'kontak']) {
          await p.evaluate((i) => {
            document.getElementById(i)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, id);
          await wait(900);
        }
        await p.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
        await wait(800);
      },
      // open estimator
      async (p) => {
        await p.click('.mv-estimator-fab');
        await wait(700);
        await p.click('.mv-chip >> nth=1');
        await wait(400);
        await p.click('.mv-chip >> nth=2');
        await wait(400);
        await p.fill('input[type=number] >> nth=0', '2');
        await p.fill('input[type=number] >> nth=1', '3');
        await wait(700);
        await p.click('.mv-modal-close');
        await wait(600);
      },
      // open fleet modal
      async (p) => {
        await p.evaluate(() => document.getElementById('armada')?.scrollIntoView({ block: 'center' }));
        await wait(700);
        await p.click('.mv-fleet-card >> nth=0');
        await wait(900);
        await p.click('.mv-modal-close');
        await wait(500);
        await p.click('.mv-fleet-card >> nth=1');
        await wait(900);
        await p.click('.mv-modal-close');
        await wait(500);
      },
    ])
  );

  // --- 2. Each Layanan page ---
  const layanan = [
    'sewa-hiace',
    'sewa-bus',
    'tour-travel',
    'event-organizer',
    'corporate-gathering',
    'airport-transfer',
  ];
  for (const slug of layanan) {
    results.push(
      await recordPage(browser, `${BASE}/layanan/${slug}`, null, [
        async (p) => {
          await p.evaluate(() => window.scrollBy({ top: 700, behavior: 'smooth' }));
          await wait(900);
          await p.evaluate(() => window.scrollBy({ top: 700, behavior: 'smooth' }));
          await wait(900);
          // open a FAQ details
          const det = await p.$('.faq details');
          if (det) {
            await det.click();
            await wait(700);
          }
        },
      ])
    );
  }

  // --- 3. Sistem page: click through all tabs ---
  results.push(
    await recordPage(browser, `${BASE}/sistem`, null, [
      async (p) => {
        const tabs = ['Penawaran', 'Daftar Peserta', 'Servis & Dokumen', 'White-Label', 'Kalender'];
        for (const t of tabs) {
          await p.click(`button:has-text("${t}")`);
          await wait(900);
        }
      },
    ])
  );

  await browser.close();

  // Rename each video to a friendly name
  const names = ['01-homepage', ...layanan.map((s) => 'layanan-' + s), 'sistem'];
  const final = [];
  for (let i = 0; i < results.length; i++) {
    const src = results[i].src;
    const dest = join(OUT, names[i] + '.mp4');
    try {
      const { renameSync } = await import('fs');
      renameSync(src, dest);
      final.push(dest);
      console.log('saved:', dest);
    } catch (e) {
      console.log('rename fail:', e.message, src);
    }
  }
  console.log('DONE', final.length);
})();