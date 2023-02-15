import React, {createElement, useState} from 'react'
import ReactDOM from 'react-dom'
import ico_user from '/home/isa/projeto_login/client/src/componentes/imagens/ico_user.ico'
import cadeado from '/home/isa/projeto_login/client/src/componentes/imagens/cadeado.ico'


export default function Estrutura_Login(){
    const [Usuario, AlterUsuario] = useState({user:"", senha:""})
    
    var HandleChangeUsuario = (e) => {
        //Passe Axios.post e envie o site para acessar determinada porta. Em seguida vamos enviar os dados email para o front
        //para criar o registro. Para finalizar adicione o .then para receber a resposta.
        if (e.target.getAttribute("name") == "nome_usu"){
            AlterUsuario({user:e.target.value, "senha": Usuario.senha})
            }
        
        else if (e.target.getAttribute("name") == "senha_usu"){
            AlterUsuario({user: Usuario.user, senha: e.target.value})
        }
    }

    var VerificaUsuario = () => {
        if (Usuario.user in db){
            alert("oi")
        }
    }
    
    var Cadastro = () => {
            var label_cadastro = document.getElementById("repetir_senha")
            label_cadastro.innerHTML = "Repetir Senha"

            //Remover botão do login
            var btn_log = document.getElementById("btn_entrar")
            btn_log.remove()

            //Remover texto "não possui cadastro?"
            var txt_cadast = document.getElementById("cadastro")
            txt_cadast.remove()

            //Remover botão do cadastro
            var btn_cadast = document.getElementById("btn_cadastro")
            btn_cadast.remove()

            var div_i = document.getElementById("item_div")
            if (!div_i){
                var input_cadast = document.getElementById("input_cadastro")
                var div_i = document.createElement("input")
                div_i.id = "item_div"
                div_i.innerHTML = input_cadast.appendChild(div_i)
            }

            //Criar botão para adicionar um novo usuário
            var div_b = document.getElementById("item_btn")
            if (!div_b){
                var cadast_user = document.getElementById("add_user")
                var div_b = document.createElement("button")
                div_b.id = "item_btn"
                div_b.innerHTML = "Criar conta"; cadast_user.appendChild(div_b)
            }
    }
    
    return(
        <section>
            <label id="label1">Nome</label><br/>
            
            <img id="img_user" src={ico_user} alt="Logo Usuário"/> {" "}

            <input id="box_user" name="nome_usu" value={Usuario.user} onChange={(e)=>HandleChangeUsuario(e)}></input><br/>
            <br/>

            <label>Senha</label><br/>

            <img id="img_cadeado" src={cadeado} alt="Cadeado Senha"/> {" "}

            <input id="box_senha" type="password" name="senha_usu" value={Usuario.senha} onChange={(e)=>HandleChangeUsuario(e)}></input><br/>
            <br/>

            <button id="btn_entrar"><strong>Entrar</strong></button> <br/>
            <br/>
            <div>
                <p id="cadastro"><strong>Não possui cadastro?</strong></p>

                {/* Componentes do cadastro */}
                <button id="btn_cadastro" onClick={()=>Cadastro()}><strong>Cadastrar</strong></button>
                <label id="repetir_senha" style={{position: "absolute", top:"155px", left:"90px",
                font:"normal 20px courier"}}></label>
                <div id="input_cadastro" style={{position:"absolute", top: "180px"}}></div>

                {/*Botão para adicionar um novo usuário quando clicar no botão cadastro */}
                <div id="add_user"></div>
            </div>
            <p>{Usuario.user}</p>
            <p>{Usuario.senha}</p>
        </section>
        
    )
}