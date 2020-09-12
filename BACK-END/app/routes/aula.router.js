
module.exports = app => {
    const aulas = require("../controllers/aula.controller");

    
    app.get("/aulas", aulas.findAll);
    app.get("/aulas/:codAula", aulas.findOne);
    
    // app.post("/aulas", aulas.create);
    
    // app.put("/aulas/:codEdificio", aulas.update);
    // app.delete("/aulas/:codEdificio", aulas.delete);

};