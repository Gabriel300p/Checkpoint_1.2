import React from 'react'

export default function Carros(props) {

  const carros = ['Astra', ', Fusca', ', Onix', ', HB20', ', Santa Fé', ', X10', ', Camaro', ', Uno', ', New Beatle', ', Corolla' ]

  return(
    <>
      {props.children}
      <p style={{fontSize: '2rem'}}>{carros}</p>
    </>
  )
}