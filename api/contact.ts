import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

// Node.js serverless function (works with `npx vercel dev` for Vite projects)
export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("hello world");
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed", ok: false } as const);
  }

  try {
    const { name, phone, email, subject, message } = (req.body ?? {}) as Record<
      string,
      string | undefined
    >;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Missing required fields", ok: false } as const);
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "efg@emerald-financialgroup.com",
      subject: subject || `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${subject ? `Subject: ${subject}` : ""}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email", ok: false } as const);
    }

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully", ok: true });
  } catch (err) {
    console.error("Error processing request:", err);
    return res
      .status(500)
      .json({ error: "Internal server error", ok: false } as const);
  }
}
