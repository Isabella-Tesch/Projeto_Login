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

/*app.post('/EnviarDadosCadastro', (req, res) => {
    const {user, senha, RepetirSenha} = req.body;

    console.log(req.body.user)
    console.log(req.body.senha)
    console.log(req.body.RepetirSenha)
    console.log(user)

    if (!req.body.user || !req.body.senha || !req.body.RepetirSenha){
        console.log("Dados incompletos! kj ")
        return res.status(400).json({ sucesso: false, message: "Dados incompletos! Certifique-se de preencher todos os campos." });
    }

    if (req.body.user.length > 0 && req.body.senha.length > 0){
        console.log('k')
        if (req.body.senha !== req.body.RepetirSenha){
            console.log("As senhas devem ser iguais!")
            return res.status(400).json({sucesso: false, message: "As senhas não se coincidem!"})
        }
        else{
            console.log("Requisições satisfeitas.")
            res.status(200).json({sucesso: true, message: "Cadastro realizado com sucesso!"})
        }
    }

})*/

app.post("/EnviarDadosLogin", (req, res) => {
    const nome_usuario = req.body.user
    const senha_usuario = req.body.senha

    if (nome_usuario.length > 0 && senha_usuario.length > 0){
        const VerificaSeUserExiste = "SELECT * from usuarios WHERE nome_usu = ?"
        db.query(VerificaSeUserExiste, [nome_usuario], (erro, resultado)=>{
            if (erro){
                console.log("Houve um erro ao consultar a tabela" + erro)
            }
            else{
                if (resultado.length > 0){
                    console.log("Usuário já existe!")
                }
                else{
                    var sql = "INSERT INTO usuarios (nome_usu, senha_usu) VALUES (?, ?)"
                    var dados_usuario_novo = [nome_usuario, senha_usuario]
                    db.query(sql, dados_usuario_novo, (erro, resultado)=>{
                        if (erro){
                            console.log("Houve um erro ao inserir o dado: erro")
                        }
                        else{
                            console.log("Dados do novo usuário inseridos na tabela com sucesso.")
                        }
                    })
                }
            }
        })
    }

    else{
        console.log("Preencha todos os campos.")
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
                console.log("Houve um erro ao consultar a tabela: " + erro)
            }
            else{
                if (resultado.length > 0){
                    //res.json({UserExiste: true})
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

    /*console.log(NewUserName)
    console.log(NewUserSenha)
    console.log(NewUserRepetirSenha)

    res.json({ success: true });*/
})

app.listen(3001, ()=>{
    console.log("Server conectado na porta 3001")
})








    

