import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL_GOOGLE,
      pass: process.env.PASSWORD_GOOGLE,
    },
  })
  const mailData = {
    from: req.body.email,
    to: "martinpilaszek@gmail.com",
    name: req.body.name,
    text: req.body.msg,
    html: `
      <div>
        <h1>Nombre: ${req.body.name}</h1>
        <h1>Email: ${req.body.email}</h1>
        <p>Mensaje: ${req.body.msg}</p>
      </div>
    `,
  }
  console.log(req.body, mailData)
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err)
      res.status(400).send("Error")
      res.end()
    } else {
      console.log(info)
      res.status(200).send("Sent")
      res.end()
    }
  })
}
