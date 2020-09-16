const Asistencia = require('../models/asistencia.model');

exports.findNivel = (req, res) => {
    Asistencia.getNivel((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Algun error ocurrio mientras se recuperada Aula"
            });
        } else {
            res.status(200).send(data);
        }
    });
};