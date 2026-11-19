export const common = {
  appName: "Remote Work Training",
  projectCode: "TDA-2026-012",
  studioName: "Terra Digital Agency",
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
  contract: "Agreement",
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
  subtitle: "TDA-2026-012 — Trial Week: Junior Project Coordinator (Remote, WIB)",
  pembuka: {
    title: "Opening",
    content: "A digital agency in Jakarta is offering you a remote Junior Project Coordinator role — trial week, code TDA-2026-012. Your first work package has been sent. You have 60 minutes from pressing Start. This is a simulation — no real clients, but it is treated as real."
  },
  situasi: {
    title: "Situation",
    content: "Terra Digital Agency, Jakarta — a 12-person remote team: designers, developers, customer service, ops. Main clients: Client A (website retainer) and Client B (a 100-person webinar). Communication runs on Slack, Trello, Zoom, and email. You work from WIB hours; part of client correspondence is in written English."
  },
  peran: {
    title: "Your Role",
    content: "Junior Project Coordinator, remote, WIB. In short: making sure projects finish on scope, on time, and on budget — breaking projects into tasks with deadlines and owners, managing the board (Trello/Asana), taking meeting notes, chasing progress, surfacing blockers and escalating them, acting as the client–team bridge, and writing status reports. Output is submitted through the platform and reviewed by the Project Manager and Head of Delivery."
  },
  aturan: {
    title: "Simulation Rules",
    items: [
      "The 60-minute timer starts when you press Start, not when the page opens.",
      "The timer cannot be paused.",
      "You may submit any time before time runs out. Early submit only counts as a bonus if quality passes.",
      "If time runs out before you submit, the agreement defines the consequences (void, no pay).",
      "After submitting, nothing can be changed.",
      "You can retake the session, but the credential is based on the attempt you choose in the next session.",
      "Allowed tools: Google Docs/Sheets, Notion, Trello/Asana, calculator. Personal templates are allowed.",
      "You read the agreement and materials on your own. The platform will not tell you what is right."
    ]
  },
  tahapan: {
    title: "6 Stages & Estimated Time",
    totalNote: "Total: ~90 minutes — but the hard limit is 60 minutes. Plan to do it in one pass.",
    stages: [
      { step: 1, name: "Agreement", desc: "Read the full agreement, find 3 problematic clauses, choose Accept or Accept with notes", time: "8 minutes" },
      { step: 2, name: "Brief", desc: "Read the manager's message: two active projects, decided vs. undecided items", time: "5 minutes" },
      { step: 3, name: "Materials", desc: "Check the meeting transcript, Slack messages, master spreadsheet — find 2 data errors", time: "5 minutes" },
      { step: 4, name: "Deliverables", desc: "Core work: meeting notes (25'), timeline + risk log (15'), daily update (10')", time: "50 minutes" },
      { step: 5, name: "Disruption", desc: "One message arrives ~minute 25 from the client/PM; reply within 5 minutes, keep working", time: "5 minutes" },
      { step: 6, name: "Submit", desc: "Hand in documents, email to manager ≤120 words, data findings, QA checklist", time: "7 minutes" }
    ]
  },
  dinilai: {
    title: "What Is Scored (6 Criteria)",
    criteria: [
      { key: "contract", label: "Agreement Reading", desc: "Finding the 3 problematic clauses and writing specific counter-notes." },
      { key: "errors", label: "Material Check Accuracy", desc: "Detecting both spreadsheet data errors correctly, with impact." },
      { key: "drawings", label: "Document Quality", desc: "Meeting notes with who+what+when, complete 5-phase timeline, concrete risk log." },
      { key: "visual", label: "Readability", desc: "Documents are scannable: consistent structure, concise, no raw transcript dumping." },
      { key: "comms", label: "Written Communication", desc: "Email ≤120 words, clear disruption reply, standard daily update format, professional tone." },
      { key: "time", label: "Time Management", desc: "Submit ≤ 60 minutes, no panic during disruption, sensible per-stage allocation." }
    ]
  },
  hasil: {
    title: "Final Outcome",
    content: "Score per 6 criteria, manager feedback per item, decision \"Offered next project\" or \"Not moving forward\", and a digital credential if you pass."
  },
  kredensial: {
    title: "Credential Requirements",
    content: "Minimum 70% total score AND no criterion below 50%. If it falls short, there is no credential, but the score report and feedback are still provided.",
    levels: [
      { name: "Completed", desc: "≥70 total, no criterion <50. Solid foundation" },
      { name: "Proficient", desc: "≥85 total, agreement & data detection ≥80, documents ≥80. Ready for real work" },
      { name: "Distinction", desc: "≥95 total, no criterion <80. Hire-ready junior coordinator level" }
    ]
  },
  karakter: {
    title: "Characters You Will Meet",
    characters: [
      { initials: "SC", role: "Project Manager", style: "Short, task-focused, relies on written updates.", sample: "You — the client asked for another addition. Check scope first, reply to me within 5 minutes: accept / reject / counter. One sentence per option. The clock keeps running. — S." },
      { initials: "RP", role: "Head of Delivery", style: "Detail-oriented, judges by documents, no excuses.", sample: "An action item like 'send materials' without a name and date is not an action item. It is a prayer. Your meeting notes must be readable by someone who was not in the meeting. — R. Prameswari" },
      { initials: "KA", role: "Client (Client A)", style: "Chatty, frequently changes requirements, sensitive about dates.", sample: "We want to launch on the 30th. Can we? Oh, and add an 'About Us' page while you're at it. And can the webinar promo budget be released this week? We want the ads running right away." }
    ]
  },
  persiapan: {
    title: "Preparation Before Start",
    items: [
      "Laptop with Google Docs/Sheets and Notion open",
      "Stable internet connection",
      "Quiet room, 60 full minutes without interruption",
      "An empty working folder created",
      "Other notifications (WhatsApp, email, etc.) turned off",
      "Water/drink ready beside you"
    ]
  },
  start: {
    label: "Start — open the agreement",
    note: "The 60-minute timer starts the moment you press this button."
  }
};

