export const studio = {
  name: "Terra Digital Agency",
  city: "Jakarta",
  timezone: "WIB (UTC+7)",
  address: "Gedung Cyber 2 Lt. 8, Jl. HR Rasuna Said, Jakarta Selatan",
  abn: "NIB 0123456789012",
  email: "work@terradigital.id",
  seniorArchitect: "R. Prameswari (Head of Delivery)",
  pm: "S. Chen (Project Manager)",
  teamSize: "4 desainer, 3 developer, 2 CS, 1 ops",
  projectTypes: "Website, landing page, webinar/event digital, konten",
  tools: ["Slack", "Google Workspace", "Trello", "Zoom"],
};

export const septi = {
  name: "Kamu",
  role: "Junior Project Coordinator (Remote)",
  rate: "Rp40.000",
  currency: "",
  rateNote: "Per jam, selama minggu percobaan. Honor bulanan penuh mengikuti perjanjian di kontrak.",
  background: "Fresh graduate, 1 tahun freelance admin & social media. Belajar manajemen proyek otodidak.",
  location: "Bandung, Indonesia (WIB)",
  tools: ["Slack", "WhatsApp", "Zoom", "Trello", "Notion", "Google Sheets"],
  languages: ["Indonesia", "Inggris"],
  linkedin: "belum terisi",
  behance: "belum terisi",
};

export const ops = {
  name: "Ops Coordinator",
  role: "Remote Operations (Ops Coordinator / Ops Assistant)",
  background: "Menjaga proses harian bisnis tetap jalan: order, tiket, follow-up, SOP, laporan rutin.",
  location: "Remote, WIB",
  tools: ["CRM", "Google Sheets", "Slack", "Notion"],
};

export const consultant = {
  name: "Mentor",
  role: "Remote Trainee Mentor",
  background: "Mendampingi trainee: shadowing, evaluasi berkala, mini-project dan riset proses.",
  location: "Remote, WIB",
  tools: ["Notion", "Zoom", "Google Docs"],
};

export const projectManager = {
  name: "Project Manager",
  role: "Remote Project Manager / Project Coordinator (Junior)",
  background: "Memastikan proyek selesai sesuai scope, waktu, dan budget: board, meeting, notes, status report.",
  location: "Remote, WIB",
  tools: ["Trello", "Asana", "Notion", "Slack", "Zoom"],
};

export const contract = {
  title: "Perjanjian Kerja Remote — Project Coordinator (Minggu Percobaan)",
  projectName: "Webinar Klien B: \"Digital Workflow 101\" — 100 peserta, 4 minggu",
  projectCode: "TDA-2026-012",
  role: "Junior Project Coordinator (Remote, WIB)",
  scope: [
    "Menyusun meeting notes dari transkrip weekly sync klien A, memakai format standar agensi (keputusan, action items dengan nama + deadline, risiko).",
    "Membuat timeline proyek webinar klien B: kolom Fase, Task, PIC, Mulai, Deadline, Status, Catatan.",
    "Menambahkan Risk Log minimal 3 risiko — tiap risiko punya dampak dan rencana cadangan.",
    "Menulis update harian untuk manajer: Selesai / Sedang jalan / Blocker / Besok.",
    "Memperbarui status task di board (Trello) berdasarkan pesan dan data yang masuk.",
    "Semua dokumen memakai template agensi. Naming file: TDA-2026-012_[nama-dok]_v#.",
  ],
  problematicClauses: [
    {
      id: 1,
      text: "Scope dapat berubah sewaktu-waktu mengikuti kebutuhan klien, tanpa perubahan biaya",
      issue: "Scope creep tanpa proteksi. Setiap permintaan tambahan klien dikerjakan gratis — jam kerja membengkak tanpa kompensasi.",
    },
    {
      id: 2,
      text: "Respons pesan kerja maksimal 15 menit, pukul 07.00–22.00 WIB, tujuh hari seminggu",
      issue: "On-call hampir sepanjang hari, termasuk akhir pekan. Kerja remote tanpa batas waktu jelas berujung burnout dan lembur tak tercatat.",
    },
    {
      id: 3,
      text: "Honor dibayarkan setelah evaluasi akhir bulan, maksimal Net 45 setelah invoice disetujui manajer",
      issue: "Pembayaran bisa molor 45+ hari dan bergantung pada 'persetujuan'. Kalau evaluasi diperselisihkan, bayaran molor lebih lama lagi.",
    },
  ],
  fee: {
    amount: "Rp3.500.000",
    currency: "",
    breakdown: "Honor bulanan full-time remote untuk minggu percobaan, mencakup seluruh tugas di scope. Tugas di luar scope diperjanjikan terpisah.",
  },
  paymentTerms: "Net 45 setelah invoice disetujui manajer. Invoice dikirim tiap tanggal 1 via transfer bank. Pajak dan jaminan sosial menjadi tanggung jawab masing-masing pihak sesuai status kerja.",
  deadline: {
    minutes: 60,
    startTrigger: "Tombol Start ditekan di halaman Introduction",
    timezone: "WIB (UTC+7)",
    example: "Kalau mulai 09.00 WIB, submit sebelum 10.00 WIB. Submit telat = otomatis gugur.",
  },
  latePolicy: "Submit setelah deadline: perjanjian batal, honor tidak dibayar. Dokumen tidak sesuai format/template: ditolak, jam terus berjalan. File korup atau tidak bisa dibuka: dianggap tidak mengumpulkan.",
  jurisdiction: "Hukum Indonesia. Sengketa diselesaikan musyawarah terlebih dahulu, lalu melalui mediasi sesuai ketentuan kontrak.",
};

