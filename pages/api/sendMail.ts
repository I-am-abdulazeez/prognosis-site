import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    port: 465,
    host: "gmail",
    auth: {
      user: "oabdulazeez70@gmail.com",
      pass: "olanrewaju@12",
    },
    secure: true,
  });
  const { email, companyName, service, message, name } = req.body;

  console.log(req.body);

  // const mailData = {
  //   from: "oabdulazeez70@gmail.com",
  //   to: "abdulazeezolamide50@gmail.com",
  //   subject: `Message From ${name}. from ${companyName}`,
  //   text: message + " | Sent from: " + email,
  //   html: `<div>${message}</div>
  //   <p>Sent from:${email}. we want so and so ${service}</p>`,
  // };
  // transporter.sendMail(mailData, (err: any, info: any) => {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });
  // res.status(200);
  // try {
  //   setApiKey();
  //   await sgMail.send({
  //     to: "<abdulazeezolamide50@gmail.com>",
  //     from: "oabdulazeez70@gmail.com",
  //     subject: `Message from ${companyName}`,
  //     html: `
  //           <div style="font-size: 0.6rem;>
  //            <p>
  //               Hi, my Name is ${name} with the Email Address of: <b>${email}</b>,
  //               i am from ${companyName}. I need your Service on: <b>${services}</b>.
  //            </p>
  //            <p style="font-size: 0.5rem; font-weight: bold;">${message}</p>
  //           </div>
  //         `,
  //     text: "Testing Email",
  //   });
  //   res.json({ message: `Email has been sent` });
  // } catch (error) {
  //   res.status(500).json({ error: "Error sending email" });
  // }
};