export const contract = {
  title: "Remote Work Agreement — Project Coordinator (Trial Week)",
  projectName: "Client B Webinar: \"Digital Workflow 101\" — 100 attendees, 4 weeks",
  projectCode: "TDA-2026-012",
  role: "Junior Project Coordinator (Remote, WIB)",
  parties: {
    studio: "Agency",
    address: "Cyber 2 Tower 8th Floor, HR Rasuna Said St., South Jakarta",
    city: "Jakarta",
    timezone: "WIB (UTC+7)",
    abn: "Business ID 0123456789012",
    email: "work@terradigital.id",
    seniorArchitect: "R. Prameswari (Head of Delivery)",
    pm: "S. Chen (Project Manager)"
  },
  freelancer: {
    name: "You (Coordinator)",
    role: "Junior Project Coordinator (Remote)",
    rate: "IDR 40,000",
    currency: "",
    rateNote: "Per hour during the trial week; full monthly fee per the agreement."
  },
  scope: [
    "Write meeting notes from the Client A weekly sync transcript, using the agency standard format (decisions, action items with owner + deadline, risks).",
    "Build the Client B webinar project timeline: columns Phase, Task, Owner, Start, Deadline, Status, Notes.",
    "Add a Risk Log with at least 3 risks — each with impact and a backup plan.",
    "Write the daily update for your manager: Done / In progress / Blocker / Tomorrow.",
    "Update task statuses on the board (Trello) based on incoming messages and data.",
    "All documents use agency templates. File naming: TDA-2026-012_[doc-name]_v#."
  ],
  problematicClauses: [
    { id: 1, text: "Scope may change at any time according to client needs, with no change in fees", issue: "Unprotected scope creep. Every extra client request gets done for free — working hours balloon without compensation." },
    { id: 2, text: "Work messages must be answered within 15 minutes, 07:00–22:00 WIB, seven days a week", issue: "On-call for nearly the whole day, including weekends. Remote work without clear boundaries leads to burnout and untracked overtime." },
    { id: 3, text: "Fee is paid after end-of-month evaluation, maximum Net 45 after the invoice is approved by the manager", issue: "Payment can slip 45+ days and depends on 'approval'. If the evaluation is disputed, payment slips even longer." }
  ],
  fee: {
    amount: "IDR 3,500,000",
    currency: "",
    breakdown: "Full-time remote monthly fee for the trial week, covering all tasks in scope. Out-of-scope work is agreed separately."
  },
  paymentTerms: "Net 45 after the invoice is approved by the manager. Invoices are sent on the 1st via bank transfer. Taxes and social security are each party's responsibility according to employment status.",
  deadline: {
    startTrigger: "Start button pressed on the Introduction page",
    minutes: 60,
    timezone: "WIB (UTC+7)",
    example: "If you start at 09:00 WIB, submit before 10:00 WIB. Late submission = automatic termination."
  },
  latePolicy: "Submission after the deadline: agreement void, no pay. Documents not matching the format/template: rejected, clock keeps running. Corrupt or unopenable files: treated as a non-submission.",
  jurisdiction: "Indonesian law. Disputes are settled by deliberation first, then through mediation per the agreement.",
  deliverablesFormat: [
    "Meeting notes — doc/Notion, one page, agency standard format",
    "Timeline + Risk Log — spreadsheet/Notion, columns Phase/Task/Owner/Start/Deadline/Status/Notes",
    "Daily update — text, format Done / In progress / Blocker / Tomorrow",
    "Naming: TDA-2026-012_[doc-name]_v#",
    "All documents submitted through the platform"
  ],
  acceptedTitle: "Accepted — Clock Running",
  acceptedMessage: "Agreement Accepted",
  acceptedNotes: "Accepted with notes. Notes saved.",
  acceptedNoNotes: "Accepted without notes.",
  startTimeLabel: "60-minute countdown started at",
  keyDeadlines: "Key Deadlines",
  submitDeadline: "Submit all deliverables by",
  disruptionExpected: "Disruption expected ~minute 25",
  lateSubmission: "Late submission = agreement void, no pay",
  nextBrief: "Next: Project Brief",
  readBrief: "Read the manager's brief. Note what is already decided and what you decide yourself.",
  openBrief: "Open Brief",
  yourNotes: "Your Notes",
  noNotes: "(no notes)"
};

export const brief = {
  title: "Project Brief",
  from: "From the Project Manager",
  meta: {
    from: "S. Chen, Project Manager",
    to: "You, Junior Project Coordinator",
    subject: "TDA-2026-012 — Brief: First Week Work Package"
  },
  body: `Coordinator,

The work agreement is attached. Read it first. The clock starts when you press Accept.

You are remote from WIB; the team is in Jakarta. All coordination happens over Slack, Trello, Zoom, and email. Today you receive one work package covering two active projects:

Project 1 — Client A (digital agency retainer):
- Client A's landing page is under revision. The designer (Rani) is waiting for the client's final logo — that is a blocker.
- Yesterday there was a weekly sync with Client A. The transcript is attached on the Materials page.
- Your job is to turn that transcript into clean meeting notes.

Project 2 — Client B (webinar):
- "Digital Workflow 101", 100 attendees, 4 weeks from now.
- You will build a full timeline (5 phases) and a Risk Log with at least 3 risks.
- All the numbers live in the project master spreadsheet — re-check it, something is off.

Beyond that:
- Your manager wants a daily update in the agency standard format.
- The Trello board must reflect the latest status.

Already decided:
- Platform: Zoom Webinar.
- Total promo budget: IDR 8,500,000.
- Content must be complete by the 20th; launch is on the 30th.

You decide yourself:
- Who owns each task and its deadline (based on how the team works in the transcript).
- Which risks make it into the Risk Log and what the backup plans are.
- What gets reported to your manager today — keep it short.

The master spreadsheet has two data errors. Find them, then report them at submit.

The deliverables list follows. 60 minutes total. No extensions.

— S. Chen, Project Manager
Terra Digital Agency
Jakarta | WIB`,
  keyNumbers: [
    { label: "Webinar duration", value: "4 weeks (launch on the 30th)" },
    { label: "Attendee target", value: "100 present (platform capacity 500)" },
    { label: "Speakers", value: "3 (2 internal, 1 external) + 1 backup" },
    { label: "Platform", value: "Zoom Webinar" },
    { label: "Promo budget", value: "IDR 8,500,000" },
    { label: "Registration target", value: "350 → 100 present" },
    { label: "Content deadline", value: "The 20th (meeting decision)" },
    { label: "Promo starts", value: "Week 2 (21 full days)" }
  ],
  undecided: [
    { icon: "👤", title: "Owner & deadline per task", desc: "You set them based on how the team works in the transcript and Slack" },
    { icon: "⚠️", title: "Risk Log contents", desc: "At least 3 risks (e.g. speaker cancels, low sign-ups, platform failure) + backup plans" },
    { icon: "📊", title: "Daily report contents", desc: "What you report to your manager today, in the Done/In progress/Blocker/Tomorrow format" }
  ],
  undecidedNote: "Decide each one yourself. Justify in one line under assumptions at submit.",
  nextMaterials: "Next: Input Materials"
};