export const brief = {
  from: "Kamu, Junior Project Coordinator",
  to: "Project Manager (S. Chen)",
  subject: "TDA-2026-012 — Brief: Paket Kerja Minggu Pertama",
  body: `Koordinator,

Perjanjian kerja terlampir. Baca dulu. Jam mulai jalan ketika kamu menekan Accept.

Kamu remote dari WIB, tim di Jakarta. Semua koordinasi lewat Slack, Trello, Zoom, dan email. Hari ini kamu menerima satu paket kerja yang mencakup dua proyek aktif:

Proyek 1 — Klien A (digital agency retainer):
- Landing page klien A sedang revisi. Desainer (Rani) menunggu logo final dari klien — itu blocker.
- Kemarin ada weekly sync dengan klien A. Transkripnya terlampir di halaman Materials.
- Kamu harus mengubah transkrip itu menjadi meeting notes rapi.

Proyek 2 — Klien B (webinar):
- "Digital Workflow 101", 100 peserta, 4 minggu dari sekarang.
- Kamu menyusun timeline lengkap (5 fase) dan Risk Log minimal 3 risiko.
- Semua angka ada di spreadsheet master proyek — cek ulang, ada kejanggalan.

Di luar itu:
- Manajermu minta update harian pakai format standar agensi.
- Papan Trello harus mencerminkan status terbaru.

Yang sudah diputuskan:
- Platform: Zoom Webinar.
- Anggaran promosi total: Rp 8.500.000.
- Konten materi harus lengkap paling lambat tanggal 20; launching tanggal 30.

Yang kamu putuskan sendiri:
- Siapa PIC tiap task dan kapan deadline-nya (berdasarkan kebiasaan tim di transkrip).
- Risiko mana yang masuk Risk Log dan apa rencana cadangannya.
- Apa yang dilaporkan ke manajer hari ini — ringkas saja.

Spreadsheet master punya dua kesalahan data. Temukan, lalu laporkan saat submit.

Daftar deliverables menyusul. Total 60 menit. Tanpa perpanjangan.

— S. Chen, Project Manager
Terra Digital Agency
Jakarta | WIB`,
};

