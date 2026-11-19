export const common = {
  appName: "Remote Work Training",
  projectCode: "TDA-2026-012",
  studioName: "Terra Digital Agency",
  timeRemaining: "Waktu Tersisa",
  next: "Lanjut",
  submit: "Kumpulkan",
  restart: "Ulangi Simulasi",
  minutes: "menit",
  loading: "Memuat...",
  error: "Error",
  save: "Simpan",
  cancel: "Batal",
  confirm: "Konfirmasi",
  close: "Tutup",
  back: "Kembali",
  continue: "Lanjutkan",
  done: "Selesai",
  locked: "Terkunci",
  active: "Aktif",
  dashboard: "Dashboard",
  settings: "Pengaturan",
  language: "Bahasa",
  indonesian: "Indonesia",
  english: "Inggris"
};

export const navigation = {
  intro: "Pengantar",
  contract: "Perjanjian",
  brief: "Brief",
  materials: "Bahan Masuk",
  deliverables: "Deliverables",
  disruption: "Gangguan",
  submit: "Kumpulkan",
  results: "Hasil",
  credentials: "Kredensial"
};

export const intro = {
  title: "Pengantar",
  subtitle: "TDA-2026-012 — Minggu Percobaan: Junior Project Coordinator (Remote, WIB)",
  pembuka: {
    title: "Pembuka",
    content: "Agensi digital di Jakarta menawarimu posisi Junior Project Coordinator remote, minggu percobaan, kode TDA-2026-012. Paket kerja pertamamu sudah dikirim. Kamu punya 60 menit sejak menekan Start. Ini simulasi, tidak ada klien sungguhan, tapi diperlakukan seperti sungguhan."
  },
  situasi: {
    title: "Situasi",
    content: "Terra Digital Agency, Jakarta — tim remote 12 orang: desainer, developer, customer service, ops. Klien utama: klien A (retainer website) dan klien B (webinar 100 peserta). Komunikasi lewat Slack, Trello, Zoom, email. Kamu bekerja dari zona waktu WIB; sebagian korespondensi klien memakai bahasa Inggris tertulis."
  },
  peran: {
    title: "Peran Kamu",
    content: "Junior Project Coordinator, remote, WIB. Intinya: memastikan proyek selesai sesuai scope, waktu, dan budget — memecah proyek jadi task dengan deadline dan PIC, mengelola board (Trello/Asana), mencatat meeting dan menulis notes, menagih progres, mengidentifikasi blocker dan mengeskalasi, jadi penghubung klien-tim, dan membuat status report. Output dikirim lewat platform, review oleh Project Manager dan Head of Delivery."
  },
  aturan: {
    title: "Aturan Simulasi",
    items: [
      "Timer 60 menit mulai saat tombol Start ditekan, bukan saat halaman dibuka.",
      "Timer tidak bisa dijeda.",
      "Boleh submit kapan saja sebelum waktu habis. Submit lebih cepat hanya dihitung plus kalau kualitasnya lolos.",
      "Kalau waktu habis sebelum submit, perjanjian yang menentukan konsekuensinya (batal, honor tidak dibayar).",
      "Setelah submit, tidak bisa diubah.",
      "Sesi bisa diulang, tapi kredensial dihitung dari percobaan yang kamu pilih di sesi berikutnya.",
      "Tools yang boleh dipakai: Google Docs/Sheets, Notion, Trello/Asana, kalkulator. Boleh pakai template pribadi.",
      "Perjanjian dan bahan dibaca dan diputuskan sendiri. Platform tidak akan memberi tahu mana yang benar."
    ]
  },
  tahapan: {
    title: "6 Tahapan & Perkiraan Waktu",
    totalNote: "Total: ~90 menit — tapi batas keras 60 menit. Rencanakan sekali kerja.",
    stages: [
      { step: 1, name: "Perjanjian", desc: "Baca perjanjian penuh, temukan 3 klausul bermasalah, pilih Accept atau Accept with notes", time: "8 menit" },
      { step: 2, name: "Brief", desc: "Baca pesan manajer: dua proyek aktif, yang sudah/belum diputuskan", time: "5 menit" },
      { step: 3, name: "Bahan Masuk", desc: "Cek transkrip meeting, pesan Slack, spreadsheet master — temukan 2 kesalahan data", time: "5 menit" },
      { step: 4, name: "Deliverables", desc: "Kerja inti: meeting notes (25'), timeline + risk log (15'), update harian (10')", time: "50 menit" },
      { step: 5, name: "Gangguan", desc: "Satu pesan masuk ~menit ke-25 dari klien/PM, balas dalam 5 menit, lanjut kerja", time: "5 menit" },
      { step: 6, name: "Kumpulkan", desc: "Kumpulkan dokumen, email manajer ≤120 kata, temuan data, QA checklist", time: "7 menit" }
    ]
  },
  dinilai: {
    title: "Apa yang Dinilai (6 Kriteria)",
    criteria: [
      { key: "contract", label: "Baca Perjanjian", desc: "Menemukan 3 klausul bermasalah dan menulis catatan counter yang spesifik." },
      { key: "errors", label: "Ketelitian Cek Bahan", desc: "Mendeteksi kedua kesalahan data spreadsheet dengan benar dan dampaknya." },
      { key: "drawings", label: "Kualitas Dokumen", desc: "Meeting notes siapa+tugas+tanggal, timeline 5 fase lengkap, risk log dengan dampak + rencana cadangan." },
      { key: "visual", label: "Keterbacaan", desc: "Dokumen mudah dipindai: struktur konsisten, ringkas, tidak menyalin transkrip mentah." },
      { key: "comms", label: "Komunikasi Tertulis", desc: "Email ≤120 kata, balasan gangguan jelas, update harian format standar, tone profesional." },
      { key: "time", label: "Manajemen Waktu", desc: "Submit ≤ 60 menit, tidak panik saat disruption, alokasi per tahap masuk akal." }
    ]
  },
  hasil: {
    title: "Hasil Akhir",
    content: "Skor per 6 kriteria, feedback manajer per item, keputusan \"Offered next project\" atau \"Not moving forward\", kredensial digital kalau lolos."
  },
  kredensial: {
    title: "Syarat Mendapat Kredensial",
    content: "Skor minimal 70% total DAN tidak ada kriteria di bawah 50%. Kalau tidak cukup, tidak ada kredensial, tapi laporan skor dan feedback tetap diterima.",
    levels: [
      { name: "Completed", desc: "≥70 total, tidak ada kriteria <50. Dasar solid" },
      { name: "Proficient", desc: "≥85 total, kontrak & deteksi data ≥80, dokumen ≥80. Siap kerja nyata" },
      { name: "Distinction", desc: "≥95 total, tidak ada kriteria <80. Level junior koordinator siap hire" }
    ]
  },
  karakter: {
    title: "Karakter yang Akan Kamu Temui",
    characters: [
      { initials: "SC", role: "Project Manager", style: "Singkat, langsung ke tugas, mengandalkan update tertulis.", sample: "Kamu — klien minta tambahan lagi. Cek scope dulu, balas ke aku dalam 5 menit: accept / reject / counter. Satu kalimat tiap opsi. Jam jalan terus. — S." },
      { initials: "RP", role: "Head of Delivery", style: "Detail, menilai dari dokumen, tidak suka alasan.", sample: "Action item 'kirim materi' tanpa nama dan tanggal bukan action item. Itu doa. Meeting notes kamu harus bisa dibaca orang yang tidak hadir meeting. — R. Prameswari" },
      { initials: "KA", role: "Klien (Klien A)", style: "Ramai, sering mengubah kebutuhan, sensitif soal tanggal.", sample: "Kami mau launching tanggal 30. Bisa? Oh iya, tambah halaman 'Tentang Kami' sekalian ya. Dan budget promosi bisa dicairkan minggu ini? Kami mau langsung jalan iklannya." }
    ]
  },
  persiapan: {
    title: "Persiapan Sebelum Start",
    items: [
      "Laptop dengan Google Docs/Sheets dan Notion terbuka",
      "Koneksi internet stabil",
      "Ruang tenang, 60 menit penuh tanpa gangguan",
      "Folder kerja kosong sudah dibuat",
      "Notifikasi lain (WhatsApp, email, dll) dimatikan",
      "Air/minuman siap di samping"
    ]
  },
  start: {
    label: "Start — buka perjanjian",
    note: "Timer 60 menit mulai begitu tombol ditekan."
  }
};

