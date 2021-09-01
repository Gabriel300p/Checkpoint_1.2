import React, {useState} from 'react'
import Rosto01 from '../../img/rosto01.jpg'
import Rosto02 from '../../img/rosto02.jpg'
import Rosto03 from '../../img/rosto03.jpg'
import '../carteirinha/Carteirinha.css'
import '../carteirinha/Carteirinha2.css'

export default function Carteirinha() {

  const [nome1, setNome1] = useState('')
  const [rm1, setRm1] = useState('')
  const [curso1, setCurso1] = useState('')
  const [turma1, setTurma1] = useState('')
  const [nome2, setNome2] = useState('')
  const [rm2, setRm2] = useState('')
  const [curso2, setCurso2] = useState('')
  const [turma2, setTurma2] = useState('')
  const [nome3, setNome3] = useState('')
  const [rm3, setRm3] = useState('')
  const [curso3, setCurso3] = useState('')
  const [turma3, setTurma3] = useState('')

  return(
    <>
      <h1>Carteirinha - Parte 2</h1>
      <div className="cards2"> 
        <div className="carteirinha2">
          <h3>Aluno 01</h3>
          <div className="form">
            <form action="#">
              <label>Nome: </label> <br/>
              <input type="text" onChange={(element) => setNome1(element.target.value)}/> <br/>
              <label>Rm: </label> <br/>
              <input type="number" onChange={(element) => setRm1(element.target.value)}/> <br/>
              <label>Curso: </label> <br/>
              <input type="text" onChange={(element) => setCurso1(element.target.value)}/> <br/>
              <label>Turma: </label> <br/>
              <input type="text" onChange={(element) => setTurma1(element.target.value)}/> <br/>
            </form>
          </div>
            <img src={Rosto01} alt="rosto_01" width="200px"/>
            <h2>{nome1}</h2>
            <h3>{rm1}</h3>
            <p>{curso1}</p>
            <p>{turma1}</p>
        </div>

        <div className="carteirinha2">
        <h3>Aluno 02</h3>
          <div className="form">
            <form action="#">
              <label>Nome: </label> <br/>
              <input type="text" onChange={(element) => setNome2(element.target.value)}/> <br/>
              <label>Rm: </label> <br/>
              <input type="number" onChange={(element) => setRm2(element.target.value)}/> <br/>
              <label>Curso: </label> <br/>
              <input type="text" onChange={(element) => setCurso2(element.target.value)}/> <br/>
              <label>Turma: </label> <br/>
              <input type="text" onChange={(element) => setTurma2(element.target.value)}/> <br/>
            </form>
          </div>
          <img src={Rosto02} alt="rosto_01" width="200px"/>
          <h2>{nome2}</h2>
          <h3>{rm2}</h3>
          <p>{curso2}</p>
          <p>{turma2}</p>
        </div>

        
        <div className="carteirinha2">
        <h3>Aluno 03</h3>
        <div className="form">
          <form action="#">
            <label>Nome: </label> <br/>
            <input type="text" onChange={(element) => setNome3(element.target.value)}/> <br/>
            <label>Rm: </label> <br/>
            <input type="number" onChange={(element) => setRm3(element.target.value)}/> <br/>
            <label>Curso: </label> <br/>
            <input type="text" onChange={(element) => setCurso3(element.target.value)}/> <br/>
            <label>Turma: </label> <br/>
            <input type="text" onChange={(element) => setTurma3(element.target.value)}/> <br/>
          </form>
        </div>
          <img src={Rosto03} alt="rosto_01" width="200px"/>
          <h2>{nome3}</h2>
          <h3>{rm3}</h3>
          <p>{curso3}</p>
          <p>{turma3}</p>
        </div>
      </div>
    </>
  )
}