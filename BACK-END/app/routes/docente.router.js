module.exports = app => {
    const docente = require("../controllers/docente.controller");

    app.post("/docente/nueva_tarea", docente.nueva_tarea);
    app.get("/docente/:cod_Docente/materias", docente.findMaterias);
    app.get("/docente/:cod_Docente/:cod_nivel_educativo/tareas", docente.findTareas);
    app.get("/docente/nivel/:cod_docente", docente.findNivelDocente);
    app.get("/docente/paralelo/:cod_docente", docente.listParalelo);
    app.get("/docente/asignatura/:cod_docente/:cod_paralelo", docente.listMaterias);
    app.get("/docente/estudiantes/:cod_docente/:cod_asignatura/:cod_paralelo/:cod_nivel_educativo", docente.listEstudiante);
    app.get("/docente/materias/:cod_nivel_educativo/:cod_docente", docente.findMateriasDocente);
    app.put("/docente/nota", docente.updateNota);
};