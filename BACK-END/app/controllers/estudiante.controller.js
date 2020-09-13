const Estudiante = require('../models/estudiante.model');

exports.findNotas = (req, res) => {
    Estudiante.buscarNotas(req.params.cod_alumno,req.params.cod_asignatura,req.params.cod_quimestre,(err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Algun error ocurrio mientras se recuperada Edficio"
            });
        } else {
            res.status(200).send(data);
        }
    });
};
