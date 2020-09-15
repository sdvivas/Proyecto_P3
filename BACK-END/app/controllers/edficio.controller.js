const Edificio = require('../models/edificio.model');

exports.findAll = (req, res) => {
    Edificio.getAll((err, data) => {
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


exports.findOne = (req, res) => {
    Edificio.findById(req.params.codEdificio, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Edificio  no encontrado con el codigo:  ${req.params.codEdificio}.`
                });
                // res.send("Edificio  no encontrado")
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.params.codEdificio
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

    const edificio = new Edificio({

        COD_EDIFICIO: req.body.COD_EDIFICIO,
        COD_SEDE: req.body.COD_SEDE,
        NOMBRE: req.body.NOMBRE,
        CANTIDAD_PISOS: req.body.CANTIDAD_PISOS

    });

    Edificio.create(edificio, (err, data) => {
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
            message: "Conteniedo no puede estar vacio!"
        });
    }

    Edificio.updateById(
        req.params.codEdificio,
        new Edificio(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se se encuentra el edificio con el codigo: ${req.params.codEdificio}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar edificio con el codigo " + req.params.codEdificio
                    });
                }
            } else {
                res.send(data);
            }

        }
    );
};

exports.delete = (req, res) => {
    Edificio.remove(req.params.codEdificio, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se se encuentra el edificio con el codigo ${req.params.codEdificio}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo borrar el Edificio con el  codigo " + req.params.codEdificio
                });
            }
        } else {
            res.send({ message: `Edificio fue borrado satisfactoriamente!` });
        }
    });
};


