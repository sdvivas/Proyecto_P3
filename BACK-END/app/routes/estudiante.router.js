module.exports = app => {
    const estudiante = require("../controllers/estudiante.controller");

    app.get("/ver_notas/:cod_alumno/:cod_asignatura/:cod_quimestre", estudiante.findNotas);

};