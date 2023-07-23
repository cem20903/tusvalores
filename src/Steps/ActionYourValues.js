
import { useEffect, useState } from 'react';

export default function ReviewYourValues ({ valuesReviewed, setResults }) {


  const [valuesWithActions, setValuesWithActions] = useState([])
  
  useState(() => {
    setValuesWithActions([...valuesReviewed])
  }, [])

  function save() {
    setResults(valuesWithActions)
  }
  
  function manageInput (currentValue, action, numberOfAction) {
  
    const valuesAndActions = valuesWithActions.map(value => {
    if(value.name === currentValue.name) {
      return {
        ...value,
        actions: {
          ...value.actions,
         [numberOfAction]: action
        }
      }
    }
    
    return value
  
    })
    setValuesWithActions(valuesAndActions)
  }
  
  function showDescription (value) {
    alert(value.description)
  }

  return (   
  <div className='container'>
  <div className='values--container'>
  { valuesReviewed.map(value => {
    return (
    <div key={value.name} className='card--value one'>
    <p>{ value.name }</p>
    <input type="text" placeholder='Acciones' onChange={(e) => manageInput(value, e.target.value, 'first')} />
    <input type="text" placeholder='Acciones' onChange={(e) => manageInput(value, e.target.value, 'second')}/>
    <input type="text" placeholder='Acciones' onChange={(e) => manageInput(value, e.target.value, 'third')}/>
    <button className="button-info" onClick={() => showDescription(value)}>Ver descripción</button>
    <p className='card--type'>{ value.type }</p>
    </div>)
  })
  }
 
  </div>
  <button className="button-info" onClick={save}>Guardar acciones</button> 
  </div>)

}
