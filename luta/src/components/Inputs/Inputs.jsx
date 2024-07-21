import './Inputs.css'
import Formulario from '../Formulario/Formulario'
import Select from '../Select/Select'
import Botao from '../Botao/Botao'
import { useState } from 'react'

const Inputs = (props) => {
    
    const [nome, setNome] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [foto, setFoto] = useState('')
    const [jogo, setJogo] = useState('')


    const salvando = (e)=>{
      e.preventDefault()
      props.gamerCadastrado({
        nome, 
        plataforma, 
        foto,
        jogo
      })
      setNome('')
      setPlataforma('')
      setFoto('')
      setJogo('')
    }
  return (
    <section className='section'>
          <form onSubmit={salvando}> 
            <h2>Preencha os dados para criar o seu card</h2>
            <Formulario 
            label='Nome:'
            placeholder='Digite seu nome:'
            valor={nome}
            alterado={valor=> setNome(valor)}/>

            <Formulario 
            label='Plataforma:'
            placeholder='Informe a sua plataforma.'
            valor={plataforma}
            alterado={valor=> setPlataforma(valor)}/>

            <Formulario 
            label='Foto:' 
            placeholder='Insira a url da imagem.'
            valor={foto}
            alterado={valor=> setFoto(valor)}/>

            <Select 
            label='Time:'
            itens ={props.jogos}
            valor={jogo}
            alterado={valor=> setJogo(valor)}/>

            <Botao/>
          </form>
    </section>
  )
}

export default Inputs

