const sql = require("../database.js");

const Sede = function (sede) {
    this.cod_sede = sede.cod_sede;
    this.nombre = sede.nombre;
    this.direccion = sede.direccion;
    this.telefono = sede.telefono;
    this.codigo_postal = sede.codigo_postal;
};

Sede.getAll = result => {
    sql.query("SELECT * FROM SEDE", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        } else {
            console.log("sedes: ", res);
            result(null, res);
        }

    });
};

Sede.findById = (codSede, result) => {
    sql.query(`SELECT * FROM SEDE WHERE COD_SEDE = '${codSede}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Sede encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({ kind: "not_found" }, null);
        }

    });
};

Sede.create = (newSede, result) => {
    sql.query("INSERT INTO SEDE SET ?", newSede, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("Sede Creada: ", { codEmployee: res.insertCod, ...newSede });
            result(null, { codEmployee: res.insertCod, ...newSede });
        }

    });
};


Sede.updateById = (cod, sede, result) => {
    sql.query(
        "UPDATE SEDE SET NOMBRE=?, DIRECCION=?, TELEFONO=?, CODIGO_POSTAL=? WHERE COD_SEDE= ?",
        [sede.nombre, sede.direccion, sede.telefono, sede.codigo_postal, cod],
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
                console.log("Sede Actualizada: ", { cod: cod, ...sede });
                result(null, { cod: cod, ...sede });
            }

        }
    );
};

Sede.remove = (cod, result) => {
    sql.query("DELETE FROM SEDE WHERE COD_SEDE = ?", cod, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        } else {
            console.log("deleted employee with cod: ", cod);
            result(null, res);
        }
    });
};

module.exports = Sede;