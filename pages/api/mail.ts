// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import config from './config'
import mailService from './mailService'

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const { name, email, message } = req.body
  try {
    await mailService.sendMail({
      to: config.mail.to,
      name: 'Kontaktformular',
      subject: 'Anfrage via Kontaktformular',
      html: `<div><p><b>Von: </b>${name}</b></p>
    <p><b>Email: </b>${email}</b></p>
    <p><b>Anfrage: </b>${message}</b></p></div>`,
    })
  } catch (e) {
    res.status(500).json({ success: false })
    return
  }

  res.status(200).json({ success: true })
}
