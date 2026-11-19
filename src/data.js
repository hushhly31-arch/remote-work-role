export const studio = {
  name: "Axel & Wright Architects",
  city: "Melbourne",
  timezone: "AEDT (UTC+11)",
  address: "Level 12, 367 Collins Street, Melbourne VIC 3000, Australia",
  abn: "ABN 48 123 456 789",
  email: "contracts@axelandwright.com.au",
  seniorArchitect: "M. Wright",
  pm: "Project Manager",
  teamSize: "8 architects, 3 interior designers",
  projectTypes: "Residential, co-living, small commercial",
  tools: ["Slack", "Google Drive", "Email"],
};

export const septi = {
  name: "Septi",
  role: "Remote Architectural Designer",
  rate: 45,
  currency: "AUD",
  rateNote: "Per hour, inclusive of superannuation equivalent. Tax obligations borne by freelancer.",
  background: "Arsitek & Desainer Interior, freelance 2024–sekarang. Sebelumnya Desainer Interior di Darus Sakinah (2019–2024).",
  location: "Pamekasan, Indonesia",
  tools: ["SketchUp", "D5 Render", "Lumion", "AutoCAD", "Word", "Excel", "Google Sheets"],
  languages: ["Indonesia", "Inggris"],
  linkedin: "belum terisi",
  behance: "belum terisi",
};

export const ops = {
  name: "Ops",
  role: "Operations Manager",
  background: "Manages studio operations, workflows, and project coordination.",
  location: "Melbourne, Australia",
  tools: ["Slack", "Google Drive", "Notion", "Asana"],
};

export const consultant = {
  name: "Consultant",
  role: "Consultant",
  background: "Provides expert advice on architectural projects and design.",
  location: "Melbourne, Australia",
  tools: ["AutoCAD", "Revit", "BIM 360"],
};

export const projectManager = {
  name: "Project Manager",
  role: "Project Manager",
  background: "Manages project delivery, client communication, and timelines.",
  location: "Melbourne, Australia",
  tools: ["Slack", "Notion", "MS Project"],
};

export const contract = {
  title: "Freelance Services Agreement — Project-Based",
  projectName: "Co-Living Unit Fit-Out — Diponegoro Site",
  projectCode: "AW-2026-047",
  role: "Remote Architectural Designer",
  scope: [
    "Produce working drawings for one co-living unit (bedroom + wet area) based on provided as-built and sketch.",
    "Deliver: dimensioned plan (1:50), reflected ceiling plan (1:50), two interior elevations (1:50), one perspective render (1920×1080).",
    "Incorporate PM mark-ups returned within 2 business days of each delivery.",
    "Revisions until client approval — no cap on rounds.",
    "File formats: .dwg (AutoCAD 2018), .pdf (press-ready), .jpg (render). Naming: AW-2026-047_[drawing-name]_[v#].",
    "All source files handed over on final payment.",
  ],
  problematicClauses: [
    {
      id: 1,
      text: "Revisions until client approval",
      issue: "No cap on revision rounds. Could mean unlimited unpaid rework.",
    },
    {
      id: 2,
      text: "Payment terms: Net 45 from invoice date",
      issue: "45-day payment cycle. Invoice submitted after final delivery means ~60+ days to first dollar.",
    },
    {
      id: 3,
      text: "Portfolio rights limited to static images only, subject to studio written consent per project",
      issue: "Cannot show drawings, process, or 3D views without case-by-case permission. Weakens future marketing.",
    },
  ],
  fee: {
    amount: 1800,
    currency: "AUD",
    breakdown: "Fixed fee for defined deliverables. Includes up to 3 revision rounds. Additional rounds at AUD 75/hr.",
  },
  paymentTerms: "Net 45 from invoice date. Invoice issued upon final file handover. 50% deposit waived for this engagement. All tax, superannuation, and compliance obligations borne by freelancer. Payment via Wise (AUD to IDR). Freelancer covers receive fees.",
  deadline: {
    minutes: 60,
    startTrigger: "Start button clicked on Introduction page",
    timezone: "AEDT (UTC+11)",
    example: "If started at 09:00 AEDT, submit by 10:00 AEDT. Late submission = automatic withdrawal.",
  },
  latePolicy: "Submission after deadline: contract void, no payment. Files not matching naming convention or format: rejected, clock keeps running. Corrupt/unopenable files: treated as non-submission.",
  jurisdiction: "Victoria, Australia. Disputes resolved under Victorian law.",
};

