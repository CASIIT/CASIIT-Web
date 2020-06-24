const nodemailer = require('nodemailer');

function sendEmail(name, email, question) {
    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'usoops05@yahoo.com',
            pass: '556Idsmash'
        }
    });

    var mailOptions = {
        from: 'usoops05@yahoo.com',
        to: 'captainus55@gmail.com',
        subject: 'CASIIT Question - ' + name,
        text: question
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;