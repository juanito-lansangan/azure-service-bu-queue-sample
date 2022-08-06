const nodemailer = require("nodemailer");

module.exports = async function (context, queueData) {
  context.log(
    "JavaScript ServiceBus queue trigger function processed message",
    queueData
  );
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9628123f9032d7",
      pass: "d679ba6c6b212e",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: queueData.email, // list of receivers
    subject: `Hello ${queueData.name} ✔`, // Subject line
    text: `Hello ${queueData.name}`, // plain text body
    html: `<b>${queueData.message}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