export const brief = {
  from: "Septi, Remote Architectural Designer",
  to: "Project Manager",
  subject: "AW-2026-047 — Brief: Co-Living Unit Fit-Out",
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

As-built has two dimensional errors. Find them. Flag in submit.

Deliverables list follows. 60 minutes total. No extensions.

— Project Manager
Axel & Wright Architects
Melbourne | AEDT`,
};

export const inputMaterials = {
  sketchDescription: `Rough hand sketch (photo attached conceptually). Shows:
- Unit outline 10.6 m × 7.0 m (internal). Note: does not match 12 × 8.8 footprint.
- Bedroom 3.6 × 3.2 m at NE corner.
- Wet area 2.4 × 1.8 m adjacent south.
- Corridor 1.2 m wide along west edge.
- Window shown on north wall (1.8 m wide, 1.2 m high, sill 900).
- Door from corridor into bedroom (820 wide). Door from bedroom into wet area (720 wide, swing into bedroom).
- No dimensions on corridor length. No column grid shown.`,
  sitePhotos: [
    "East facade: 3-storey brick, regular window rhythm. Unit window aligns with grid.",
    "Corridor view: existing fire hose reel at 1.8 m from NE corner, projects 120 mm into corridor.",
    "Ceiling slab: exposed concrete, services run below. Downstand beam 300 deep along grid line 3 (3.6 m from north wall).",
  ],
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
      downstandBeam: "Along grid line 3 (10800 from north), 300 deep, 400 wide.",
    },
    errors: [
      {
        id: 1,
        location: "Unit overall dimensions vs. column grid",
        given: "Unit width 10600, columns at 0/3600/7200/10800",
        issue: "Last column at 10800 exceeds unit width 10600 by 200 mm. Column sits outside unit boundary.",
        correct: "Unit width should be 10800 to align with column grid, or last column at 10600.",
      },
      {
        id: 2,
        location: "Fire hose reel vs. bedroom door swing",
        given: "Corridor 1200 wide. Fire hose reel at 1800 from NE corner, projects 120 mm. Bedroom door 820 clear at corridor.",
        issue: "Hose reel encroaches 120 mm into 1200 corridor. Bedroom door at 820 clear needs ~900 mm swing. Effective corridor 1080 mm. Door swing obstructed.",
        correct: "Recess hose reel 150 mm into wall or relocate door. Fire engineer sign-off required.",
      },
    ],
  },
  answerKey: {
    error1: "Unit width 10600 vs column at 10800 — 200 mm mismatch. Column grid implies 10800 module.",
    error2: "Fire hose reel at 1800 from NE corner projects 120 into 1200 corridor. Bedroom door swing (820 clear) obstructed.",
  },
};

export const deliverables = [
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
      "Layer naming: A-PLAN, A-RCP, A-DIMS, A-TEXT",
    ],
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
      "Height dimensions: FFL to ceiling 2700",
    ],
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
      "Watermark: none (studio adds)",
    ],
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
      "No corrupt files",
    ],
  },
];

export const disruption = {
  timestamp: 25,
  from: "Client (via PM forward)",
  subject: "Re: AW-2026-047 — quick thought",
  body: `Hi Sandy,

Just looked at the floor plan sketch Nuha sent over (I assume that's what the attachment was). Couple of things — my wife and I were talking last night and we really think the bedroom needs a small desk nook. Even just 600 deep by 1200 wide tucked near the window. People work from home now, right? And while we're at it, the wet area feels a bit tight. Can we push the wall south 300? The corridor can take it, it's 1200 wide anyway. Also, budget — we need to trim 15% off the fit-out number. The numbers are getting away from us. Let me know if any of this is a problem. We trust your judgment but these are important to us.

Thanks,
[Client Name]
Sent from my iPhone`,
  pmNote: `Nuha — client request forwarded. You have 5 minutes to reply to me (not client) with: accept / reject / counter. One sentence each option. Then keep working. Clock doesn't stop.

— S.`,
};

export const submitForm = {
  qaCheckboxes: [
    "All deliverables use correct file naming convention (AW-2026-047_[name]_v#)",
    "Plan + RCP: dimensions to face of finish, column grid aligned (10800), fire hose reel noted",
    "Elevations: FFL datum, tile set-out, wardrobe/vanity internals, shower screen type noted",
    "Render: 1920×1080, correct materials, lighting per decision, no entourage",
    "Email to PM: ≤ 120 words, professional, references assumptions + errors",
    "Assumptions list: max 6 bullets, covers shower screen, lighting, outlets, beam, hose reel, tile",
    "As-built errors: both identified with location, given dims, correct dims, impact",
    "No corrupt files, all openable, correct formats (.dwg 2018, .pdf, .jpg)",
    "Time remaining at submit: recorded",
    "Revision rounds tracked: 0 (first delivery)",
    "Portfolio rights clause noted — no portfolio use without written consent",
    "Net 45 payment term accepted — first payment ~60+ days after invoice",
  ],
};

export const results = {
  seniorArchitectFeedback: [
    {
      item: "Dimensioned Plan + RCP",
      verdict: "Partially correct",
      markup: [
        "Column grid fixed to 10800 — good catch on Error 1. But you didn't adjust bedroom/wet area dims to suit. Bedroom still 3600 wide, now 200 short of grid. Should be 3600/3600/3600 or note non-alignment.",
        "Fire hose reel noted on plan — correct. But no recess detail. Door swing still clashes. Need 200 mm recess or door relocation.",
        "RCP: 4 circuits OK. Beam shown dashed — good. Missing: emergency light location per NCC. Required in corridor.",
        "Layer naming clean. Title block missing project code.",
      ],
    },
    {
      item: "Interior Elevations",
      verdict: "Correct with omissions",
      markup: [
        "Bedroom north: wardrobe internal elevation missing. Only front face shown. Client asked for hanging/shelves/drawers — show internals.",
        "Wet area west: tile set-out correct. Shower screen noted as 'frameless pivot' — OK. But no floor waste location on elevation. Critical for fall.",
        "Vanity: mirror cabinet height not dimensioned. Standard 1800 above FFL? State it.",
      ],
    },
    {
      item: "Perspective Render",
      verdict: "Acceptable",
      markup: [
        "Materials match palette. Lighting shows 4 downlights + strip — matches your decision. Good.",
        "Camera angle shows wet area door swing — clever. But render shows pivot screen closed. Open position would clarify clearance.",
        "Resolution and format correct. No watermark — correct.",
      ],
    },
    {
      item: "Cover Email",
      verdict: "Concise but missing key flag",
      markup: [
        "Word count 98 — under limit. Tone professional. References assumptions and errors — good.",
        "Did not flag: Net 45 payment term will delay your cash flow. Client budget cut 15% not addressed. You accepted disruption counter but email doesn't confirm scope change.",
        "Assumptions list: 5 items. Missing: tile grout width (3 mm assumed), shower screen hardware finish (matte black assumed).",
      ],
    },
    {
      item: "As-Built Errors",
      verdict: "Both found",
      markup: [
        "Error 1 (column grid): correctly identified 200 mm mismatch. Proposed fix: extend unit to 10800. Acceptable.",
        "Error 2 (hose reel): correctly identified obstruction. Proposed fix: recess hose reel 150 mm into wall. Acceptable — but needs fire engineer sign-off. You didn't mention.",
      ],
    },
  ],
  pmComment: `Email: clear, under word limit. Good you flagged assumptions. Disruption reply: you countered (desk nook = scope creep, budget cut = reject, wall move = conditional on fire hose). Correct call. But you didn't confirm revised deliverable list in email. Next time, one line: 'Deliverables unchanged per original brief.'`,
  contractEvaluation: {
    caughtClauses: [
      {
        clause: "Revisions until client approval",
        caught: true,
        note: "Noted as 'unlimited revision risk' in assumptions. Should have proposed cap: 3 rounds included, then AUD 75/hr.",
      },
      {
        clause: "Net 45 payment",
        caught: true,
        note: "Flagged in assumptions. Should have asked for 50% deposit or Net 14.",
      },
      {
        clause: "Portfolio rights restricted",
        caught: false,
        note: "Missed entirely. No note written. This clause means you cannot show this work to future clients without studio permission — weakens your pipeline.",
      },
    ],
    recommendedNotes: [
      "Clause 1: 'Revision rounds capped at 3 included. Additional at AUD 75/hr.'",
      "Clause 2: 'Request Net 14 or 50% deposit on acceptance.'",
      "Clause 3: 'Portfolio rights: static images + drawings + process OK for self-promotion with project anonymization.'",
    ],
  },
  rubric: [
    {
      criteria: "Contract Reading",
      weight: 20,
      indicators: [
        "Identified all 3 problematic clauses",
        "Wrote specific counter-notes for each",
        "Understood deadline trigger (Accept = clock start)",
        "Noted jurisdiction / tax obligation",
      ],
      pass: "2+ clauses caught with actionable notes",
    },
    {
      criteria: "As-Built Error Detection",
      weight: 20,
      indicators: [
        "Found Error 1 (column grid 200 mm mismatch)",
        "Found Error 2 (fire hose reel blocks door swing)",
        "Stated correct dimensions",
        "Described impact on design",
      ],
      pass: "Both errors found with correct dims + impact",
    },
    {
      criteria: "Drawing Accuracy",
      weight: 25,
      indicators: [
        "Plan dims to face of finish",
        "Column grid aligned (10800)",
        "Fire hose recess or door relocation shown",
        "RCP: 4 circuits, beam dashed, emergency light",
        "Elevations: FFL datum, tile set-out, internals",
        "Title block with project code",
      ],
      pass: "5/6 indicators met",
    },
    {
      criteria: "Visual Quality",
      weight: 15,
      indicators: [
        "Render 1920×1080, correct materials",
        "Lighting matches decision (4 downlights + strip)",
        "Camera shows design intent",
        "No entourage, no watermark",
      ],
      pass: "All 4 met",
    },
    {
      criteria: "Communication",
      weight: 10,
      indicators: [
        "Email ≤ 120 words, professional",
        "Disruption reply: clear accept/reject/counter to PM",
        "Assumptions list ≤ 6, covers key unknowns",
        "Tone: business English (EOD, ASAP, FYI)",
      ],
      pass: "3/4 met",
    },
    {
      criteria: "Time Management",
      weight: 10,
      indicators: [
        "Submitted within 60 minutes",
        "Early submit + quality = bonus",
        "Time tracked per deliverable",
        "No panic at disruption (min 25)",
      ],
      pass: "Submit ≤ 60 min, quality pass",
    },
  ],
  emailExamples: {
    pass: `Subject: AW-2026-047 — Deliverables v1

Sandy,

Attached: plan+RCP, 2 elevations, render per brief. 
Assumptions: (1) shower frameless pivot, (2) 4 downlights + LED strip under wardrobe, (3) outlets per AS/NZS 3000, (4) tile grout 3 mm, (5) shower hardware matte black, (6) hose reel recessed 150 mm.
As-built errors flagged: (1) column grid 200 mm short — extended to 10800, (2) hose reel obstructs bedroom door — recess proposed.
All files named AW-2026-047_[name]_v1. Ready for mark-up.

— Nuha`,
    fail: `Subject: Done

Hi,

Files attached. I did the drawings and render. The as-built had some issues but I fixed them. Let me know if you need changes.

Thanks,
Nuha`,
    failReason: "No project code, no assumptions, no error log, no file naming, casual tone, under-delivered.",
  },
  decisionThresholds: {
    offered: "Total score ≥ 70/100 AND all pass thresholds met",
    notMovingForward: "Total score < 70 OR any critical fail (contract: 0 clauses caught, errors: 0 found, time: late)",
  },
};

export const credentials = {
  name: "Remote Architectural Designer — Simulated Project Practice",
  description: "Bukti latihan simulasi yang dinilai berdasarkan rubrik, bukan sertifikasi profesi resmi dan bukan pengalaman kerja di studio sungguhan.",
  projectCode: "AW-2026-047",
  passingScore: 70,
  noCriteriaBelow: 50,
  levels: [
    { key: "completed", name: "Completed", minScore: 70, desc: "Semua kriteria ≥ 50, total ≥ 70. Dasar solid." },
    { key: "proficient", name: "Proficient", minScore: 85, desc: "Kontrak & error detection ≥ 80, visual ≥ 80. Siap proyek nyata." },
    { key: "distinction", name: "Distinction", minScore: 95, desc: "Total ≥ 95, tidak ada kriteria < 80. Level junior studio." },
  ],
  skillsProven: [
    "contract review",
    "as-built verification",
    "1:50 working drawings",
    "interior perspective rendering",
    "professional email in English",
    "time management",
  ],
  previewData: {
    recipientName: "Alexandra Chen",
    level: "Proficient",
    issuedDate: "2026-11-17",
    verificationId: "RWT-2026-047-PRF-8K9L",
    scores: { contract: 85, errors: 90, drawings: 88, visual: 85, comms: 92, time: 100 },
  },
  privacyOptions: [
    { key: "minimal", label: "Level & Skills only", desc: "Hanya level dan daftar skill yang terlihat publik" },
    { key: "full", label: "Level, Skills & Scores", desc: "Level, skill, dan skor per kriteria terlihat publik" },
  ],
  linkedInFields: {
    name: "Remote Architectural Designer — Simulated Project Practice",
    issuer: "Remote Work Training Platform",
    issueDate: "2026-11",
    credentialId: "RWT-2026-047-PRF-8K9L",
    credentialUrl: "https://r2studio.web.id/verify/RWT-2026-047-PRF-8K9L",
  },
};

export const characters = [
  {
    initials: "SC",
    role: "Project Manager",
    style: "Ringkas, deadline mendadak, informasi kadang kurang.",
    sample: "Septi — client request forwarded. You have 5 minutes to reply to me (not client) with: accept / reject / counter. One sentence each option. Then keep working. Clock doesn't stop. — S.",
  },
  {
    initials: "MW",
    role: "Senior Architect",
    style: "Detail, keras, tidak suka alasan.",
    sample: "Column grid fixed to 10800 — good catch on Error 1. But you didn't adjust bedroom/wet area dims to suit. Wardrobe internal elevation missing. Emergency light per NCC required in corridor. — M. Wright",
  },
  {
    initials: "CL",
    role: "Client",
    style: "Bertele-tele, bisa ganti arah.",
    sample: "Hi Septi, my wife and I think the bedroom needs a small desk nook. 600 deep by 1200 wide near the window. Also wet area feels tight — can we push the wall south 300? The corridor can take it, it's 1200 wide anyway. Also, budget — we need to trim 15% off the fit-out number. The numbers are getting away from us. Let me know if any of this is a problem. We trust your judgment but these are important to us. Thanks! — [Client Name]",
  },
];

export const introContent = {
  pembuka: `Studio di Melbourne menawarimu satu pekerjaan: Co-Living Unit Fit-Out, Diponegoro Site, kode AW-2026-047. Kontraknya sudah dikirim. Kamu punyi 60 menit sejak menekan Start. Ini simulasi, tidak ada klien sungguhan, tapi diperlakukan seperti sungguhan.`,
  situasinya: `Axel & Wright Architects, Melbourne — tim 8 arsitek, 3 interior designer. Fokus residential, co-living, small commercial. Komunikasi lewat Slack, Google Drive, email. Zona waktu Melbourne November memakai waktu musim panas (AEDT, UTC+11), selisih 4 jam dengan Pamekasan (WIB).`,
  peran: `Remote Architectural Designer, project-based, satu pekerjaan. Diharapkan memproduksi gambar kerja unit co-living (plan, RCP, elevasi, render) dari as-built dan sketsa yang disediakan. Bekerja async, komunikasi tertulis bahasa Inggris, manajemen waktu mandiri. Output dikirim lewat platform, review oleh Senior Architect.`,
  aturan: [
    "Timer 60 menit mulai saat tombol Start ditekan, bukan saat halaman dibuka.",
    "Timer tidak bisa dijeda.",
    "Boleh submit kapan saja sebelum waktu habis. Submit lebih cepat hanya dihitung plus kalau kualitasnya lolos.",
    "Kalau waktu habis sebelum submit, kontrak yang menentukan konsekuensinya (void, no payment).",
    "Setelah submit, tidak bisa diubah.",
    "Sesi tidak bisa diulang dengan skenario yang sama. [Konfirmasi: boleh diulang? kredensial percobaan pertama tetap Berlaku?]",
    "Tools yang boleh dipakai: SketchUp, D5 Render, Lumion, AutoCAD atau software gambar lain yang dikuasai, Word, Excel, Google Sheets. [Konfirmasi: boleh pakai AI, referensi internet, template pribadi?]",
    "Kontrak dibaca dan diputuskan sendiri. Platform tidak akan memberi tahu mana yang benar.",
  ],
  tahapan: [
    { step: 1, name: "Contract", desc: "Baca kontrak penuh, temukan 2 klausul bermasalah, pilih Accept atau Accept with notes", time: "8 menit" },
    { step: 2, name: "Brief", desc: "Baca pesan PM, paham program ruang, budget, yang sudah/blm diputuskan", time: "5 menit" },
    { step: 3, name: "Materials", desc: "Cek sketsa, foto tapak, as-built — temukan 2 kesalahan dimensi", time: "5 menit" },
    { step: 4, name: "Deliverables", desc: "Kerja inti: gambar plan+RCP (25'), 2 elevasi (15'), render (10')", time: "50 menit" },
    { step: 5, name: "Disruption", desc: "Satu pesan masuk ~menit ke-25 dari klien/PM, balas dalam 5 menit, lanjut kerja", time: "5 menit" },
    { step: 6, name: "Submit", desc: "Upload file, email PM ≤120 kata, asumsi, error as-built, QA checklist", time: "7 menit" },
  ],
  dinilai: [
    { key: "contract", label: "Baca Kontrak", desc: "Menemukan klausul bermasalah dan menulis catatan counter yang spesifik." },
    { key: "errors", label: "Ketelitian Cek Bahan", desc: "Mendeteksi kedua kesalahan dimensi as-built dengan benar dan dampaknya." },
    { key: "drawings", label: "Akurasi Gambar", desc: "Dimensi ke face of finish, grid kolom benar, detail lengkap, layer rapi." },
    { key: "visual", label: "Kualitas Visual", desc: "Render 1920×1080, material & pencahayaan sesuai keputusan, kamera jelas." },
    { key: "comms", label: "Komunikasi Tertulis (EN)", desc: "Email PM ≤120 kata, balasan gangguan jelas, tone profesional, asumsi lengkap." },
    { key: "time", label: "Manajemen Waktu", desc: "Submit ≤ 60 menit, tidak panik saat disruption, alokasi per tahap masuk akal." },
  ],
  hasil: `Skor per 6 kriteria, feedback Senior Architect per item, keputusan "Offered next project" atau "Not moving forward", kredensial digital kalau lolos.`,
  syaratKredensial: `Skor minimal 70% total DAN tidak ada kriteria di bawah 50%. Kalau tidak cukup, tidak ada kredensial, tapi laporan skor dan feedback tetap diterima.`,
  karakter: [
    {
      initials: "SC",
      role: "Project Manager",
      style: "Ringkas, deadline mendadak, informasi kadang kurang.",
      sample: "Septi — client request forwarded. You have 5 minutes to reply to me (not client) with: accept / reject / counter. One sentence each option. Then keep working. Clock doesn't stop. — S.",
    },
    {
      initials: "MW",
      role: "Senior Architect",
      style: "Detail, keras, tidak suka alasan.",
      sample: "Column grid fixed to 10800 — good catch on Error 1. But you didn't adjust bedroom/wet area dims to suit. Wardrobe internal elevation missing. Emergency light per NCC required in corridor. — M. Wright",
    },
    {
      initials: "CL",
      role: "Client",
      style: "Bertele-tele, bisa ganti arah.",
      sample: "Hi Septi, my wife and I think the bedroom needs a small desk nook. 600 deep by 1200 wide near the window. Also wet area feels tight — can we push the wall south 300? The corridor can take it, it's 1200 wide anyway. Also, budget — we need to trim 15% off the fit-out number. The numbers are getting away from us. Let me know if any of this is a problem. We trust your judgment but these are important to us. Thanks! — [Client Name]",
    },
  ],
  persiapan: [
    "Laptop dengan software (SketchUp/D5/AutoCAD) terbuka dan siap",
    "Koneksi internet stabil",
    "Ruang tenang, 60 menit penuh tanpa gangguan",
    "Folder kerja kosong sudah dibuat",
    "Notifikasi lain (WhatsApp, email, dll) dimatikan",
    "Air/minuman siap di samping",
  ],
  startLabel: "Start — buka kontrak",
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