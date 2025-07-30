import { sendEmail } from "../utils/sendMail";

//Send Mail
const sendMailService = async (mailData: any) => {
  console.log("----------------------------");
  console.log("Mail Data: ", mailData);
  const { name, email, phone, subject, message } = mailData;
  console.log("Mail Data: ", mailData);
  await sendEmail(name, email, phone, subject, message);
  const result = {};
  return result;
};

export const MailService = {
  sendMailService,
};