export const inputMaterials = {
  sketchDescription: `Transkrip Weekly Sync Klien A (kemarin, 14.00 WIB, 30 menit):

Klien: "Kami mau launching tanggal 30. Bisa?"
Desainer: "Bisa kalau materi dari kalian masuk paling lambat tanggal 20."
Klien: "Oke, tapi kami mau tambah halaman 'Tentang Kami'."
Manajer: "Itu di luar scope awal, nanti kami kirim estimasi biaya tambahan."
Klien: "Logo final menyusul ya, mungkin besok."

Catatan dari manajer setelah meeting:
- "Launching 30 itu fix. Materi tanggal 20 itu syarat dari desainer, bukan selera kami."
- "Halaman 'Tentang Kami' belum disetujui — jangan janji apa pun ke klien."
- "Action item tanpa nama dan tanggal tidak berguna. Kalau kamu tulis 'kirim materi' tanpa PIC, itu bukan action item."`,
  sitePhotos: [
    "Slack #klien-a (08.41): Rani — \"Revisi landing page klien A masih nunggu logo final dari klien. Kalau logo gak masuk hari ini, revisi mundur ke minggu depan.\"",
    "Slack DM manajer (08.55): \"Timeline webinar klien B kukes-kan hari ini juga ya, harus sudah saya review sebelum weekly sync besok. Pakai template timeline agensi + tab Risk Log.\"",
    "Email klien A (09.05): \"Revisi desain landing page belum kami terima, kapan ya?\" — belum ada balasan dari tim. Kamu catat sebagai prioritas hari ini.",
  ],
  asBuilt: {
    title: "Spreadsheet Master Proyek — Klien B (Webinar \"Digital Workflow 101\")",
    scale: "Revisi 3",
    paper: "Google Sheets",
    notes: "Terakhir diupdate Jumat lalu oleh Ops. Angka dipakai lintas tim — verifikasi sebelum dipakai.",
    dimensions: {
      budget: "Rp 8.500.000 (promosi) — rincian: iklan 6.500.000 + boosting 2.700.000",
      participants: "100 (kapasitas platform maksimal 500)",
      duration: "4 minggu — launching tanggal 30",
      platform: "Zoom Webinar",
      speakers: "3 pembicara (2 internal, 1 eksternal, 1 pembicara cadangan)",
      promo: "Mulai minggu ke-2, 21 hari penuh",
      target: "350 pendaftar → 100 hadir",
      leads: "1.200 kontak email (dari webinar sebelumnya)",
    },
    errors: [
      {
        id: 1,
        location: "Deadline materi vs. tanggal launching",
        given: "Sheet progress menulis \"materi lengkap: minggu ke-3 (tanggal 30)\".",
        issue: "Transkrip weekly sync memutuskan materi paling lambat tanggal 20 dan launching tanggal 30. Kalau materi baru 30, tidak ada waktu produksi dan promosi jalan tanpa bahan.",
        correct: "Deadline materi harus tanggal 20 (minggu ke-2). Baris di sheet salah tulis minggu/dates.",
      },
      {
        id: 2,
        location: "Ringkasan budget vs. rincian item",
        given: "Sel ringkasan: Rp 8.500.000. Rincian: iklan Rp 6.500.000 + boosting Rp 2.700.000.",
        issue: "Rincian berjumlah Rp 9.200.000 — Rp 700.000 lebih besar dari ringkasan. Kalau dipakai untuk approval, budget langsung meleset.",
        correct: "Ringkasan harus Rp 9.200.000 (approval baru), atau rincian dipangkas Rp 700.000. Salah satu harus dikoreksi dan dikonfirmasi ke manajer.",
      },
    ],
  },
  answerKey: {
    error1: "Deadline materi di sheet tertulis minggu ke-3 (tanggal 30), padahal keputusan meeting: materi paling lambat tanggal 20, launching tetap 30.",
    error2: "Rincian budget promosi berjumlah Rp 9.200.000, tidak cocok dengan ringkasan Rp 8.500.000 — selisih Rp 700.000.",
  },
};

export const deliverables = [
  {
    id: 1,
    name: "Meeting Notes — Weekly Sync Klien A",
    description: "Ubah transkrip mentah menjadi meeting notes dengan format agensi: keputusan, action items, risiko/catatan. Satu halaman, mudah dipindai.",
    format: "Diisi langsung di form Submit (format agensi)",
    scale: "N/A",
    fileName: "TDA-2026-012_notes-klienA_v1",
    suggestedTime: 25,
    checklist: [
      "Keputusan ditulis eksplisit (target launching, syarat materi)",
      "Tiap action item punya: siapa, tugas apa, deadline kapan",
      "Halaman 'Tentang Kami' ditandai sebagai change request (di luar scope)",
      "Logo final dicatat sebagai item klien dengan batas waktu",
      "Risiko dicatat: materi telat dari tanggal 20 → launching mundur",
      "Ringkas — tidak menyalin transkrip mentah",
    ],
  },
  {
    id: 2,
    name: "Timeline Proyek Webinar + Risk Log",
    description: "Timeline klien B di Sheets/Notion: Fase, Task, PIC, Mulai, Deadline, Status, Catatan. Lima fase: Perencanaan, Persiapan, Promosi, Eksekusi, Evaluasi. Plus tab Risk Log minimal 3 risiko.",
    format: "Diisi langsung di form Submit (tabel timeline + risk log)",
    scale: "N/A",
    fileName: "TDA-2026-012_timeline-klienB_v1",
    suggestedTime: 15,
    checklist: [
      "5 fase lengkap, urut dari perencanaan sampai evaluasi",
      "Tiap task punya PIC dan tanggal mulai/deadline",
      "Deadline materi = tanggal 20 (sesuai keputusan meeting, bukan sheet yang salah)",
      "Risk log ≥ 3 risiko (mis. pembicara batal, pendaftar sedikit, platform error)",
      "Tiap risiko: dampak + rencana cadangan",
      "Kesalahan budget di spreadsheet dikoreksi atau ditandai",
    ],
  },
  {
    id: 3,
    name: "Update Harian untuk Manajer",
    description: "Laporan singkat format standar: Selesai / Sedang jalan / Blocker (butuh bantuan apa) / Besok. Mudah dipindai dalam 30 detik.",
    format: "Diisi langsung di form Submit (4 bagian)",
    scale: "N/A",
    fileName: "N/A",
    suggestedTime: 10,
    checklist: [
      "Empat bagian: Selesai, Sedang jalan, Blocker, Besok",
      "Blocker menyebut blocker logo klien A dan siapa yang dibutuhkan",
      "Angka konkret (jumlah task selesai, tanggal, nama)",
      "Tidak bertele-tele — maksimal ±80 kata",
      "Change request klien A disebut statusnya (menunggu keputusan)",
      "Jujur: yang belum selesai tetap dilaporkan",
    ],
  },
  {
    id: 4,
    name: "Email Ringkasan + QA Checklist",
    description: "Email ke manajer (maks 120 kata): apa yang dikirim, keputusan kunci, kesalahan data yang ditemukan, apa yang menunggu keputusan. Plus QA checkboxes jujur.",
    format: "Teks di submit form",
    scale: "N/A",
    fileName: "N/A",
    suggestedTime: 10,
    checklist: [
      "Email ≤ 120 kata, tone profesional",
      "Menyebut 3 deliverables utama dan statusnya",
      "Dua kesalahan data dilaporkan dengan lokasi + dampak",
      "Change request 'Tentang Kami' — status menunggu estimasi biaya",
      "QA: semua 12 checkbox diisi jujur",
      "Naming file sesuai konvensi",
    ],
  },
];

