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

module.exports = Tarea_Asignatura;