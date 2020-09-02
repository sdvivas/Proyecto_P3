
module.exports = app => {
    const sedes = require("../controllers/sede.controller.js");

    // Retrieve all sedes
    app.get("/sedes", sedes.findAll);
    // Retrieve a single Customer with customerId
    app.get("/sedes/:codSede", sedes.findOne);
    // Create a new Customer
    app.post("/sedes", sedes.create);
    // Update a Customer with customerId
    app.put("/sedes/:codSede", sedes.update);
    // Delete a Customer with customerId
    app.delete("/sedes/:codSede", sedes.delete);



};