export const disruption = {
  timestamp: 25,
  from: "Klien A (via PM)",
  subject: "Re: TDA-2026-012 — nanya lagi dong",
  body: `Halo,

Kami mikir lagi soal website. Bisa tolong tambah satu halaman "Tentang Kami" di sprint yang sekarang? Kan desainer lagi pegang revisi landing page, sekalian aja. Dan tolong pastiin ya, launching tetep tanggal 30 kan? Kami udah janji ke bos kami soal tanggal itu.

Oh iya, budget promosi webinar itu bisa dicairin minggu ini? Kami mau langsung jalan iklannya.

Terima kasih,
[Klien A]
Dikirim dari iPhone saya`,
  pmNote: `Kamu — klien lewat chat lagi. Punya 5 menit balas ke aku (bukan klien): accept / reject / counter. Satu kalimat tiap opsi. Ingat: "Tentang Kami" itu change request di luar scope, dan tanggal 30 bergantung materi masuk tanggal 20. Jam jalan terus.

— S.`,
};

export const submitForm = {
  qaCheckboxes: [
    "Semua dokumen memakai naming convention TDA-2026-012_[nama-dok]_v#",
    "Meeting notes: keputusan, action items (siapa + tugas + deadline), dan risiko tercantum lengkap",
    "Meeting notes: halaman 'Tentang Kami' ditandai sebagai change request di luar scope",
    "Timeline: 5 fase lengkap (Perencanaan → Persiapan → Promosi → Eksekusi → Evaluasi) dengan PIC dan tanggal",
    "Risk log: minimal 3 risiko, tiap risiko punya dampak dan rencana cadangan",
    "Timeline memakai deadline materi tanggal 20 (sesuai keputusan meeting, bukan sheet yang salah)",
    "Update harian: format Selesai / Sedang jalan / Blocker / Besok, angka konkret",
    "Dua kesalahan data spreadsheet ditemukan dan dilaporkan dengan lokasi + dampak",
    "Email ringkasan ≤ 120 kata, profesional, menyebut status semua deliverables",
    "Tidak ada dokumen korup / placeholder / bagian kosong",
    "Status board (Trello) diperbarui sesuai data terbaru hari ini",
    "Klausul kontrak yang bermasalah sudah dicatat di notes accept",
  ],
};

