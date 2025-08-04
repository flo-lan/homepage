import nodemailer from 'nodemailer'

import config from './config'

class MailService {
  transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.mail.host,
      port: config.mail.port,
      secure: config.mail.secure,
      auth: {
        user: config.mail.auth.user,
        pass: config.mail.auth.pass,
      },
    })
  }

  async sendMail({
    to,
    name,
    subject,
    html,
  }: {
    to: string
    subject: string
    name: string
    html: string
  }) {
    const mailOptions = {
      from: {
        name: name || 'Coderain Software Solutions',
        address: config.mail.from,
      },
      to,
      subject,
      html,
    }
    return this.transporter.sendMail(mailOptions)
  }
}

export default new MailService()
