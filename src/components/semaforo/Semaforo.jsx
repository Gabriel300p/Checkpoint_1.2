import React, { useState } from "react";
import "../semaforo/Semaforo.css";

export default function Semaforo() {

  const [num, setNum] = useState(0)

  return (
    <>
    <h1>Semáforo</h1>
        {
          num === 1 | num === 4 | num === 7?
          <h3 style={{fontSize:'4rem', color:"red"}}>Pare</h3> : 
          <h3>Pare</h3> 
        }
        {
          num === 2 | num === 5 | num === 8?
          <h3 style={{fontSize:'4rem', color:"yellow"}}>Atenção</h3> : 
          <h3>Atenção</h3> 
        }
        {
          num === 3 | num === 6 | num === 9?
          <h3 style={{fontSize:'4rem', color:"green"}}>Siga</h3> : 
          <h3>Siga</h3> 
        }
        {
          num >= 10 | num <= 0 ? <h4>Não funciona mais :( <br/> (Dica: Aperte outro botão)</h4> : <h4>Rodando</h4>
        }
      
      <div className="botao">
        <button onClick={() => setNum(num + 1)}>+ 1</button>
        <button onClick={() => setNum(1)}>Pare</button>
        <button onClick={() => setNum(2)}>Atenção</button>
        <button onClick={() => setNum(3)}>Siga</button>
        <button onClick={() => setNum(num - 1)}>- 1</button>
      </div>
    </>
  );
}