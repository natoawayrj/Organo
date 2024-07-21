
import Card from '../Card/Card'
import './Time.css'
import React from 'react'

const Time = (props) => {
   const tela = {backgroundImage: `url(${props.fundo})` }

  
  return (
    (props.jogadores.length > 0 ) ? <section className='time' style={tela} >
       <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
       <div className='jogadores'>
          {props.jogadores.map(jogador => {
            return <Card corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} plataforma={jogador.plataforma} imagem={jogador.foto}  />
          })}
       </div>
    </section>
    : ''
  )
}

export default Time
