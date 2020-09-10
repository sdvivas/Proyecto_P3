const sql = require("../database.js");

const Edificio = function (edificio) {
    this.cod_edificio = edificio.cod_edificio;
    this.cod_sede = edificio.cod_sede;
    this.nombre = edificio.nombre;
    this.cantidad_pisos = edificio.cantidad_pisos;

};

Edificio.getAll = result => {
    sql.query("SELECT * FROM EDIFICIO", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return
        } else {
            console.log("edficios: ", res);
            result(null, res);
        }
    })
};

Edificio.findById = (codEdificio, result) => {
    sql.query('SELECT * FROM EDIFICIO WHERE COD_EDIFICIO = ?',codEdificio, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Edificio encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({ kind: "not_found" }, null);
        }

    });
};

Edificio.create = (newEdificio, result) => {
    sql.query("INSERT INTO EDIFICIO SET ?", newEdificio, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("Edificio Creada: ", { cod: res.insertCod, ...newEdificio });
            result(null, { cod: res.insertCod, ...newEdificio });
        }

    });
};

Edificio.updateById = (cod, edificio, result) => {
    sql.query(
        "UPDATE EDIFICIO SET COD_SEDE=?, NOMBRE=?, CANTIDAD_PISOS=? WHERE COD_EDIFICIO= ?",
        [edificio.cod_sede, edificio.nombre, edificio.cantidad_pisos, cod],
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
                console.log("Edificio Actualizada: ", { cod: cod, ...edificio });
                result(null, { cod: cod, ...edificio });
            }

        }
    );
};


Edificio.remove = (cod, result) => {
    sql.query("DELETE FROM EDIFICIO WHERE COD_EDIFICIO = ?", cod, (err, res) => {
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



module.exports= Edificio;