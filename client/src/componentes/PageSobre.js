import React from 'react'
import {Parallax} from 'react-parallax'
import '/home/isa/projeto_login/client/src/EstiloPageSobre.css'
import ImagemFundo from '/home/isa/projeto_login/client/src/componentes/imagens/FundoInterativo.jpg'
import Typed from 'react-typed'

export default function PageSobre(){
        
    return(
        <div className="ContainerDiv">
            <Parallax bgImage={ImagemFundo} strength={500} className="CustomParallax">
                <p className="Profissao">Desenvolvedora Web</p>
                <Typed strings={["Programadora de Python e Javascript", "Detalhamento visual com HTML e CSS"]} typeSpeed={40} backSpeed={40} loop cursorChar='_' className="FraseInterativa"/>   
            </Parallax>

            <div className="ContainerConteudo">
                <h1 id="Meu_Nome">Isabella Tesch</h1>
                <div id="ContainerMinhaDescricao">
                    <p>
                        Sou programadora web com conhecimentos em várias tecnologias e ferramentas importantes para o <br/> desenvolvimento de 
                        aplicações web. Possuo como habilidades proficiência em JavaScript e Python <br/> que são linguagens de programação extremamente poderosas e
                        amplamente utilizadas por mim.
                    </p>

                    <p>
                        Meu aprendizado também é focado em tecnologias como React, CSS e HTML. Com React, desenvolvo <br/> interfaces de usuário 
                        interativas, componentes reutilizáveis e realizo aplicações web simples. <br/> Por outro lado, meu conhecimento em CSS 
                        e HTML me permite estilizar elementos e fornecer uma <br/> experência visual atraente aos usuários.
                    </p>

                    <p>
                        Além disso, possuo conhecimento na biblioteca Tkinter do Python que me permite criar interfaces <br/> gráficas 
                        de usuário para aplicativos desktop. Na ferramenta Tkinter é possível criar janelas, botões, <br/> caixas de diálogo 
                        e outros elementos para melhorar a acessibilidade e a interação com o usuário <br/> em aplicativos desktop. 
                    </p>

                    <p>
                        Acerca do banco de dados, possuo conhecimento em MySQL que me permite colocar em prática <br/> estruturas de banco de dados
                        eficientes, realizar consultas e garantir a integridade dos dados em <br/> aplicações web.
                    </p>

                    <p>
                        Posso afirmar que sou uma profissional dedicada, apaixonada por aprender e me antenar nas <br/> últimas tecnologias para 
                        melhorar nas práticas do desenvolvimento web. Eu busco sempre <br/> aperfeiçoar minhas habilidades e adotar novas tecnologias 
                        para criar soluções eficazes e <br/> modernas.
                    </p>
                </div>
            </div>
        </div>
    )
}