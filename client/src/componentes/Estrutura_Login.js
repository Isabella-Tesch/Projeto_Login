import React, {useState} from 'react'
import ico_user from '/home/isa/projeto_login/client/src/componentes/imagens/ico_user.ico'
import cadeado from '/home/isa/projeto_login/client/src/componentes/imagens/cadeado.ico'
import Axios from "axios"
import Cadastro_User from './Cadastro_User'
import "/home/isa/projeto_login/client/src/App.css"

export default function Estrutura_Login(){
    const [Usuario, AlterUsuario] = useState({user:"", senha:""})
    const [MostrarConteudoLogin, AlterMostrarConteudoLogin] = useState(true)
    const [MostrarBntTxtDoCadastro, AlterMostrarBntTxtDoCadastro] = useState(true)

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
            var MsgDoServer = resposta.data.msg

            document.getElementById("ContainerMsgServer").innerHTML = ''

            MsgDoServer.forEach((mensagem)=>{
                var MsgParaCliente = document.createElement('label')
                MsgParaCliente.textContent = mensagem
                MsgParaCliente.classList.add('EstiloMsgUser')
                document.getElementById("ContainerMsgServer").appendChild(MsgParaCliente)
            })
        })
        .catch((erro) => {
            console.log(erro)
        })
    
    }

    var RemoverConteudoLogin = () => {
        AlterMostrarConteudoLogin(false)
        AlterMostrarBntTxtDoCadastro(false)
    }

    var TrocaValorConteudoCadastro = () => {
        AlterMostrarConteudoLogin(true)
        AlterMostrarBntTxtDoCadastro(true)
    }

    return(
        <div>
            {MostrarConteudoLogin  &&(
                <section className='ConteudoLogin'>
                    <label id="Label_Nome">Nome</label><br/>
                    
                    <img id="img_user" src={ico_user} alt="Logo Usuário"/> {" "}

                    <input id="box_user" name="nome_usu" value={Usuario.user} onChange={(e)=>HandleChangeUsuario(e)}></input><br/>
                    <br/>

                    <label id="Label_Senha">Senha</label><br/>

                    <img id="img_cadeado" src={cadeado} alt="Imagem Cadeado da Senha"/> {" "}

                    <input id="box_senha" type="password" name="senha_usu" value={Usuario.senha} onChange={(e)=>HandleChangeUsuario(e)}></input><br/>
                    <br/>

                    <button id="btn_entrar" onClick={()=> EnviarDadosParaServidor()}><strong>Entrar</strong></button> 
                    <br/>
                    <br/>
                    
                    <p id="ContainerMsgServer"></p>
                </section>
            )}
            <Cadastro_User RemoveConteudoLogin={RemoverConteudoLogin} RetornaLogin={TrocaValorConteudoCadastro} MostrarBtnTxtDoCadastro={MostrarBntTxtDoCadastro}/>
        </div>
    )}