export const contract = {
  title: "Perjanjian Kerja Remote — Project Coordinator (Minggu Percobaan)",
  projectName: "Webinar Klien B: \"Digital Workflow 101\" — 100 peserta, 4 minggu",
  projectCode: "TDA-2026-012",
  role: "Junior Project Coordinator (Remote, WIB)",
  parties: {
    studio: "Agensi",
    address: "Gedung Cyber 2 Lt. 8, Jl. HR Rasuna Said, Jakarta Selatan",
    city: "Jakarta",
    timezone: "WIB (UTC+7)",
    abn: "NIB 0123456789012",
    email: "work@terradigital.id",
    seniorArchitect: "R. Prameswari (Head of Delivery)",
    pm: "S. Chen (Project Manager)"
  },
  freelancer: {
    name: "Kamu (Koordinator)",
    role: "Junior Project Coordinator (Remote)",
    rate: "Rp40.000",
    currency: "",
    rateNote: "Per jam selama minggu percobaan; honor bulanan penuh mengikuti perjanjian."
  },
  scope: [
    "Menyusun meeting notes dari transkrip weekly sync klien A, format standar agensi (keputusan, action items dengan nama + deadline, risiko).",
    "Membuat timeline proyek webinar klien B: kolom Fase, Task, PIC, Mulai, Deadline, Status, Catatan.",
    "Menambahkan Risk Log minimal 3 risiko — tiap risiko punya dampak dan rencana cadangan.",
    "Menulis update harian untuk manajer: Selesai / Sedang jalan / Blocker / Besok.",
    "Memperbarui status task di board (Trello) berdasarkan pesan dan data yang masuk.",
    "Semua dokumen memakai template agensi. Naming file: TDA-2026-012_[nama-dok]_v#."
  ],
  problematicClauses: [
    { id: 1, text: "Scope dapat berubah sewaktu-waktu mengikuti kebutuhan klien, tanpa perubahan biaya", issue: "Scope creep tanpa proteksi. Setiap permintaan tambahan klien dikerjakan gratis — jam kerja membengkak tanpa kompensasi." },
    { id: 2, text: "Respons pesan kerja maksimal 15 menit, pukul 07.00–22.00 WIB, tujuh hari seminggu", issue: "On-call hampir sepanjang hari, termasuk akhir pekan. Kerja remote tanpa batas waktu jelas berujung burnout dan lembur tak tercatat." },
    { id: 3, text: "Honor dibayarkan setelah evaluasi akhir bulan, maksimal Net 45 setelah invoice disetujui manajer", issue: "Pembayaran bisa molor 45+ hari dan bergantung pada 'persetujuan'. Kalau evaluasi diperselisihkan, bayaran molor lebih lama lagi." }
  ],
  fee: {
    amount: "Rp3.500.000",
    currency: "",
    breakdown: "Honor bulanan full-time remote untuk minggu percobaan, mencakup seluruh tugas di scope. Tugas di luar scope diperjanjikan terpisah."
  },
  paymentTerms: "Net 45 setelah invoice disetujui manajer. Invoice dikirim tiap tanggal 1 via transfer bank. Pajak dan jaminan sosial menjadi tanggung jawab masing-masing pihak sesuai status kerja.",
  deadline: {
    startTrigger: "Tombol Start ditekan di halaman Introduction",
    minutes: 60,
    timezone: "WIB (UTC+7)",
    example: "Kalau mulai 09.00 WIB, submit sebelum 10.00 WIB. Submit telat = otomatis gugur."
  },
  latePolicy: "Submit setelah deadline: perjanjian batal, honor tidak dibayar. Dokumen tidak sesuai format/template: ditolak, jam terus berjalan. File korup atau tidak bisa dibuka: dianggap tidak mengumpulkan.",
  jurisdiction: "Hukum Indonesia. Sengketa diselesaikan musyawarah terlebih dahulu, lalu melalui mediasi sesuai ketentuan kontrak.",
  deliverablesFormat: [
    "Meeting notes — doc/Notion, satu halaman, format standar agensi",
    "Timeline + Risk Log — spreadsheet/Notion, kolom Fase/Task/PIC/Mulai/Deadline/Status/Catatan",
    "Update harian — teks, format Selesai / Sedang jalan / Blocker / Besok",
    "Naming: TDA-2026-012_[nama-dok]_v#",
    "Semua dokumen dikumpulkan lewat platform"
  ],
  acceptedTitle: "Diterima — Jam Berjalan",
  acceptedMessage: "Perjanjian Diterima",
  acceptedNotes: "Diterima dengan catatan. Catatan tersimpan.",
  acceptedNoNotes: "Diterima tanpa catatan.",
  startTimeLabel: "Hitung mundur 60 menit dimulai",
  keyDeadlines: "Deadline Penting",
  submitDeadline: "Kumpulkan semua deliverables sebelum",
  disruptionExpected: "Gangguan diperkirakan ~menit ke-25",
  lateSubmission: "Submit telat = perjanjian batal, honor tidak dibayar",
  nextBrief: "Lanjut: Project Brief",
  readBrief: "Baca brief dari manajer. Catat yang sudah diputuskan dan yang kamu putuskan sendiri.",
  openBrief: "Buka Brief",
  yourNotes: "Catatan Kamu",
  noNotes: "(tanpa catatan)"
};

export const brief = {
  title: "Project Brief",
  from: "Dari Project Manager",
  meta: {
    from: "S. Chen, Project Manager",
    to: "Kamu, Junior Project Coordinator",
    subject: "TDA-2026-012 — Brief: Paket Kerja Minggu Pertama"
  },
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
  keyNumbers: [
    { label: "Durasi proyek webinar", value: "4 minggu (launching tanggal 30)" },
    { label: "Target peserta", value: "100 hadir (kapasitas platform 500)" },
    { label: "Pembicara", value: "3 (2 internal, 1 eksternal) + 1 cadangan" },
    { label: "Platform", value: "Zoom Webinar" },
    { label: "Anggaran promosi", value: "Rp 8.500.000" },
    { label: "Target pendaftar", value: "350 → 100 hadir" },
    { label: "Deadline materi konten", value: "Tanggal 20 (keputusan meeting)" },
    { label: "Promosi dimulai", value: "Minggu ke-2 (21 hari penuh)" }
  ],
  undecided: [
    { icon: "👤", title: "PIC & deadline per task", desc: "Kamu tetapkan berdasarkan kebiasaan tim di transkrip dan Slack" },
    { icon: "⚠️", title: "Isi Risk Log", desc: "Minimal 3 risiko (mis. pembicara batal, pendaftar sedikit, platform error) + rencana cadangan" },
    { icon: "📊", title: "Isi laporan harian", desc: "Apa yang dilaporkan ke manajer hari ini, format Selesai/Sedang jalan/Blocker/Besok" }
  ],
  undecidedNote: "Putuskan sendiri masing-masing. Tulis justifikasinya 1 baris di assumptions saat submit.",
  nextMaterials: "Lanjut: Bahan Masuk"
};

