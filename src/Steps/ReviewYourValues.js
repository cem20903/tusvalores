
import { useEffect, useState } from 'react';

export default function ReviewYourValues ({ values, setValuesReviewed }) {

  const [reviewedValues, setReviewedValues] = useState([])

  useEffect(() => {
    setReviewedValues([...values])
  }, [])
  
  function save() {
    
    const isAllCompleted = reviewedValues.filter(value => value.puntuation)

    if(isAllCompleted.length === 5) {
      setValuesReviewed(reviewedValues)
    }
  }
  
  function manageInput (currentValue, puntuation) {
  
    const valuesWithPuntuation = reviewedValues.map(value => {
    if(value.name === currentValue.name) {
      return {
        ...value,
        puntuation
      }
    }
    
    return value
    
    
    })
  
    setReviewedValues(valuesWithPuntuation)
  }
  
  
  function manageComent (currentValue, comment) {
  
    const valuesWithPuntuation = reviewedValues.map(value => {
      if(value.name === currentValue.name) {
        return {
          ...value,
          comment
        }
      }
      
      return value
      
      
      })
    
      setReviewedValues(valuesWithPuntuation)
  
  }
  
  function showDescription (value) {
    alert(value.description)
  }

  return (   
  <div className='container'>
  <div className='values--container'>
  { values.map(value => {
    return (
    <div key={value.name} className='card--value one'>
    <input type="text" placeholder='Inserta puntuación' onChange={(e) => manageInput(value, e.target.value)} />
    
    <textarea placeholder="Escribe el porque" rows="10" onChange={(e) => manageComent(value, e.target.value)}/>
    <p>{ value.name }</p>
    <p className='card--type'>{ value.type }</p>
    <button className="button-info" onClick={() => showDescription(value)}>Ver descripción</button>
    </div>)
  })
  }
 
  </div>
  <button className="button-info" onClick={save}>Guardar puntuación</button> 
  </div>)

}
