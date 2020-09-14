const Auth = require('../models/auth.model');


exports.login = (req, res) => {
    const auth = new Auth({
        username: req.body.username,
        password: req.body.password
    });
    Auth.login(auth, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Algun error ocurrio mientras se Logeaba"
            });
        } else {
            res.status(200).send(data);
        }
    });
};