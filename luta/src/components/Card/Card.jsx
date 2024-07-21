
import './Card.css'
import React from 'react'

const Card = (props) => {
  return (
    <div className='jogador'>
      <div className="cabecalho" style={{backgroundColor: props.corDeFundo}}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.plataforma}</h5>
      </div>
    </div>
  )
}

export default Card