export const materials = {
  title: "Input Materials (Today's Inbox)",
  providedBy: "Received from the team & client",
  sketch: {
    title: "Client A Weekly Sync Transcript (main source for meeting notes)",
    description: "No audio file. Work from the transcript below.",
    image: "",
    imageAlt: "Client A weekly sync transcript",
    caption: "Raw 30-minute transcript. Your job is to turn it into meeting notes: decisions, action items with owner + date, risks.",
    notesTitle: "Open transcript + manager's notes"
  },
  sitePhotos: {
    title: "Messages & Updates from the Team (Slack / Email)",
    items: [
      { image: "", alt: "Rani's Slack message", text: "Slack #client-a (08:41): Rani — \"Client A's landing page revision is still waiting on the client's final logo. If the logo doesn't arrive today, the revision slips to next week.\"" },
      { image: "", alt: "Manager's DM", text: "Slack DM from manager (08:55): \"The Client B webinar timeline needs to be done today too — I have to review it before tomorrow's weekly sync. Use the agency timeline template + a Risk Log tab.\"" },
      { image: "", alt: "Email from Client A", text: "Email from Client A (09:05): \"We still haven't received the landing page revision, when will it come?\" — no reply from the team yet. You log this as today's priority." }
    ],
    photos: [
      "Slack #client-a (08:41): Rani — \"Client A's landing page revision is still waiting on the client's final logo. If the logo doesn't arrive today, the revision slips to next week.\"",
      "Slack DM from manager (08:55): \"The Client B webinar timeline needs to be done today too — I have to review it before tomorrow's weekly sync. Use the agency timeline template + a Risk Log tab.\"",
      "Email from Client A (09:05): \"We still haven't received the landing page revision, when will it come?\" — no reply from the team yet. You log this as today's priority."
    ]
  },
  asBuilt: {
    title: "Project Master Spreadsheet — Client B (Webinar \"Digital Workflow 101\")",
    scale: "Revision 3",
    paper: "Google Sheets",
    notes: "Last updated Friday by Ops. Numbers are used across teams — verify before relying on them.",
    dimensions: {
      budget: "IDR 8,500,000 (promo) — breakdown: ads 6,500,000 + boosting 2,700,000",
      participants: "100 (platform capacity max 500)",
      duration: "4 weeks — launch on the 30th",
      platform: "Zoom Webinar",
      speakers: "3 speakers (2 internal, 1 external, 1 backup)",
      promo: "Starts week 2, 21 full days",
      target: "350 registrations → 100 present",
      leads: "1,200 email contacts (from the previous webinar)"
    },
    errorsTitle: "⚠ Two Data Errors Hiding in the Spreadsheet",
    errorsDesc: "Find both. Report them at Submit with location, the written figure, the correct figure, and the impact.",
    errors: [
      {
        id: 1,
        location: "Content deadline vs. launch date",
        given: "Progress sheet says \"content complete: week 3 (the 30th)\".",
        issue: "The weekly sync transcript decided content must be complete by the 20th, with launch on the 30th. If content arrives on the 30th, there is no production time and the promo runs with nothing to show."
      },
      {
        id: 2,
        location: "Budget summary vs. item breakdown",
        given: "Summary cell: IDR 8,500,000. Breakdown: ads IDR 6,500,000 + boosting IDR 2,700,000.",
        issue: "The breakdown adds up to IDR 9,200,000 — IDR 700,000 more than the summary. If used for approval, the budget is instantly off."
      }
    ],
    answerKeyNote: "Answer key opens only on the Results page."
  },
  standards: {
    title: "Agency References & Templates (Working Standards)",
    intro: "Use these templates and ground rules as the baseline for every document you write today. Documents that don't match the template are rejected.",
    groups: [
      {
        region: "Standard Document Formats",
        items: [
          { code: "Meeting notes", desc: "Sections: Decisions, Action Items (Owner/Task/Deadline table), Risks/Notes. One page." },
          { code: "Project timeline", desc: "Required columns: Phase | Task | Owner | Start | Deadline | Status | Notes. Phases: Planning, Preparation, Promotion, Execution, Evaluation." },
          { code: "Risk log", desc: "Columns: Risk | Impact | Backup Plan | Owner. At least 3 risks per project." },
          { code: "Daily report", desc: "Four lines: Done / In progress / Blocker (what help is needed) / Tomorrow. Max 80 words." }
        ]
      },
      {
        region: "Communication Rules",
        items: [
          { code: "Action item", desc: "Must have a name and a date. 'Send materials' without an owner and deadline is not an action item." },
          { code: "Written updates", desc: "Remote work runs on written communication — write updates that are clear and short." },
          { code: "Proactive", desc: "You do the chasing, not the other way around. Consistent follow-up is a big plus." },
          { code: "Change request", desc: "Out-of-scope requests are logged, never promised directly to the client; they go through cost estimation first." }
        ]
      },
      {
        region: "Tools in Use",
        items: [
          { code: "Communication", desc: "Slack, WhatsApp, Zoom, Google Meet, email." },
          { code: "Task management", desc: "Trello, Asana, Jira, ClickUp, Notion." },
          { code: "Documents", desc: "Google Docs/Sheets, Excel (basic to intermediate)." }
        ]
      }
    ],
    note: "For this simulation only. In real work, follow your own office's templates and SOPs."
  },
  nextDeliverables: "Next: Deliverables List"
};

