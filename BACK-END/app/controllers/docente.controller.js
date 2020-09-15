const Tarea_Asignatura = require('../models/docente.model');

exports.nueva_tarea = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Conteniedo no puede estar vacio!"
        });
    }

    const nueva_tarea = new Tarea_Asignatura({

        cod_tarea_asigntatura: req.body.COD_TAREA_ASIGNATURA,
        cod_nivel_educativo: req.body.COD_NIVEL_EDUCATIVO,
        cod_asignatura: req.body.COD_ASIGNATURA,
        cod_periodo_lectivo: req.body.COD_PERIODO_LECTIVO,
        cod_paralelo: req.body.COD_PARALELO,
        cod_docente: req.body.COD_DOCENTE,
        cod_quimestre: req.body.COD_QUIMESTRE,
        detalle_tarea: req.body.DETALLE_TAREA
    });

    Tarea_Asignatura.insertar_tarea(nueva_tarea, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sede."
            });
        } else {
            res.status(201).send(data);
        }
    });
};

exports.findMaterias = (req, res) => {
    
    Tarea_Asignatura.buscarMaterias(req.body.cod_Docente, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.params.cod_Docente}.`
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
exports.findTareas = (req, res) => {
    Tarea_Asignatura.buscarTareas(req.params.cod_Docente, req.params.cod_nivel_educativo, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.params.cod_Docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.params.cod_Docente
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.findNivelDocente = (req, res) => {
    Tarea_Asignatura.buscarNivelDocente(req.params.cod_docente, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.params.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.params.cod_docente
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.findMateriasDocente = (req, res) => {
    Tarea_Asignatura.buscarMateriasDocente(req.params.cod_docente, req.params.cod_nivel_educativo, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.params.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.params.cod_docente
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.listMaterias = (req, res) => {
    Tarea_Asignatura.listarMaterias(req.body.cod_docente, req.body.cod_paralelo, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.body.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.body.cod_docente
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.listEstudiante = (req, res) => {
    Tarea_Asignatura.listarEstudiante(req.body.cod_docente, req.body.cod_asignatura, req.body.cod_paralelo, req.body.cod_nivel_educativo, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.body.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.body.cod_docente
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.listParalelo = (req, res) => {
    Tarea_Asignatura.listarParalelo(req.body.cod_docente, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Docente  no encontrado con el codigo:  ${req.body.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar edficio con id " + req.body.cod_docente
                });
            }
        } else {
            res.send(data);
        }
    });
};