const Sede = require('../models/sede.model.js');

exports.findAll = (req, res) => {
    Sede.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Algun error ocurrio mientras se recuperada Sedes"
            });
        } else {
            res.status(200).send(data);
        }
    });
};

exports.findOne = (req, res) => {
    Sede.findById(req.params.codSede, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Sede  no encontrada con el codigo:  ${req.params.codSede}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar sede con id " + req.params.codSede
                });
            }
        } else {
            res.send(data);
        }
    });
};

// exports.create = (req, res) => {
//     if (!req.body) {
//         res.status(400).send({
//             message: "Conteniedo no puede estar vacio!"
//         });
//     }

//     const employee = new Sede({
        
//         cod_sede = req.body.cod_sede,
//         nombre = req.body.nombre,
//         direccion = req.body.direccion,
//         telefono = req.body.telefono,
//         codigo_postal = req.body.codigo_postal

//     });

//     Employee.create(employee, (err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Employee."
//             });
//         } else {
//             res.status(201).send(data);
//         }
//     });
// };






// // Update a Employee identified by the EmployeeId in the request
// exports.update = (req, res) => {
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//     }

//     console.log(req.body);

//     Employee.updateById(
//         req.params.employeeId,
//         new Employee(req.body),
//         (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: `Not found Employee with id ${req.params.employeeId}.`
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error updating Employee with id " + req.params.employeeId
//                     });
//                 }
//             } else res.send(data);
//         }
//     );
// };


// exports.delete = (req, res) => {
//     Employee.remove(req.params.EmployeeId, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Employee with id ${req.params.EmployeeId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Could not delete Employee with id " + req.params.EmployeeId
//                 });
//             }
//         } else res.send({ message: `Employee was deleted successfully!` });
//     });
// };

// exports.deleteAll = (req, res) => {
//     Employee.removeAll((err, data) => {
//         if (err)
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all Employees."
//             });
//         else res.send({ message: `All Employees were deleted successfully!` });
//     });
// };
