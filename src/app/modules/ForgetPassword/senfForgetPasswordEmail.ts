import nodemailer from "nodemailer";

export const sendForgetPasswordEmail = async (
  email: string,
  resetCode: string
) => {
  console.log("################################");
  console.log("Email: ", email);
  console.log("Reset Code: ", resetCode);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "aradhyacore.train@gmail.com",
      pass: "jqaw ntao qtqe afel",
    },
  });

  //Send Mail
  await transporter.sendMail({
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    from: "aradhyacore.train@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Reset Password", // Subject line
    text: "Hello Ki Khabor", // plain text body
    html: `<p>Your OTP is <b>${resetCode}</b></p>
    <p style="color: red; font-weight: bold;">Don't share your OTP with anyone.</p>
    <hr>
    <p style="font-size: 12px; color: gray;">Powered by AradhyaCore</p>`, // html body
  });
};
