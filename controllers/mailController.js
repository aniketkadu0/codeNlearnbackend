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
    from: '"Admin" <admin@cceestudy.online>', 
    to: "admin@cceestudy.online", 
    subject: `${req.body.firstName} + ' ' + ${req.body.lastName} commented on your blog`, 
    text: `${req.body.firstName} + ' ' + ${req.body.lastName} commented on ${req.query.title}
           comment : ${req.body.comment}` 
  })
  .then(()=>{
    return res
      .status(200)
      .send({ message: "comment added successfully" });
  })
  .catch(()=>{
    return res
      .status(400)
      .send({ error: "An error has occurred, unable to add comment" });  
  })

}

module.exports = {mailer}
