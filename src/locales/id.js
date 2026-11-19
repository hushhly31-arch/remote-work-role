export const common = {
  appName: "Remote Work Training",
  projectCode: "AW-2026-047",
  studioName: "Axel & Wright Architects",
  timeRemaining: "Time Remaining",
  next: "Next",
  submit: "Submit",
  restart: "Restart Simulation",
  minutes: "minutes",
  loading: "Loading...",
  error: "Error",
  save: "Save",
  cancel: "Cancel",
  confirm: "Confirm",
  close: "Close",
  back: "Back",
  continue: "Continue",
  done: "Done",
  locked: "Locked",
  active: "Active",
  dashboard: "Dashboard",
  settings: "Settings",
  language: "Language",
  indonesian: "Indonesian",
  english: "English"
};

export const navigation = {
  intro: "Introduction",
  contract: "Contract",
  brief: "Brief",
  materials: "Materials",
  deliverables: "Deliverables",
  disruption: "Disruption",
  submit: "Submit",
  results: "Results",
  credentials: "Credential"
};

export const intro = {
  title: "Introduction",
  subtitle: "AW-2026-047 — Co-Living Unit Fit-Out, Diponegoro Site",
  pembuka: {
    title: "Pembuka",
    content: "Studio di Melbourne menawarimu satu pekerjaan: Co-Living Unit Fit-Out, Diponegoro Site, kode AW-2026-047. Kontraknya sudah dikirim. Kamu punya 60 menit sejak menekan Start. Ini simulasi, tidak ada klien sungguhan, tapi diperlakukan seperti sungguhan."
  },
  situasi: {
    title: "Situasi",
    content: "Axel & Wright Architects, Melbourne — tim 8 arsitek, 3 interior designer. Fokus residential, co-living, small commercial. Komunikasi lewat Slack, Google Drive, email. Zona waktu Melbourne November memakai waktu musim panas (AEDT, UTC+11), selisih 4 jam dengan Pamekasan (WIB)."
  },
  peran: {
    title: "Peran Kamu",
    content: "Remote Architectural Designer, project-based, satu pekerjaan. Diharapkan memproduksi gambar kerja unit co-living (plan, RCP, elevasi, render) dari as-built dan sketsa yang disediakan. Bekerja async, komunikasi tertulis bahasa Inggris, manajemen waktu mandiri. Output dikirim lewat platform, review oleh Senior Architect."
  },
  aturan: {
    title: "Aturan Simulasi",
    items: [
      "Timer 60 menit mulai saat tombol Start ditekan, bukan saat halaman dibuka.",
      "Timer tidak bisa dijeda.",
      "Boleh submit kapan saja sebelum waktu habis. Submit lebih cepat hanya dihitung plus kalau kualitasnya lolos.",
      "Kalau waktu habis sebelum submit, kontrak yang menentukan konsekuensinya (void, no payment).",
      "Setelah submit, tidak bisa diubah.",
      "Sesi tidak bisa diulang dengan skenario yang sama. [Konfirmasi: boleh diulang? kredensial percobaan pertama tetap berlaku?]",
      "Tools yang boleh dipakai: SketchUp, D5 Render, Lumion, AutoCAD atau software gambar lain yang dikuasai, Word, Excel, Google Sheets. [Konfirmasi: boleh pakai AI, referensi internet, template pribadi?]",
      "Kontrak dibaca dan diputuskan sendiri. Platform tidak akan memberi tahu mana yang benar."
    ]
  },
  tahapan: {
    title: "6 Tahapan & Perkiraan Waktu",
    totalNote: "Total: ~90 menit — tapi batas keras 60 menit. Rencanakan sekali kerja.",
    stages: [
      { step: 1, name: "Contract", desc: "Baca kontrak penuh, temukan 2 klausul bermasalah, pilih Accept atau Accept with notes", time: "8 menit" },
      { step: 2, name: "Brief", desc: "Baca pesan PM, paham program ruang, budget, yang sudah/blm diputuskan", time: "5 menit" },
      { step: 3, name: "Materials", desc: "Cek sketsa, foto tapak, as-built — temukan 2 kesalahan dimensi", time: "5 menit" },
      { step: 4, name: "Deliverables", desc: "Kerja inti: gambar plan+RCP (25'), 2 elevasi (15'), render (10')", time: "50 menit" },
      { step: 5, name: "Disruption", desc: "Satu pesan masuk ~menit ke-25 dari klien/PM, balas dalam 5 menit, lanjut kerja", time: "5 menit" },
      { step: 6, name: "Submit", desc: "Upload file, email PM ≤120 kata, asumsi, error as-built, QA checklist", time: "7 menit" }
    ]
  },
  dinilai: {
    title: "Apa yang Dinilai (6 Kriteria)",
    criteria: [
      { key: "contract", label: "Baca Kontrak", desc: "Menemukan klausul bermasalah dan menulis catatan counter yang spesifik." },
      { key: "errors", label: "Ketelitian Cek Bahan", desc: "Mendeteksi kedua kesalahan dimensi as-built dengan benar dan dampaknya." },
      { key: "drawings", label: "Akurasi Gambar", desc: "Dimensi ke face of finish, grid kolom benar, detail lengkap, layer rapi." },
      { key: "visual", label: "Kualitas Visual", desc: "Render 1920×1080, material & pencahayaan sesuai keputusan, kamera jelas." },
      { key: "comms", label: "Komunikasi Tertulis (EN)", desc: "Email PM ≤120 kata, balasan gangguan jelas, tone profesional, asumsi lengkap." },
      { key: "time", label: "Manajemen Waktu", desc: "Submit ≤ 60 menit, tidak panik saat disruption, alokasi per tahap masuk akal." }
    ]
  },
  hasil: {
    title: "Hasil Akhir",
    content: "Skor per 6 kriteria, feedback Senior Architect per item, keputusan \"Offered next project\" atau \"Not moving forward\", kredensial digital kalau lolos."
  },
  kredensial: {
    title: "Syarat Mendapat Kredensial",
    content: "Skor minimal 70% total DAN tidak ada kriteria di bawah 50%. Kalau tidak cukup, tidak ada kredensial, tapi laporan skor dan feedback tetap diterima.",
    levels: [
      { name: "Completed", desc: "≥70 total, tidak ada kriteria <50. Dasar solid" },
      { name: "Proficient", desc: "≥85 total, kontrak & error ≥80, visual ≥80. Siap proyek nyata" },
      { name: "Distinction", desc: "≥95 total, tidak ada kriteria <80. Level junior studio" }
    ]
  },
  karakter: {
    title: "Karakter yang Akan Kamu Temui",
    characters: [
      { initials: "SC", role: "Project Manager", style: "Ringkas, deadline mendadak, informasi kadang kurang.", sample: "Septi — client request forwarded. You have 5 minutes to reply to me (not client) with: accept / reject / counter. One sentence each option. Then keep working. Clock doesn't stop. — S." },
      { initials: "MW", role: "Senior Architect", style: "Detail, keras, tidak suka alasan.", sample: "Column grid fixed to 10800 — good catch on Error 1. But you didn't adjust bedroom/wet area dims to suit. Wardrobe internal elevation missing. Emergency light per NCC required in corridor. — M. Wright" },
      { initials: "CL", role: "Client", style: "Bertele-tele, bisa ganti arah.", sample: "Hi Septi, my wife and I think the bedroom needs a small desk nook. 600 deep by 1200 wide near the window. Also wet area feels tight — can we push the wall south 300? The corridor can take it, it's 1200 wide anyway. Also, budget — we need to trim 15% off the fit-out number. The numbers are getting away from us. Let me know if any of this is a problem. We trust your judgment but these are important to us. Thanks! — [Client Name]" }
    ]
  },
  persiapan: {
    title: "Persiapan Sebelum Start",
    items: [
      "Laptop dengan software (SketchUp/D5/AutoCAD) terbuka dan siap",
      "Koneksi internet stabil",
      "Ruang tenang, 60 menit penuh tanpa gangguan",
      "Folder kerja kosong sudah dibuat",
      "Notifikasi lain (WhatsApp, email, dll) dimatikan",
      "Air/minuman siap di samping"
    ]
  },
  start: {
    label: "Start — buka kontrak",
    note: "Timer 60 menit mulai begitu tombol ditekan."
  }
};

