const sql = require("../database.js");

const Tarea_Asignatura = function(tarea_asigntatura) {

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
    sql.query("SELECT TAREA.COD_NIVEL_EDUCATIVO, NIVEL.NOMBRE FROM TAREA_ASIGNATURA TAREA INNER " +
        "JOIN NIVEL_EDUCATIVO NIVEL ON TAREA.COD_NIVEL_EDUCATIVO = NIVEL.COD_NIVEL_EDUCATIVO WHERE TAREA.COD_DOCENTE = ? " +
        " GROUP BY TAREA.COD_NIVEL_EDUCATIVO", cod_docente, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result("hola" + err, null);
                return;
            } else {
                console.log("Materias: ", res);
                result(null, res);
            }

        });
};
Tarea_Asignatura.buscarTareas = (cod_docente, cod_nivel_educativo, result) => {
    sql.query(`SELECT ASI.NOMBRE, TAREA.COD_TAREA_ASIGNATURA, TAREA.DETALLE_TAREA FROM TAREA_ASIGNATURA TAREA ` +
        `INNER JOIN ASIGNATURA ASI ON TAREA.COD_ASIGNATURA = ASI.COD_ASIGNATURA ` +
        ` WHERE TAREA.COD_DOCENTE = '${cod_docente}' AND TAREA.COD_NIVEL_EDUCATIVO = '${cod_nivel_educativo}'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result("hola" + err, null);
                return;
            } else {
                console.log("Tareas: ", res);
                result(null, res);
            }

        });
};

Tarea_Asignatura.buscarNivelDocente = (cod_docente, result) => {
    sql.query(`SELECT * FROM ASIGNATURA_PERIODO ASP ` +
        `INNER JOIN NIVEL_EDUCATIVO NIV ON NIV.COD_NIVEL_EDUCATIVO = ASP.COD_NIVEL_EDUCATIVO ` +
        ` WHERE COD_DOCENTE = ${cod_docente} GROUP BY ASP.COD_NIVEL_EDUCATIVO`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result("hola" + err, null);
                return;
            } else {
                console.log("Tareas: ", res);
                result(null, res);
            }

        });
};

Tarea_Asignatura.buscarMateriasDocente = (cod_docente, nivel_educativo, result) => {
    sql.query(`SELECT * FROM ASIGNATURA_PERIODO ASP ` +
        `INNER JOIN ASIGNATURA ASI ON ASI.COD_ASIGNATURA = ASP.COD_ASIGNATURA` +
        ` 
    WHERE COD_DOCENTE = ${cod_docente} AND ASP.COD_NIVEL_EDUCATIVO = '${nivel_educativo}' AND COD_QUIMESTRE = '1' GROUP BY ASP.COD_ASIGNATURA`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result("hola" + err, null);
                return;
            } else {
                console.log("Tareas: ", res);
                result(null, res);
            }

        });
};

Tarea_Asignatura.listarMaterias = (cod_docente, cod_paralelo, result) => {
    sql.query(`SELECT * FROM ASIGNATURA a
        INNER JOIN ASIGNATURA_PERIODO ap WHERE ap.COD_DOCENTE =  ${cod_docente}
        AND ap.COD_ASIGNATURA = a.COD_ASIGNATURA AND ap.COD_QUIMESTRE = 1
        AND ap.COD_PARALELO = '${cod_paralelo}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result("hola" + err, null);
            return;
        } else {
            console.log("Tareas: ", res);
            result(null, res);
        }

    });
};

Tarea_Asignatura.listarEstudiante = (cod_docente, cod_asignatura, cod_paralelo, cod_nivel_educativo, result) => {
    sql.query(`SELECT * FROM PERSONA p
        INNER JOIN ALUMNO_ASIGNATURA_PERIODO ap where ap.COD_ALUMNO = p.COD_PERSONA 
        AND ap.COD_ASIGNATURA = '${cod_asignatura}' AND ap.COD_PARALELO = '${cod_paralelo}' AND ap.COD_DOCENTE = ${cod_docente} 
        AND ap.COD_NIVEL_EDUCATIVO = '${cod_nivel_educativo}' AND ap.COD_QUIMESTRE = 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result("hola" + err, null);
            return;
        } else {
            console.log("Tareas: ", res);
            result(null, res);
        }

    });
};

Tarea_Asignatura.listarParalelo = (cod_docente, result) => {
    sql.query(`SELECT DISTINCT p.NOMBRE, p.COD_PARALELO FROM PARALELO p
        INNER JOIN ASIGNATURA_PERIODO ap WHERE ap.COD_PARALELO = p.COD_PARALELO 
        AND ap.COD_DOCENTE = ${cod_docente} AND ap.COD_QUIMESTRE = 1`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result("hola" + err, null);
            return;
        } else {
            console.log("Tareas: ", res);
            result(null, res);
        }

    });
};

module.exports = Tarea_Asignatura;