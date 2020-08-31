const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido');
    res.json({ message: "Welcome to school  application." });
});

require("./app/routes/sede.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
