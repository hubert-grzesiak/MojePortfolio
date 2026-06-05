"use server";

import { Resend } from "resend";

// Inicjalizacja klienta Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Definicja typu danych, które przychodzą z formularza
interface ContactFormData {
  name: string;
  email: string;
  subject: string; // To jest Twoje "How to reach out to you back?"
  message: string;
  confirmEmail?: string; // Honeypot field
}

export const sendContactEmailAction = async (data: ContactFormData) => {
  const { name, email, subject, message, confirmEmail } = data;

  try {
    // Honeypot check
    if (confirmEmail) {
      return { success: true }; // Silently fail for bots
    }

    // Prosta walidacja serwerowa
    if (!name || !email || !message || !subject) {
      return { success: false, error: "Wypełnij wszystkie pola." };
    }

    await resend.emails.send({
      // WAŻNE: Użyj 'onboarding@resend.dev' jeśli nie masz zweryfikowanej własnej domeny
      from: "onboarding@resend.dev",
      
      // Twój adres email, na który mają przychodzić wiadomości
      to: "hubertgrzesiak.dev@gmail.com",
      
      // Dzięki temu klikając "Odpowiedz" w Gmailu, odpiszesz nadawcy
      replyTo: email,
      
      subject: `Portfolio: Wiadomość od ${name}`,
      
      // Prosty szablon HTML wiadomości
      html: `
        <div style="font-family: sans-serif; font-size: 16px; color: #333;">
          <h2>Nowa wiadomość z formularza kontaktowego</h2>
          <p><strong>Od:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Preferowany kontakt (Subject):</strong> ${subject}</p>
          <hr />
          <h3>Wiadomość:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Błąd wysyłania maila:", error);
    return { success: false, error: "Wystąpił błąd podczas wysyłania wiadomości." };
  }
};