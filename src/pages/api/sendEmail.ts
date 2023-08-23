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
  const { firstName, lastName, emailAddress, phoneNumber, mailingAddress, anticipatedStartingSemester, bachelorOfArt, bachelorOfScience, associateOfArt, certificateProgram, masterProgram, graduateCertificate, levelOfEducation, priorCollegeAttendance, financialAid, veteran, heardAboutUs, comments } = req.body;

  try {
    const html = `
      This is the Route Runners Terms and Conditions email by ${emailAddress} request
      <br /><br />
      <b>First Name:</b> ${firstName} <br />
      <b>Last Name:</b> ${lastName} <br />
      <b>Email Address:</b> ${emailAddress} <br />
      <b>Phone number:</b> ${phoneNumber} <br />
      <b>Mailing Address:</b> ${mailingAddress} <br />
      <b>Anticipated Starting Semester:</b> ${anticipatedStartingSemester} <br />
      <b>Bachelor of Art:</b> ${bachelorOfArt} <br />
      <b>Bachelor of Science:</b> ${bachelorOfScience} <br />
      <b>Associate of Art:</b> ${associateOfArt} <br />
      <b>Certificate Program:</b> ${certificateProgram} <br />
      <b>Master's Programs:</b> ${masterProgram} <br />
      <b>Graduate Certificates:</b> ${graduateCertificate} <br />
      <b>Level of Education:</b> ${levelOfEducation} <br />
      <b>Prior College Attendance (If applicable):</b> ${priorCollegeAttendance} <br />
      <b>Do you intend to apply for financial aid (U.S. Citizens only)?:</b> ${financialAid} <br />
      <b>Are you a veteran?:</b> ${veteran} <br />
      <b>How did you hear about us?:</b> ${heardAboutUs} <br />
      <b>Comments/Questions:</b> ${comments} <br />
    `;
    const subject = 'Route Runners Terms and Conditions';
    const emailData = {
      to: `${process.env.RECEIVER_EMAIL}`,
      from: `${process.env.SENDER_EMAIL}`,
      subject,
      html
    };
    await sendMail(emailData);

    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.log(JSON.stringify(err));
    console.error(err);
    res.status(500).send(`Error processing charge`);
  }
};