export const materials = {
  title: "Bahan Masuk (Inbox Hari Ini)",
  providedBy: "Diterima dari tim & klien",
  sketch: {
    title: "Transkrip Weekly Sync Klien A (bahan utama meeting notes)",
    description: "Tidak ada file audio. Kerjakan dari transkrip berikut.",
    image: "",
    imageAlt: "Transkrip weekly sync klien A",
    caption: "Transkrip mentah 30 menit. Tugasmu mengubahnya jadi meeting notes: keputusan, action items dengan nama + tanggal, risiko.",
    notesTitle: "Buka transkrip + catatan manajer"
  },
  sitePhotos: {
    title: "Pesan & Update dari Tim (Slack / Email)",
    items: [
      { image: "", alt: "Pesan Rani di Slack", text: "Slack #klien-a (08.41): Rani — \"Revisi landing page klien A masih nunggu logo final dari klien. Kalau logo gak masuk hari ini, revisi mundur ke minggu depan.\"" },
      { image: "", alt: "Pesan manajer di DM", text: "Slack DM manajer (08.55): \"Timeline webinar klien B kukerjakan hari ini juga ya, harus sudah saya review sebelum weekly sync besok. Pakai template timeline agensi + tab Risk Log.\"" },
      { image: "", alt: "Email dari klien A", text: "Email klien A (09.05): \"Revisi desain landing page belum kami terima, kapan ya?\" — belum ada balasan dari tim. Kamu catat sebagai prioritas hari ini." }
    ],
    photos: [
      "Slack #klien-a (08.41): Rani — \"Revisi landing page klien A masih nunggu logo final dari klien. Kalau logo gak masuk hari ini, revisi mundur ke minggu depan.\"",
      "Slack DM manajer (08.55): \"Timeline webinar klien B kubesok hari ini juga ya, harus sudah saya review sebelum weekly sync besok. Pakai template timeline agensi + tab Risk Log.\"",
      "Email klien A (09.05): \"Revisi desain landing page belum kami terima, kapan ya?\" — belum ada balasan dari tim. Kamu catat sebagai prioritas hari ini."
    ]
  },
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
      leads: "1.200 kontak email (dari webinar sebelumnya)"
    },
    errorsTitle: "⚠ Dua Kesalahan Data Menyusup di Spreadsheet",
    errorsDesc: "Temukan keduanya. Laporkan di Submit dengan lokasi, angka yang tertulis, angka yang benar, dan dampaknya.",
    errors: [
      {
        id: 1,
        location: "Deadline materi vs. tanggal launching",
        given: "Sheet progress menulis \"materi lengkap: minggu ke-3 (tanggal 30)\".",
        issue: "Transkrip weekly sync memutuskan materi paling lambat tanggal 20 dan launching tanggal 30. Kalau materi baru 30, tidak ada waktu produksi dan promosi jalan tanpa bahan."
      },
      {
        id: 2,
        location: "Ringkasan budget vs. rincian item",
        given: "Sel ringkasan: Rp 8.500.000. Rincian: iklan Rp 6.500.000 + boosting Rp 2.700.000.",
        issue: "Rincian berjumlah Rp 9.200.000 — Rp 700.000 lebih besar dari ringkasan. Kalau dipakai untuk approval, budget langsung meleset."
      }
    ],
    answerKeyNote: "Kunci jawaban baru terbuka di halaman Hasil."
  },
  standards: {
    title: "Referensi & Template Agensi (Acuan Kerja)",
    intro: "Gunakan template dan aturan main ini sebagai acuan dasar untuk semua dokumen yang kamu tulis hari ini. Format yang tidak sesuai template ditolak.",
    groups: [
      {
        region: "Format Dokumen Standar",
        items: [
          { code: "Meeting notes", desc: "Bagian: Keputusan, Action Items (tabel Siapa/Tugas/Deadline), Risiko/Catatan. Satu halaman." },
          { code: "Timeline proyek", desc: "Kolom wajib: Fase | Task | PIC | Mulai | Deadline | Status | Catatan. Fase: Perencanaan, Persiapan, Promosi, Eksekusi, Evaluasi." },
          { code: "Risk log", desc: "Kolom: Risiko | Dampak | Rencana Cadangan | PIC. Minimal 3 risiko per proyek." },
          { code: "Laporan harian", desc: "Empat baris: Selesai / Sedang jalan / Blocker (butuh bantuan apa) / Besok. Maksimal 80 kata." }
        ]
      },
      {
        region: "Aturan Komunikasi",
        items: [
          { code: "Action item", desc: "Harus punya nama dan tanggal. 'Kirim materi' tanpa PIC dan deadline bukan action item." },
          { code: "Update tertulis", desc: "Kerja remote sangat bergantung komunikasi tertulis — tulis update yang jelas dan singkat." },
          { code: "Proaktif", desc: "Kamu yang menagih, bukan ditagih. Follow-up yang konsisten itu nilai plus besar." },
          { code: "Change request", desc: "Permintaan di luar scope dicatat, tidak dijanjikan langsung ke klien; lewat estimasi biaya dulu." }
        ]
      },
      {
        region: "Tools yang Dipakai",
        items: [
          { code: "Komunikasi", desc: "Slack, WhatsApp, Zoom, Google Meet, email." },
          { code: "Manajemen tugas", desc: "Trello, Asana, Jira, ClickUp, Notion." },
          { code: "Dokumen", desc: "Google Docs/Sheets, Excel (dasar sampai menengah)." }
        ]
      }
    ],
    note: "Referensi untuk simulasi ini saja. Di pekerjaan nyata, ikuti template dan SOP kantor masing-masing."
  },
  nextDeliverables: "Lanjut: Daftar Deliverables"
};

export const deliverables = {
  title: "Deliverables & Alokasi Waktu",
  subtitle: "Maksimal 4 Item",
  totalTimeNote: "Total waktu yang disarankan: {total} menit — Kamu punya 60 menit total. Bagi waktumu. Gangguan di ~menit 25.",
  referenceLabel: "Referensi format (contoh panduan)",
  items: [
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
        "Ringkas — tidak menyalin transkrip mentah"
      ]
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
        "Kesalahan budget di spreadsheet dikoreksi atau ditandai"
      ]
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
        "Jujur: yang belum selesai tetap dilaporkan"
      ]
    },
    {
      id: 4,
      name: "Email Ringkasan + QA Checklist",
      description: "Email ke manajer (maks 120 kata): apa yang dikirim, keputusan kunci, kesalahan data yang ditemukan, apa yang menunggu keputusan. Plus QA checkboxes jujur.",
      format: "Diisi langsung di form Submit (4 bagian)",
      scale: "N/A",
      fileName: "N/A",
      suggestedTime: 10,
      checklist: [
        "Email ≤ 120 kata, tone profesional",
        "Menyebut 3 deliverables utama dan statusnya",
        "Dua kesalahan data dilaporkan dengan lokasi + dampak",
        "Change request 'Tentang Kami' — status menunggu estimasi biaya",
        "QA: semua 12 checkbox diisi jujur",
        "Naming file sesuai konvensi"
      ]
    }
  ],
  timeBreakdown: {
    title: "Pembagian Waktu yang Disarankan",
    breakdown: [
      { label: "Baca Perjanjian + Brief", time: 10, color: "text-primary" },
      { label: "Tulis Dokumen", time: 35, color: "accent-gold" },
      { label: "Review & Rapihkan", time: 5, color: "text-secondary" },
      { label: "Email + QA", time: 10, color: "accent-gold-light" }
    ]
  },
  nextDisruption: "Lanjut: Gangguan Tengah Sesi"
};

