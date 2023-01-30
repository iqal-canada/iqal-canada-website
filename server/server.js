import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Server is listening to Port ${PORT}`))

app.use(express.static('../public'))

app.post('/sendmail', (req, res) => {
  const message = {
    from: 'sujaigorai544@mail.com',
    to: 'print.online544@gmail.com',
    subject: 'test message',
    text: 'testing fist message',
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'sujaigorai544@gmail.com', // generated ethereal user
      pass: '', // generated ethereal password
    },
  })

  transporter.sendMail(message, (err) => {
    if (err) {
      console.log('failed', err.message)
      return
    }
    console.log('message send successfully')
  })
})
