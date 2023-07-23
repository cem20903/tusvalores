import { useEffect, useState } from 'react';
import './App.css';
import KnowYourValues from './Steps/KnowYourValues';
import ReviewYourValues from './Steps/ReviewYourValues';
import ActionYourValues from './Steps/ActionYourValues';
import Resume from './Steps/Resume';

function App() {

  const [currentStep, setCurrentStep] = useState(1)
  const [finalValues, setFinalValues] = useState([
    { name: 'Salud y bienestar', type: 'Eje emocional', description: 'Promover el cuidado y la mejora de la salud física y mental.' },
    { name: 'Relaciones familiares', type: 'Social', description: 'Cuidar y mantener vínculos afectivos con la familia.' },
    { name: 'Austeridad', type: 'Pragmatico', description: 'Buscar la simplicidad y evitar el derroche en la vida y en los negocios.' },
    { name: 'Flexibilidad', type: 'Pragmatico', description: 'Adaptarse fácilmente a nuevas situaciones y cambios.' },
    { name: 'Libertad', type: 'Eje emocional', description: 'Defender y promover la autonomía y libertad individual.' },  
  ])
  const [valuesReviewed, setValuesReviewed] = useState([])
  const [results, setResults] = useState([])
  
  useEffect(() => {
    if(finalValues.length === 5) {
      setCurrentStep(2)
    }
  }, [finalValues])
  
  
  useEffect(() => {
    if(valuesReviewed.length === 5) {
      console.log('AQUI')
      setCurrentStep(3)
    }
  }, [valuesReviewed])
  
  
  useEffect(() => {
    if(results.length === 5) {
      setCurrentStep(4)
    }
  
  }, [results])

  return (
    <div>
     { currentStep === 1 && <KnowYourValues setFinalValues={setFinalValues}  /> }
     { currentStep === 2 && <ReviewYourValues values={finalValues} setValuesReviewed={setValuesReviewed} /> }
     { currentStep === 3 && <ActionYourValues valuesReviewed={valuesReviewed} setResults={setResults}  />}
     { currentStep === 4 && <Resume values={results}  />}
    </div>
  );
}

export default App;
