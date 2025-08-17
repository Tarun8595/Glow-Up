import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const { name, phone, guests, date, time } = await req.json()

  const accountSid = process.env.TWILIO_ACCOUNT_SID!
  const authToken = process.env.TWILIO_AUTH_TOKEN!

  const bodyText = `New Booking:\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}`

  const formData = new URLSearchParams()
  formData.append("To", `whatsapp:${phone}`)         // <-- recipient WhatsApp number
  formData.append("From", "whatsapp:+16084596211") // <-- your Twilio WhatsApp number
  formData.append("Body", bodyText)

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " + Buffer.from(`${accountSid}:${authToken}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    const data = await res.json()
    return Response.json({ success: true, data })
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}