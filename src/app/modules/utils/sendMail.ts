import nodemailer from "nodemailer";
export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "web.sarkarnayan@gmail.com",
      pass: "fcwo hkde opgk amhw",
    },
  });

  // Format the HTML body with name, phone, etc.
  const htmlContent = `
    <h3>New Message Received</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `;

  await transporter.sendMail({
    // from: `${email}`,
    // from: `"${name}" <web.sarkarnayan@gmail.com>`,
    from: `${name}`,
    to: "web.sarkarnayan@gmail.com",
    subject: `${subject}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    html: htmlContent,
  });
};
