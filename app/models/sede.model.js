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
        }else{
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
            console.log("Empleado encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

// Sede.create = (newEmployee, result) => {
//     sql.query("INSERT INTO EMPLEADOS SET ?", newEmployee, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         } else {
//             console.log("created customer: ", { codEmployee: res.insertCod, ...newEmployee });
//             result(null, { codEmployee: res.insertCod, ...newEmployee });
//         }

//     });
// };





// Sede.updateById = (cod, employee, result) => {
//     sql.query(
//         "UPDATE EMPLEADOS SET ? WHERE COD_EMPLEADO= ?",
//         [employee, cod],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }

//             if (res.affectedRows == 0) {
//                 result({ kind: "not_found" }, null);
//                 return;
//             } else {
//                 console.log("updated employee: ", { cod: cod, ...employee });
//                 result(null, { cod: cod, ...employee });
//             }

//         }
//     );
// };

// Sede.remove = (cod, result) => {
//     sql.query("DELETE FROM EMPLEADOS WHERE COD_EMPLEADO = ?", cod, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         if (res.affectedRows == 0) {
//             result({ kind: "not_found" }, null);
//             return;
//         }

//         console.log("deleted employee with cod: ", cod);
//         result(null, res);
//     });
// };

module.exports = Sede;