export const disruption = {
  title: "Gangguan Tengah Sesi",
  elapsedLabel: "Berjalan",
  incomingTitle: "Masuk: Permintaan Klien (via PM)",
  incomingDesc: "Diteruskan manajer di menit ~25. Jam TIDAK berhenti.",
  clientMessage: `Halo,

Kami mikir lagi soal website. Bisa tolong tambah satu halaman "Tentang Kami" di sprint yang sekarang? Kan desainer lagi pegang revisi landing page, sekalian aja. Dan tolong pastiin ya, launching tetep tanggal 30 kan? Kami udah janji ke bos kami soal tanggal itu.

Oh iya, budget promosi webinar itu bisa dicairin minggu ini? Kami mau langsung jalan iklannya.

Terima kasih,
[Klien A]
Dikirim dari iPhone saya`,
  pmNoteTitle: "Catatan PM",
  pmNote: `Kamu — klien lewat chat lagi. Punya 5 menit balas ke aku (bukan klien): accept / reject / counter. Satu kalimat tiap opsi. Ingat: "Tentang Kami" itu change request di luar scope, dan tanggal 30 bergantung materi masuk tanggal 20. Jam jalan terus.

— S. Chen, PM.`,
  replyTitle: "Balasan Kamu ke PM (5 menit)",
  replyDesc: "Pilih satu. Tulis satu kalimat dalam bahasa Inggris. Lanjut kerja.",
  options: {
    accept: "Terima Perubahan",
    reject: "Tolak Perubahan",
    counter: "Tawar Bersyarat"
  },
  replySentTitle: "Balasan Terkirim",
  replySaved: "Tersimpan. Lanjut kerja. Jam masih berjalan.",
  nextSubmit: "Lanjut: Kumpulkan"
};

export const submit = {
  title: "Kumpulkan",
  finalStep: "Langkah Terakhir",
  timeNote: "Waktu tersisa: {time} — isi dokumen di bawah seperti pekerjaan nyata, bukan ringkasan.",
  notes: {
    title: "Meeting Notes — Weekly Sync Klien A",
    subtitle: "Deliverable 1 (25 menit). Pakai format agensi: keputusan, action items dengan nama + deadline, risiko.",
    datePlaceholder: "Tanggal & peserta — mis. 19/11 | Peserta: PM (Sari), Desainer (Rani), Klien A",
    decisionsPlaceholder: "Keputusan — mis. launching tanggal 30; materi konten paling lambat tanggal 20...",
    actionItemsTitle: "Action items (tiap baris wajib: siapa + tugas + tanggal)",
    colOwner: "Siapa",
    colTask: "Tugas",
    colDeadline: "Deadline",
    taskPlaceholder: "Kirim materi konten / kirim logo final / kirim estimasi biaya...",
    deadlinePlaceholder: "20 / besok (tulis tanggalnya) / ...",
    addRow: "Tambah baris",
    risksPlaceholder: "Risiko/catatan — mis. materi telat dari tanggal 20 → launching mundur; 'Tentang Kami' = change request menunggu estimasi biaya"
  },
  timeline: {
    title: "Timeline Proyek Webinar Klien B + Risk Log",
    subtitle: "Deliverable 2 (15 menit). Minimal 5 baris timeline (5 fase: Perencanaan, Persiapan, Promosi, Eksekusi, Evaluasi) dan 3 risiko lengkap dengan rencana cadangan.",
    colPhase: "Fase",
    colTask: "Task",
    colOwner: "PIC",
    colStart: "Mulai",
    colDeadline: "Deadline",
    colStatus: "Status",
    colRisk: "Risiko",
    colImpact: "Dampak",
    colBackup: "Rencana cadangan",
    phasePlaceholder: "Perencanaan / Persiapan / Promosi / ...",
    taskPlaceholder: "Fix tanggal & venue (virtual) / buka pendaftaran / ...",
    ownerPlaceholder: "Sari / Rani / Ops / ...",
    datePlaceholder: "t-28 / 21 Nov / ...",
    riskPlaceholder: "Pembicara batal H-3 / pendaftar < 100 / platform error saat live",
    impactPlaceholder: "Materi mundur / webinar sepi / peserta gagal masuk",
    backupPlaceholder: "Cadangan: pak Budi (topik mirip) / tambah iklan / backup stream ke YouTube",
    statusNotStarted: "Belum mulai",
    statusInProgress: "Berjalan",
    statusBlocked: "Tertahan",
    statusDone: "Selesai",
    addRow: "Tambah baris",
    riskLogTitle: "Risk Log (minimal 3 risiko, masing-masing dengan dampak + rencana cadangan)"
  },
  dailyReport: {
    title: "Update Harian untuk Manajer",
    subtitle: "Deliverable 3 (10 menit). Format standar agensi, maksimal ±80 kata, mudah dipindai 30 detik.",
    done: "Selesai",
    inProgress: "Sedang jalan",
    blocker: "Blocker (butuh bantuan apa)",
    tomorrow: "Besok",
    donePlaceholder: "mis. 2 task selesai: meeting notes klien A, timeline klien B draft v1",
    inProgressPlaceholder: "mis. review timeline sebelum dikirim ke manajer",
    blockerPlaceholder: "mis. logo final klien A belum masuk — butuh PM menagih klien sebelum 12.00",
    tomorrowPlaceholder: "mis. kirim revisi landing page ke klien, mulai fase development"
  },
  filesUpload: {
    title: "Lampiran (opsional)",
    subtitle: "Kalau kamu mengerjakan dokumen di luar (Sheets/Notion/Word), lampirkan di sini. Isi form di atas tetap wajib.",
    acceptedTypes: "Format: .pdf, .doc/.docx, .xlsx/.csv, .txt, .md. Naming: TDA-2026-012_[nama-dok]_v#",
    dragDrop: "Tarik & lepas file di sini atau klik untuk memilih",
    uploadedFiles: "Dokumen Terunggah",
    remove: "Hapus"
  },
  coverEmail: {
    title: "Email Ringkasan ke Manajer",
    placeholder: "Maks 120 kata. Sebut apa yang dikirim, keputusan kunci, dan yang menunggu keputusan.",
    wordCount: "Kata: {count} / 120",
    overLimit: "LEBIH BATAS",
    ok: "OK"
  },
  assumptions: {
    title: "Catatan & Asumsi Kerja",
    placeholder: "Maks 6 poin. Mis.: PIC & deadline kamu tentukan sendiri berdasarkan transkrip; risiko yang masuk log; format dokumen yang dipakai...",
    note: "Daftar poin. Satu per baris."
  },
  asBuiltErrors: {
    title: "Temuan Data Spreadsheet",
    placeholder: "Error 1: lokasi (sel/baris), angka tertulis, angka benar, dampak. Error 2: idem.",
    note: "Dua kesalahan wajib dilaporkan — jangan dirapikan diam-diam. Tulis spesifik."
  },
  qaChecklist: {
    title: "QA Checklist (Semua Wajib)",
    desc: "Centang dengan jujur. Hasil penilaian bergantung pada ini.",
    submitButton: "Kumpulkan Sekarang",
    earlySubmit: "Submit lebih awal + kualitas lolos = bonus. Telat = batal."
  },
  validation: {
    dateRequired: "Meeting notes: isi tanggal & peserta dulu.",
    decisionsRequired: "Meeting notes: bagian Keputusan masih kosong.",
    actionItemsRequired: "Meeting notes: minimal 2 action item lengkap (siapa + tugas + deadline).",
    timelineRequired: "Timeline: minimal 5 baris dengan Fase, Task, PIC, dan Deadline terisi.",
    risksRequired: "Risk log: minimal 3 risiko dengan dampak + rencana cadangan.",
    dailyReportRequired: "Update harian: keempat bagian (Selesai/Sedang jalan/Blocker/Besok) wajib terisi.",
    emailRequired: "Email ringkasan ke manajer masih kosong.",
    emailOverLimit: "Email melebihi 120 kata.",
    findingsRequired: "Temuan data spreadsheet masih kosong — laporkan 2 kesalahan yang kamu temukan.",
    qaRequired: "Semua checkbox QA harus dicentang dengan jujur."
  },
  submitted: {
    title: "Terkumpul",
    timeUsed: "Waktu terpakai: {time}",
    preparingResults: "Hasil sedang disiapkan. Mengalihkan...",
    sending: "Mengirim paket kerja ke reviewer...",
    sent: "Email submission berhasil dikirim.",
    sendError: "Submission tersimpan lokal, tetapi email gagal dikirim otomatis."
  }
};

