module.exports = app => {
    const docente = require("../controllers/docente.controller");

    app.post("/docente/nueva_tarea", docente.nueva_tarea);
    app.get("/docente/:cod_Docente/materias", docente.findMaterias);
    app.get("/docente/:cod_Docente/:cod_nivel_educativo/tareas", docente.findTareas);
};