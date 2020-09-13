const sql = require("../database.js");

const Estudiante = function (estudiante) {
    this.cod_alumno = estudiante.cod_alumno;
};


Estudiante.buscarNotas = (cod_alumno,cod_asignatura,cod_quimestre, result) => {
    sql.query("SELECT * FROM ALUMNO_ASIGNATURA_PERIODO WHERE COD_PERIODO_LECTIVO = 'P12020' AND COD_ALUMNO = '6' AND COD_ASIGNATURA = 'AS02' AND COD_QUIMESTRE = '1'", (err, res) => {
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

module.exports= Estudiante;