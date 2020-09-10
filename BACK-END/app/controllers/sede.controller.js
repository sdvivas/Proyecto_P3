const Sede = require('../models/sede.model.js');

exports.findAll = (req, res) => {
    Sede.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Algun error ocurrio mientras se recuperada Sedes"
            });
        } else {
            res.status(200).send(data);
        }
    });
};

exports.findOne = (req, res) => {
    Sede.findById(req.params.codSede, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Sede  no encontrada con el codigo:  ${req.params.codSede}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar sede con id " + req.params.codSede
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

    const sede = new Sede({
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        codigo_postal: req.body.codigo_postal

    });

    Sede.create(sede, (err, data) => {
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

    //console.log(req.body);

    Sede.updateById(
        req.params.codSede,
        new Sede(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se se encuentra la sede con el id: ${req.params.codSede}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar sede con el id " + req.params.codSede
                    });
                }
            } else {
                res.send(data);
            }

        }
    );
};


exports.delete = (req, res) => {
    Sede.remove(req.params.codSede, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se se encuentra la sede con el id ${req.params.codSede}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo borrar la Sede con el  id " + req.params.codSede
                });
            }
        } else {
            res.send({ message: `Sede fue borrado satisfactoriamente!` });
        }
    });
};
