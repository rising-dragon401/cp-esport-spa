import { Request, Response } from "express";
import sgMail from '@sendgrid/mail';

interface MailMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
}

const sendMail = async (message: MailMessage) => {
  sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);
  return sgMail.send(message);
};


export default async (req: Request, res: Response) => {
  const { emailAddress } = req.body;

  try {
    const subject = 'Route Runners Terms and Conditions';
    const emailData = {
      to: emailAddress,
      from: `${process.env.SENDER_EMAIL}`,
      subject,
      html: `
        This is the Route Runners Terms and Conditions email by ${emailAddress} request
      `
    };
    await sendMail(emailData);

    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error processing charge`);
  }
};
