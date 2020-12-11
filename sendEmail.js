const nodemailer = require('nodemailer');

module.exports = {
    sEmail: function(name, email, question) {
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

        let emailResult;
        return transporter.sendMail(mailOptions) //, function(error, info) {
            //     if (error) {
            //         console.log(error);
            //         emailResult = { code: -11, message: "Email Send Failure" };
            //     } else {
            //         console.log('Email sent: ' + info.response);
            //         emailResult = { code: 250, message: "Sent succesfully" };
            //         console.log("First emailResult log");
            //         console.log(emailResult);
            //     }
            // });

        // console.log("second emailResult log");
        // console.log(emailResult);

        // return emailResult;

    }
}