export const deliverables = {
  title: "Deliverables & Time Allocation",
  subtitle: "Max 4 Items",
  totalTimeNote: "Total suggested time: {total} minutes — You have 60 minutes total. Budget your time. Disruption at ~minute 25.",
  referenceLabel: "Format reference (example guidance)",
  items: [
    {
      id: 1,
      name: "Meeting Notes — Client A Weekly Sync",
      description: "Turn the raw transcript into meeting notes in the agency format: decisions, action items, risks/notes. One page, scannable.",
      format: "Doc / Notion (text in submit form)",
      scale: "N/A",
      fileName: "TDA-2026-012_notes-clientA_v1",
      suggestedTime: 25,
      checklist: [
        "Decisions written explicitly (launch target, content requirement)",
        "Every action item has: who, what task, deadline when",
        "The 'About Us' page flagged as a change request (out of scope)",
        "Final logo recorded as a client item with a cutoff time",
        "Risk noted: content late past the 20th → launch slips",
        "Concise — not a raw transcript copy"
      ]
    },
    {
      id: 2,
      name: "Webinar Project Timeline + Risk Log",
      description: "Client B timeline in Sheets/Notion: Phase, Task, Owner, Start, Deadline, Status, Notes. Five phases: Planning, Preparation, Promotion, Execution, Evaluation. Plus a Risk Log tab with at least 3 risks.",
      format: "Spreadsheet / Notion (structure as text in submit form)",
      scale: "N/A",
      fileName: "TDA-2026-012_timeline-clientB_v1",
      suggestedTime: 15,
      checklist: [
        "All 5 phases, ordered from planning to evaluation",
        "Every task has an owner and start/deadline dates",
        "Content deadline = the 20th (per the meeting decision, not the wrong sheet)",
        "Risk log ≥ 3 risks (e.g. speaker cancels, low sign-ups, platform failure)",
        "Each risk: impact + backup plan",
        "Budget error in the spreadsheet corrected or flagged"
      ]
    },
    {
      id: 3,
      name: "Daily Update for the Manager",
      description: "A short report in the standard format: Done / In progress / Blocker (what help is needed) / Tomorrow. Scannable in 30 seconds.",
      format: "Text in submit form",
      scale: "N/A",
      fileName: "N/A",
      suggestedTime: 10,
      checklist: [
        "Four sections: Done, In progress, Blocker, Tomorrow",
        "Blocker names the Client A logo blocker and who is needed",
        "Concrete numbers (tasks done, dates, names)",
        "No rambling — around 80 words max",
        "Client A's change request mentioned with its status (awaiting decision)",
        "Honest: unfinished work is still reported"
      ]
    },
    {
      id: 4,
      name: "Summary Email + QA Checklist",
      description: "Email to the manager (max 120 words): what was delivered, key decisions, data errors found, what awaits a decision. Plus honest QA checkboxes.",
      format: "Text in submit form",
      scale: "N/A",
      fileName: "N/A",
      suggestedTime: 10,
      checklist: [
        "Email ≤ 120 words, professional tone",
        "Names the 3 main deliverables and their status",
        "Both data errors reported with location + impact",
        "'About Us' change request — status: awaiting cost estimate",
        "QA: all 12 checkboxes answered honestly",
        "File naming follows the convention"
      ]
    }
  ],
  timeBreakdown: {
    title: "Suggested Time Breakdown",
    breakdown: [
      { label: "Read Agreement + Brief", time: 10, color: "text-primary" },
      { label: "Write Documents", time: 35, color: "accent-gold" },
      { label: "Review & Clean Up", time: 5, color: "text-secondary" },
      { label: "Email + QA", time: 10, color: "accent-gold-light" }
    ]
  },
  nextDisruption: "Next: Mid-Session Disruption"
};

export const disruption = {
  title: "Mid-Session Disruption",
  elapsedLabel: "Elapsed",
  incomingTitle: "Incoming: Client Request (via PM)",
  incomingDesc: "Forwarded at ~minute 25. The clock does NOT stop.",
  clientMessage: `Hi,

We've been thinking about the website again. Could you add an "About Us" page in the current sprint? The designer is already holding the landing page revision anyway. And please confirm — launch is still the 30th, right? We already promised that date to our boss.

Oh, and can the webinar promo budget be released this week? We want the ads running right away.

Thanks,
[Client A]
Sent from my iPhone`,
  pmNoteTitle: "PM Note",
  pmNote: `You — the client is pinging again. You have 5 minutes to reply to me (not the client): accept / reject / counter. One sentence per option. Remember: "About Us" is a change request outside scope, and the 30th depends on content arriving by the 20th. The clock keeps running.

— S. Chen, PM.`,
  replyTitle: "Your Reply to PM (5 minutes)",
  replyDesc: "Choose one. Write one sentence in English. Then continue working.",
  options: {
    accept: "Accept Changes",
    reject: "Reject Changes",
    counter: "Counter / Conditional"
  },
  replySentTitle: "Reply Sent",
  replySaved: "Saved. Continue working. Clock still running.",
  nextSubmit: "Next: Submit"
};

