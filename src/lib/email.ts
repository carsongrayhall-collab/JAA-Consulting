import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export async function sendContactEmail(payload: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  company?: string;
  metadata: string;
}) {
  const resend = getResend();
  const from = process.env.CONTACT_FROM_EMAIL ?? "Carson Hall <jaa-development@tryresumeflow.com>";
  const to = process.env.CONTACT_TO_EMAIL ?? "carson.gray.hall@gmail.com";

  return resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `New J A Andrews enquiry from ${payload.firstName} ${payload.lastName}`,
    text: [
      `Timestamp: ${new Date().toISOString()}`,
      `First name: ${payload.firstName}`,
      `Last name: ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company ?? "Not provided"}`,
      "",
      payload.message,
      "",
      payload.metadata
    ].join("\n")
  });
}
