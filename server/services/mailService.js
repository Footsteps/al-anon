import { Resend } from "resend";
import { config } from "../config/config.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({ body, file }) {

  const email = {
    from: config.mail.from,
    to: config.mail.to,
    subject: config.mail.subject,

    text: `
Neue Nachricht

Nachricht:
${body.message || "-"}

Kontakt:
${body.email || "-"}

Titel Roundup:
${body.title || "-"}

Start:
${body.startDate || "-"}

Ende:
${body.endDate || "-"}

Ort:
${body.city || "-"}

Adresse:
${body.address || "-"}

Organisator:
${body.organizer || "-"}

Sprache:
${body.eventLanguage || "-"}

Event-E-Mail:
${body["event-email"] || "-"}

Website:
${body.website || "-"}
`,
  };

  if (file) {
    email.attachments = [
      {
        filename: file.originalname,
        content: file.buffer,
      },
    ];
  }

  const response = await resend.emails.send(email);

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
}
