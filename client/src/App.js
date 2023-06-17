import React, {useState} from 'react'
import Estrutura_Login from './componentes/Estrutura_Login'
import './EstiloPaginaInicial.css'

export default function App(){
    const [ExibirPageInicial, AlterExibirPageInicial] = useState(false)
    const [ExibirSobre, AlterExibirSobre] = useState(false)
    const [PedirProjetos, AlterPedirProjetos] = useState(false)
    const [ExibirLogin, AlterExibirLogin] = useState(false)
    const [ExibirContato, AlterExibirContato] = useState(false)
    const [ItemMenuSelecionado, AlterItemMenuSelecionado] = useState('')

    const HandleItemMenuClick = (item) => {
        if (item == 'PageInicial'){
            AlterExibirPageInicial(true)
        }
        else{
            AlterExibirPageInicial(false)
        }
        if (item == 'Sobre'){
            AlterExibirSobre(true)
        }
        else(
            AlterExibirSobre(false)
        )
        if (item == 'Projetos'){
            AlterPedirProjetos(true)
        }
        else{
            AlterPedirProjetos(false)
        }
        if (item == 'Login'){
            AlterExibirLogin(true)
        }
        else{
            AlterExibirLogin(false)
        }
        if (item == 'Contato'){
            AlterExibirContato(true)
        }
        else{
            AlterExibirContato(false)
        }
        AlterItemMenuSelecionado(item)
    }

    return(
        <>
            <section>
                <header>
                    <nav>
                        <ul>
                            <li><a href="#" onClick={()=> HandleItemMenuClick('PageInicial')}>Página Inicial</a></li>
                            <li><a href="#" onClick={()=> HandleItemMenuClick('Sobre')}>Sobre</a></li>
                            <li><a href="#" onClick={()=> HandleItemMenuClick('Projetos')}>Projetos</a></li>
                            <li><a href="#" onClick={()=> HandleItemMenuClick('Login')}>Login</a></li>
                            <li><a href="#" onClick={()=> HandleItemMenuClick('Contato')}>Contato</a></li>
                        </ul>
                    </nav>
                </header>

                <div>
                    {ItemMenuSelecionado == 'Login' && <Estrutura_Login />}
                </div>
            </section>
        </>
    )
}

