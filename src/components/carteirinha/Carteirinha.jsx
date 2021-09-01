import React from 'react'
import Rosto01 from '../../img/rosto01.jpg'
import Rosto02 from '../../img/rosto02.jpg'
import Rosto03 from '../../img/rosto03.jpg'
import '../carteirinha/Carteirinha.css'

export default function Carteirinha() {

  return(
    <>
      <h1>Carteirinha - Parte 1</h1>
      <div className="cards">
        <div className="carteirinha">
          <img src={Rosto01} alt="rosto_01" width="200px"/>
          <h2>Rafael Arantes</h2>
          <h3>55221</h3>
          <p>Desenvolvimento de Sistemas</p>
          <p>2TDSG</p>
        </div>

        <div className="carteirinha">
          <img src={Rosto02} alt="rosto_02" width="200px"/>
          <h2>Rodrigo Braga</h2>
          <h3>54682</h3>
          <p>Marketing e Mídia Digital</p>
          <p>2MKG</p>
        </div>

        <div className="carteirinha">
          <img src={Rosto03} alt="rosto_03" width="200px"/>
          <h2>Luisa Abreu</h2>
          <h3>56412</h3>
          <p>Engenharia da Computação</p>
          <p>2ENCA</p>
        </div>
      </div>
    </>
  )
}