export const results = {
  title: "Hasil",
  postSession: "Review Setelah Sesi",
  tabs: {
    senior: "Feedback Manajer",
    pm: "Komentar PM",
    contract: "Evaluasi Perjanjian",
    rubric: "Rubrik Skor",
    email: "Contoh Email",
    decision: "Keputusan Akhir",
    credential: "Kredensial"
  },
  seniorFeedback: [
    {
      item: "Meeting Notes — Klien A",
      verdict: "Correct with omissions",
      markup: [
        "Keputusan kunci tertulis: launching 30, materi paling lambat 20 — benar.",
        "Action item 'kirim materi konten' diberi PIC (Klien) dan deadline (20) — benar. Tapi 'kirim logo final' tidak diberi tanggal konkret, cuma 'besok'. Tulis tanggalnya.",
        "Halaman 'Tentang Kami' hanya disebut di bawah, tidak ditandai jelas sebagai change request yang menunggu estimasi biaya. Ini item yang paling sering bikin scope melebar."
      ]
    },
    {
      item: "Timeline + Risk Log",
      verdict: "Partially correct",
      markup: [
        "5 fase lengkap, PIC terisi. Bagus.",
        "Deadline materi masih mengikuti sheet yang salah (minggu ke-3) di satu baris — kamu menemukan error-nya tapi tidak memperbaiki timeline-nya. Inkonsisten.",
        "Risk log: 3 risiko cukup, tapi 'pembicara batal' tidak punya rencana cadangan konkret (nama pengganti / shift topik). 'Rencana: cari pengganti' bukan rencana."
      ]
    },
    {
      item: "Update Harian",
      verdict: "Acceptable",
      markup: [
        "Format 4 bagian diikuti. Blocker (logo klien A) disebut dengan pihak yang dibutuhkan — ini yang bikin manajer bisa bertindak.",
        "Angka konkret ada: 2 task selesai, 1 change request menunggu keputusan.",
        "Bagian 'Besok' actionable: kirim revisi, mulai fase development."
      ]
    },
    {
      item: "Email Ringkasan",
      verdict: "Concise but missing key flag",
      markup: [
        "Word count 96 — di bawah batas. Tone profesional. Struktur jelas.",
        "Tidak menyebut: klausul respons 15 menit/07.00–22.00 di kontrak — itu beban terbesar minggu percobaan dan layak dikonfirmasi ulang sebelum minggu kedua.",
        "Kesalahan budget hanya disebut 'ada selisih' tanpa angka. Sebut angkanya: Rp 700.000."
      ]
    },
    {
      item: "Kesalahan Data Spreadsheet",
      verdict: "Both found",
      markup: [
        "Error 1 (deadline materi): benar menemukan kontradiksi dengan transkrip, dan dampaknya dijelaskan.",
        "Error 2 (budget): benar menghitung selisih Rp 700.000. Saran koreksinya masuk akal, tapi kamu tidak menyebut siapa yang harus memutuskan (ops atau manajer) — sebut PIC-nya."
      ]
    }
  ],
  pmComment: `Email: jelas, di bawah batas kata, bagus kamu melaporkan asumsi. Balasan disruption: kamu counter — "Tentang Kami" masuk estimasi biaya dulu, launching tetap 30 asal materi masuk 20. Keputusan tepat. Tapi kamu tidak mengonfirmasi ulang daftar deliverables di email. Lain kali satu baris: "Scope deliverables tidak berubah dari brief."`,
  contractEvaluation: {
    title: "Evaluasi Klausul Perjanjian",
    desc: "Apakah kamu menemukan 3 klausul bermasalah? Apa catatan yang seharusnya ditulis?",
    clauses: [
      { clause: "Scope berubah tanpa perubahan biaya", caught: true, note: "Ditandai sebagai 'scope creep' di notes accept. Seharusnya langsung usulkan: permintaan tambahan lewat change request dengan estimasi biaya.", recommended: "Klausul 1: 'Permintaan di luar scope ditangani via change request dengan estimasi biaya sebelum pengerjaan.'" },
      { clause: "Respons 15 menit, 07.00–22.00, 7 hari", caught: true, note: "Ditulis di assumptions. Seharusnya diusulkan jam respons realistis di hari kerja (mis. 09.00–18.00 WIB, maks 1 jam) dan on-call dijadwalkan terpisah.", recommended: "Klausul 2: 'Jam respons: 09.00–18.00 WIB hari kerja, maksimal 1 jam. Respons di luar jam itu best-effort.'" },
      { clause: "Honor Net 45 setelah 'persetujuan manajer'", caught: false, note: "Tidak sama sekali. Tidak ada catatan. Klausul ini membuat bayaranmu bergantung pada orang yang sama dengan yang menilai kerjamu — risiko besar di minggu percobaan.", recommended: "Klausul 3: 'Honor dibayarkan Net 14 setelah invoice; invoice dianggap disetujui jika tidak ada keberatan dalam 3 hari kerja.'" }
    ]
  },
  rubric: [
    { criteria: "Contract Reading", weight: 15, indicators: ["Menemukan 3 klausul bermasalah", "Menulis catatan counter spesifik untuk tiap klausul", "Paham pemicu deadline (Accept = jam mulai)", "Mencatat kewajiban pajak/status kerja"], pass: "2+ klausul tertangkap dengan catatan yang bisa dipakai" },
    { criteria: "Data Accuracy", weight: 20, indicators: ["Menemukan Error 1 (deadline materi vs launching)", "Menemukan Error 2 (budget selisih Rp 700.000)", "Menyebut dampak tiap kesalahan", "Timeline memakai data yang benar (materi tanggal 20)"], pass: "Dua error ditemukan dengan lokasi + dampak" },
    { criteria: "Meeting Notes Quality", weight: 15, indicators: ["Keputusan eksplisit dan benar", "Semua action item: siapa + tugas + tanggal", "Change request ditandai jelas", "Ringkas, tidak menyalin transkrip"], pass: "4/4 indikator terpenuhi" },
    { criteria: "Timeline & Risk", weight: 20, indicators: ["5 fase lengkap dan urut", "Tiap task punya PIC dan tanggal", "Risk log ≥ 3 dengan dampak + rencana cadangan konkret", "Kolom sesuai template (Fase/Task/PIC/Mulai/Deadline/Status/Catatan)"], pass: "5/6 indikator terpenuhi" },
    { criteria: "Communication", weight: 15, indicators: ["Email ≤ 120 kata, profesional", "Balasan disruption: accept/reject/counter yang jelas ke PM", "Update harian format 4 bagian, mudah dipindai", "Tone komunikasi tertulis jelas dan singkat"], pass: "3/4 terpenuhi" },
    { criteria: "Time Management", weight: 15, indicators: ["Submit dalam 60 menit", "Submit lebih awal + kualitas lolos = bonus", "Waktu per deliverable terlacak", "Tidak panik saat disruption (menit 25)"], pass: "Submit ≤ 60 menit, kualitas lolos" }
  ],
  emailExamples: {
    pass: {
      title: "Contoh Email yang Lolos",
      content: `Subject: TDA-2026-012 — Deliverables hari ini

Bu Sari,

Terkirim: (1) meeting notes klien A — launching 30, materi paling lambat 20, "Tentang Kami" ditandai change request; (2) timeline webinar klien B, 5 fase + risk log 3 risiko; (3) update harian.
Ditemukan di spreadsheet master: deadline materi tertulis 30 (seharusnya 20), dan rincian budget promosi Rp 9.200.000 vs ringkasan Rp 8.500.000 (selisih Rp 700.000). Mohon keputusan koreksinya.
Menunggu: logo final dari klien A (blocker revisi landing page).

— Kamu (Koordinator)`,
      reason: "Lengkap, profesional, semua persyaratan terpenuhi"
    },
    fail: {
      title: "Contoh Email yang Gagal",
      content: `Subject: Done

Hi,

Semua file terlampir. Notes sudah dibikin, timeline juga. Ada beberapa angka yang aneh di spreadsheet tapi udah aku rapikan sendiri.

Thanks`,
      reason: "Tanpa nomor proyek, tanpa rincian keputusan, kesalahan data tidak dilaporkan justru 'dirapikan diam-diam' (bahaya), tanpa PIC/deadline, tone asal."
    }
  },
  decision: {
    offered: "Offered Next Project",
    notOffered: "Not Moving Forward",
    scoreLabel: "Skor: {score}/100 | Batas: 70",
    logic: [
      "Total ≥ 70 DAN semua pass threshold terpenuhi → Offered",
      "Total < 70 ATAU ada critical fail (0 klausul tertangkap, 0 error ditemukan, telat) → Not Moving Forward"
    ],
    offeredMessage: "Manajer: \"Cukup rapi untuk lanjut. Perbaiki action item tanpa tanggal dan risk log tanpa rencana. Brief berikutnya dikirim Senin.\"",
    notOfferedMessage: "Manajer: \"Ketinggalan klausul Net 45. Itu yang bikin bayaranmu molor. Membaca perjanjian bukan opsional.\""
  },
  credential: {
    title: "Junior Project Coordinator — Simulated Project Practice",
    description: "Bukti latihan simulasi yang dinilai berdasarkan rubrik, bukan sertifikasi profesi resmi dan bukan pengalaman kerja di perusahaan sungguhan.",
    projectCode: "TDA-2026-012",
    earned: "Kredensial Didapat",
    notEarned: "Kredensial Tidak Didapat",
    notEarnedDesc: "Minimal skor total 70% dan tidak ada kriteria di bawah 50%. Skor kamu: {score}%",
    notEarnedNote: "Kamu tetap menerima feedback lengkap dan skor rubrik. Ulangi simulasi untuk mendapat kredensial.",
    levels: [
      { key: "completed", name: "Completed", desc: "Semua kriteria ≥ 50, total ≥ 70. Dasar solid." },
      { key: "proficient", name: "Proficient", desc: "Kontrak & deteksi data ≥ 80, dokumen ≥ 80. Siap kerja nyata." },
      { key: "distinction", name: "Distinction", desc: "Total ≥ 95, tidak ada kriteria < 80. Level junior koordinator siap hire." }
    ],
    skillsProven: [
      "contract review",
      "meeting notes",
      "project timeline",
      "risk log",
      "daily reporting",
      "professional email in English",
      "time management"
    ],
    previewData: {
      recipientName: "Alexandra Chen",
      level: "Proficient",
      issuedDate: "2026-11-17",
      verificationId: "RWT-2026-012-PRF-8K9L",
      scores: { contract: 85, data: 90, notes: 88, timeline: 85, comms: 92, time: 100 }
    },
    privacyOptions: [
      { key: "minimal", label: "Level & Skills only", desc: "Hanya level dan daftar skill yang terlihat publik" },
      { key: "full", label: "Level, Skills & Scores", desc: "Level, skill, dan skor per kriteria terlihat publik" }
    ],
    linkedInFields: {
      name: "Junior Project Coordinator — Simulated Project Practice",
      issuer: "Remote Work Training Platform",
      issueDate: "2026-11",
      credentialId: "RWT-2026-012-PRF-8K9L",
      credentialUrl: "https://r2studio.web.id/verify/RWT-2026-012-PRF-8K9L"
    },
    actions: {
      downloadPdf: "Unduh PDF",
      addToLinkedIn: "Tambah ke LinkedIn",
      embedBadge: "Sematkan Badge",
      verify: "Verifikasi"
    },
    verificationLink: "Verifikasi publik: {url}"
  },
  verdicts: {
    pass: "Acceptable",
    partial: "Correct with omissions",
    fail: "Partially correct"
  }
};

