import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Formulario from "./components/Formulario/Formulario"
import Inputs from "./components/Inputs/Inputs"
import Time from "./components/Time/Time"

//imagens
import Street from './components/image/street.png'
import Kof from '/image/kof.png'
import Tekken from '/image/tekken.png'
import Mortal from  '/image/mortal.png'
import Marvel from '/image/marvel.png'
import Dragon from '/image/dragonball.png'
import injustice from '/image/injustice.png'


function App() {

  const times = [
    {
      id: 0,
      nome: 'Street Fighter',
      corPrimaria: '#DC1637',
      background: Street
    },
    { 
      id: 1,
      nome: 'Kof',
      corPrimaria: '#3AFA9B',
      background: Kof
    },
    {
      id: 2,
      nome: 'Tekken',
      corPrimaria: '#3AFA4B',
      background: Tekken
    },
    {
      id: 3,
      nome: 'Mortal Kombat',
      corPrimaria: '#00CED1',
      background: Mortal
    }, 
    {
      id: 4,
      nome: 'Marvel vs Capcom',
      corPrimaria: '#21459B',
      background: Marvel
    }, 
    {
      id: 5,
      nome: 'Dragon Ball',
      corPrimaria: '#800000',
      background: Dragon
    },
    {
      id: 6,
      nome: 'injustice',
      corPrimaria: '#FFFF00',
      background: injustice
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const novoGamerCadastrado = (jogador)=>{
    
    setJogadores([...jogadores, jogador])
    console.log(jogador)
  
  }

 
  return (
    <div className="App">
        <Banner/>
        <Inputs jogos={times.map(time=>time.nome)} gamerCadastrado={jogador=> novoGamerCadastrado(jogador)}/>
        {times.map(time=> <Time 
               key={time.nome}
               nome={time.nome}
               corPrimaria={time.corPrimaria}
               fundo={time.background}
               jogadores={jogadores.filter(jogador=> jogador.jogo === time.nome)}
               />)}
        
    </div>
  )
}

export default App
