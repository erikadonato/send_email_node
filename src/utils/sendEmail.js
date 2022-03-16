var nodemailer = require('nodemailer');

async function sendEmail(mail, title, msg){
  var transporter = nodemailer.createTransport({
    host: '',
    port: 25,
    secure: false,
    auth: '',
    tls:{
        rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: 'seuemail@email.com.br',
    to: mail,
    subject: title,
    html: msg
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports.sendEmail = sendEmail; 