export const contract = {
  title: "Freelance Services Agreement — Project-Based",
  projectName: "Co-Living Unit Fit-Out — Diponegoro Site",
  projectCode: "AW-2026-047",
  role: "Remote Architectural Designer",
  parties: {
    studio: "Studio",
    address: "Level 12, 367 Collins Street, Melbourne VIC 3000, Australia",
    city: "Melbourne",
    timezone: "AEDT (UTC+11)",
    abn: "ABN 48 123 456 789",
    email: "contracts@axelandwright.com.au",
    seniorArchitect: "M. Wright",
    pm: "Project Manager"
  },
  freelancer: {
    name: "Nuha",
    role: "Remote Architectural Designer",
    rate: 45,
    currency: "AUD",
    rateNote: "Per hour, inclusive of superannuation equivalent. Tax obligations borne by freelancer."
  },
  scope: [
    "Produce working drawings for one co-living unit (bedroom + wet area) based on provided as-built and sketch.",
    "Deliver: dimensioned plan (1:50), reflected ceiling plan (1:50), two interior elevations (1:50), one perspective render (1920×1080).",
    "Incorporate PM mark-ups returned within 2 business days of each delivery.",
    "Revisions until client approval — no cap on rounds.",
    "File formats: .dwg (AutoCAD 2018), .pdf (press-ready), .jpg (render). Naming: AW-2026-047_[drawing-name]_[v#].",
    "All source files handed over on final payment."
  ],
  problematicClauses: [
    { id: 1, text: "Revisions until client approval", issue: "No cap on revision rounds. Could mean unlimited unpaid rework." },
    { id: 2, text: "Payment terms: Net 45 from invoice date", issue: "45-day payment cycle. Invoice submitted after final delivery means ~60+ days to first dollar." },
    { id: 3, text: "Portfolio rights limited to static images only, subject to studio written consent per project", issue: "Cannot show drawings, process, or 3D views without case-by-case permission. Weakens future marketing." }
  ],
  fee: {
    amount: 1800,
    currency: "AUD",
    breakdown: "Fixed fee for defined deliverables. Includes up to 3 revision rounds. Additional rounds at AUD 75/hr."
  },
  paymentTerms: "Net 45 from invoice date. Invoice issued upon final file handover. 50% deposit waived for this engagement. All tax, superannuation, and compliance obligations borne by freelancer. Payment via Wise (AUD to IDR). Freelancer covers receive fees.",
  deadline: {
    startTrigger: "Start button clicked on Introduction page",
    minutes: 60,
    timezone: "AEDT (UTC+11)",
    example: "If started at 09:00 AEDT, submit by 10:00 AEDT. Late submission = automatic withdrawal."
  },
  latePolicy: "Submission after deadline: contract void, no payment. Files not matching naming convention or format: rejected, clock keeps running. Corrupt/unopenable files: treated as non-submission.",
  jurisdiction: "Victoria, Australia. Disputes resolved under Victorian law.",
  deliverablesFormat: [
    ".dwg — AutoCAD 2018 compatible",
    ".pdf — Press-ready, fonts embedded",
    ".jpg — sRGB, 85% quality, 1920×1080",
    "Naming: AW-2026-047_[drawing-name]_v#",
    "All source files handed over on final payment"
  ],
  acceptedTitle: "Accepted — Clock Running",
  acceptedMessage: "Contract Accepted",
  acceptedNotes: "Accepted with notes. Notes saved.",
  acceptedNoNotes: "Accepted without notes.",
  startTimeLabel: "60-minute countdown started at",
  keyDeadlines: "Key Deadlines",
  submitDeadline: "Submit all deliverables by",
  disruptionExpected: "Disruption expected ~minute 25",
  lateSubmission: "Late submission = contract void, no payment",
  nextBrief: "Next: Project Brief",
  readBrief: "Read the brief from PM. Note the undecided items and budget.",
  openBrief: "Open Brief",
  yourNotes: "Your Notes",
  noNotes: "(no notes)"
};

