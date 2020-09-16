
module.exports = app => {
    const asistencia = require("../controllers/asistencia.controller.js");

    // Retrieve all sedes
    app.get("/alumnos:", asistencia.findNivel);
    // // Retrieve a single Customer with customerId
    // app.get("/sedes/:codSede", sedes.findOne);
    // // Create a new Customer
    // app.post("/sedes", sedes.create);
    // // Update a Customer with customerId
    // app.put("/sedes/:codSede", sedes.update);
    // // Delete a Customer with customerId
    // app.delete("/sedes/:codSede", sedes.delete);

};
