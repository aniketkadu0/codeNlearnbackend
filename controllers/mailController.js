"use strict";
const nodemailer = require("nodemailer");

async function mailer(req, res, next) {

  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, 
    auth: {
      user: 'admin@cceestudy.online',
      pass: 'Aniket1996@',
    },
  });

  await transporter.sendMail({
    from: `"${req.body.firstName} ${req.body.lastName}" <admin@codenlearn.online>`, 
    to: "comment@codenlearn.online", 
    subject: `${req.body.firstName} ${req.body.lastName} commented on your blog`, 
    html : `<h4>${req.body.firstName} ${req.body.lastName} commented on ${req.query.title}</h4>
            <h4>Email : </h4><a href="mailto:${req.body.email}" target="_blank">${req.body.email}</a>
            <h4>Comment : </h4><p>${req.body.comment}</p>`
  })

}

module.exports = {mailer}