export const results = {
  seniorArchitectFeedback: [
    {
      item: "Meeting Notes — Klien A",
      verdict: "Correct with omissions",
      markup: [
        "Keputusan kunci tertulis: launching 30, materi paling lambat 20 — benar.",
        "Action item 'kirim materi konten' diberi PIC (Klien) dan deadline (20) — benar. Tapi 'kirim logo final' tidak diberi tanggal konkret, cuma 'besok'. Tulis tanggalnya.",
        "Halaman 'Tentang Kami' hanya disebut di bawah, tidak ditandai jelas sebagai change request yang menunggu estimasi biaya. Ini item yang paling sering bikin scope melebar.",
      ],
    },
    {
      item: "Timeline + Risk Log",
      verdict: "Partially correct",
      markup: [
        "5 fase lengkap, PIC terisi. Bagus.",
        "Deadline materi masih mengikuti sheet yang salah (minggu ke-3) di satu baris — kamu menemukan error-nya tapi tidak memperbaiki timeline-nya. Inkonsisten.",
        "Risk log: 3 risiko cukup, tapi 'pembicara batal' tidak punya rencana cadangan konkret (nama pengganti / shift topik). 'Rencana: cari pengganti' bukan rencana.",
      ],
    },
    {
      item: "Update Harian",
      verdict: "Acceptable",
      markup: [
        "Format 4 bagian diikuti. Blocker (logo klien A) disebut dengan pihak yang dibutuhkan — ini yang bikin manajer bisa bertindak.",
        "Angka konkret ada: 2 task selesai, 1 change request menunggu keputusan.",
        "Bagian 'Besok' actionable: kirim revisi, mulai fase development.",
      ],
    },
    {
      item: "Email Ringkasan",
      verdict: "Concise but missing key flag",
      markup: [
        "Word count 96 — di bawah batas. Tone profesional. Struktur jelas.",
        "Tidak menyebut: klausul respons 15 menit/07.00–22.00 di kontrak — itu beban terbesar minggu percobaan dan layak dikonfirmasi ulang sebelum minggu kedua.",
        "Kesalahan budget hanya disebut 'ada selisih' tanpa angka. Sebut angkanya: Rp 700.000.",
      ],
    },
    {
      item: "Kesalahan Data Spreadsheet",
      verdict: "Both found",
      markup: [
        "Error 1 (deadline materi): benar menemukan kontradiksi dengan transkrip, dan dampaknya dijelaskan.",
        "Error 2 (budget): benar menghitung selisih Rp 700.000. Saran koreksinya masuk akal, tapi kamu tidak menyebut siapa yang harus memutuskan (ops atau manajer) — sebut PIC-nya.",
      ],
    },
  ],
  pmComment: `Email: jelas, di bawah batas kata, bagus kamu melaporkan asumsi. Balasan disruption: kamu counter — "Tentang Kami" masuk estimasi biaya dulu, launching tetap 30 asal materi masuk 20. Keputusan tepat. Tapi kamu tidak mengonfirmasi ulang daftar deliverables di email. Lain kali satu baris: "Scope deliverables tidak berubah dari brief."`,
  contractEvaluation: {
    caughtClauses: [
      {
        clause: "Scope berubah tanpa perubahan biaya",
        caught: true,
        note: "Ditandai sebagai 'scope creep' di notes accept. Seharusnya langsung usulkan: permintaan tambahan lewat change request dengan estimasi biaya.",
      },
      {
        clause: "Respons 15 menit, 07.00–22.00, 7 hari",
        caught: true,
        note: "Ditulis di assumptions. Seharusnya diusulkan jam respons realistis di hari kerja (mis. 09.00–18.00 WIB, maks 1 jam) dan on-call dijadwalkan terpisah.",
      },
      {
        clause: "Honor Net 45 setelah 'persetujuan manajer'",
        caught: false,
        note: "Tidak sama sekali. Tidak ada catatan. Klausul ini membuat bayaranmu bergantung pada orang yang sama dengan yang menilai kerjamu — risiko besar di minggu percobaan.",
      },
    ],
    recommendedNotes: [
      "Klausul 1: 'Permintaan di luar scope ditangani via change request dengan estimasi biaya sebelum pengerjaan.'",
      "Klausul 2: 'Jam respons: 09.00–18.00 WIB hari kerja, maksimal 1 jam. Respons di luar jam itu best-effort.'",
      "Klausul 3: 'Honor dibayarkan Net 14 setelah invoice; invoice dianggap disetujui jika tidak ada keberatan dalam 3 hari kerja.'",
    ],
  },
  rubric: [
    {
      criteria: "Contract Reading",
      weight: 15,
      indicators: [
        "Menemukan 3 klausul bermasalah",
        "Menulis catatan counter yang spesifik untuk tiap klausul",
        "Paham pemicu deadline (Accept = jam mulai)",
        "Mencatat kewajiban pajak/status kerja",
      ],
      pass: "2+ klausul tertangkap dengan catatan yang bisa dipakai",
    },
    {
      criteria: "Data Accuracy",
      weight: 20,
      indicators: [
        "Menemukan Error 1 (deadline materi vs launching)",
        "Menemukan Error 2 (budget ringkasan vs rincian, selisih Rp 700.000)",
        "Menyebut dampak tiap kesalahan",
        "Timeline memakai data yang benar (materi tanggal 20)",
      ],
      pass: "Dua error ditemukan dengan lokasi + dampak",
    },
    {
      criteria: "Meeting Notes Quality",
      weight: 15,
      indicators: [
        "Keputusan eksplisit dan benar",
        "Semua action item: siapa + tugas + tanggal",
        "Change request ditandai jelas",
        "Ringkas, tidak menyalin transkrip",
      ],
      pass: "4/4 indikator terpenuhi",
    },
    {
      criteria: "Timeline & Risk",
      weight: 20,
      indicators: [
        "5 fase lengkap dan urut",
        "Tiap task punya PIC dan tanggal",
        "Risk log ≥ 3 dengan dampak + rencana cadangan konkret",
        "Kolom sesuai template (Fase/Task/PIC/Mulai/Deadline/Status/Catatan)",
      ],
      pass: "5/6 indikator terpenuhi",
    },
    {
      criteria: "Communication",
      weight: 15,
      indicators: [
        "Email ≤ 120 kata, profesional",
        "Balasan disruption: accept/reject/counter yang jelas ke PM",
        "Update harian format 4 bagian, mudah dipindai",
        "Tone komunikasi tertulis jelas dan singkat",
      ],
      pass: "3/4 terpenuhi",
    },
    {
      criteria: "Time Management",
      weight: 15,
      indicators: [
        "Submit dalam 60 menit",
        "Submit lebih awal + kualitas lolos = bonus",
        "Waktu per deliverable terlacak",
        "Tidak panik saat disruption (menit 25)",
      ],
      pass: "Submit ≤ 60 menit, kualitas lolos",
    },
  ],
  emailExamples: {
    pass: `Subject: TDA-2026-012 — Deliverables hari ini

Bu Sari,

Terkirim: (1) meeting notes klien A — launching 30, materi paling lambat 20, "Tentang Kami" ditandai change request; (2) timeline webinar klien B, 5 fase + risk log 3 risiko; (3) update harian.
Ditemukan di spreadsheet master: deadline materi tertulis 30 (seharusnya 20), dan rincian budget promosi Rp 9.200.000 vs ringkasan Rp 8.500.000 (selisih Rp 700.000). Mohon keputusan koreksinya.
Menunggu: logo final dari klien A (blocker revisi landing page).

— Kamu (Koordinator)`,
    fail: `Subject: Done

Hi,

Semua file terlampir. Notes sudah dibikin, timeline juga. Ada beberapa angka yang aneh di spreadsheet tapi udah aku rapikan sendiri.

Thanks`,
    failReason: "Tanpa nomor proyek, tanpa rincian keputusan, kesalahan data tidak dilaporkan justru 'dirapikan diam-diam' (bahaya), tanpa PIC/deadline, tone asal.",
  },
  decisionThresholds: {
    offered: "Total skor ≥ 70/100 DAN semua pass threshold terpenuhi",
    notMovingForward: "Total skor < 70 ATAU ada critical fail (kontrak: 0 klausul tertangkap, data: 0 error ditemukan, waktu: telat)",
  },
};

