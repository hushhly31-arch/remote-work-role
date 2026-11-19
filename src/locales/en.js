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
    title: "Opening",
    content: "A Melbourne studio offers you one job: Co-Living Unit Fit-Out, Diponegoro Site, code AW-2026-047. The contract has been sent. You have 60 minutes from pressing Start. This is a simulation — no real client — but treat it like the real thing."
  },
  situasi: {
    title: "The Situation",
    content: "Axel & Wright Architects, Melbourne — 8 architects, 3 interior designers. Focus: residential, co-living, small commercial. Communication via Slack, Google Drive, email. Melbourne timezone in November uses daylight saving (AEDT, UTC+11), 4 hours ahead of Pamekasan (WIB)."
  },
  peran: {
    title: "Your Role",
    content: "Remote Architectural Designer, project-based, single engagement. Expected to produce working drawings for a co-living unit (plan, RCP, elevations, render) from provided as-built and sketch. Work asynchronously, written communication in English, self-managed time. Output submitted via platform, reviewed by Senior Architect."
  },
  aturan: {
    title: "Simulation Rules",
    items: [
      "60-minute timer starts when you press Start, not when the page loads.",
      "Timer cannot be paused.",
      "You may submit any time before time expires. Early submit only counts as a bonus if quality passes.",
      "If time runs out before submit, the contract determines consequences (void, no payment).",
      "After submit, no changes allowed.",
      "Session cannot be repeated with the same scenario. [Confirmation: repeatable? first attempt credential still valid?]",
      "Allowed tools: SketchUp, D5 Render, Lumion, AutoCAD or any drawing software you master, Word, Excel, Google Sheets. [Confirmation: AI, internet references, personal templates allowed?]",
      "Contract is read and decided by you. Platform will not tell you what's correct."
    ]
  },
  tahapan: {
    title: "6 Stages & Estimated Time",
    totalNote: "Total: ~90 minutes — but hard limit is 60 minutes. Plan your work once.",
    stages: [
      { step: 1, name: "Contract", desc: "Read full contract, find 2 problematic clauses, choose Accept or Accept with notes", time: "8 min" },
      { step: 2, name: "Brief", desc: "Read PM message, understand room program, budget, decided/undecided items", time: "5 min" },
      { step: 3, name: "Materials", desc: "Check sketch, site photos, as-built — find 2 dimensional errors", time: "5 min" },
      { step: 4, name: "Deliverables", desc: "Core work: plan+RCP (25'), 2 elevations (15'), render (10')", time: "50 min" },
      { step: 5, name: "Disruption", desc: "One message arrives ~minute 25 from client/PM, reply in 5 min, continue working", time: "5 min" },
      { step: 6, name: "Submit", desc: "Upload files, email PM ≤120 words, assumptions, as-built errors, QA checklist", time: "7 min" }
    ]
  },
  dinilai: {
    title: "What Gets Assessed (6 Criteria)",
    criteria: [
      { key: "contract", label: "Contract Reading", desc: "Identify problematic clauses and write specific counter-notes." },
      { key: "errors", label: "Material Verification", desc: "Detect both as-built dimensional errors correctly with impact." },
      { key: "drawings", label: "Drawing Accuracy", desc: "Dimensions to face of finish, correct column grid, complete details, clean layers." },
      { key: "visual", label: "Visual Quality", desc: "1920×1080 render, materials & lighting per decisions, clear camera intent." },
      { key: "comms", label: "Written Comms (EN)", desc: "PM email ≤120 words, clear disruption reply, professional tone, complete assumptions." },
      { key: "time", label: "Time Management", desc: "Submit ≤ 60 min, no panic at disruption, reasonable time allocation per stage." }
    ]
  },
  hasil: {
    title: "Final Outcome",
    content: "Score per 6 criteria, Senior Architect feedback per item, decision \"Offered next project\" or \"Not moving forward\", digital credential if passed."
  },
  kredensial: {
    title: "Credential Requirements",
    content: "Minimum 70% total score AND no criterion below 50%. If not met, no credential issued, but score report and feedback still provided.",
    levels: [
      { name: "Completed", desc: "≥70 total, no criterion <50. Solid foundation." },
      { name: "Proficient", desc: "≥85 total, contract & errors ≥80, visual ≥80. Ready for real projects." },
      { name: "Distinction", desc: "≥95 total, no criterion <80. Junior studio level." }
    ]
  },
  karakter: {
    title: "Characters You'll Encounter",
    characters: [
      { initials: "SC", role: "Project Manager", style: "Brief, sudden deadlines, sometimes incomplete info.", sample: "Septi — client request forwarded. You have 5 minutes to reply to me (not client) with: accept / reject / counter. One sentence each option. Then keep working. Clock doesn't stop. — S." },
      { initials: "MW", role: "Senior Architect", style: "Detail-oriented, tough, no excuses.", sample: "Column grid fixed to 10800 — good catch on Error 1. But you didn't adjust bedroom/wet area dims to suit. Wardrobe internal elevation missing. Emergency light per NCC required in corridor. — M. Wright" },
      { initials: "CL", role: "Client", style: "Rambling, can change direction.", sample: "Hi Septi, my wife and I think the bedroom needs a small desk nook. 600 deep by 1200 wide near the window. Also wet area feels tight — can we push the wall south 300? And budget: trim 15% off fit-out. Let us know. Thanks! — [Client Name]" }
    ]
  },
  persiapan: {
    title: "Preparation Before Start",
    items: [
      "Laptop with software (SketchUp/D5/AutoCAD) open and ready",
      "Stable internet connection",
      "Quiet space, 60 uninterrupted minutes",
      "Empty working folder created",
      "Other notifications (WhatsApp, email, etc.) turned off",
      "Water/drinks ready at hand"
    ]
  },
  start: {
    label: "Start — open contract",
    note: "60-minute timer begins the moment you press the button."
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
    name: "Septi",
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
    title: "Rough Sketch (Conceptual)",
    description: "No image file provided. Work from dimensions above.",
    image: "/img/refs/unit-sketch.svg",
    imageAlt: "Conceptual sketch of bedroom, wet area, and corridor layout",
    caption: "Conceptual sketch reference. Use as orientation only; verify all dimensions against as-built notes.",
    notesTitle: "Text notes from sketch"
  },
  sitePhotos: {
    title: "Site Photos (Reference Images)",
    items: [
      { image: "/img/refs/plan-reference.svg", alt: "East facade and window rhythm reference", text: "East facade: 3-storey brick, regular window rhythm. Unit window aligns with grid." },
      { image: "/img/refs/unit-sketch.svg", alt: "Corridor and hose reel reference", text: "Corridor view: existing fire hose reel at 1.8 m from NE corner, projects 120 mm into corridor." },
      { image: "/img/refs/elevation-reference.svg", alt: "Ceiling slab and downstand beam reference", text: "Ceiling slab: exposed concrete, services run below. Downstand beam 300 deep along grid line 3 (3.6 m from north wall)." }
    ],
    photos: [
      "East facade: 3-storey brick, regular window rhythm. Unit window aligns with grid.",
      "Corridor view: existing fire hose reel at 1.8 m from NE corner, projects 120 mm into corridor.",
      "Ceiling slab: exposed concrete, services run below. Downstand beam 300 deep along grid line 3 (3.6 m from north wall)."
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
    title: "Building Standards & SOP Reference (US / UK / Global)",
    intro: "Use these recognized standards as baseline guidance for drawings, dimensions, accessibility, safety, and fit-out coordination. Apply the project/jurisdiction requirements stated in the brief/contract.",
    groups: [
      {
        region: "US (IBC / ICC / NFPA / ADA)",
        items: [
          { code: "IBC (International Building Code)", desc: "Minimum requirements for building safety, egress, occupancy, fire protection, and structural provisions (ICC)." },
          { code: "ADA Standards for Accessible Design (2010)", desc: "Accessible routes, clearances, door maneuvering, reach ranges, and sanitary facility requirements." },
          { code: "ICC A117.1", desc: "Accessible and usable buildings and facilities — technical criteria often referenced by IBC/ADA." },
          { code: "IPC (International Plumbing Code)", desc: "Fixture layout, drainage, venting, and sanitary provisions for wet areas." },
          { code: "NFPA 101 Life Safety Code", desc: "Means of egress, corridor widths, door swing/obstructions, and fire/life-safety planning." }
        ]
      },
      {
        region: "UK (Building Regulations / BS)",
        items: [
          { code: "Approved Document B", desc: "Fire safety — means of warning and escape, internal fire spread, and access for fire service." },
          { code: "Approved Document F", desc: "Ventilation — adequate fresh air and extract for habitable rooms and wet areas." },
          { code: "Approved Document G & H", desc: "Sanitation/hot water safety and foul/waste drainage for bathrooms and plumbing." },
          { code: "Approved Document K & M", desc: "Protection from falling/collision/impact and access to/use of buildings (inclusive design)." },
          { code: "BS 8300-2:2018", desc: "Design of an accessible and inclusive built environment — buildings (code of practice)." }
        ]
      },
      {
        region: "Global / ISO (Drawings & Accessibility)",
        items: [
          { code: "ISO 128 (series)", desc: "Technical product documentation — general principles of presentation for drawings, views, lines, and layouts." },
          { code: "ISO 129-1", desc: "Dimensioning and tolerancing principles — indication of dimensions on technical drawings." },
          { code: "ISO 21542:2021", desc: "Building construction — accessibility and usability of the built environment." }
        ]
      },
      {
        region: "Project Context (Australia / NCC / AS-NZS)",
        items: [
          { code: "NCC (National Construction Code)", desc: "Performance requirements for health, amenity, safety (including egress and fire) in Australia." },
          { code: "AS/NZS 3000 (Wiring Rules)", desc: "Electrical installation safety and placement — referenced in brief for power outlets." },
          { code: "AS 1428.1", desc: "Design for access and mobility — general requirements for access in new buildings." }
        ]
      }
    ],
    note: "Reference only for this simulation: follow the specific project brief, as-built conditions, and PM/client instructions. Verify local authority/jurisdiction compliance in real projects."
  },
  nextDeliverables: "Next: Deliverables List"
};

