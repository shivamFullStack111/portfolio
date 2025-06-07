const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "shivamtestinghost@gmail.com",
    pass: "cbnfgkjdpgiuseak",
  },
});

const sendMail = async (to, subject, text, html) => {
  const info = await transporter.sendMail({
    from: "shivamtestinghost@gmail.com",
    to: to,
    subject: subject,
    text: text, // plain‑text body
    html: html, // HTML body
  });

  return info;
};

module.exports = { sendMail };