export const credentials = {
  name: "Junior Project Coordinator — Simulated Project Practice",
  description: "Bukti latihan simulasi yang dinilai berdasarkan rubrik, bukan sertifikasi profesi resmi dan bukan pengalaman kerja di perusahaan sungguhan.",
  projectCode: "TDA-2026-012",
  passingScore: 70,
  noCriteriaBelow: 50,
  levels: [
    { key: "completed", name: "Completed", minScore: 70, desc: "Semua kriteria ≥ 50, total ≥ 70. Dasar solid." },
    { key: "proficient", name: "Proficient", minScore: 85, desc: "Kontrak & deteksi data ≥ 80, dokumen ≥ 80. Siap kerja nyata." },
    { key: "distinction", name: "Distinction", minScore: 95, desc: "Total ≥ 95, tidak ada kriteria < 80. Level junior koordinator siap hire." },
  ],
  skillsProven: [
    "contract review",
    "meeting notes",
    "project timeline",
    "risk log",
    "daily reporting",
    "professional email in English",
    "time management",
  ],
  previewData: {
    recipientName: "Alexandra Chen",
    level: "Proficient",
    issuedDate: "2026-11-17",
    verificationId: "RWT-2026-012-PRF-8K9L",
    scores: { contract: 85, data: 90, notes: 88, timeline: 85, comms: 92, time: 100 },
  },
  privacyOptions: [
    { key: "minimal", label: "Level & Skills only", desc: "Hanya level dan daftar skill yang terlihat publik" },
    { key: "full", label: "Level, Skills & Scores", desc: "Level, skill, dan skor per kriteria terlihat publik" },
  ],
  linkedInFields: {
    name: "Junior Project Coordinator — Simulated Project Practice",
    issuer: "Remote Work Training Platform",
    issueDate: "2026-11",
    credentialId: "RWT-2026-012-PRF-8K9L",
    credentialUrl: "https://r2studio.web.id/verify/RWT-2026-012-PRF-8K9L",
  },
};

