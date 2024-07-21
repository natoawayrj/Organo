import { useState } from 'react'
import './Formulário.css'

const Formulario = (props) => {
  

 const digitado = (e)=>{
   props.alterado(e.target.value)
   
 }
  return (
    <div className="formulario">
        
        <div className='inputs'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitado} type="text" placeholder={props.placeholder} />
        </div>
    </div>
  )
}

export default Formulario
