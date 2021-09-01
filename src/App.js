import React from 'react'
import './App.css'
import Semaforo from './components/semaforo/Semaforo'
import Carteirinha from './components/carteirinha/Carteirinha'
import Carteirinha2 from './components/carteirinha/Carteirinha2'
import Carros from './components/carros/Carros'

export default function App() {

  return(
    <>
    <h1>Nome: Gabriel Andrade Pereira | RM: 87564 | Turma: 1TDSH</h1>

    <br/>
    
    <Semaforo/>

    <br/>

    <Carros>
      <h1>Carros</h1>
    </Carros>

    <br/>

    <Carteirinha/>

    <br/>

    <Carteirinha2/>
    </>
  )
}

