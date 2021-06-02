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
      to: "<abdulazeezolamide50@gmail.com>",
      from: "oabdulazeez70@gmail.com",
      subject: companyName,
      html: `
            <div>
              ${email} - ${name} - ${services} - ${message}
            </div>
          `,
      text: "Testing Email",
    });
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
