const environment = process.env.NODE_ENV || 'development'

const config = {
  environment,

  mail: {
    to: process.env.MAIL_TO || 'contact@coderain.at',
    from: process.env.MAIL_FROM || 'contact@coderain.at',
    host: process.env.MAIL_HOST || 'mailhog',
    port: parseInt(process.env.MAIL_PORT || '1025', 10),
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PWD,
    },
  },
}
export default config
