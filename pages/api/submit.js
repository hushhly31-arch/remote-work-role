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
    const { email, assumptions, asBuiltFindings, qaChecks, files = [], meta = {} } = req.body || {};
    const fileList = Array.isArray(files) ? files : [];
    const attachments = fileList.map((f) => ({
      filename: f.name || 'attachment',
      content: f.content || '',
      type: f.type || 'application/octet-stream',
    }));

    const summary = [
      `Project: AW-2026-047 — Remote Work Training Submission`,
      `Submitted at: ${meta.submittedAt || new Date().toISOString()}`,
      `Time used: ${meta.timeUsed || 'n/a'}`,
      '',
      'Cover Email to PM:',
      email || '(empty)',
      '',
      'Assumptions:',
      assumptions || '(empty)',
      '',
      'As-Built Errors Found:',
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
        subject: `AW-2026-047 Submission${meta.timeUsed ? ` (${meta.timeUsed})` : ''}`,
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
