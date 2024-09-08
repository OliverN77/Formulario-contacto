//Importaciones necesarias
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar variables de entorno desde .env
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // Habilitar CORS

app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Envío de formulario de contacto desde ${name}`,
        text: `Has recibido un nuevo mensaje de ${name} (${email}):\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado correctamente 👍✅');
    } catch (error) {
        res.status(500).send('Error al enviar email 🖐❌');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${PORT}`);
});