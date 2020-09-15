const sql = require("../database.js");

const Aula = function (aula) {
    this.cod_aula = aula.COD_AULA;
    this.cod_edificio = aula.COD_EDIFICIO;
    this.nombre = aula.NOMBRE;
    this.capacidad = aula.CAPACIDAD;
    this.tipo = aula.TIPO;
    this.piso = aula.PISO;
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

Aula.create = (newAula, result) => {
    sql.query("INSERT INTO AULA SET ?", newAula, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("Aula Creada: ", {newAula });
            result(null, {newAula });
        }

    });
};

Aula.updateById = (cod, aula, result) => {
    sql.query(
        "UPDATE AULA SET COD_EDIFICIO=?, NOMBRE=?, CAPACIDAD=?, TIPO=?, PISO=? WHERE COD_AULA= ?",
        [aula.cod_edificio, aula.nombre, aula.capacidad, aula.tipo, aula.piso, cod],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            } else {
                console.log("aula Actualizada: ", { aula });
                result(null, { aula });
            }

        }
    );
};


Aula.remove = (cod, result) => {
    sql.query("DELETE FROM AULA WHERE COD_AULA = ?", cod, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        } else {
            console.log("aula eliminada con el codigo: ", cod);
            result(null, res);
        }
    });
};



module.exports = Aula;