// @ts-ignore
export default function (req, res) {
  let nodemailer = require('nodemailer');
  // @ts-ignore
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_MAIL_TO,
    subject: `Обратный звонок для ${req.body.name}`,
    text: `
			Требуется обратный звонок для обсуждения условий кейтеринга для:
			
			Имя: ${req.body.name}
			Номер: ${req.body.phone} 
			Почта: ${req.body.email}
			Сообщение: ${req.body.message} \n
			Заявка отправлена в ${new Date().toLocaleString('ru-RU')}
		`,
  };
  // @ts-ignore
  transporter.sendMail(mailData, function (err) {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      res.status(201).json({ success: true });
    }
  });
}
