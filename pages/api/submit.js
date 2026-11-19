export const config = {
  api: {
    bodyParser: {
      sizeLimit: '25mb',
    },
  },
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.SUBMIT_TO_EMAIL || 'shafiradev62@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured' });
  }

  try {
    const { email, assumptions, asBuiltFindings, qaChecks, files = [], meta = {}, meetingNotes = {}, timeline = {}, dailyReport = {} } = req.body || {};
    const fileList = Array.isArray(files) ? files : [];
    const attachments = fileList.map((f) => ({
      filename: f.name || 'attachment',
      content: f.content || '',
      type: f.type || 'application/octet-stream',
    }));

    const actionItemLines = Array.isArray(meetingNotes.actionItems)
      ? meetingNotes.actionItems.map((a, i) => `  ${i + 1}. [${a.owner || '-'}] ${a.task || '-'} — deadline: ${a.deadline || '-'}`).join('\n')
      : '';
    const timelineLines = Array.isArray(timeline.rows)
      ? timeline.rows.map((r, i) => `  ${i + 1}. [${r.phase || '-'}] ${r.task || '-'} | PIC: ${r.owner || '-'} | ${r.start || '-'} → ${r.deadline || '-'} | ${r.status || '-'}${r.notes ? ' | ' + r.notes : ''}`).join('\n')
      : '';
    const riskLines = Array.isArray(timeline.riskLog)
      ? timeline.riskLog.map((r, i) => `  ${i + 1}. ${r.risk || '-'} | dampak: ${r.impact || '-'} | cadangan: ${r.backup || '-'} | PIC: ${r.owner || '-'}`).join('\n')
      : '';

    const summary = [
      `Project: TDA-2026-012 — Remote Work Training Submission`,
      `Submitted at: ${meta.submittedAt || new Date().toISOString()}`,
      `Time used: ${meta.timeUsed || 'n/a'}`,
      '',
      '=== 1. MEETING NOTES — WEEKLY SYNC KLIEN A ===',
      `Tanggal & peserta: ${meetingNotes.dateParticipants || '(empty)'}`,
      '',
      'Keputusan:',
      meetingNotes.decisions || '(empty)',
      '',
      'Action items:',
      actionItemLines || '(none)',
      '',
      'Risiko/catatan:',
      meetingNotes.risks || '(empty)',
      '',
      '=== 2. TIMELINE PROYEK WEBINAR KLIEN B ===',
      'Timeline (Fase | Task | PIC | Mulai | Deadline | Status | Catatan):',
      timelineLines || '(none)',
      '',
      'Risk log:',
      riskLines || '(none)',
      '',
      '=== 3. UPDATE HARIAN ===',
      `Selesai: ${dailyReport.done || '(empty)'}`,
      `Sedang jalan: ${dailyReport.inProgress || '(empty)'}`,
      `Blocker: ${dailyReport.blocker || '(empty)'}`,
      `Besok: ${dailyReport.tomorrow || '(empty)'}`,
      '',
      '=== 4. EMAIL RINGKASAN KE MANAJER ===',
      email || '(empty)',
      '',
      '=== 5. CATATAN & ASUMSI ===',
      assumptions || '(empty)',
      '',
      '=== 6. TEMUAN DATA SPREADSHEET ===',
      asBuiltFindings || '(empty)',
      '',
      'QA checks completed:',
      String(meta.qaCheckedCount ?? ''),
      '',
      'Files:',
      fileList.length ? fileList.map((f) => `- ${f.name} (${f.size || 0} bytes)`).join('\n') : '(none)',
    ].join('\n');

    const html = `<pre style="font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap">${summary.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</pre>`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Remote Work Training <onboarding@resend.dev>',
        to: [TO_EMAIL],
        subject: `TDA-2026-012 Submission${meta.timeUsed ? ` (${meta.timeUsed})` : ''}`,
        text: summary,
        html,
        attachments,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return res.status(response.status).json({ error: data?.message || data?.error || 'Failed to send email', details: data });
    }

    return res.status(200).json({ ok: true, id: data.id || null });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
