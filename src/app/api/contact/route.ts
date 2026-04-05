import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "maddulapurushottama@gmail.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Simple in-memory rate limiting (per IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  return false;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

function buildHtmlEmail(name: string, email: string, subject: string, message: string): string {
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject);
  const safeMessage = sanitize(message).replace(/\n/g, "<br>");
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:8px;">
      <h2 style="color:#4f46e5;margin-top:0;">New Portfolio Contact Message</h2>
      <p style="color:#374151;font-size:15px;">Dear Maddula,</p>
      <p style="color:#374151;font-size:15px;">You have received a new message from your portfolio website.</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><td style="padding:8px 12px;background:#e0e7ff;font-weight:600;color:#3730a3;width:120px;border-radius:4px 0 0 4px;">Name</td><td style="padding:8px 12px;background:#fff;color:#111827;">${safeName}</td></tr>
        <tr><td style="padding:8px 12px;background:#e0e7ff;font-weight:600;color:#3730a3;border-radius:4px 0 0 4px;">Email</td><td style="padding:8px 12px;background:#fff;color:#111827;">${safeEmail}</td></tr>
        <tr><td style="padding:8px 12px;background:#e0e7ff;font-weight:600;color:#3730a3;border-radius:4px 0 0 4px;">Subject</td><td style="padding:8px 12px;background:#fff;color:#111827;">${safeSubject}</td></tr>
      </table>
      <div style="background:#fff;border-radius:6px;padding:16px;border-left:4px solid #4f46e5;">
        <p style="margin:0 0 8px;font-weight:600;color:#374151;">Message:</p>
        <p style="margin:0;color:#374151;line-height:1.6;">${safeMessage}</p>
      </div>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
      <p style="color:#6b7280;font-size:13px;margin:0;">
        This email was sent through your portfolio contact form.<br>
        Reply directly to: <a href="mailto:${safeEmail}" style="color:#4f46e5;">${safeEmail}</a>
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  // Rate limiting by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded ? forwarded.split(",")[0] : "unknown").trim();
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please wait before sending another message." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  // Validate required fields
  if (
    typeof name !== "string" || name.trim().length === 0 ||
    typeof email !== "string" || email.trim().length === 0 ||
    typeof subject !== "string" || subject.trim().length === 0 ||
    typeof message !== "string" || message.trim().length < 10
  ) {
    return Response.json(
      { error: "All fields are required and message must be at least 10 characters." },
      { status: 400 }
    );
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured. Please contact me directly at " + CONTACT_EMAIL },
      { status: 503 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email.trim(),
      subject: `New Portfolio Contact: ${name.trim()} - ${subject.trim()}`,
      html: buildHtmlEmail(name.trim(), email.trim(), subject.trim(), message.trim()),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email. Please try again or contact me directly." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, message: "Email sent successfully! I'll get back to you soon." });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
