import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Use 465 for secure connection (secure: true)
  secure: false, // Use true for port 465, false for 587
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  logger: true,
});

export default transporter;