const Aula = require('../models/aula.model');

exports.findAll = (req, res) => {
    Aula.getAll((err, data) => {
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

exports.findOne = (req, res) => {
    Aula.findById(req.params.codAula, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Aula  no encontrado con el codigo:  ${req.params.codAula}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.params.codAula
                });
            }
        } else {
            res.send(data);
        }
    });
};

