import React from 'react'
//El componente saludos, resive como parametro el nombre de la persona
//saludo debe nombrar a esa persona
export default function Saludos(props) {
  return (
    <div>Hola{props.nombre} {props.apellidos}, Bienvenido a la PUCESE</div>
  )
}
