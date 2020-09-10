
module.exports = app => {
    const edificios = require("../controllers/edficio.controller.js");

    
    app.get("/edificios", edificios.findAll);
    app.get("/edificios/:codEdificio", edificios.findOne);
    
    app.post("/edificios", edificios.create);
    
    app.put("/edificios/:codEdificio", edificios.update);
    // Delete a Customer with customerId
    app.delete("/edificios/:codEdificio", edificios.delete);

};