export const deliverables = {
  title: "Deliverables & Time Allocation",
  subtitle: "Max 4 Items",
  totalTimeNote: "Total suggested time: {total} minutes — You have 60 minutes total. Budget your time. Disruption at ~minute 25.",
  referenceLabel: "Reference image (example guidance)",
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
    sending: "Uploading files and sending email to reviewer...",
    sent: "Submission emailed successfully.",
    sendError: "Submission saved locally, but email could not be sent automatically."
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
    description: "Proof of simulated practice assessed by rubric, not an official professional certification and not real studio work experience.",
    projectCode: "AW-2026-047",
    earned: "Credential Earned",
    notEarned: "Credential Not Earned",
    notEarnedDesc: "Minimum 70% total score with no criterion below 50% required. Your score: {score}%",
    notEarnedNote: "You still receive full feedback and rubric scores. Retake the simulation to earn a credential.",
    levels: [
      { key: "completed", name: "Completed", desc: "All criteria ≥ 50, total ≥ 70. Solid foundation." },
      { key: "proficient", name: "Proficient", desc: "Contract & error detection ≥ 80, visual ≥ 80. Ready for real projects." },
      { key: "distinction", name: "Distinction", desc: "Total ≥ 95, no criterion < 80. Junior studio level." }
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
      { key: "minimal", label: "Level & Skills only", desc: "Only level and skill list visible publicly" },
      { key: "full", label: "Level, Skills & Scores", desc: "Level, skills, and per-criterion scores visible publicly" }
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
  badge: "Guide",
  title: "Remote Architecture Work SOP (UK / US / Global)",
  eyebrow: "Client & Freelancer Guide",
  intro: "Standard guide for remote work: work chain, project stages, BIM, drawing standards, codes/regulations, technical skills, daily SOP, and roadmap so clients and freelancers stay aligned.",
  s1: {
    heading: "1. Your position in the work chain",
    p: "Most overseas clients will treat you as a production subcontractor:",
    items: [
      "<strong>Legal responsibility and stamps/licenses</strong> remain with the client\u2019s architect or engineer.",
      "<strong>Your role:</strong> produce accurate, consistent models and drawings that follow the client\u2019s office standards and are delivered on time.",
      "<strong>Your value:</strong> speed, accuracy, understanding of standards, and clear communication."
    ],
    box: "<strong>SOPs you must master (3 layers):</strong> (a) project stages, (b) documentation/BIM standards, (c) building codes and culture of each region."
  },
  s2: {
    heading: "2. Project stages",
    ukTitle: "UK: RIBA Plan of Work 2020",
    tableHead: ["Stage", "Name", "Core"],
    ukRows: [["0","Strategic Definition","client needs, business case"],["1","Preparation & Briefing","brief, feasibility, surveys"],["2","Concept Design","concept, massing, test fit"],["3","Spatial Coordination","architect\u2013structure\u2013MEP coordination, planning application"],["4","Technical Design","technical drawings, specifications, Building Regulations"],["5","Manufacturing & Construction","shop drawings, RFI, site"],["6","Handover","as-built, O&M manual"],["7","Use","operation"]],
    ukRef: "Reference: RIBA Plan of Work 2020 Overview (RIBA website).",
    usTitle: "US: AIA phases",
    usP: "Pre-Design \u2192 Schematic Design (SD) \u2192 Design Development (DD) \u2192 Construction Documents (CD) \u2192 Bidding/Negotiation \u2192 Construction Administration (CA).",
    usTerms: "<strong>Key terms:</strong> RFI, submittal, ASI (Architect\u2019s Supplemental Instruction), bulletin, addendum, punch list, change order.",
    meTitle: "Middle East (UAE/KSA/Qatar)",
    meP: "Typically a mix of UK and US styles: Concept \u2192 Schematic \u2192 Detailed Design \u2192 Authority Approval \u2192 Tender \u2192 IFC (Issued for Construction) \u2192 Shop Drawings \u2192 As-Built. Authority approvals (municipality, civil defense, utilities) heavily drive the schedule."
  },
  s3: {
    heading: "3. BIM and information management (essential for remote work)",
    p: "The most valuable area because remote clients rely heavily on file discipline.",
    items: [
      "<strong>ISO 19650 (Parts 1 & 2):</strong> EIR (Employer\u2019s Information Requirements), BEP (BIM Execution Plan), MIDP/TIDP, CDE (Common Data Environment), status WIP / Shared / Published / Archive.",
      "<strong>UK BIM Framework:</strong> guidance and templates (ukbimframework.org).",
      "<strong>ISO 19650 naming convention:</strong> Project-Originator-Volume-Level-Type-Role-Number (widely used in UK & Middle East).",
      "<strong>Concepts:</strong> LOD/LOIN (Level of Information Need), IFC, COBie, BCF (issue tracking).",
      "<strong>US:</strong> National BIM Standard (NBIMS-US), AIA G202/E203 (BIM protocol & LOD spec).",
      "<strong>Revit:</strong> shared coordinates, worksets, linked models, design options, phasing, family management, model audit/purge."
    ],
    cde: "<strong>CDE platforms:</strong> Autodesk Construction Cloud (BIM 360), Trimble Connect, Aconex, Revizto, Procore (US), SharePoint."
  },
  s4: {
    heading: "4. Drawing standards (CAD/drafting)",
    items: [
      "<strong>US:</strong> National CAD Standard (NCS), AIA CAD Layer Guidelines; sheet numbering (A-101, A-201), discipline designators; units: feet-inch.",
      "<strong>UK:</strong> BS 8541 series, BS EN ISO 7519, UK NBS Chorus/BIM Toolkit; units: metric (mm).",
      "<strong>Middle East:</strong> usually follows the consultant office standard (BS/ISO mix); metric; often bilingual for certain tags."
    ],
    must: "<strong>Must-know:</strong> sheet/title block, revision cloud + revision schedule, drawing register/issue sheet/transmittal, scale/line weights/hatching/dimensioning, door/window/finish schedules, section/detail callouts, symbol legend, north point, grid & level."
  },
  s5: {
    heading: "5. Codes, regulations, and standards by region",
    uk: { title: "\ud83c\uddec\ud83c\udde7 UK", items: [
      "Building Regulations 2010 & Approved Documents (gov.uk): A (structure), B (fire), C, E (acoustics), F (ventilation), L (energy), M (access), O (overheating), P, Q, R, S.",
      "Building Safety Act 2022 (gateways, higher-risk buildings, \u201cgolden thread\u201d).",
      "Planning: NPPF, Local Plan, Design & Access Statement. CDM Regulations 2015 (H&S, Principal Designer).",
      "BS 9999/9991 (fire), BS 8300 (inclusive design), Eurocodes + UK NA. Specs: NBS. Contracts: JCT, NEC4, RIBA. Sustainability: BREEAM, Part L, SAP/SBEM."
    ]},
    us: { title: "\ud83c\uddfa\ud83c\uddf8 US", items: [
      "IBC/IRC + state/city amendments (CBC, NYC BC, Florida FBC, etc.); free reading at codes.iccsafe.org.",
      "ADA 2010 Standards, ICC A117.1 (accessibility). NFPA 101/13/72 (fire/life safety).",
      "ASHRAE 90.1/IECC (energy), ASCE 7 (loads), ACI/AISC (structure). CSI MasterFormat 2018 & UniFormat. Contracts: AIA A201, B101. Sustainability: LEED, WELL, Energy Star.",
      "Understand occupancy classification, construction type, allowable area/height, egress (IBC core)."
    ]},
    me: { title: "\ud83c\udde6\ud83c\uddea\ud83c\uddf8\ud83c\udde6\ud83c\uddf6\ud83c\udde6 Middle East", items: [
      "<strong>UAE:</strong> Dubai Building Code, DM/Trakhees/DDA, ADIBC & DMT/ADM, UAE Fire and Life Safety Code (Civil Defence), Estidama (Abu Dhabi), Al Sa\u2019fat (Dubai).",
      "<strong>Saudi Arabia:</strong> Saudi Building Code (SBC), Mostadam, Balady/Monshaat.",
      "<strong>Qatar:</strong> QCS, GSAS, Civil Defence.",
      "<strong>Regional factors:</strong> extreme heat (shading, glazing, cooling), privacy (villas, mashrabiya), majlis, prayer room/qibla orientation, gender separation (certain projects), strict fire codes & Civil Defence role; major projects often have bespoke design guidelines."
    ]}
  },
  s6: { heading: "6. Technical design fundamentals to master", items: [
    "Space planning & ergonomics (Neufert, Metric Handbook).",
    "Egress & fire: travel distance, exit width, compartmentation, fire rating, stair/lobby.",
    "Accessibility: ramp, lift, toilet, door clearance.",
    "Building envelope: wall/roof build-up, U-value, waterproofing, thermal bridge, curtain wall.",
    "Detailing: sill, threshold, parapet, expansion/movement joint.",
    "Structure & MEP coordination: grid, floor-to-floor, ceiling void, riser, clash detection.",
    "Vertical transport, parking, facade. Specifications/materials (finish schedule, product data).",
    "Sustainability: passive design, daylight, embodied carbon."
  ]},
  s7: { heading: "7. Software and technical skills", items: [
    "<strong>Essential:</strong> Revit, AutoCAD.",
    "<strong>Highly useful:</strong> Navisworks (clash), Bluebeam Revu (markup, dominant in US), Dynamo, Rhino/Grasshopper.",
    "<strong>Visualization:</strong> Enscape, Twinmotion, D5, V-Ray.",
    "<strong>Collaboration:</strong> Teams/Slack, ACC, Revizto, Miro.",
    "<strong>Certifications:</strong> Autodesk Certified Professional (Revit), buildingSMART Professional (ISO 19650/IFC), BIM Level 2 / ISO 19650 courses (BRE, BSI, Autodesk)."
  ]},
  s8: {
    heading: "8. Remote work SOP (what sets professionals apart)",
    wfTitle: "Daily workflow",
    wf: ["Receive task & understand scope: what, level of detail, deadline, format.","Read client BEP/office standards before touching the model.","Work in the model/central file per rules (worksets, naming, versioning).","Self-check before sending (see checklist).","Send with a transmittal/clear message: what changed, what\u2019s pending, open questions.","Log revisions and feedback."],
    qaTitle: "QA checklist before submit",
    qa: ["[ ] Sheet number/title/revision correct, title block filled","[ ] No critical warnings, model audited/purged","[ ] Dimensions, levels, grids, tags, schedules consistent across sheets","[ ] Notation and layers follow client standards","[ ] Section/detail references not broken","[ ] Units correct (mm vs ft-in)","[ ] File naming follows convention","[ ] Changes clouded and logged"],
    comTitle: "Communication",
    com: ["Write clearly and concisely; ask about ambiguities before going far.","Manage time zones: UK (GMT/BST), US (EST\u2013PST), Gulf (GMT+3/+4). Agree on overlap hours.","Give proactive updates; don\u2019t go silent when blocked."],
    bizTitle: "Business and legal",
    biz: ["NDA & data security (do not store client files on personal devices without permission).","Contract: scope, revision count, copyright (usually client-owned), payment, termination.","Payment: Wise, Payoneer, bank transfer; understand tax obligations as a freelancer in Indonesia.","Do not claim licenses or take responsibility beyond your authority."]
  },
  s9: { heading: "9. Reading list (priority order)", online: "<strong>Free / online:</strong> RIBA Plan of Work 2020 Overview; UK Building Regulations: Approved Documents (gov.uk, start with B, M, L); UK BIM Framework (ukbimframework.org); ICC Digital Codes (codes.iccsafe.org \u2014 IBC Ch. 3,5,6,7,9,10,11); National CAD Standard (NIBS/buildingSMART); official sites of Dubai Municipality, ADM, UAE Civil Defence, Saudi Building Code Committee; Autodesk Revit docs & BIM learning.", books: "<strong>Books:</strong> Neufert (Architects\u2019 Data); Metric Handbook (Pamela Buxton); Building Construction Illustrated (F.D.K. Ching); Fundamentals of Building Construction (Allen & Iano); Time-Saver Standards for Architectural Design; Mechanical and Electrical Equipment for Buildings (Grondzik); Architect\u2019s Handbook of Professional Practice (AIA); ISO 19650 guides (BSI/BRE)." },
  s10: { heading: "10. 90-day roadmap", m1: "<strong>Month 1 \u2014 Foundation:</strong> RIBA stages + AIA phases, terms & sheet organization; intermediate Revit (families, schedules, sheets, worksets); Approved Documents B & M and IBC egress/accessibility summary.", m2: "<strong>Month 2 \u2014 Standards and BIM:</strong> ISO 19650 + naming convention, CDE practice (ACC trial); NCS & UK drafting standards; 1 complete practice project (villa/low-rise) from concept to CD.", m3: "<strong>Month 3 \u2014 Portfolio and market:</strong> 3 sample projects \u2014 UK (metric, Part M/B), US (IBC/ADA, ft-in), Gulf (villa/mid-rise, privacy & regional fire code); portfolio set + Revit model + mini BEP; start applying (LinkedIn: \u201cBIM Modeller/Architectural Technician/Revit Technician remote\u201d, Upwork/Fiverr, BIM outsourcing studios, Gulf consultants, small UK/US firms)." }
};
