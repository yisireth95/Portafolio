const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Puedes cambiar el puerto si es necesario

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configura el transportador de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar otro servicio de correo si lo prefieres
  auth: {
    user: 'yisireth2602@gmail.com', // Tu correo de Gmail
    pass: 'Mathias2602*', // Tu contraseña de correo o contraseña de aplicación
  },
});

// Ruta para enviar el mensaje
app.post('/send-message', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const mailOptions = {
    from: email, // El correo del remitente
    to: 'yisireth2602@gmail.com', // El correo al que enviarás el mensaje
    subject: subject,
    text: `De: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
    return res.status(200).json({ success: 'Mensaje enviado con éxito' });
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
