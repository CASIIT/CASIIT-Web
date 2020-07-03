const nodemailer = require('nodemailer');

module.exports = {
    sEmail: function (name, email, question) {
        var transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: 'usoops05@yahoo.com',
                pass: 'qeihulxgobufacpz'
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
}