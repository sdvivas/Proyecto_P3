const sql = require("../database.js");

const Asistencia = function (asistencia) {
    this.cod_aula = asistencia.COD_PERIODO_LECTIVO;
    this.cod_edificio = asistencia.COD_ALUMNO;
    this.nombre = asistencia.COD_NIVEL_EDUCATIVO;
    this.capacidad = asistencia.FECHA;
    this.tipo = asistencia.ESTADO;
};

Asistencia.getNivel = (codAula, result) => {
    sql.query('SELECT MP.COD_NIVEL_EDUCATIVO ,NI.NOMBRE FROM MATRICULA_PERIODO MP, NIVEL_EDUCATIVO NI WHERE MP.COD_NIVEL_EDUCATIVO=NI.COD_NIVEL_EDUCATIVO', (err, res) => {
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

module.exports = Asistencia;