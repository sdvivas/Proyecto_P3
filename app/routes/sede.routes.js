
module.exports = app => {
    const sedes = require("../controllers/sede.controller.js");

    // Retrieve all sedes
    app.get("/sedes", sedes.findAll);
    // Retrieve a single Customer with customerId
    app.get("/sedes/:codSede", sedes.findOne);


};
