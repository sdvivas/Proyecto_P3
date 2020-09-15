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

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Conteniedo no puede estar vacio!"
        });
    }

    const aula = new Aula({

        COD_AULA : req.body.COD_AULA,
        COD_EDIFICIO: req.body.COD_EDIFICIO,
        NOMBRE: req.body.NOMBRE,
        CAPACIDAD : req.body.CAPACIDAD,
        TIPO : req.body.TIPO,
        PISO : req.body.PISO

    });

    Aula.create(aula, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Sede."
            });
        } else {
            res.status(201).send(data);
        }
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Contenido no puede estar vacio!"
        });
    }

    Aula.updateById(
        req.params.codAula,
        new Aula(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se se encuentra el aula con el id: ${req.params.codAula}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar aula con el id " + req.params.codAula
                    });
                }
            } else {
                res.send(data);
            }

        }
    );
};

exports.delete = (req, res) => {
    Aula.remove(req.params.codAula, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se se encuentra el aula con el codigo: ${req.params.codAula}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo borrar el aula con el codigo:" + req.params.codAula
                });
            }
        } else {
            res.send({ message: "Aula fue borrado satisfactoriamente!" });
        }
    });
};

