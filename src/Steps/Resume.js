
import { useEffect, useState } from 'react';

export default function Resume ({ values }) {

  
  function save() {
    

  }
  
  useEffect(() => {
    console.log(values[0])
  }, [])

  return (   
    <div className='container'>
    <div className='resume--values'>
    { values.map(value => {
      return (
      <div key={value.name} className='card--value one'>
      <p>{ value.name }</p>
      
      <div className='resumen--evaluation'>
        <h2>Tu evaluacion: { value.puntuation }</h2>
        <h3>Tus porques:</h3>
        <div>
        { value.comment}
        </div>
      </div>
      <div className='actions'>
        <h2>Acciones</h2>
        <p>{ value.actions?.first}</p>
        <p>{ value.actions?.second}</p>
        <p>{ value.actions?.third}</p>
      </div>
      <p className='resume--type'>{ value.type }</p>
      </div>)
    })
    }
   
    </div>
    <button className="button-info" onClick={save}>Guardar puntuación</button> 
    </div>
  )

}
