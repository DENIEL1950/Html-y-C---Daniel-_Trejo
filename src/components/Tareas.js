//Componente que muestra las actividades (tareas) diarias de una persona
import React from 'react'

function Tareas() {
    const listadoTareas=[
        {
            titulo: "Estudiar Física",
            responsable: "Pedro Alvarado",
            descripcion: "Leer el capitulo 5 p+agina 67",
            prioridad: "mediana"
        },
        {
            titulo: "Reparar computadoras",
            responsable: "Galo del Castillo",
            descripcion: "Cambiar el disco duro",
            prioridad: "alta" 
        },
        {
            titulo: "Entrenar fútbol",
            responsable: "Enrique Ponce",
            descripcion: "Una hora de trabajo técnico y táctico",
            prioridad: "baja" 
        }
    ];

    console.log("Lista de tareas")
    console.log("Lista de tareas")
  return (
    <div>
        <ul>
            {
                listadoTareas.map(item =>{
                    return <li key ={index}>{item.titulo}</li>
                })
            }

        </ul>
    </div>
  )
}
