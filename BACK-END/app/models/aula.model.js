const sql = require("../database.js");

const Aula = function (aula) {
    this.cod_aula = aula.cod_aula;
    this.cod_edificio = aula.cod_edificio;
    this.nombre = aula.nombre;
    this.capacidad = aula.capacidad;
    this.tipo = aula.piso;
    this.piso = aula.piso;
};


Aula.getAll = result => {
    sql.query("SELECT * FROM AULA", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return
        } else {
            console.log("aulas: ", res);
            result(null, res);
        }
    })
};

Aula.findById = (codAula, result) => {
    sql.query('SELECT * FROM AULA WHERE COD_AULA = ?', codAula, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Aula encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({ kind: "not_found" }, null);
        }

    });
};


module.exports = Aula;