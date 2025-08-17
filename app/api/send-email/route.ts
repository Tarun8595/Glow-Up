import { NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, message } = body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tarunkhuswaha456@gmail.com",
      pass: "tier oaal dioz zvdj",
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: "tarunkhuswaha456@gmail.com",
      subject: `Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    })
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 })
  }
}