export const brief = {
  title: "Project Brief",
  from: "From Project Manager",
  meta: {
    from: "Septi, Remote Architectural Designer",
    to: "Project Manager",
    subject: "AW-2026-047 — Brief: Co-Living Unit Fit-Out"
  },
  body: `Project Manager,

Contract attached. Read it. Clock starts when you hit Accept.

Project: one co-living unit, Diponegoro site (Semarang). Footprint 12 × 8.8 m, two storeys. You get the ground-floor unit at the northeast corner. Entry from east corridor.

Program:
- Bedroom: 3.6 × 3.2 m clear. Queen bed (1.6 × 2.0), bedside tables both sides, wardrobe 1.2 m wide full height.
- Wet area: 2.4 × 1.8 m clear. Shower, wall-hung WC, vanity 600 mm. Floor waste centered.
- No kitchenette. Communal pantry down the hall.

Budget for fit-out (joinery, tiling, sanitary, lighting): AUD 8,500 equivalent. Do not exceed.

References: Ganding Classic House bathroom palette (warm neutrals, terrazzo floor), Woman Gym 2025 joinery detailing (ply + HPL, shadow gap). Client chose: 600×600 mm matte porcelain floor, 300×600 mm wall tile to 2.1 m, ceiling white.

Decided:
- Floor finish, wall tile, ceiling height (2.7 m), door swing (bedroom into room, wet area out).
- Wardrobe internal layout: hanging left, shelves right, drawers bottom.
- Vanity: wall-hung, single bowl, mirror cabinet above.

Undecided / you resolve:
- Shower screen: frameless pivot vs. fixed panel + walk-in. Pick one, justify in 1 line.
- Lighting: recessed downlights only, or add LED strip under wardrobe / vanity. Max 4 circuits.
- Power outlet locations: AS/NZS 3000 compliance. You place.

As-built has two dimensional errors. Flag in submit.

Deliverables list follows. 60 minutes total. No extensions.

— Project Manager
Axel & Wright Architects
Melbourne | AEDT`,
  keyNumbers: [
    { label: "Site footprint", value: "12 × 8.8 m" },
    { label: "Unit (per as-built)", value: "10.6 × 7.0 m" },
    { label: "Bedroom", value: "3.6 × 3.2 m" },
    { label: "Wet area", value: "2.4 × 1.8 m" },
    { label: "Corridor", value: "1.2 m wide" },
    { label: "Ceiling height", value: "2.7 m" },
    { label: "Fit-out budget", value: "AUD 8,500" },
    { label: "Tile spec", value: "600×600 floor, 300×600 wall to 2.1 m" }
  ],
  undecided: [
    { icon: "🚿", title: "Shower screen", desc: "frameless pivot OR fixed panel + walk-in" },
    { icon: "💡", title: "Lighting", desc: "downlights only OR + LED strip under wardrobe/vanity (max 4 circuits)" },
    { icon: "🔌", title: "Power outlets", desc: "AS/NZS 3000 compliant placement" }
  ],
  undecidedNote: "Pick one each. Justify in 1 line in assumptions at submit.",
  nextMaterials: "Next: Input Materials"
};

export const materials = {
  title: "Input Materials",
  providedBy: "Provided by Studio",
  sketch: {
    title: "Sketsa Kasar (Konseptual)",
    description: "Tidak ada file gambar asli. Kerjakan berdasarkan dimensi di atas.",
    image: "/img/refs/unit-sketch.svg",
    imageAlt: "Sketsa konseptual tata letak kamar, area basah, dan koridor",
    caption: "Gambar referensi konseptual. Gunakan sebagai orientasi; verifikasi semua dimensi dengan catatan as-built.",
    notesTitle: "Catatan teks dari sketsa"
  },
  sitePhotos: {
    title: "Foto Lokasi (Gambar Referensi)",
    items: [
      { image: "/img/refs/plan-reference.svg", alt: "Referensi fasad timur dan ritme jendela", text: "Fasad timur: bata 3 lantai, ritme jendela teratur. Jendela unit sejajar grid." },
      { image: "/img/refs/unit-sketch.svg", alt: "Referensi koridor dan fire hose reel", text: "Tampak koridor: fire hose reel di 1.8 m dari sudut timur laut, menjorok 120 mm ke koridor." },
      { image: "/img/refs/elevation-reference.svg", alt: "Referensi pelat langit dan balok turun", text: "Pelat langit: beton ekspos, servis di bawah. Balok turun 300 dalam di garis grid 3 (3.6 m dari dinding utara)." }
    ],
    photos: [
      "Fasad timur: bata 3 lantai, ritme jendela teratur. Jendela unit sejajar grid.",
      "Tampak koridor: fire hose reel di 1.8 m dari sudut timur laut, menjorok 120 mm ke koridor.",
      "Pelat langit: beton ekspos, servis di bawah. Balok turun 300 dalam di garis grid 3 (3.6 m dari dinding utara)."
    ]
  },
  asBuilt: {
    title: "As-Built Survey — Diponegoro Co-Living Ground Floor NE Unit",
    scale: "1:50",
    paper: "A3",
    notes: "Surveyed 12/03/2024. All dims internal face of wall. Verify on site.",
    dimensions: {
      unitWidth: "10600",
      unitDepth: "7000",
      bedroomWidth: "3600",
      bedroomDepth: "3200",
      wetAreaWidth: "2400",
      wetAreaDepth: "1800",
      corridorWidth: "1200",
      northWallWindow: "1800 wide × 1200 high, sill 900",
      bedroomDoor: "820 clear, from corridor",
      wetAreaDoor: "720 clear, swing into bedroom",
      columnGrid: "Columns at 0, 3600, 7200, 10800 from north wall. 300×300.",
      downstandBeam: "Along grid line 3 (10800 from north), 300 deep, 400 wide."
    },
    errorsTitle: "⚠ Two Dimensional Errors Embedded",
    errorsDesc: "Find them. Flag both in Submit with location, given dims, correct dims, impact.",
    errors: [
      {
        id: 1,
        location: "Unit overall dimensions vs. column grid",
        given: "Unit width 10600, columns at 0/3600/7200/10800",
        issue: "Last column at 10800 exceeds unit width 10600 by 200 mm. Column sits outside unit boundary.",
        correct: "Unit width should be 10800 to align with column grid, or last column at 10600."
      },
      {
        id: 2,
        location: "Fire hose reel vs. bedroom door swing",
        given: "Corridor 1200 wide. Fire hose reel at 1800 from NE corner, projects 120 mm. Bedroom door 820 clear at corridor.",
        issue: "Hose reel encroaches 120 mm into 1200 corridor. Bedroom door at 820 clear needs ~900 mm swing. Effective corridor 1080 mm. Door swing obstructed.",
        correct: "Recess hose reel 150 mm into wall or relocate door. Fire engineer sign-off required."
      }
    ],
    answerKeyNote: "Answer key hidden until Results page."
  },
  standards: {
    title: "Referensi Standar Bangunan & SOP (US / UK / Global)",
    intro: "Gunakan standar yang diakui ini sebagai acuan dasar untuk gambar kerja, dimensi, aksesibilitas, keselamatan, dan koordinasi fit-out. Terapkan ketentuan proyek/yurisdiksi yang disebutkan di brief/kontrak.",
    groups: [
      {
        region: "US (IBC / ICC / NFPA / ADA)",
        items: [
          { code: "IBC (International Building Code)", desc: "Persyaratan minimum keselamatan bangunan, jalur evakuasi, hunian, proteksi kebakaran, dan ketentuan struktural (ICC)." },
          { code: "ADA Standards for Accessible Design (2010)", desc: "Rute aksesibel, ruang bebas, manuver pintu, jangkauan, dan persyaratan fasilitas sanitasi." },
          { code: "ICC A117.1", desc: "Bangunan dan fasilitas yang aksesibel — kriteria teknis yang sering dirujuk IBC/ADA." },
          { code: "IPC (International Plumbing Code)", desc: "Tata letak fixture, drainase, venting, dan ketentuan sanitasi untuk area basah." },
          { code: "NFPA 101 Life Safety Code", desc: "Sarana egress, lebar koridor, ayunan pintu/hambatan, dan perencanaan keselamatan jiwa/kebakaran." }
        ]
      },
      {
        region: "UK (Building Regulations / BS)",
        items: [
          { code: "Approved Document B", desc: "Keselamatan kebakaran — peringatan dan sarana evakuasi, penyebaran api internal, akses petugas pemadam." },
          { code: "Approved Document F", desc: "Ventilasi — udara segar dan pembuangan memadai untuk ruang huni dan area basah." },
          { code: "Approved Document G & H", desc: "Sanitasi/air panas dan drainase air kotor/limbah untuk kamar mandi dan plumbing." },
          { code: "Approved Document K & M", desc: "Proteksi dari jatuh/tabrakan/benturan serta akses dan penggunaan bangunan (desain inklusif)." },
          { code: "BS 8300-2:2018", desc: "Desain lingkungan binaan yang aksesibel dan inklusif — bangunan (kode praktik)." }
        ]
      },
      {
        region: "Global / ISO (Gambar & Aksesibilitas)",
        items: [
          { code: "ISO 128 (seri)", desc: "Dokumentasi teknis — prinsip umum penyajian gambar, tampak, garis, dan tata letak." },
          { code: "ISO 129-1", desc: "Prinsip dimensi dan toleransi — pencantuman ukuran pada gambar teknis." },
          { code: "ISO 21542:2021", desc: "Konstruksi bangunan — aksesibilitas dan kegunaan lingkungan binaan." }
        ]
      },
      {
        region: "Konteks Proyek (Australia / NCC / AS-NZS)",
        items: [
          { code: "NCC (National Construction Code)", desc: "Persyaratan kinerja kesehatan, kenyamanan, keselamatan (termasuk egress dan kebakaran) di Australia." },
          { code: "AS/NZS 3000 (Wiring Rules)", desc: "Keselamatan dan penempatan instalasi listrik — dirujuk di brief untuk titik stopkontak." },
          { code: "AS 1428.1", desc: "Desain akses dan mobilitas — persyaratan umum akses pada bangunan baru." }
        ]
      }
    ],
    note: "Hanya referensi untuk simulasi ini: ikuti brief proyek, kondisi as-built, dan instruksi PM/klien. Verifikasi kepatuhan otoritas/yurisdiksi setempat pada proyek nyata."
  },
  nextDeliverables: "Next: Deliverables List"
};