export const submit = {
  title: "Submit",
  finalStep: "Final Step",
  filesUpload: {
    title: "Document Upload",
    acceptedTypes: "Required: meeting notes, timeline + risk log, daily update — per the deliverables list. Naming: TDA-2026-012_[doc-name]_v#",
    dragDrop: "Drag & drop files here or click to browse",
    uploadedFiles: "Uploaded Documents",
    remove: "Remove"
  },
  coverEmail: {
    title: "Summary Email to Manager",
    placeholder: "Max 120 words. Professional tone. Cover key decisions, data errors, and what awaits a decision.",
    wordCount: "Words: {count} / 120",
    overLimit: "OVER LIMIT",
    ok: "OK"
  },
  assumptions: {
    title: "Assumptions Taken",
    placeholder: "Max 6 bullets. Owner & deadlines per task, risk log contents, today's report priorities, format decisions...",
    note: "Bullet list. One per line."
  },
  asBuiltErrors: {
    title: "Data Errors Found",
    placeholder: "Error 1: location, written figure, correct figure, impact. Error 2: location, written figure, correct figure, impact.",
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
    sending: "Uploading documents and sending the email to reviewers...",
    sent: "Submission email sent successfully.",
    sendError: "Submission saved locally, but the automatic email failed."
  }
};

