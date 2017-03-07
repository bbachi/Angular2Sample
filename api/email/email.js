var nodemailer = require('nodemailer');

var Email = function() {};

Email.prototype.log = function(logText) {
    console.log('Email Service:::::'+logText);
};

Email.prototype.sendEmail = function(emailOptions){

    var module = emailOptions.module;
    if(module == 'contactus') {
            mailOptions = {
            from: 'Ravecrate Support team <appprojectify@gmail.com>', // sender address
            to: emailOptions.fromEmail, // list of receivers
            subject: 'Ravecrate Support team', // Subject line
            html: '<p>Your email has been received. our support team will contact you.</p>' // html body
        };
    }else{
        mailOptions = {
            from: '<appprojectify@gmail.com>', // sender address
            to: emailOptions.toEmail, // list of receivers
            subject: 'Ravecrate Password Asistance', // Subject line
            html: '<h1>Your Ravecrate password has been reset<h1><br><br><p>Please click below link to rest your password</p><br><br><a href="www.ravecrate.com">link to rest password</a>' // html body
        };
    }

    console.log('mail options:::::::'+JSON.stringify(mailOptions));

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'appprojectify@gmail.com',
        pass: 'Tester123'
    }
});

// setup email data with unicode symbols
var createMailOptions = function(options) {
    console.log('in create ');
    let toEmail = '';
    if(null != options && undefined != options){
        let toEmail = options.toEmail;
        for(var i=0; i<toEmail.length; i++){
            toEmail += toEmail[i];
        }
        console.log('created to email::::::: '+ toEmail);
    }
    return mailOptions;
}


module.exports = new Email();