var express = require("express");
var passport = require("passport");
var Strategy = require("passport-http").BasicStrategy;

var app = express();
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", request.headers.origin);
    response.header("Access-Control-Allow-Headers", "Authorization");
    next();
});
passport.use(new Strategy((username, password, done) => {
    console.log("Usuario: " + username + " y contraseña: " + password);

    //Evaluamos que el usuario y contraseña existe
    if (username == "german" && password == "german_1") {
        done(null, true);
    } else {
        done(null, false);
    }
}));
app.get("/home", passport.authenticate("basic", { session: false }),
    (request, response) => {
        console.log("Acceso permitido");
        response.send("{ mensaje: 'Acceso concedido'}");
    }
)
app.listen(8080);
console.log("Servidor escuchando");