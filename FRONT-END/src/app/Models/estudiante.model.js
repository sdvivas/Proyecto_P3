const sql = require("../database.js");

const Estudiante = function (estudiante) {
    this.cod_alumno = estudiante.cod_alumno;
};


Estudiante.buscarNotas = (cod_alumno,cod_nivel_educativo,cod_asignatura, result) => {
    sql.query(`SELECT * FROM ALUMNO_ASIGNATURA_PERIODO WHERE COD_PERIODO_LECTIVO = `+
    ` 'P12020' AND COD_ALUMNO = '${cod_alumno}' AND COD_ASIGNATURA = '${cod_asignatura}' AND COD_NIVEL_EDUCATIVO = '${cod_nivel_educativo}' `+
    `  AND COD_QUIMESTRE = 1 `, (err, res) => {
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

Estudiante.getNivelEducativo = (cod_alumno, result) => {
    sql.query(`SELECT ASP.COD_NIVEL_EDUCATIVO, NIVEL.NOMBRE FROM ALUMNO_ASIGNATURA_PERIODO ASP `+
    ` INNER JOIN NIVEL_EDUCATIVO NIVEL ON ASP.COD_NIVEL_EDUCATIVO = NIVEL.COD_NIVEL_EDUCATIVO  `+
    `  WHERE ASP.COD_ALUMNO = '${cod_alumno}'  GROUP BY ASP.COD_NIVEL_EDUCATIVO `, (err, res) => {
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

Estudiante.getMaterias = (cod_alumno, cod_materia,  result) => {
    sql.query(`SELECT ASP.COD_ASIGNATURA, ASI.NOMBRE FROM ALUMNO_ASIGNATURA_PERIODO ASP  `+
    ` INNER JOIN ASIGNATURA ASI ON ASP.COD_ASIGNATURA = ASI.COD_ASIGNATURA   `+
    `  WHERE ASP.COD_ALUMNO = '${cod_alumno}' AND ASP.COD_NIVEL_EDUCATIVO = '${cod_materia}' AND COD_QUIMESTRE = 1 `, (err, res) => {
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