export const characters = [
  {
    initials: "SC",
    role: "Project Manager",
    style: "Singkat, langsung ke tugas, mengandalkan update tertulis.",
    sample: "Kamu — klien minta tambahan lagi. Cek scope dulu, balas ke aku dalam 5 menit: accept / reject / counter. Satu kalimat tiap opsi. Jam jalan terus. — S.",
  },
  {
    initials: "RP",
    role: "Head of Delivery",
    style: "Detail, menilai dari dokumen, tidak suka alasan.",
    sample: "Action item 'kirim materi' tanpa nama dan tanggal bukan action item. Itu doa. Meeting notes kamu harus bisa dibaca orang yang tidak hadir meeting. — R. Prameswari",
  },
  {
    initials: "KA",
    role: "Klien (Klien A)",
    style: "Ramai, sering mengubah kebutuhan, sensitif soal tanggal.",
    sample: "Kami mau launching tanggal 30. Bisa? Oh iya, tambah halaman 'Tentang Kami' sekalian ya. Dan budget promosi bisa dicairkan minggu ini? Kami mau langsung jalan iklannya.",
  },
];

export const introContent = {
  pembuka: `Agensi digital di Jakarta menawarimu posisi Junior Project Coordinator remote, minggu percobaan, kode TDA-2026-012. Paket kerja pertamamu sudah dikirim. Kamu punya 60 menit sejak menekan Start. Ini simulasi — tidak ada klien sungguhan, tapi diperlakukan seperti sungguhan.`,
  situasinya: `Terra Digital Agency, Jakarta — tim remote 12 orang: desainer, developer, CS, ops. Klien utama: klien A (retainer website) dan klien B (webinar). Komunikasi lewat Slack, Trello, Zoom, email. Kamu bekerja dari WIB; sebagian korespondensi dengan klien memakai bahasa Inggris tertulis.`,
  peran: `Junior Project Coordinator (remote, WIB). Memastikan proyek selesai sesuai scope, waktu, dan budget: memecah proyek jadi task, mengelola board, mencatat meeting, menagih progres, mengangkat blocker, menulis status report. Output dikirim lewat platform, review oleh manajer dan Head of Delivery.`,
  aturan: [
    "Timer 60 menit mulai saat tombol Start ditekan, bukan saat halaman dibuka.",
    "Timer tidak bisa dijeda.",
    "Boleh submit kapan saja sebelum waktu habis. Submit lebih cepat hanya dihitung plus kalau kualitasnya lolos.",
    "Kalau waktu habis sebelum submit, perjanjian yang menentukan konsekuensinya (batal, honor tidak dibayar).",
    "Setelah submit, tidak bisa diubah.",
    "Sesi bisa diulang, tapi kredensial dihitung dari percobaan yang diinginkan di sesi berikutnya.",
    "Tools yang boleh dipakai: Google Docs/Sheets, Notion, Trello/Asana, kalkulator. Boleh pakai template pribadi.",
    "Perjanjian dan bahan dibaca dan diputuskan sendiri. Platform tidak akan memberi tahu mana yang benar.",
  ],
  tahapan: [
    { step: 1, name: "Contract", desc: "Baca perjanjian penuh, temukan 3 klausul bermasalah, pilih Accept atau Accept with notes", time: "8 menit" },
    { step: 2, name: "Brief", desc: "Baca pesan manajer: dua proyek aktif, yang sudah/belum diputuskan", time: "5 menit" },
    { step: 3, name: "Materials", desc: "Cek transkrip meeting, pesan Slack, spreadsheet master — temukan 2 kesalahan data", time: "5 menit" },
    { step: 4, name: "Deliverables", desc: "Kerja inti: meeting notes (25'), timeline + risk log (15'), update harian (10')", time: "50 menit" },
    { step: 5, name: "Disruption", desc: "Satu pesan masuk ~menit ke-25 dari klien/PM, balas dalam 5 menit, lanjut kerja", time: "5 menit" },
    { step: 6, name: "Submit", desc: "Kumpulkan dokumen, email manajer ≤120 kata, temuan data, QA checklist", time: "7 menit" },
  ],
  dinilai: [
    { key: "contract", label: "Baca Perjanjian", desc: "Menemukan klausul bermasalah dan menulis catatan counter yang spesifik." },
    { key: "errors", label: "Ketelitian Cek Bahan", desc: "Mendeteksi kedua kesalahan data spreadsheet dengan benar dan dampaknya." },
    { key: "drawings", label: "Kualitas Dokumen", desc: "Meeting notes siapa+tugas+tanggal, timeline 5 fase lengkap, risk log konkret." },
    { key: "visual", label: "Keterbacaan", desc: "Dokumen mudah dipindai: struktur konsisten, ringkas, tidak menyalin mentah." },
    { key: "comms", label: "Komunikasi Tertulis", desc: "Email ≤120 kata, balasan gangguan jelas, update harian format standar, tone profesional." },
    { key: "time", label: "Manajemen Waktu", desc: "Submit ≤ 60 menit, tidak panik saat disruption, alokasi per tahap masuk akal." },
  ],
  hasil: `Skor per 6 kriteria, feedback manajer per item, keputusan "Offered next project" atau "Not moving forward", kredensial digital kalau lolos.`,
  syaratKredensial: `Skor minimal 70% total DAN tidak ada kriteria di bawah 50%. Kalau tidak cukup, tidak ada kredensial, tapi laporan skor dan feedback tetap diterima.`,
  karakter: [
    {
      initials: "SC",
      role: "Project Manager",
      style: "Singkat, langsung ke tugas, mengandalkan update tertulis.",
      sample: "Kamu — klien minta tambahan lagi. Cek scope dulu, balas ke aku dalam 5 menit: accept / reject / counter. Satu kalimat tiap opsi. Jam jalan terus. — S.",
    },
    {
      initials: "RP",
      role: "Head of Delivery",
      style: "Detail, menilai dari dokumen, tidak suka alasan.",
      sample: "Action item 'kirim materi' tanpa nama dan tanggal bukan action item. Itu doa. Meeting notes kamu harus bisa dibaca orang yang tidak hadir meeting. — R. Prameswari",
    },
    {
      initials: "KA",
      role: "Klien (Klien A)",
      style: "Ramai, sering mengubah kebutuhan, sensitif soal tanggal.",
      sample: "Kami mau launching tanggal 30. Bisa? Oh iya, tambah halaman 'Tentang Kami' sekalian ya. Dan budget promosi bisa dicairkan minggu ini? Kami mau langsung jalan iklannya.",
    },
  ],
  persiapan: [
    "Laptop dengan Google Docs/Sheets dan Notion terbuka",
    "Koneksi internet stabil",
    "Ruang tenang, 60 menit penuh tanpa gangguan",
    "Folder kerja kosong sudah dibuat",
    "Notifikasi lain (WhatsApp, email, dll) dimatikan",
    "Air/minuman siap di samping",
  ],
  startLabel: "Start — buka perjanjian",
  startNote: "Timer 60 menit mulai begitu tombol ditekan.",
};

