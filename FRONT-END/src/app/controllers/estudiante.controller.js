const Estudiante = require('../models/estudiante.model');

exports.findNotas = (req, res) => {
    Estudiante.buscarNotas(req.params.cod_alumno,req.params.cod_nivel_educativo,req.params.cod_asignatura,(err, data) => {
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

exports.getNivel= (req, res) => {
    Estudiante.getNivelEducativo(req.params.cod_alumno, (err, data) => {
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

exports.getMateriasEstudiante= (req, res) => {
    Estudiante.getMaterias(req.params.cod_alumno, req.params.cod_nivel_educativo,(err, data) => {
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