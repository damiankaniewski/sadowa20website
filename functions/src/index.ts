/* eslint-disable */

import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

// Konfiguracja transportera SMTP

const transporter = nodemailer.createTransport({
  host: 'smtp.poczta.onet.pl', // Adres serwera SMTP
  port: 465, // Port SMTP (często 587 dla STARTTLS, 465 dla SSL/TLS)
  secure: true, // Set to true if using port 465 or if using TLS
  auth: {
    user: functions.config().smtp.email, // Twój email
    pass: functions.config().smtp.password, // Twoje hasło
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Główna funkcja, która będzie wysyłała maile
export const sendContactEmail = functions.https.onCall(
  async (data, context) => {
    if (!data.email || !data.name || !data.phone || !data.message) {
      return { success: false, error: 'Missing required fields' };
    }

    const mailOptions = {
      from: data.email,
      to: 'damian.kaniewski.contact@gmail.com',
      subject: `Sadowa 20 - zapytanie od ${data.name}`,
      text: `Imię: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone}\nWiadomość: ${data.message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error('Failed to send email:', errorMessage);
      return { success: false, error: errorMessage };
    }
  }
);
