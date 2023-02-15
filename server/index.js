import Estrutura_Login from '/home/isa/projeto_login/client/src/componentes/Estrutura_Login.js'
var mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "isa#123",
    database: "login_user",
});

db.connect(
    function(err){
        if (err) throw err;
        console.log("conectado!");
        var sql = "INSERT INTO usuarios (nome_usu, senha_usu) VALUES ('Nando', '12345')"
        db.query(sql, function(err, result){
            if (err) throw err;
            console.log("Dado inserido!");
        });
    });








    

