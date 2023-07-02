import React from 'react'
import '../EstiloPageContato.css'
import ImgEnvelopeEmail from './imagens/EnvelopeEmail1.png'
import ImgCelular from './imagens/ImagemCelular.png'
import ImgWhatsapp from './imagens/what.png'

export default function PageContato(){
    return(
        <section className="QuadroContatos">
           <h1 id="TxtContato">Entrar em contato</h1>
           <label id="TxtEmail">E-mail</label>
           <img src={ImgEnvelopeEmail} alt="Imagem envelope indicando email" id="EnvelopeEmail"/>
           <p id="EmailOutlook">isa.tesch@hotmail.com</p>
           <p id="EmailGmail">isa.tesch21@gmail.com</p>

            <label id="TxtCelular">Telefone</label>
           <img id="ImgCelular"src={ImgCelular} alt="Imagem celular"/>
           <p id="NumCelular">(48) 99844-8324</p>

           <a target="_blank" href="https://wa.me/48998448324">
            <img id="ImagemWhatsapp" src={ImgWhatsapp} alt="Fale comigo no whatsapp"/>
           </a>

        </section>
    )
}