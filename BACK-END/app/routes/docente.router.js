module.exports = app => {
    const docente = require("../controllers/docente.controller");

    app.post("/docente/nueva_tarea", docente.nueva_tarea);
    app.get("/docente/:cod_Docente/materias", docente.findMaterias);
    app.get("/docente/:cod_Docente/:cod_nivel_educativo/tareas", docente.findTareas);
    app.get("/docente/nivel/:cod_docente", docente.findNivelDocente);
    app.get("/docente/materias/:cod_nivel_educativo/:cod_docente", docente.findMateriasDocente);
};