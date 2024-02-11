const nodemailer = require("nodemailer");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  //authorization for sending email
  let transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
