module.exports = app => {
    const estudiante = require("../controllers/estudiante.controller");

    app.get("/ver_notas/:cod_alumno/:cod_nivel_educativo/:cod_asignatura", estudiante.findNotas);
    app.get("/est/nivel/:cod_alumno", estudiante.getNivel);
    app.get("/est/materias/:cod_alumno/:cod_nivel_educativo", estudiante.getMateriasEstudiante);

};