import nodemailer from "nodemailer";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const { senderMail, name, content } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // replace with your email provider
    port: 587,
    auth: {
      user: "user@example.com", // replace with your email
      pass: "password", // replace with your password
    },
  });

  try {
    await transporter.sendMail({
      from: senderMail,
      to: "receiver@example.com", // replace with your email
      subject: `New message from ${name}`,
      text: content,
    });

    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing charge");
  }
};
