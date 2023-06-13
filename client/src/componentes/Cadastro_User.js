import {useState, useRef} from 'react'
import React from 'react'
import Axios from "axios"


export default function Cadastro_User({RemoveConteudoLogin}){

    const [CadastroNewUser, AlterCadastroNewUser] = useState({NewUser:"", NewSenha:"", NewRepetirSenha:""})
    const [MostrarConteudoCadastro, AlterMostrarConteudoCadastro] = useState(false)

    const referencia_btn = useRef(null);
    const referencia_txt_cadastro = useRef(null)

    var CadastrarUser = () => {
       AlterMostrarConteudoCadastro(true)
       RemoveConteudoLogin()
       referencia_btn.current.remove()
       referencia_txt_cadastro.current.remove()
    }

    var HandleInputCadastroChange = (e) => {
        if (e.target.getAttribute("name") == "Nome_Novo_User"){
            AlterCadastroNewUser({...CadastroNewUser, NewUser: e.target.value})
        }
        else if (e.target.getAttribute("name") == "Senha_Novo_User"){
            AlterCadastroNewUser({...CadastroNewUser, NewSenha: e.target.value})
        }
        else if (e.target.getAttribute("name") == "RepetirSenha_Novo_User"){
            AlterCadastroNewUser({...CadastroNewUser, NewRepetirSenha: e.target.value})
        }
    }

    var EnviarDadosNewUserParaServer = () => {
        var DadosNewUser = {
            Nome_New_User: CadastroNewUser.NewUser,
            Senha_New_User: CadastroNewUser.NewSenha,
            Repetir_Senha_New_User: CadastroNewUser.NewRepetirSenha
        }

        Axios.post("http://localhost:3001/EnviarDadosNewUser", DadosNewUser)
        .then((resposta)=>{

            if (resposta.data.success && !document.getElementById('MsgParaNewUser')) {

                var Msg_User_Criado = document.createElement('label')

                Msg_User_Criado.id = 'MsgParaNewUser';

                Msg_User_Criado.textContent = 'Usuário criado com sucesso!'

                Msg_User_Criado.classList.add('Estilo_Msg_New_User')
                
                document.getElementById('Container_Msg_New_User').appendChild(Msg_User_Criado);
              }
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }

    return(
        <div>
            <p id="txt_cadastro" ref={referencia_txt_cadastro}><strong>Não possui cadastro?</strong></p>

            <button id="btn_cadastrar_user" ref={referencia_btn} onClick={()=> CadastrarUser()}><strong>Cadastrar</strong></button>

            {/*Se o state MostrarConteudoCadastro for true, os componentes do cadastro vão aparecer.*/}
            {MostrarConteudoCadastro && (
                <div> 
                    <section id="section_cadastro">
                        <label id="txt_new_user">Novo Usuário</label>

                        <input id="input_new_user" name="Nome_Novo_User" value={CadastroNewUser.NewUser} placeholder="Nome" onChange={(e)=>HandleInputCadastroChange(e)}></input>

                        <label id="txt_senha_new_user">Senha</label>

                        <input id="box_senha_new_user" name="Senha_Novo_User" value={CadastroNewUser.NewSenha} placeholder="Digite uma senha" onChange={(e)=>HandleInputCadastroChange(e)}></input>

                        <input id="box_repetir_senha_new_user" name="RepetirSenha_Novo_User" value={CadastroNewUser.NewRepetirSenha} placeholder="Digite novamente a senha" onChange={(e)=>HandleInputCadastroChange(e)}></input>

                        <button id="btn_cadastrar_new_user" onClick={()=> EnviarDadosNewUserParaServer()}>Cadastrar-se</button>
                        <p id="Container_Msg_New_User"></p>
                    </section>
                </div>
            )}
        </div>

    )
}