export const deliverables = {
  title: "Deliverables & Time Allocation",
  subtitle: "Max 4 Items",
  totalTimeNote: "Total suggested time: {total} minutes — You have 60 minutes total. Budget your time. Disruption at ~minute 25.",
  referenceLabel: "Gambar referensi (contoh panduan)",
  items: [
    {
      id: 1,
      name: "Dimensioned Plan + RCP",
      description: "Ground floor unit plan 1:50 with dimensions, annotations, door/window tags. Reflected ceiling plan 1:50 showing downlights, strip lighting, beam, diffuser locations.",
      format: ".dwg (AutoCAD 2018) + .pdf",
      scale: "1:50",
      fileName: "AW-2026-047_plan-rcp_v1",
      suggestedTime: 25,
      checklist: [
        "All internal dims to face of finish",
        "Door/window schedule tags",
        "RCP: 4 circuits max, beam shown dashed",
        "Fire hose reel noted on plan",
        "Column grid aligned (10800)",
        "Layer naming: A-PLAN, A-RCP, A-DIMS, A-TEXT"
      ]
    },
    {
      id: 2,
      name: "Two Interior Elevations",
      description: "Bedroom north elevation (window, wardrobe). Wet area west elevation (vanity, shower, WC, tile layout). 1:50.",
      format: ".dwg + .pdf",
      scale: "1:50",
      fileName: "AW-2026-047_elevations_v1",
      suggestedTime: 15,
      checklist: [
        "Finished floor level (FFL) datum",
        "Tile set-out: 600×600 floor, 300×600 wall to 2100",
        "Wardrobe internal elevations (hanging/shelves/drawers)",
        "Vanity + mirror cabinet",
        "Shower screen type noted",
        "Height dimensions: FFL to ceiling 2700"
      ]
    },
    {
      id: 3,
      name: "Perspective Render",
      description: "One interior view: bedroom looking toward wet area door. Show material palette, lighting, joinery. 1920×1080, 300 dpi.",
      format: ".jpg (sRGB, 85% quality)",
      scale: "N/A",
      fileName: "AW-2026-047_render_v1",
      suggestedTime: 10,
      checklist: [
        "Camera: eye level 1600, 24mm equiv.",
        "Materials: porcelain, terrazzo, ply/HPL, matte white",
        "Lighting: 4× downlight + LED strip under wardrobe",
        "No people, no entourage",
        "Watermark: none (studio adds)"
      ]
    },
    {
      id: 4,
      name: "Cover Email + QA Checklist",
      description: "Email to PM (max 120 words). Assumptions list. As-built errors found. QA checkboxes.",
      format: "Text entry in submit form",
      scale: "N/A",
      fileName: "N/A",
      suggestedTime: 10,
      checklist: [
        "Email ≤ 120 words, professional tone",
        "Assumptions: bullet list, max 6 items",
        "As-built errors: both identified with location + impact",
        "QA: all 12 checkboxes honest",
        "File naming convention followed",
        "No corrupt files"
      ]
    }
  ],
  timeBreakdown: {
    title: "Suggested Time Breakdown",
    breakdown: [
      { label: "Read Contract + Brief", time: 10, color: "text-primary" },
      { label: "Draw / Model", time: 25, color: "accent-gold" },
      { label: "Render / Visual", time: 15, color: "text-secondary" },
      { label: "Email + QA", time: 10, color: "accent-gold-light" }
    ]
  },
  nextDisruption: "Next: Mid-Session Disruption"
};

