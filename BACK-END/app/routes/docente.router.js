module.exports = app => {
    const docente = require("../controllers/docente.controller");

    app.post("/nueva_tarea", docente.nueva_tarea);

};