export const results = {
  title: "Results",
  postSession: "Post-Session Review",
  tabs: {
    senior: "Manager Feedback",
    pm: "PM Comment",
    contract: "Agreement Evaluation",
    rubric: "Score Rubric",
    email: "Email Examples",
    decision: "Final Decision",
    credential: "Credential"
  },
  seniorFeedback: [
    {
      item: "Meeting Notes — Client A",
      verdict: "Correct with omissions",
      markup: [
        "Key decisions written: launch on the 30th, content by the 20th — correct.",
        "Action item 'send content' has an owner (Client) and deadline (20th) — correct. But 'send final logo' has no concrete date, just 'tomorrow'. Write the date.",
        "The 'About Us' page is only mentioned at the bottom, not clearly flagged as a change request awaiting a cost estimate. That is the item most likely to blow up scope."
      ]
    },
    {
      item: "Timeline + Risk Log",
      verdict: "Partially correct",
      markup: [
        "All 5 phases, owners filled in. Good.",
        "One row still follows the wrong sheet's content deadline (week 3) — you found the error but didn't fix the timeline. Inconsistent.",
        "Risk log: 3 risks is enough, but 'speaker cancels' has no concrete backup plan (named replacement / shifted topic). 'Plan: find a replacement' is not a plan."
      ]
    },
    {
      item: "Daily Update",
      verdict: "Acceptable",
      markup: [
        "The 4-section format is followed. The blocker (Client A logo) names who is needed — that's what lets a manager act.",
        "Concrete numbers present: 2 tasks done, 1 change request awaiting decision.",
        "The 'Tomorrow' section is actionable: send the revision, start the development phase."
      ]
    },
    {
      item: "Summary Email",
      verdict: "Concise but missing key flag",
      markup: [
        "Word count 96 — under the limit. Professional tone. Clear structure.",
        "Did not mention: the contract's 15-minute / 07:00–22:00 response clause — the heaviest burden of the trial week and worth renegotiating before week two.",
        "The budget error is called 'a discrepancy' with no number. State it: IDR 700,000."
      ]
    },
    {
      item: "Spreadsheet Data Errors",
      verdict: "Both found",
      markup: [
        "Error 1 (content deadline): correctly spotted the contradiction with the transcript, impact explained.",
        "Error 2 (budget): correctly computed the IDR 700,000 gap. The proposed fix is sensible, but you didn't say who should decide (ops or the manager) — name the owner."
      ]
    }
  ],
  pmComment: `Email: clear, under the word limit, and good that you reported your assumptions. Disruption reply: you countered — "About Us" goes through a cost estimate first, launch stays on the 30th as long as content lands by the 20th. Right call. But you didn't re-confirm the deliverables list in the email. Next time, one line: "Scope of deliverables unchanged from the brief."`,
  contractEvaluation: {
    title: "Agreement Clause Evaluation",
    desc: "Did you catch the 3 problematic clauses? What notes should have been written?",
    clauses: [
      { clause: "Scope changes with no fee change", caught: true, note: "Flagged as 'scope creep' in the accept notes. Should have immediately proposed: extra requests go through a change request with a cost estimate.", recommended: "Clause 1: 'Out-of-scope requests are handled via a change request with a cost estimate before work starts.'" },
      { clause: "15-minute response, 07:00–22:00, 7 days", caught: true, note: "Written in the assumptions. Should have proposed realistic response hours on workdays (e.g. 09:00–18:00 WIB, max 1 hour) with on-call scheduled separately.", recommended: "Clause 2: 'Response hours: 09:00–18:00 WIB on workdays, max 1 hour. Outside those hours, best-effort.'" },
      { clause: "Net 45 fee after 'manager approval'", caught: false, note: "Missed entirely. No note written. This clause makes your pay depend on the same person who judges your work — a big risk during the trial week.", recommended: "Clause 3: 'Fee paid Net 14 after invoicing; the invoice is deemed approved if no objection within 3 business days.'" }
    ]
  },
  rubric: [
    { criteria: "Contract Reading", weight: 15, indicators: ["Found all 3 problematic clauses", "Wrote specific counter-notes for each", "Understood the deadline trigger (Accept = clock start)", "Noted tax obligations / employment status"], pass: "2+ clauses caught with actionable notes" },
    { criteria: "Data Accuracy", weight: 20, indicators: ["Found Error 1 (content deadline vs. launch)", "Found Error 2 (budget gap of IDR 700,000)", "Stated the impact of each error", "Timeline uses the correct data (content by the 20th)"], pass: "Both errors found with location + impact" },
    { criteria: "Meeting Notes Quality", weight: 15, indicators: ["Decisions explicit and correct", "All action items: who + what + when", "Change request clearly flagged", "Concise, not a transcript copy"], pass: "4/4 indicators met" },
    { criteria: "Timeline & Risk", weight: 20, indicators: ["All 5 phases complete and ordered", "Every task has an owner and dates", "Risk log ≥ 3 with impact + concrete backup plans", "Columns match the template (Phase/Task/Owner/Start/Deadline/Status/Notes)"], pass: "5/6 indicators met" },
    { criteria: "Communication", weight: 15, indicators: ["Email ≤ 120 words, professional", "Disruption reply: clear accept/reject/counter to the PM", "Daily update in the 4-section format, scannable", "Written tone clear and short"], pass: "3/4 met" },
    { criteria: "Time Management", weight: 15, indicators: ["Submitted within 60 minutes", "Early submit + quality = bonus", "Time tracked per deliverable", "No panic at the disruption (minute 25)"], pass: "Submit ≤ 60 min, quality pass" }
  ],
  emailExamples: {
    pass: {
      title: "Pass Level Email",
      content: `Subject: TDA-2026-012 — Today's deliverables

Sari,

Delivered: (1) Client A meeting notes — launch on the 30th, content by the 20th, "About Us" flagged as a change request; (2) Client B webinar timeline, 5 phases + a 3-risk log; (3) the daily update.
Found in the master spreadsheet: content deadline written as the 30th (should be the 20th), and the promo budget breakdown totals IDR 9,200,000 vs. the summary IDR 8,500,000 (IDR 700,000 gap). Please advise on the correction.
Waiting on: the final logo from Client A (blocker for the landing page revision).

— You (Coordinator)`,
      reason: "Complete, professional, all requirements met"
    },
    fail: {
      title: "Fail Level Email",
      content: `Subject: Done

Hi,

All files attached. Notes are done, timeline too. Some numbers in the spreadsheet looked weird but I cleaned them up myself.

Thanks`,
      reason: "No project code, no decision details, data errors not reported — in fact quietly 'fixed' (dangerous), no owner/deadline, careless tone."
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
    offeredMessage: "Manager: \"Clean enough to iterate. Fix the action items without dates and the risk log without backup plans. Next brief comes Monday.\"",
    notOfferedMessage: "Manager: \"Missed the Net 45 clause. That's what makes your pay slip. Reading the agreement is not optional.\""
  },
  credential: {
    title: "Junior Project Coordinator — Simulated Project Practice",
    description: "Proof of a simulation exercise graded against a rubric — not an official professional certification and not real work experience at an actual company.",
    projectCode: "TDA-2026-012",
    earned: "Credential Earned",
    notEarned: "Credential Not Earned",
    notEarnedDesc: "Minimum 70% total score with no criterion below 50% required. Your score: {score}%",
    notEarnedNote: "You still receive full feedback and rubric scores. Retake the simulation to earn a credential.",
    levels: [
      { key: "completed", name: "Completed", desc: "All criteria ≥ 50, total ≥ 70. Solid foundation." },
      { key: "proficient", name: "Proficient", desc: "Agreement & data detection ≥ 80, documents ≥ 80. Ready for real work." },
      { key: "distinction", name: "Distinction", desc: "Total ≥ 95, no criterion < 80. Hire-ready junior coordinator level." }
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
      { key: "minimal", label: "Level & Skills only", desc: "Only the level and skill list appear publicly" },
      { key: "full", label: "Level, Skills & Scores", desc: "Level, skills, and per-criteria scores appear publicly" }
    ],
    linkedInFields: {
      name: "Junior Project Coordinator — Simulated Project Practice",
      issuer: "Remote Work Training Platform",
      issueDate: "2026-11",
      credentialId: "RWT-2026-012-PRF-8K9L",
      credentialUrl: "https://r2studio.web.id/verify/RWT-2026-012-PRF-8K9L"
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
  menu: "Remote Work Guide",
  badge: "Guide",
  title: "Remote Work Guide: Ops, Project Coordinator & Trainee",
  eyebrow: "Guide for Applicants & Beginners",
  intro: "A complete picture of the three most in-demand entry-level remote roles — Remote Operations, Remote Project Manager/Project Coordinator, and Remote Trainee — plus a day-in-the-life simulation, skills & tools, portfolio exercises, and where to find openings.",
  s1: {
    heading: "1. The three entry-level remote roles",
    p: "Almost every entry-level remote job posting falls into one of these three roles:",
    items: [
      "<strong>Remote Operations (Ops Coordinator / Ops Assistant):</strong> keeps the business's daily processes running — processing incoming orders/tickets (client orders, customer onboarding, refunds), updating data in internal systems (CRM, spreadsheets, internal tools), following up with vendors/clients/other teams, building and updating SOPs, quality-checking that process steps are followed, writing simple routine reports (orders in / completed / pending), and handling operational problems (\"late shipment\", \"wrong invoice\").",
      "<strong>Remote Project Manager / Project Coordinator (Junior):</strong> makes sure projects finish on scope, on time, and on budget — breaking projects into small tasks with deadlines & owners, managing the board (Trello/Asana/Jira/ClickUp), running and recording meetings (kickoff, weekly sync, retrospective), writing meeting notes + action items and sending them after the meeting, chasing progress (\"where is task X?\"), identifying risks & blockers and escalating to superiors, acting as the bridge between clients/stakeholders and the technical/creative team, and writing weekly status reports.",
      "<strong>Remote Trainee (Management Trainee / Operations Trainee):</strong> learn while working, usually rotating across divisions — helping with ops and PM tasks in smaller portions with a mentor, shadowing meetings and observing how seniors work, doing mini-projects or research assignments (e.g. \"find out why process X is slow\"), attending training sessions, working through modules and presenting what was learned, doing administrative work (recaps, documentation, data entry), with periodic evaluations from the mentor."
    ],
    box: "<strong>How to choose:</strong> love systems & data → Ops. Love coordinating people & timelines → PM/PC. Still exploring and want guidance → Trainee. All three are doors into a remote career with interconnected skills."
  },
  s2: {
    heading: "2. A day-in-the-life simulation",
    ukTitle: "Junior Project Coordinator at a digital agency (WIB time zone)",
    tableHead: ["Time", "What happens", "Lesson"],
    ukRows: [
      ["08.30", "Open office Slack/WhatsApp and email. A client message: \"We still haven't received the landing page revision, when will it come?\" — logged as a priority.", "Start the day triaging the inbox; note what is waiting on an answer."],
      ["09.00", "Check the board (Trello/Asana): of 12 tasks this week, 2 are due today and 1 is late. Message the designer: \"Hi Rani, Client A's landing page revision is targeted for today. Any blockers?\" Rani turns out to be waiting on the client's final logo — that's the blocker.", "Check task status first, then ask; surface blockers early."],
      ["09.30", "Email the client: request the final logo with a 12:00 cutoff so the design can finish today. Also tell your manager about the slip risk if the client doesn't reply.", "Solve the blocker at its source, and escalate risks early."],
      ["10.00", "15-minute daily standup via Zoom/Meet: what I did yesterday, what I'm doing today, what's blocking me. You take notes and post a summary in the Slack channel.", "Short standups; brief notes shared to the channel."],
      ["11.00", "Your manager asks for a new project timeline for Client B. You build it in a spreadsheet/Notion: phases, tasks, durations, owners, milestones, then send it for review.", "The timeline document is a coordinator's main tool."],
      ["12.00", "Lunch break.", "Keep your work boundaries."],
      ["13.00", "Client follow-up: the logo arrived. Forward it to Rani and update the task status on the board.", "Follow up on time; keep the board accurate at all times."],
      ["14.00", "Weekly client meeting (30 minutes), you are the note-taker. The client asks for one extra website page — you log it as a change request. After the meeting, check with the manager: in scope, or extra cost?", "Log new requests as change requests; never promise on the spot."],
      ["15.00", "Write the meeting notes: decisions, action items, who does what, and when — send to the client and team.", "Notes go out right after the meeting, not tomorrow."],
      ["16.00", "Documentation & admin: update the risk log, tidy the Google Drive folders, log hours in the timesheet.", "Admin is part of the job, not leftover time."],
      ["17.00", "Wrap up: send a short daily report to the manager — \"Today: 2 tasks done, 1 blocker (logo) resolved, 1 change request in awaiting a decision. Tomorrow: send the client revision and start the development phase.\"", "End the day with a scannable update."]
    ],
    ukRef: "The same pattern repeats daily: morning triage → check the board → clear blockers → standup → build/maintain documents → meetings & notes → admin → daily report.",
    usTitle: "Ops Coordinator simulation at an e-commerce company",
    usP: "Morning: check the order dashboard — 15 orders stuck because of stock-outs; contact the warehouse team and suppliers for restock certainty. Midday: a customer complains about the wrong item shipped — open a ticket, coordinate with the courier for the return, update the status to customer service. Afternoon: recap the day's orders into a spreadsheet, flag the problematic ones, and update the returns-handling SOP since this case keeps repeating.",
    usTerms: "<strong>The ops pattern:</strong> watch the dashboard → handle tickets/problems → coordinate across teams → recap data → update the SOP when a pattern repeats.",
    meTitle: "What a Remote Trainee's day looks like",
    meP: "Rotation across divisions: mornings helping with small-portion ops/PM tasks, midday shadowing senior meetings, afternoons on mini-projects or research (e.g. \"find out why process X is slow\") or administrative work (recaps, documentation, data entry), plus training sessions and periodic mentor evaluations."
  },
  s3: {
    heading: "3. Skills and tools in use",
    p: "All of the roles above revolve around the same tools and habits:",
    items: [
      "<strong>Communication:</strong> Slack, WhatsApp, Zoom, Google Meet, email.",
      "<strong>Task management:</strong> Trello, Asana, Jira, ClickUp, Notion.",
      "<strong>Documents:</strong> Google Docs/Sheets, Excel (basic to intermediate).",
      "<strong>Soft skills:</strong> clear written communication, consistent follow-up, time management, proactivity."
    ],
    cde: "<strong>Highest value skill:</strong> writing updates that are clear and short. That is a big plus in remote work — most of your work is seen through writing, not presence."
  },
  s4: {
    heading: "4. Tips before applying",
    items: [
      "<strong>Written communication first:</strong> if you can write updates that are clear and short, that is a big plus — it is exactly what gets judged daily.",
      "<strong>Proactive beats smart:</strong> you do the chasing, not the other way around.",
      "<strong>Build proof:</strong> learn basic Trello/Asana and Notion, then create one simulated project (e.g. planning an event) for your portfolio.",
      "<strong>Certificates are optional:</strong> the Google Project Management Certificate can help, but it is not a requirement. Hands-on practice speaks louder."
    ],
    must: "<strong>The minimum viable portfolio:</strong> three documents — one clean set of meeting notes, one project timeline + risk log, and one sample daily report. Put them in one Google Drive folder or a public Notion page; that alone can serve as the simple portfolio you attach when applying."
  },
  s5: {
    heading: "5. Three portfolio exercises",
    uk: { title: "Exercise 1: Meeting Notes (30 minutes)", items: [
      "Scenario: you are a coordinator at an agency. Excerpt from a weekly client meeting: Client — \"We want to launch on the 30th. Can we?\". Designer — \"Yes, if your materials arrive by the 20th at the latest.\". Client — \"Okay, but we want an 'About Us' page added.\". Manager — \"That's outside the initial scope; we'll send a cost estimate.\". Client — \"Final logo coming soon, maybe tomorrow.\"",
      "The format to write — <strong>Meeting Notes: Client A Weekly Sync</strong>; Date &amp; Attendees; <strong>Decisions:</strong> launch target the 30th; <strong>Action Items:</strong> Client sends content (deadline 20), Client sends the final logo (tomorrow), Manager sends the extra-page cost estimate (write the date); <strong>Risks/Notes:</strong> materials late past the 20th → launch at risk of slipping; the \"About Us\" page = change request, awaiting cost approval.",
      "The key point: every action item must have a name and a date. Notes without that are useless."
    ]},
    us: { title: "Exercise 2: Project Timeline (1–2 hours)", items: [
      "Scenario: you are asked to plan a 100-attendee webinar event within 4 weeks.",
      "Build it in Google Sheets or Notion with columns: Phase | Task | Owner | Start | Deadline | Status | Notes.",
      "Phases: Planning, Preparation (speakers, content, platform), Promotion, Execution, Evaluation.",
      "Add one Risk Log tab with at least 3 risks — e.g. a speaker cancels, low attendance, platform failure. For each risk, write the impact and the backup plan."
    ]},
    me: { title: "Exercise 3: Daily Report (10 minutes)", items: [
      "Practice writing a short update for your manager in a scannable format: <strong>Update [date]</strong> — Done: ... / In progress: ... / Blocker: ... (help needed: ...) / Tomorrow: ...",
      "Fill it with your own simulated project — not empty, not rambling."
    ]}
  },
  s6: {
    heading: "6. Where to find entry-level remote openings",
    uk: { title: "Local (Indonesia)", items: [
      "<strong>LinkedIn:</strong> filter \"Remote\" + keywords like operations coordinator, project coordinator, management trainee, virtual assistant.",
      "<strong>Glints &amp; Kalibrr:</strong> plenty of trainee and internship positions.",
      "<strong>JobStreet:</strong> filter location \"Remote\"."
    ]},
    us: { title: "Global (usually paid in USD)", items: [
      "We Work Remotely, Remote OK, Himalayas, Working Nomads.",
      "Remote.co and Wellfound — a good fit for startups."
    ]},
    me: { title: "Useful search keywords", items: [
      "operations assistant, project coordinator, program coordinator, customer success associate, business operations intern, executive assistant."
    ]}
  },
  s7: {
    heading: "7. Watch out for job scams",
    items: [
      "Avoid postings that charge registration fees or paid training up front.",
      "Avoid processes that immediately move to Telegram/WhatsApp without a formal interview.",
      "Legitimate companies have a company email address and a clear interview process; check the company name before handing over personal data.",
      "Never send sensitive data (ID numbers, full bank details, passwords) before there is a valid employment agreement."
    ],
    must: "<strong>Rule of thumb:</strong> if you are the one being asked to pay, it is not a job. If the process is rushed and unclear, that is a red flag."
  },
  s8: {
    heading: "8. Daily remote work SOP (what separates professionals)",
    wfTitle: "Daily routine",
    wf: ["Inbox triage: Slack, office WhatsApp, email — log priorities.","Check the board: today's tasks, late ones, stuck ones.","Follow up blockers at the source (vendor/client/team) — don't wait to be chased.","Update documents: meeting notes, timeline, risk log.","Send written updates: the daily report in the Done/In progress/Blocker/Tomorrow format.","Close the day: timesheet, tidy folders, notes for tomorrow."],
    qaTitle: "Checklist before sending a document",
    qa: ["[ ] Every action item has an owner (PIC) and a date","[ ] Every risk has impact + backup plan","[ ] Numbers in the document match the source data (spreadsheet/board)","[ ] Change requests are flagged, never promised directly","[ ] Concise and scannable (30-second scan)","[ ] File naming follows office convention"],
    comTitle: "Communication",
    com: ["Write clearly & briefly; ask about ambiguity before going deep.","Manage time zones: note client/team time zones and agree on overlap hours.","Give proactive updates; don't go silent when blocked — raise the blocker and ask for help.","Record meetings: decisions, action items, who-when, sent right after the meeting."],
    bizTitle: "Business and legal",
    biz: ["Understand your work agreement: scope, work hours, payment clauses (what Net?), scope-change clauses.","Work hours & availability must be explicit — beware 24/7 on-call clauses.","Payments: local bank transfer/currency matters; understand your tax obligations per employment status.","Keep your work documentation (notes, timelines, reports) — it is your performance record at evaluations and in your next job hunt."]
  },
  s9: { heading: "9. Learning list (in priority order)", online: "<strong>Free / online:</strong> official Trello, Asana, and Notion documentation (official tutorials + free templates); basic-to-intermediate Google Sheets; public meeting notes & timeline templates; the Google Project Management Certificate (Coursera, paid but scholarships/audit often available); ops & PM guides on the We Work Remotely/Remote OK blogs.", books: "<strong>Mandatory practice before applying:</strong> one end-to-end simulated project (e.g. planning a 100-person webinar/event): timeline + risk log + meeting notes + daily report. That alone can become the portfolio you attach when applying." },
  s10: { heading: "10. 90-day roadmap", m1: "<strong>Month 1 — Foundations:</strong> master basic Trello/Asana and Notion; Google Sheets (sort, filter, simple pivot); practice writing a daily update every day for two weeks; read 10+ job postings to memorize role keywords.", m2: "<strong>Month 2 — Simulated project:</strong> run one end-to-end simulated project (a 100-person webinar/event over 4 weeks): timeline + risk log + meeting notes + daily report; have a friend play a \"client\" who keeps changing requirements; practice disruption replies (accept/reject/counter in one sentence).", m3: "<strong>Month 3 — Portfolio and applications:</strong> collect the three practice documents in a public Drive/Notion folder; write a LinkedIn summary that mentions written communication skills and tools; start applying on LinkedIn/Glints/Kalibrr/JobStreet (local) and We Work Remotely/Remote OK/Himalayas (global); prepare interview answers: \"tell me how you handled a blocker\" and \"show me your meeting notes\"." }
};