export const disruption = {
  title: "Mid-Session Disruption",
  elapsedLabel: "Elapsed",
  incomingTitle: "Incoming: Client Request (via PM)",
  incomingDesc: "Forwarded at minute ~25. Clock does NOT stop.",
  clientMessage: `Hi Sandy,

Just looked at the floor plan sketch Septi sent over (I assume that's what the attachment was). Couple of things — my wife and I were talking last night and we really think the bedroom needs a small desk nook. Even just 600 deep by 1200 wide tucked near the window. People work from home now, right? And while we're at it, the wet area feels a bit tight. Can we push the wall south 300? The corridor can take it, it's 1200 wide anyway. Also, budget — we need to trim 15% off the fit-out number. The numbers are getting away from us. Let me know if any of this is a problem. We trust your judgment but these are important to us.

Thanks,
[Client Name]
Sent from my iPhone`,
  pmNoteTitle: "PM Note",
  pmNote: `Septi — client request forwarded. You have 5 minutes to reply to me (not client) with: accept / reject / counter. One sentence each option. Then keep working. Clock doesn't stop.

— Project Manager.`,
  replyTitle: "Your Reply to PM (5 minutes)",
  replyDesc: "Choose one. Write one sentence in English. Then continue working.",
  options: {
    accept: "Accept Changes",
    reject: "Reject Changes",
    counter: "Counter / Conditional"
  },
  replySentTitle: "Your Reply Sent",
  replySaved: "Saved. Continue working. Clock still running.",
  nextSubmit: "Next: Submit"
};

export const submit = {
  title: "Submit",
  finalStep: "Final Step",
  filesUpload: {
    title: "Files Upload",
    acceptedTypes: "Required: .dwg (AutoCAD 2018), .pdf, .jpg per deliverable list. Naming: AW-2026-047_[name]_v#",
    dragDrop: "Drag & drop files here or click to browse",
    uploadedFiles: "Uploaded Files",
    remove: "Remove"
  },
  coverEmail: {
    title: "Cover Email to PM",
    placeholder: "Max 120 words. Professional tone. Reference assumptions and as-built errors.",
    wordCount: "Words: {count} / 120",
    overLimit: "OVER LIMIT",
    ok: "OK"
  },
  assumptions: {
    title: "Assumptions Taken",
    placeholder: "Max 6 bullets. Cover: shower screen, lighting, outlets, beam, hose reel, tile grout, hardware finish...",
    note: "Bullet list. One per line."
  },
  asBuiltErrors: {
    title: "As-Built Errors Found",
    placeholder: "Error 1: location, given dims, correct dims, impact. Error 2: location, given dims, correct dims, impact.",
    note: "Both errors required. Be specific."
  },
  qaChecklist: {
    title: "QA Checklist (All Required)",
    desc: "Check honestly. Results depend on this.",
    submitButton: "Submit Now",
    earlySubmit: "Early submit + quality pass = bonus. Late = void."
  },
  submitted: {
    title: "Submitted",
    timeUsed: "Time used: {time}",
    preparingResults: "Results are being prepared. Redirecting...",
    sending: "Mengunggah file dan mengirim email ke reviewer...",
    sent: "Email submission berhasil dikirim.",
    sendError: "Submission tersimpan lokal, tetapi email gagal dikirim otomatis."
  }
};

