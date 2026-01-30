import { Resend } from 'resend';
import { email_payload } from '../types';

const key = process.env.RESEND_KEY;
const sent_from = process.env.RESEND_FROM;
const receiver = process.env.RESEND_TO!;
const resend = new Resend(key);

export async function sendEmail(_data: email_payload) {
	const email_body = generateContactEmail(_data);
	if (!_data.sender.trim() || !_data.message.trim()) {
		return {
			proceed: false,
			message: 'sender or email message cannot be empty',
		};
	}

	const { data, error } = await resend.emails.send({
		from: sent_from!,
		to: [receiver],
		subject: email_body.subject,
		html: email_body.html,
	});
	if (error) {
		return { message: 'email not sent', proceed: false, error };
	}
	return { message: 'email sent', proceed: true, data };
}

export function generateContactEmail({ sender, message }: email_payload) {
	return {
		subject: 'New Contact Form Message',
		text: `
Someone just reached out via your website.

Sender:
${sender}

Message:
${message}
    `.trim(),

		html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>📩 New Contact Form Message</h2>
        <p><strong>Someone just reached out with the following message</strong></p>

        <p><strong>Sender:</strong><br/>
        ${sender}</p>

        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 12px; color: #555;">
          ${message}
        </blockquote>

        <hr />
        <p style="font-size: 12px; color: #888;">
          This email was generated automatically from your website contact form.
        </p>
      </div>
    `,
	};
}
