import React, {useState, useEffect} from 'react'
import {Parallax} from 'react-parallax'
import '/home/isa/projeto_login/client/src/EstiloPageSobre.css'
import ImagemFundo from '/home/isa/projeto_login/client/src/componentes/imagens/FundoInterativo.jpg'

export default function PageSobre(){
        
    return(
        <div className="ContainerDiv">
            <Parallax bgImage={ImagemFundo} strength={500} className="CustomParallax">
                <div className="ContainerDivParallax">
                    <div className="InsideParallax">
                        <p>Isabella Tesch</p>
                    </div>
                </div>
            </Parallax>

            <div className="ContainerConteudo">
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>
                <h2>Conteudo abaixo do parallax</h2>

            </div>
        </div>
    )
}