import React, {useState} from 'react'
import ico_user from '/home/isa/projeto_login/client/src/componentes/imagens/ico_user.ico'
import cadeado from '/home/isa/projeto_login/client/src/componentes/imagens/cadeado.ico'
import Axios from "axios"
import Cadastro_User from './Cadastro_User'

export default function Estrutura_Login(){
    const [Usuario, AlterUsuario] = useState({user:"", senha:""})
    const [MostrarConteudoLogin, AlterMostrarConteudoLogin] = useState(true)

    var HandleChangeUsuario = (e) => {
        if (e.target.getAttribute("name") === "nome_usu"){
            AlterUsuario({...Usuario, user: e.target.value})
        }
        else if (e.target.getAttribute("name") === "senha_usu"){
            AlterUsuario({...Usuario, senha: e.target.value})
        }
    }
    
    
    var EnviarDadosParaServidor = () =>{
        var Dados_Login = {
            user: Usuario.user,
            senha: Usuario.senha,
            RepetirS: Usuario.RepetirSenha
        }
        Axios.post("http://localhost:3001/EnviarDadosLogin", Dados_Login)
        .then((resposta) => {
            console.log(resposta)
        })
        .catch((erro) => {
            console.log(erro)
        })
    
    }

    var RemoverConteudoLogin = () => {
        AlterMostrarConteudoLogin(false)
    }
    
    return(
        <div>
            {MostrarConteudoLogin && (
                <section>
                    <label id="Label_Nome">Nome</label><br/>
                    
                    <img id="img_user" src={ico_user} alt="Logo Usuário"/> {" "}

                    <input id="box_user" name="nome_usu" value={Usuario.user} onChange={(e)=>HandleChangeUsuario(e)}></input><br/>
                    <br/>

                    <label>Senha</label><br/>

                    <img id="img_cadeado" src={cadeado} alt="Imagem Cadeado da Senha"/> {" "}

                    <input id="box_senha" type="password" name="senha_usu" value={Usuario.senha} onChange={(e)=>HandleChangeUsuario(e)}></input><br/>
                    <br/>

                    <button id="btn_entrar" onClick={()=> EnviarDadosParaServidor()}><strong>Entrar</strong></button> 
                    <br/>
                    <br/>
                </section>
            )}
            <Cadastro_User RemoveConteudoLogin={RemoverConteudoLogin}/>
        </div>
    )}