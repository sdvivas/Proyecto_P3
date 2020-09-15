const sql = require("../database.js");

const Tarea_Asignatura = function (tarea_asigntatura) {

    this.cod_tarea_asignatura = tarea_asigntatura.cod_tarea_asignatura;
    this.cod_nivel_educativo = tarea_asigntatura.cod_nivel_educativo;
    this.cod_asignatura = tarea_asigntatura.cod_asignatura;
    this.cod_periodo_lectivo = tarea_asigntatura.cod_periodo_lectivo;
    this.cod_paralelo = tarea_asigntatura.cod_paralelo;
    this.cod_docente = tarea_asigntatura.cod_docente;
    this.cod_quimestre = tarea_asigntatura.cod_quimestre;
    this.detalle_tarea = tarea_asigntatura.detalle_tarea;
};

Tarea_Asignatura.insertar_tarea = (nueva_Tarea, result) => {
    console.log(nueva_Tarea);
    sql.query("INSERT INTO TAREA_ASIGNATURA SET ?", nueva_Tarea, (err, res) => {
        console.log(nueva_Tarea);
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("Nueva Creada");
        }

    });
};

Tarea_Asignatura.buscarMaterias = (cod_docente, result) => {
    sql.query("SELECT TAREA.COD_NIVEL_EDUCATIVO, NIVEL.NOMBRE FROM TAREA_ASIGNATURA TAREA INNER "+
    "JOIN NIVEL_EDUCATIVO NIVEL ON TAREA.COD_NIVEL_EDUCATIVO = NIVEL.COD_NIVEL_EDUCATIVO WHERE TAREA.COD_DOCENTE = '9'"+
    " GROUP BY TAREA.COD_NIVEL_EDUCATIVO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result("hola"+err, null);
            return;
        }else {
            console.log("Materias: ", res);
            result(null, res);
        }

    });
};

module.exports = Tarea_Asignatura;