export const results = {
  title: "Results",
  postSession: "Post-Session Review",
  tabs: {
    senior: "Senior Architect Feedback",
    pm: "PM Comment",
    contract: "Contract Evaluation",
    rubric: "Score Rubric",
    email: "Email Examples",
    decision: "Final Decision",
    credential: "Credential"
  },
  seniorFeedback: [
    {
      item: "Dimensioned Plan + RCP",
      verdict: "Partially correct",
      markup: [
        "Column grid fixed to 10800 — good catch on Error 1. But you didn't adjust bedroom/wet area dims to suit. Bedroom still 3600 wide, now 200 short of grid. Should be 3600/3600/3600 or note non-alignment.",
        "Fire hose reel noted on plan — correct. But no recess detail. Door swing still clashes. Need 200 mm recess or door relocation.",
        "RCP: 4 circuits OK. Beam shown dashed — good. Missing: emergency light location per NCC. Required in corridor.",
        "Layer naming clean. Title block missing project code."
      ]
    },
    {
      item: "Interior Elevations",
      verdict: "Correct with omissions",
      markup: [
        "Bedroom north: wardrobe internal elevation missing. Only front face shown. Client asked for hanging/shelves/drawers — show internals.",
        "Wet area west: tile set-out correct. Shower screen noted as 'frameless pivot' — OK. But no floor waste location on elevation. Critical for fall.",
        "Vanity: mirror cabinet height not dimensioned. Standard 1800 above FFL? State it."
      ]
    },
    {
      item: "Perspective Render",
      verdict: "Acceptable",
      markup: [
        "Materials match palette. Lighting shows 4 downlights + strip — matches your decision. Good.",
        "Camera angle shows wet area door swing — clever. But render shows pivot screen closed. Open position would clarify clearance.",
        "Resolution and format correct. No watermark — correct."
      ]
    },
    {
      item: "Cover Email",
      verdict: "Concise but missing key flag",
      markup: [
        "Word count 98 — under limit. Tone professional. References assumptions and errors — good.",
        "Did not flag: Net 45 payment term will delay your cash flow. Client budget cut 15% not addressed. You accepted disruption counter but email doesn't confirm scope change.",
        "Assumptions list: 5 items. Missing: tile grout width (3 mm assumed), shower screen hardware finish (matte black assumed)."
      ]
    },
    {
      item: "As-Built Errors",
      verdict: "Both found",
      markup: [
        "Error 1 (column grid): correctly identified 200 mm mismatch. Proposed fix: extend unit to 10800. Acceptable.",
        "Error 2 (hose reel): correctly identified obstruction. Proposed fix: recess hose reel 150 mm into wall. Acceptable — but needs fire engineer sign-off. You didn't mention."
      ]
    }
  ],
  pmComment: `Email: clear, under word limit. Good you flagged assumptions. Disruption reply: you countered (desk nook = scope creep, budget cut = reject, wall move = conditional on fire hose). Correct call. But you didn't confirm revised deliverable list in email. Next time, one line: 'Deliverables unchanged per original brief.'`,
  contractEvaluation: {
    title: "Contract Clause Evaluation",
    desc: "Did Septi catch the 3 problematic clauses? What notes should have been written?",
    clauses: [
      { clause: "Revisions until client approval", caught: true, note: "Noted as 'unlimited revision risk' in assumptions. Should have proposed cap: 3 rounds included, then AUD 75/hr.", recommended: "Clause 1: 'Revision rounds capped at 3 included. Additional at AUD 75/hr.'" },
      { clause: "Net 45 payment", caught: true, note: "Flagged in assumptions. Should have asked for 50% deposit or Net 14.", recommended: "Clause 2: 'Request Net 14 or 50% deposit on acceptance.'" },
      { clause: "Portfolio rights restricted", caught: false, note: "Missed entirely. No note written. This clause means you cannot show this work to future clients without studio permission — weakens your pipeline.", recommended: "Clause 3: 'Portfolio rights: static images + drawings + process OK for self-promotion with project anonymization.'" }
    ]
  },
  rubric: [
    { criteria: "Contract Reading", weight: 20, indicators: ["Identified all 3 problematic clauses", "Wrote specific counter-notes for each", "Understood deadline trigger (Accept = clock start)", "Noted jurisdiction / tax obligation"], pass: "2+ clauses caught with actionable notes" },
    { criteria: "As-Built Error Detection", weight: 20, indicators: ["Found Error 1 (column grid 200 mm mismatch)", "Found Error 2 (fire hose reel blocks door swing)", "Stated correct dimensions", "Described impact on design"], pass: "Both errors found with correct dims + impact" },
    { criteria: "Drawing Accuracy", weight: 25, indicators: ["Plan dims to face of finish", "Column grid aligned (10800)", "Fire hose recess or door relocation shown", "RCP: 4 circuits, beam dashed, emergency light", "Elevations: FFL datum, tile set-out, internals", "Title block with project code"], pass: "5/6 indicators met" },
    { criteria: "Visual Quality", weight: 15, indicators: ["Render 1920×1080, correct materials", "Lighting matches decision (4 downlights + strip)", "Camera shows design intent", "No entourage, no watermark"], pass: "All 4 met" },
    { criteria: "Communication", weight: 10, indicators: ["Email ≤ 120 words, professional", "Disruption reply: clear accept/reject/counter to PM", "Assumptions list ≤ 6, covers key unknowns", "Tone: business English (EOD, ASAP, FYI)"], pass: "3/4 met" },
    { criteria: "Time Management", weight: 10, indicators: ["Submitted within 60 minutes", "Early submit + quality = bonus", "Time tracked per deliverable", "No panic at disruption (min 25)"], pass: "Submit ≤ 60 min, quality pass" }
  ],
  emailExamples: {
    pass: {
      title: "Pass Level Email",
      content: `Subject: AW-2026-047 — Deliverables v1

Sandy,

Attached: plan+RCP, 2 elevations, render per brief. 
Assumptions: (1) shower frameless pivot, (2) 4 downlights + LED strip under wardrobe, (3) outlets per AS/NZS 3000, (4) tile grout 3 mm, (5) shower hardware matte black, (6) hose reel recessed 150 mm.
As-built errors flagged: (1) column grid 200 mm short — extended to 10800, (2) hose reel obstructs bedroom door — recess proposed.
All files named AW-2026-047_[name]_v1. Ready for mark-up.

— Septi`,
      reason: "Complete, professional, all requirements met"
    },
    fail: {
      title: "Fail Level Email",
      content: `Subject: Done

Hi,

Files attached. I did the drawings and render. The as-built had some issues but I fixed them. Let me know if you need changes.

Thanks,
Nuha`,
      reason: "No project code, no assumptions, no error log, no file naming, casual tone, under-delivered."
    }
  },
  decision: {
    offered: "Offered Next Project",
    notOffered: "Not Moving Forward",
    scoreLabel: "Score: {score}/100 | Threshold: 70",
    logic: [
      "Total ≥ 70 AND all pass thresholds met → Offered",
      "Total < 70 OR any critical fail (0 clauses caught, 0 errors found, late) → Not Moving Forward"
    ],
    offeredMessage: "Senior Architect: \"Clean enough to iterate. Fix the wardrobe internals and emergency light. Next brief comes Monday.\"",
    notOfferedMessage: "Senior Architect: \"Missed the portfolio clause. That's a career limiter. Contract reading is not optional.\""
  },
  credential: {
    title: "Remote Architectural Designer — Simulated Project Practice",
    description: "Bukti latihan simulasi yang dinilai berdasarkan rubrik, bukan sertifikasi profesi resmi dan bukan pengalaman kerja di studio sungguhan.",
    projectCode: "AW-2026-047",
    earned: "Credential Earned",
    notEarned: "Credential Not Earned",
    notEarnedDesc: "Minimum 70% total score with no criterion below 50% required. Your score: {score}%",
    notEarnedNote: "You still receive full feedback and rubric scores. Retake the simulation to earn a credential.",
    levels: [
      { key: "completed", name: "Completed", desc: "Semua kriteria ≥ 50, total ≥ 70. Dasar solid." },
      { key: "proficient", name: "Proficient", desc: "Kontrak & error detection ≥ 80, visual ≥ 80. Siap proyek nyata." },
      { key: "distinction", name: "Distinction", desc: "Total ≥ 95, tidak ada kriteria < 80. Level junior studio." }
    ],
    skillsProven: [
      "contract review",
      "as-built verification",
      "1:50 working drawings",
      "interior perspective rendering",
      "professional email in English",
      "time management"
    ],
    previewData: {
      recipientName: "Alexandra Chen",
      level: "Proficient",
      issuedDate: "2026-11-17",
      verificationId: "RWT-2026-047-PRF-8K9L",
      scores: { contract: 85, errors: 90, drawings: 88, visual: 85, comms: 92, time: 100 }
    },
    privacyOptions: [
      { key: "minimal", label: "Level & Skills only", desc: "Hanya level dan daftar skill yang terlihat publik" },
      { key: "full", label: "Level, Skills & Scores", desc: "Level, skill, dan skor per kriteria terlihat publik" }
    ],
    linkedInFields: {
      name: "Remote Architectural Designer — Simulated Project Practice",
      issuer: "Remote Work Training Platform",
      issueDate: "2026-11",
      credentialId: "RWT-2026-047-PRF-8K9L",
      credentialUrl: "https://r2studio.web.id/verify/RWT-2026-047-PRF-8K9L"
    },
    actions: {
      downloadPdf: "Download PDF",
      addToLinkedIn: "Add to LinkedIn",
      embedBadge: "Embed Badge",
      verify: "Verify"
    },
    verificationLink: "Public verification: {url}"
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
  menu: "SOP Remote Work",
  badge: "Panduan",
  title: "SOP Kerja Remote Arsitektur (UK / US / Global)",
  eyebrow: "Panduan Klien & Freelancer",
  intro: "Panduan standar kerja remote: rantai kerja, tahapan proyek, BIM, standar gambar, kode/regulasi, skill teknis, SOP harian, dan roadmap agar klien dan freelancer selaras.",
  s1: {
    heading: "1. Posisimu dalam rantai kerja",
    p: "Hampir semua klien luar negeri akan memperlakukanmu sebagai subkontraktor produksi:",
    items: [
      "<strong>Tanggung jawab hukum dan stempel/lisensi</strong> tetap di arsitek atau engineer klien.",
      "<strong>Tugasmu:</strong> memproduksi model dan gambar yang akurat, konsisten, sesuai standar kantor klien, dan tepat waktu.",
      "<strong>Nilai jualmu:</strong> kecepatan, ketelitian, pemahaman standar, dan komunikasi yang rapi."
    ],
    box: "<strong>SOP yang perlu dikuasai (3 lapis):</strong> (a) tahapan proyek, (b) standar dokumentasi/BIM, (c) kode bangunan dan budaya setiap region."
  },
  s2: {
    heading: "2. Tahapan proyek (project stages)",
    ukTitle: "UK: RIBA Plan of Work 2020",
    tableHead: ["Stage", "Nama", "Inti"],
    ukRows: [["0","Strategic Definition","kebutuhan klien, business case"],["1","Preparation & Briefing","brief, studi kelayakan, survei"],["2","Concept Design","konsep, massing, test fit"],["3","Spatial Coordination","koordinasi arsitek\u2013struktur\u2013MEP, planning application"],["4","Technical Design","gambar teknis, spesifikasi, Building Regulations"],["5","Manufacturing & Construction","shop drawings, RFI, site"],["6","Handover","as-built, O&M manual"],["7","Use","operasional"]],
    ukRef: "Rujukan: RIBA Plan of Work 2020 Overview (situs RIBA).",
    usTitle: "US: fase AIA",
    usP: "Pre-Design \u2192 Schematic Design (SD) \u2192 Design Development (DD) \u2192 Construction Documents (CD) \u2192 Bidding/Negotiation \u2192 Construction Administration (CA).",
    usTerms: "<strong>Istilah wajib:</strong> RFI, submittal, ASI (Architect\u2019s Supplemental Instruction), bulletin, addendum, punch list, change order.",
    meTitle: "Timur Tengah (UAE/KSA/Qatar)",
    meP: "Umumnya gabungan gaya UK dan US: Concept \u2192 Schematic \u2192 Detailed Design \u2192 Authority Approval \u2192 Tender \u2192 IFC (Issued for Construction) \u2192 Shop Drawings \u2192 As-Built. Persetujuan otoritas (municipality, civil defense, utilitas) sangat menentukan jadwal."
  },
  s3: {
    heading: "3. BIM dan manajemen informasi (wajib untuk remote)",
    p: "Area paling bernilai karena klien remote sangat bergantung pada disiplin file.",
    items: [
      "<strong>ISO 19650 (Part 1 & 2):</strong> EIR (Employer\u2019s Information Requirements), BEP (BIM Execution Plan), MIDP/TIDP, CDE (Common Data Environment), status WIP / Shared / Published / Archive.",
      "<strong>UK BIM Framework:</strong> panduan dan template (ukbimframework.org).",
      "<strong>Naming convention ISO 19650:</strong> Project-Originator-Volume-Level-Type-Role-Number (dipakai luas di UK & Timur Tengah).",
      "<strong>Konsep:</strong> LOD/LOIN (Level of Information Need), IFC, COBie, BCF (issue tracking).",
      "<strong>US:</strong> National BIM Standard (NBIMS-US), AIA G202/E203 (BIM protocol & LOD spec).",
      "<strong>Revit:</strong> shared coordinates, worksets, linked models, design options, phasing, family management, model audit/purge."
    ],
    cde: "<strong>Platform CDE:</strong> Autodesk Construction Cloud (BIM 360), Trimble Connect, Aconex, Revizto, Procore (US), SharePoint."
  },
  s4: {
    heading: "4. Standar gambar (CAD/drafting standards)",
    items: [
      "<strong>US:</strong> National CAD Standard (NCS), AIA CAD Layer Guidelines; penomoran sheet (A-101, A-201), designator disiplin; satuan feet-inch.",
      "<strong>UK:</strong> BS 8541 series, BS EN ISO 7519, UK NBS Chorus/BIM Toolkit; satuan metrik (mm).",
      "<strong>Timur Tengah:</strong> biasanya ikut standar kantor konsultan (campuran BS/ISO); metrik; sering bilingual untuk tag tertentu."
    ],
    must: "<strong>Wajib bisa:</strong> sheet/title block, revision cloud + revision schedule, drawing register/issue sheet/transmittal, skala/line weights/hatching/dimensioning, door/window/finish schedules, section/detail callouts, legend simbol, north point, grid & level."
  },
  s5: {
    heading: "5. Kode, regulasi, dan standar per region",
    uk: { title: "\ud83c\uddec\ud83c\udde7 UK", items: [
      "Building Regulations 2010 & Approved Documents (gov.uk): A (struktur), B (fire), C, E (suara), F (ventilasi), L (energi), M (akses), O (overheating), P, Q, R, S.",
      "Building Safety Act 2022 (gateway, higher-risk buildings, \u201cgolden thread\u201d).",
      "Planning: NPPF, Local Plan, Design & Access Statement. CDM Regulations 2015 (H&S, Principal Designer).",
      "BS 9999/9991 (fire), BS 8300 (inclusive design), Eurocodes + UK NA. Spesifikasi: NBS. Kontrak: JCT, NEC4, RIBA. Sustainability: BREEAM, Part L, SAP/SBEM."
    ]},
    us: { title: "\ud83c\uddfa\ud83c\uddf8 US", items: [
      "IBC/IRC + amandemen negara/kota (CBC, NYC BC, Florida FBC, dll.); akses baca di codes.iccsafe.org.",
      "ADA 2010 Standards, ICC A117.1 (aksesibilitas). NFPA 101/13/72 (fire/life safety).",
      "ASHRAE 90.1/IECC (energi), ASCE 7 (beban), ACI/AISC (struktur). CSI MasterFormat 2018 & UniFormat. Kontrak: AIA A201, B101. Sustainability: LEED, WELL, Energy Star.",
      "Pahami occupancy classification, construction type, allowable area/height, egress (inti IBC)."
    ]},
    me: { title: "\ud83c\udde6\ud83c\uddea\ud83c\uddf8\ud83c\udde6\ud83c\uddf6\ud83c\udde6 Timur Tengah", items: [
      "<strong>UAE:</strong> Dubai Building Code, DM/Trakhees/DDA, ADIBC & DMT/ADM, UAE Fire and Life Safety Code (Civil Defence), Estidama (Abu Dhabi), Al Sa\u2019fat (Dubai).",
      "<strong>Saudi Arabia:</strong> Saudi Building Code (SBC), Mostadam, Balady/Monshaat.",
      "<strong>Qatar:</strong> QCS, GSAS, Civil Defence.",
      "<strong>Faktor regional:</strong> iklim panas (shading, glazing, cooling), privasi (villa, mashrabiya), majlis, ruang sholat/orientasi qibla, zonasi terpisah (proyek tertentu), fire code ketat & peran Civil Defence; proyek besar sering punya design guidelines khusus."
    ]}
  },
  s6: { heading: "6. Fundamental desain teknis yang harus dikuasai", items: [
    "Space planning & ergonomi (Neufert, Metric Handbook).",
    "Egress & fire: travel distance, exit width, compartmentation, fire rating, stair/lobby.",
    "Aksesibilitas: ramp, lift, toilet, door clearance.",
    "Building envelope: wall/roof build-up, U-value, waterproofing, thermal bridge, curtain wall.",
    "Detailing: sill, threshold, parapet, expansion/movement joint.",
    "Koordinasi struktur & MEP: grid, floor-to-floor, ceiling void, riser, clash detection.",
    "Vertical transport, parkir, fasad. Spesifikasi/material (finish schedule, product data).",
    "Sustainability: passive design, daylight, embodied carbon."
  ]},
  s7: { heading: "7. Software dan skill teknis", items: [
    "<strong>Wajib:</strong> Revit, AutoCAD.",
    "<strong>Sangat berguna:</strong> Navisworks (clash), Bluebeam Revu (markup, dominan di US), Dynamo, Rhino/Grasshopper.",
    "<strong>Visualisasi:</strong> Enscape, Twinmotion, D5, V-Ray.",
    "<strong>Kolaborasi:</strong> Teams/Slack, ACC, Revizto, Miro.",
    "<strong>Sertifikasi:</strong> Autodesk Certified Professional (Revit), buildingSMART Professional (ISO 19650/IFC), kursus BIM Level 2 / ISO 19650 (BRE, BSI, Autodesk)."
  ]},
  s8: {
    heading: "8. SOP kerja remote (yang membedakan profesional)",
    wfTitle: "Workflow harian",
    wf: ["Terima tugas & pahami scope: apa, level detail, deadline, format.","Baca BEP/standar kantor klien sebelum menyentuh model.","Kerjakan di model/central file sesuai aturan (workset, naming, versioning).","Self-check sebelum kirim (lihat checklist).","Kirim dengan transmittal/pesan rapi: apa yang berubah, belum, pertanyaan terbuka.","Catat revisi dan feedback di log."],
    qaTitle: "Checklist QA sebelum submit",
    qa: ["[ ] Sheet number/title/revision benar, title block terisi","[ ] Tidak ada warning kritis, model sudah di-audit/purge","[ ] Dimensi, level, grid, tag, schedule konsisten antar sheet","[ ] Notasi dan layer sesuai standar klien","[ ] Referensi section/detail tidak putus","[ ] Satuan sesuai (mm vs ft-in)","[ ] File naming sesuai convention","[ ] Perubahan sudah dicloud dan dilog"],
    comTitle: "Komunikasi",
    com: ["Tulis jelas & singkat; tanyakan ambiguitas sebelum mengerjakan jauh.","Kelola time zone: UK (GMT/BST), US (EST\u2013PST), Gulf (GMT+3/+4). Sepakati jam overlap.","Beri update proaktif; jangan diam saat terhalang."],
    bizTitle: "Bisnis dan legal",
    biz: ["NDA & keamanan data (jangan simpan file klien di perangkat pribadi tanpa izin).","Kontrak: scope, jumlah revisi, hak cipta (biasanya milik klien), pembayaran, terminasi.","Pembayaran: Wise, Payoneer, transfer; pahami kewajiban pajak sebagai freelancer di Indonesia.","Jangan mengklaim lisensi atau mengambil tanggung jawab yang bukan wewenangmu."]
  },
  s9: { heading: "9. Daftar bacaan (urut prioritas)", online: "<strong>Gratis / online:</strong> RIBA Plan of Work 2020 Overview; UK Building Regulations: Approved Documents (gov.uk, mulai B, M, L); UK BIM Framework (ukbimframework.org); ICC Digital Codes (codes.iccsafe.org \u2014 IBC Ch. 3,5,6,7,9,10,11); National CAD Standard (NIBS/buildingSMART); situs resmi Dubai Municipality, ADM, Civil Defence UAE, Saudi Building Code Committee; dokumentasi Autodesk Revit & pembelajaran BIM.", books: "<strong>Buku:</strong> Neufert (Architects\u2019 Data); Metric Handbook (Pamela Buxton); Building Construction Illustrated (F.D.K. Ching); Fundamentals of Building Construction (Allen & Iano); Time-Saver Standards for Architectural Design; Mechanical and Electrical Equipment for Buildings (Grondzik); Architect\u2019s Handbook of Professional Practice (AIA); panduan ISO 19650 (BSI/BRE)." },
  s10: { heading: "10. Roadmap 90 hari", m1: "<strong>Bulan 1 \u2014 Fondasi:</strong> RIBA stages + AIA phases, istilah & sheet organization; Revit menengah (families, schedules, sheets, worksets); Approved Document B & M dan ringkasan egress/accessibility IBC.", m2: "<strong>Bulan 2 \u2014 Standar dan BIM:</strong> ISO 19650 + naming convention, praktik CDE (ACC trial); NCS & UK drafting standards; 1 proyek latihan lengkap (villa/low-rise) concept sampai CD.", m3: "<strong>Bulan 3 \u2014 Portofolio dan pasar:</strong> 3 sample project \u2014 UK (metrik, Part M/B), US (IBC/ADA, ft-in), Gulf (villa/mid-rise, privasi & fire code regional); portofolio set gambar + model Revit + BEP mini; mulai melamar (LinkedIn: \u201cBIM Modeller/Architectural Technician/Revit Technician remote\u201d, Upwork/Fiverr, studio outsourcing BIM, konsultan Gulf, firma kecil UK/US)." }
};
