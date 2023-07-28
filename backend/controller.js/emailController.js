const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler(async (req, res) => {
  const { data } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:process.env.TRANSPORT_EMAIL,
      pass: process.env.TRANSPORT_PASSWORD,
    }
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log('Message Sent: %s', info.messageId)

  res.json({ success: true, message: "Email sent successfully!" });
});

module.exports = sendEmail;