export const verdicts = {
  pass: "Acceptable",
  partial: "Correct with omissions",
  fail: "Partially correct"
};

export const sop = {
  menu: "Panduan Kerja Remote",
  badge: "Panduan",
  title: "Panduan Kerja Remote: Ops, Project Coordinator & Trainee",
  eyebrow: "Panduan Pelamar & Pemula",
  intro: "Gambaran lengkap tiga peran remote entry-level yang paling banyak dicari — Remote Operations, Remote Project Manager/Project Coordinator, dan Remote Trainee — plus simulasi sehari kerja, skill & tools, latihan portofolio, dan tempat mencari lowongan.",
  s1: {
    heading: "1. Tiga peran remote entry-level",
    p: "Hampir semua lowongan remote entry-level masuk ke salah satu dari tiga peran ini:",
    items: [
      "<strong>Remote Operations (Ops Coordinator / Ops Assistant):</strong> menjaga proses harian bisnis tetap jalan — memproses order/tiket masuk (order klien, onboarding customer, refund), update data di sistem internal (CRM, spreadsheet, tools internal), follow-up vendor/klien/tim yang tertahan, bikin & memperbarui SOP, cek kualitas proses, laporan rutin sederhana (berapa order masuk/selesai/tertunda), dan menangani masalah operasional (\"pengiriman telat\", \"invoice salah\").",
      "<strong>Remote Project Manager / Project Coordinator (Junior):</strong> memastikan proyek selesai sesuai scope, waktu, dan budget — memecah proyek jadi task kecil dengan deadline & PIC, mengelola board (Trello/Asana/Jira/ClickUp), mengadakan & mencatat meeting (kickoff, weekly sync, retrospective), menulis meeting notes + action items dan mengirimnya setelah meeting, menagih progres tim, mengidentifikasi risiko & blocker lalu mengeskalasi, jadi penghubung klien/stakeholder ↔ tim teknis/kreatif, dan membuat status report mingguan.",
      "<strong>Remote Trainee (Management Trainee / Operations Trainee):</strong> belajar sambil kerja, biasanya dirotasi ke beberapa divisi — membantu tugas ops dan PM dengan porsi lebih kecil dan ada mentor, shadowing meeting, mengerjakan mini-project/riset (mis. \"kenapa proses X lambat\"), ikut sesi training + modul + presentasi, tugas administratif (rekap, dokumentasi, input data), dan evaluasi berkala dari mentor."
    ],
    box: "<strong>Cara memilih:</strong> suka sistem & data → Ops. Suka koordinasi orang & timeline → PM/PC. Masih eksplorasi dan butuh didampingi → Trainee. Ketiganya pintu masuk ke karier remote dengan skill yang saling nyambung."
  },
  s2: {
    heading: "2. Simulasi sehari kerja",
    ukTitle: "Junior Project Coordinator di perusahaan digital agency (zona waktu WIB)",
    tableHead: ["Jam", "Apa yang terjadi", "Pelajaran"],
    ukRows: [
      ["08.30", "Buka Slack/WhatsApp kantor dan email. Ada pesan klien: \"Revisi desain landing page belum kami terima, kapan ya?\" — dicatat sebagai prioritas.", "Mulai hari dengan triase inbox; catat yang menunggu jawaban."],
      ["09.00", "Cek board (Trello/Asana): dari 12 task minggu ini, 2 deadline hari ini dan 1 telat. Chat ke desainer: \"Hai Rani, revisi landing page klien A target hari ini ya. Ada kendala?\" Rani ternyata menunggu logo final dari klien — itu blocker.", "Cek status task dulu, baru bertanya; temukan blocker sedini mungkin."],
      ["09.30", "Email klien: minta logo final dengan batas waktu jam 12.00 supaya desain selesai hari ini. Kabari manajer soal risiko mundur kalau klien tidak membalas.", "Atasi blocker di sumbernya, dan eskalasi risiko lebih awal."],
      ["10.00", "Daily standup 15 menit via Zoom/Meet: kemarin ngapain, hari ini ngapain, ada hambatan apa. Kamu mencatat dan menulis ringkasan di channel Slack.", "Standup pendek; catatan ringkas dibagikan ke channel."],
      ["11.00", "Manajer minta timeline proyek baru untuk klien B. Kamu bikin di spreadsheet/Notion: fase, task, durasi, PIC, milestone, lalu kirim untuk review.", "Dokumen timeline = alat utama koordinator."],
      ["12.00", "Istirahat.", "Batas kerja tetap jaga."],
      ["13.00", "Follow-up klien: logo sudah masuk. Teruskan ke Rani dan update status task di board.", "Follow-up tepat waktu; board harus selalu akurat."],
      ["14.00", "Meeting mingguan dengan klien (30 menit), kamu jadi pencatat. Klien minta tambahan satu halaman website — kamu catat sebagai change request. Setelah meeting, tanya ke manajer: masuk scope atau perlu biaya tambahan?", "Catat permintaan baru sebagai change request; jangan janji langsung."],
      ["15.00", "Tulis meeting notes: keputusan, action items, siapa mengerjakan apa, dan kapan — kirim ke klien dan tim.", "Notes dikirim segera setelah meeting, bukan besok."],
      ["16.00", "Dokumentasi & admin: update risk log, rapikan folder Google Drive, catat jam kerja di timesheet.", "Admin itu bagian kerja, bukan sisa waktu."],
      ["17.00", "Wrap up: kirim laporan harian singkat ke manajer — \"Hari ini: 2 task selesai, 1 blocker (logo) teratasi, 1 change request masuk menunggu keputusan. Besok: kirim revisi ke klien dan mulai fase development.\"", "Tutup hari dengan update yang mudah dipindai."]
    ],
    ukRef: "Pola hari yang sama berulang: triase pagi → cek board → atasi blocker → standup → bikin/maintain dokumen → meeting & notes → admin → laporan harian.",
    usTitle: "Simulasi Ops Coordinator di perusahaan e-commerce",
    usP: "Pagi: cek dashboard order — ada 15 order tertahan karena stok kosong; hubungi tim gudang dan supplier untuk kepastian restock. Siang: pelanggan komplain barang salah kirim — buka tiket, koordinasi dengan kurir untuk retur, update status ke customer service. Sore: rekap order harian ke spreadsheet, tandai yang bermasalah, perbarui SOP penanganan retur karena kasus ini muncul berulang.",
    usTerms: "<strong>Pola ops:</strong> pantau dashboard → tangani tiket/problem → koordinasi lintas tim → rekap data → perbarui SOP kalau pola berulang.",
    meTitle: "Bentuk hari Remote Trainee",
    meP: "Rotasi antar divisi: pagi bantu tugas ops/PM porsi kecil, siang shadowing meeting senior, sore mengerjakan mini-project/riset (mis. \"cari tahu kenapa proses X lambat\") atau tugas administratif (rekap, dokumentasi, input data), plus sesi training dan evaluasi berkala dari mentor."
  },
  s3: {
    heading: "3. Skill dan tools yang dipakai",
    p: "Semua peran di atas berputar di sekitar tools dan kebiasaan yang sama:",
    items: [
      "<strong>Komunikasi:</strong> Slack, WhatsApp, Zoom, Google Meet, email.",
      "<strong>Manajemen tugas:</strong> Trello, Asana, Jira, ClickUp, Notion.",
      "<strong>Dokumen:</strong> Google Docs/Sheets, Excel (cukup dasar sampai menengah).",
      "<strong>Soft skill:</strong> komunikasi tertulis yang jelas, follow-up yang konsisten, manajemen waktu, proaktif."
    ],
    cde: "<strong>Yang paling bernilai:</strong> kemampuan menulis update yang jelas dan singkat. Itu nilai plus besar di kerja remote — sebagian besar kerjamu terlihat lewat tulisan, bukan kehadiran."
  },
  s4: {
    heading: "4. Tips kalau mau melamar",
    items: [
      "<strong>Komunikasi tertulis dulu:</strong> kalau kamu bisa menulis update yang jelas dan singkat, itu nilai plus besar — justru itu yang dinilai harian.",
      "<strong>Proaktif lebih penting daripada pintar:</strong> kamu yang harus menagih, bukan ditagih.",
      "<strong>Bangun bukti:</strong> belajar dasar Trello/Asana dan Notion, lalu buat satu proyek simulasi (misalnya merencanakan event) untuk portofolio.",
      "<strong>Sertifikasi opsional:</strong> Google Project Management Certificate bisa membantu, tapi bukan keharusan. Latihan nyata lebih berbicara."
    ],
    must: "<strong>Portofolio minimal yang cukup:</strong> tiga dokumen — satu meeting notes rapi, satu timeline proyek + risk log, dan satu contoh laporan harian. Taruh di satu folder Google Drive atau halaman Notion publik; itu sudah bisa jadi portofolio sederhana yang kamu lampirkan saat melamar."
  },
  s5: {
    heading: "5. Tiga latihan portofolio",
    uk: { title: "Latihan 1: Meeting Notes (30 menit)", items: [
      "Skenario: kamu coordinator di agency. Cuplikan percakapan meeting mingguan dengan klien: Klien — \"Kami mau launching tanggal 30. Bisa?\". Desainer — \"Bisa kalau materi dari kalian masuk paling lambat tanggal 20.\". Klien — \"Oke, tapi kami mau tambah halaman 'Tentang Kami'.\". Manajer — \"Itu di luar scope awal, nanti kami kirim estimasi biaya tambahan.\". Klien — \"Logo final menyusul ya, mungkin besok.\"",
      "Format yang harus ditulis — <strong>Meeting Notes: Weekly Sync Klien A</strong>; Tanggal &amp; Peserta; <strong>Keputusan:</strong> target launching tanggal 30; <strong>Action Items:</strong> Klien kirim materi konten (deadline 20), Klien kirim logo final (besok), Manajer kirim estimasi biaya halaman tambahan (tulis tanggalnya); <strong>Risiko/Catatan:</strong> materi telat dari tanggal 20 → launching berisiko mundur; halaman \"Tentang Kami\" = change request, menunggu persetujuan biaya.",
      "Poin pentingnya: setiap action item harus punya nama dan tanggal. Notes tanpa itu tidak berguna."
    ]},
    us: { title: "Latihan 2: Timeline Proyek (1–2 jam)", items: [
      "Skenario: kamu diminta merencanakan event webinar 100 peserta dalam 4 minggu.",
      "Buat di Google Sheets atau Notion dengan kolom: Fase | Task | PIC | Mulai | Deadline | Status | Catatan.",
      "Fase: Perencanaan, Persiapan (pembicara, materi, platform), Promosi, Eksekusi, Evaluasi.",
      "Tambahkan satu tab Risk Log dengan minimal 3 risiko — misalnya pembicara batal, peserta sedikit, platform error. Untuk tiap risiko, tulis dampak dan rencana cadangannya."
    ]},
    me: { title: "Latihan 3: Laporan Harian (10 menit)", items: [
      "Latih menulis update singkat untuk atasan dengan format yang mudah dipindai: <strong>Update [tanggal]</strong> — Selesai: ... / Sedang jalan: ... / Blocker: ... (butuh bantuan: ...) / Besok: ...",
      "Isi dengan proyek simulasi kamu sendiri — jangan kosongan, jangan bertele-tele."
    ]}
  },
  s6: {
    heading: "6. Tempat cari lowongan remote entry-level",
    uk: { title: "Lokal (Indonesia)", items: [
      "<strong>LinkedIn:</strong> filter \"Remote\" + kata kunci operations coordinator, project coordinator, management trainee, virtual assistant.",
      "<strong>Glints &amp; Kalibrr:</strong> banyak posisi trainee dan internship.",
      "<strong>JobStreet:</strong> filter lokasi \"Remote\"."
    ]},
    us: { title: "Global (bayaran biasanya USD)", items: [
      "We Work Remotely, Remote OK, Himalayas, Working Nomads.",
      "Remote.co dan Wellfound — cocok untuk startup."
    ]},
    me: { title: "Kata kunci pencarian yang berguna", items: [
      "operations assistant, project coordinator, program coordinator, customer success associate, business operations intern, executive assistant."
    ]}
  },
  s7: {
    heading: "7. Waspada penipuan lowongan",
    items: [
      "Hindari lowongan yang minta biaya pendaftaran atau pelatihan berbayar di awal.",
      "Hindari proses yang langsung pindah ke Telegram/WhatsApp tanpa wawancara resmi.",
      "Perusahaan sah punya alamat email kantor dan proses wawancara yang jelas; cek nama perusahaan sebelum menyerahkan data pribadi.",
      "Jangan pernah kirim data sensitif (KTP, nomor rekening lengkap, password) sebelum ada perjanjian kerja yang sah."
    ],
    must: "<strong>Aturan praktis:</strong> kalau kamu yang diminta bayar, itu bukan kerja. Kalau prosesnya buru-buru dan tidak jelas, itu tanda bahaya."
  },
  s8: {
    heading: "8. SOP kerja remote harian (yang membedakan profesional)",
    wfTitle: "Rutinitas harian",
    wf: ["Triase inbox: Slack, WhatsApp kantor, email — catat yang prioritas.","Cek board: task hari ini, yang telat, yang tertahan.","Follow-up blocker ke sumbernya (vendor/klien/tim) — jangan tunggu ditagih.","Update dokumen: meeting notes, timeline, risk log.","Kirim update tertulis: laporan harian format Selesai/Sedang jalan/Blocker/Besok.","Tutup hari: timesheet, folder rapi, catatan besok."],
    qaTitle: "Checklist sebelum kirim dokumen",
    qa: ["[ ] Tiap action item punya nama (PIC) dan tanggal","[ ] Risiko punya dampak + rencana cadangan","[ ] Angka di dokumen cocok dengan sumber data (spreadsheet/board)","[ ] Change request ditandai, tidak dijanjikan langsung","[ ] Ringkas dan mudah dipindai (30 detik pindai)","[ ] Naming file sesuai konvensi kantor"],
    comTitle: "Komunikasi",
    com: ["Tulis jelas & singkat; tanyakan ambiguitas sebelum mengerjakan jauh.","Kelola time zone: catat zona waktu klien/tim dan sepakati jam overlap.","Beri update proaktif; jangan diam saat terhalang — angkat blocker + minta bantuan.","Catat meeting: keputusan, action items, siapa-kapan, kirim segera setelah meeting."],
    bizTitle: "Bisnis dan legal",
    biz: ["Pahami isi perjanjian kerja: scope, jam kerja, klausul pembayaran (Net berapa?), klausul perubahan scope.","Jam kerja & ketersediaan harus jelas — waspadai klausul on-call 24/7.","Pembayaran: transfer bank lokal/peduli mata uang; pahami kewajiban pajak sesuai status kerja.","Simpan dokumentasi kerja (notes, timeline, laporan) — itu bukti kinerja saat evaluasi dan saat melamar ke tempat berikutnya."]
  },
  s9: { heading: "9. Daftar belajar (urut prioritas)", online: "<strong>Gratis / online:</strong> dokumentasi Trello, Asana, dan Notion (tutorial resmi + template gratis); Google Sheets dasar–menengah; template meeting notes & timeline publik; Google Project Management Certificate (Coursera, berbayar tapi sering ada beasiswa/audit); buku panduan ops & PM di blog We Work Remotely/Remote OK.", books: "<strong>Latihan wajib sebelum melamar:</strong> satu proyek simulasi end-to-end (mis. merencanakan webinar/event 100 peserta): timeline + risk log + meeting notes + laporan harian. Itu sudah bisa jadi portofolio yang kamu lampirkan saat melamar." },
  s10: { heading: "10. Roadmap 90 hari", m1: "<strong>Bulan 1 — Fondasi:</strong> kuasai dasar Trello/Asana dan Notion; Google Sheets (sort, filter, pivot sederhana); latih menulis update harian tiap hari selama 2 minggu; baca 10+ posting lowongan untuk hafal kata kunci peran.", m2: "<strong>Bulan 2 — Proyek simulasi:</strong> jalankan satu proyek simulasi end-to-end (webinar/event 100 peserta, 4 minggu): timeline + risk log + meeting notes + laporan harian; minta teman berperan sebagai \"klien\" yang suka berubah kebutuhan; latih balasan disruption (accept/reject/counter dalam satu kalimat).", m3: "<strong>Bulan 3 — Portofolio dan lamaran:</strong> kumpulkan tiga dokumen latihan di folder Drive/Notion publik; tulis ringkasan profil LinkedIn yang menyebut skill komunikasi tertulis dan tools; mulai melamar di LinkedIn/Glints/Kalibrr/JobStreet (lokal) dan We Work Remotely/Remote OK/Himalayas (global); siapkan jawaban wawancara: \"ceritakan cara kamu menangani blocker\" dan \"tunjukkan meeting notes kamu\"." }
};
