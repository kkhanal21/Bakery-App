var nodemailer = require('nodemailer');
var service = {};
service.mail = sendMail;
service.attachment = sendAttachment;

module.exports = service;

function sendMail() {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'kml.khanal21@gmail.com',
            pass: '9803052784kK'
        }
    });

    var mailOptions = {
        from: 'kml.khanal21@gmail.com',
        to: 'k.khanal21@gmail.com',
        subject: 'Sending Email using Node.js',

        text: 'hello bro,how are you? This is sample attachment mail from node!!!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function sendAttachment() {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'kml.khanal21@gmail.com',
            pass: '9803052784kK'
        }
    });

    var mailOptions = {
        from: 'kml.khanal21@gmail.com',
        to: 'puzansakya@gmail.com',
        subject: 'Sending Email using Node.js',
        attachments: [
            {

                // filename and content type is derived from path
                path: './pic/file_1514491002670_blob.jpg'

            }
        ],
        text: 'hello bro,how are you? This is sample attachment mail from node!!!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}