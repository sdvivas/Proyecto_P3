const sql = require("../database.js");

const Auth = function(auth) {
    this.username = auth.username;
    this.password = auth.password;
};

Auth.login = (auth, result) => {
    sql.query(`SELECT * FROM USUARIO u 
    INNER JOIN PERSONA p on p.COD_PERSONA = u.COD_PERSONA
    INNER JOIN ROL_USUARIO ru on u.COD_USUARIO=ru.COD_USUARIO
    INNER JOIN ROL r on r.COD_ROL=ru.COD_ROL
    where u.ESTADO='ACT' AND ru.ESTADO='ACT' AND u.NOMBRE_USUARIO = ? AND u.CLAVE = ?`, [auth.username, auth.password],
        (err, res) => {
            if (err) {
                console.log("error:", err);
                result(null, err);
                return;
            } else {
                console.log("edficios: ", res);
                result(null, res);
            }
        })
};