import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";

dotenv.config();

const setApiKey = () => sgMail.setApiKey(<string>process.env?.EMAIL_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, companyName, services, message, name } = req.body;
  try {
    setApiKey();
    await sgMail.send({
      from: "oabdulazeez70@gmail.com",
      to: "<abdulazeezolamide50@gmail.com>",
      subject: `Message from ${companyName}`,
      html: `
            <div style="font-size: 0.6rem;>
             <p>
                Hi, my Name is ${name} with the Email Address of: <b>${email}</b>,
                i am from ${companyName}. I need your Service on: <b>${services}</b>.
             </p>
             <p style="font-size: 0.5rem; font-weight: bold;">${message}</p>
            </div>
          `,
      text: "Testing Email",
    });
    console.log("Email has been sent");
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log("Error message");
    res.status(500).json({ error: "Error sending email" });
  }

  console.log("Email shshhshs");
};
