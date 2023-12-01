var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var nodemailer = require ('nodemailer');
const { acquireConnection } = require('../models/bd');


router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    res.json(novedades);
});

router.post('/contacto', async (req, res, next) => {
    const mail = {
        to:'facutor@gmail.com',
        subject: 'Contacto web',
        html: '${req.body.nombre} se contacto para más info. Su correo es: ${req.body.email}<br> Además, dejo el siguiente comentario: ${req.body,mensaje}<br> Su telefono es: ${req.body.telefono}'
    }
    const transport = nodemailer.createTransport ({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }

    }); 

    await transport.sendMail(mail)

    res.status(201).json ({
        error:false,
        message: 'Mensaje enviado'
    });

});




module.exports = router;