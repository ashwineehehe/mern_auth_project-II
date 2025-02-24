import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: 'smtp-relay.brevo.com',
    // port: '587',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }

});

export default transporter;
