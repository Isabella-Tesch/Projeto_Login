import Estrutura_Login from '/home/isa/projeto_login/client/src/componentes/Estrutura_Login.js'
import '/home/isa/projeto_login/client/src/App.js'

const express = require("express")
const app = express()
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
        var sql = "INSERT INTO usuarios (nome_usu, senha_usu) VALUES (Usuario.user, Usario.senha)"
        db.query(sql, function(err, result){
            if (err) throw err;
            console.log("Dado inserido!");
        });
    });

//Processo de pegar e cadastrar os dados no server

/*
    É necessário pegar o método use da variável app para utilizarmos o express.json()
    É necessário também para não dar problema para o server não conseguir acessar o front utilizarmos o cors.
*/
app.use(express.json())
app.use(cors())

app.post("/register", (req, res)=>{
    var nome: req.body.Usuario.user;
    var senha: req.body.Usuario.senha;
})







    