export const sessionState = {
  startTime: null,
  introCompleted: false,
  accepted: false,
  acceptMode: null,
  acceptNotes: "",
  disruptionReplied: false,
  disruptionReply: "",
  submitted: false,
  submitTime: null,
  files: [],
  email: "",
  assumptions: "",
  asBuiltFindings: "",
  qaChecks: {},
};

export const allPages = [
  { id: 0, key: 'intro', title: 'Introduction', path: '/', locked: false, completed: false },
  { id: 1, key: 'contract', title: 'Contract', path: '/contract', locked: true, completed: false },
  { id: 2, key: 'brief', title: 'Brief', path: '/brief', locked: true, completed: false },
  { id: 3, key: 'materials', title: 'Materials', path: '/materials', locked: true, completed: false },
  { id: 4, key: 'deliverables', title: 'Deliverables', path: '/deliverables', locked: true, completed: false },
  { id: 5, key: 'disruption', title: 'Disruption', path: '/disruption', locked: true, completed: false },
  { id: 6, key: 'submit', title: 'Submit', path: '/submit', locked: true, completed: false },
  { id: 7, key: 'results', title: 'Results', path: '/results', locked: true, completed: false },
  { id: 8, key: 'credentials', title: 'Credential', path: '/credentials', locked: true, completed: false },
];
