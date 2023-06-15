const express = require("express")
const app = express()

const cors = require('cors')
var mysql = require("mysql");

app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "isa#123",
    database: "login_user",
});

app.use(cors())

app.post("/EnviarDadosLogin", (req, res) => {
    const nome_usuario = req.body.user
    const senha_usuario = req.body.senha

    if (nome_usuario.length > 0 && senha_usuario.length > 0){
        var sql = "SELECT * FROM usuarios WHERE nome_usu = ? AND senha_usu = ?"
        db.query(sql, [nome_usuario, senha_usuario], (erro, resultado)=>{
            if (erro){
                console.log("Houve ao executar a consulta: ", erro)
            }
            
            if (resultado.length > 0){
                var msg = [`Bem vindo ${nome_usuario}!`]
                res.json({msg})
            }
            else{
                var msg = ['Usuário ou senha incorretos!']
                res.json({msg})
            }
        })   
    }

    else{
        var msg = ["Preencha todos os campos."]
        res.json({msg})
    }
})

app.post("/EnviarDadosNewUser", (req,res) =>{
    const NewUserName = req.body.Nome_New_User
    const NewUserSenha = req.body.Senha_New_User
    const NewUserRepetirSenha = req.body.Repetir_Senha_New_User

    if (NewUserName.length > 0 && NewUserSenha.length > 0 && NewUserRepetirSenha.length > 0){

        const VerificaSeUserExiste = 'SELECT * FROM usuarios WHERE nome_usu = ?'

        db.query(VerificaSeUserExiste, [NewUserName], (erro, resultado)=>{
            if (erro){
                console.log("Houve um erro ao consultar a tabela: ", erro)
            }
            else{
                if (resultado.length > 0){
                    var mensagem = ["O usuário já existe!"]
                    res.json({mensagem})
                }
                else{
                    var sql = "INSERT INTO usuarios (nome_usu, senha_usu, RepetirSenha) VALUES (?, ?, ?)"
                    var Dados_New_User = [NewUserName, NewUserSenha, NewUserRepetirSenha]
                    if (NewUserSenha == NewUserRepetirSenha){
                        db.query(sql, Dados_New_User, (erro, resultado)=>{
                            if (erro){
                                console.log("Houve um erro ao inserir o dado: " + erro)
                            }
                            else{
                                var mensagem = ["Usuário criado com sucesso!"]
                                res.json({mensagem})
                            }
                        })
                    }
                    else{
                        var mensagem = ["As senhas devem ser iguais!"]
                        res.json({mensagem})
                    }
                }
            }
        })
    }
    else{
        var mensagem = ["Preencha todos os campos!"]
        res.json({mensagem})
    }
})

app.listen(3001, ()=>{
    console.log("Server conectado na porta 3001")
})








    

