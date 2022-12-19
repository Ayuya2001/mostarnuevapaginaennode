const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'))
}); 

router.get("/contacto", function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/contacto.html'))
});

router.get("/perfil", function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/perfil.html'))
});

router.post("/", (req, res) => {
    res.send("El usuario " + req.body.first_name + " ha sido registrad@");
})

app.use("/", router);

app.listen(process.env.port || 8080);

console.log("activo en el puerto 8080")