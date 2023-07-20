import { useEffect, useState } from 'react';
import './App.css';

// const values = [
//   { name: 'Austeridad', type: 'Pragmatico' },
//   { name: 'Comunicación', type: 'Pragmatico' },
//   { name: 'Contribución', type: 'Pragmatico' },
//   { name: 'Determinación', type: 'Pragmatico' },
//   { name: 'Éxito profesional', type: 'Pragmatico' },
//   { name: 'Flexibilidad', type: 'Pragmatico' },
//   { name: 'Influencia', type: 'Pragmatico' },
//   { name: 'Liderazgo', type: 'Pragmatico' },
//   { name: 'Organización', type: 'Pragmatico' },
//   { name: 'Perseverancia', type: 'Pragmatico' },
//   { name: 'Planificación', type: 'Pragmatico' },
//   { name: 'Pragmatismo', type: 'Pragmatico' },
//   { name: 'Puntualidad', type: 'Pragmatico' },
//   { name: 'Seguridad', type: 'Pragmatico' },
//   { name: 'Simplificar', type: 'Pragmatico' },
//   { name: 'Tener dinero', type: 'Pragmatico' },
//   { name: 'Trabajador', type: 'Pragmatico' },
//   { name: 'Cooperación', type: 'Social' },
//   { name: 'Lealtad', type: 'Social' },
//   { name: 'Perdón', type: 'Social' },
//   { name: 'Apoyo', type: 'Social' },
//   { name: 'Mantener tradiciones', type: 'Social' },
//   { name: 'Respeto', type: 'Social' },
//   { name: 'Relaciones familiares', type: 'Social' },
//   { name: 'Amistad', type: 'Social' },
//   { name: 'Generosidad', type: 'Social' },
//   { name: 'Honor', type: 'Social' },
//   { name: 'Integridad', type: 'Social' },
//   { name: 'Igualdad', type: 'Social' },
//   { name: 'Transparencia', type: 'Social' },
//   { name: 'Equidad', type: 'Social' },
//   { name: 'Armonía', type: 'Social' },
//   { name: 'Justicia', type: 'Social' },
//   { name: 'Respeto al medio ambiente', type: 'Social' },
//   { name: 'Empatía', type: 'Eje emocional' },
//   { name: 'Salud y bienestar', type: 'Eje emocional' },
//   { name: 'Compasión', type: 'Eje emocional' },
//   { name: 'Creatividad', type: 'Eje emocional' },
//   { name: 'Cariño', type: 'Eje emocional' },
//   { name: 'Autocontrol', type: 'Eje emocional' },
//   { name: 'Calma', type: 'Eje emocional' },
//   { name: 'Iniciativa', type: 'Eje emocional' },
//   { name: 'Paciencia', type: 'Eje emocional' },
//   { name: 'Autoestima', type: 'Eje emocional' },
//   { name: 'Alegría-felicidad', type: 'Eje emocional' },
//   { name: 'Optimismo', type: 'Eje emocional' },
//   { name: 'Privacidad', type: 'Eje emocional' },
//   { name: 'Libertad', type: 'Eje emocional' },
//   { name: 'Mente abierta', type: 'Eje emocional' },
//   { name: 'Innovación', type: 'Eje emocional' },
//   { name: 'Diversión', type: 'Eje emocional' }
// ];

const values = [
  { name: 'Austeridad', type: 'Pragmatico', description: 'Buscar la simplicidad y evitar el derroche en la vida y en los negocios.' },
  { name: 'Comunicación', type: 'Pragmatico', description: 'Expresar claramente ideas y pensamientos para una mejor comprensión.' },
  { name: 'Contribución', type: 'Pragmatico', description: 'Contribuir de manera activa y positiva en diferentes aspectos de la vida y la sociedad.' },
  { name: 'Determinación', type: 'Pragmatico', description: 'Tener una firme resolución y enfoque para alcanzar metas y objetivos.' },
  { name: 'Éxito profesional', type: 'Pragmatico', description: 'Lograr un alto nivel de éxito en la carrera o profesión elegida.' },
  { name: 'Flexibilidad', type: 'Pragmatico', description: 'Adaptarse fácilmente a nuevas situaciones y cambios.' },
  { name: 'Influencia', type: 'Pragmatico', description: 'Tener un impacto positivo en las decisiones y acciones de los demás.' },
  { name: 'Liderazgo', type: 'Pragmatico', description: 'Guiar y motivar a otros hacia un objetivo común.' },
  { name: 'Organización', type: 'Pragmatico', description: 'Estructurar y planificar de manera eficiente actividades y recursos.' },
  { name: 'Perseverancia', type: 'Pragmatico', description: 'Persistir y mantenerse firme frente a los desafíos y obstáculos.' },
  { name: 'Planificación', type: 'Pragmatico', description: 'Elaborar estrategias y metas para alcanzar resultados deseados.' },
  { name: 'Pragmatismo', type: 'Pragmatico', description: 'Enfocarse en soluciones prácticas y realistas.' },
  { name: 'Puntualidad', type: 'Pragmatico', description: 'Ser preciso y cumplir con los compromisos de tiempo.' },
  { name: 'Seguridad', type: 'Pragmatico', description: 'Priorizar la prevención y la protección en diferentes situaciones.' },
  { name: 'Simplificar', type: 'Pragmatico', description: 'Hacer las cosas más sencillas y fáciles de entender o realizar.' },
  { name: 'Tener dinero', type: 'Pragmatico', description: 'Valorar la importancia de la estabilidad financiera.' },
  { name: 'Trabajador', type: 'Pragmatico', description: 'Comprometido y dedicado en la realización de tareas y proyectos.' },
  { name: 'Cooperación', type: 'Social', description: 'Trabajar en equipo y colaborar con otros para lograr objetivos comunes.' },
  { name: 'Lealtad', type: 'Social', description: 'Ser fiel y mantener el compromiso con personas, ideales o valores.' },
  { name: 'Perdón', type: 'Social', description: 'Aceptar y liberar resentimientos hacia otros.' },
  { name: 'Apoyo', type: 'Social', description: 'Brindar ayuda y asistencia a otros en momentos de necesidad.' },
  { name: 'Mantener tradiciones', type: 'Social', description: 'Valorar y preservar prácticas culturales y sociales.' },
  { name: 'Respeto', type: 'Social', description: 'Tratar a los demás con cortesía y consideración.' },
  { name: 'Relaciones familiares', type: 'Social', description: 'Cuidar y mantener vínculos afectivos con la familia.' },
  { name: 'Amistad', type: 'Social', description: 'Cultivar y valorar relaciones amistosas.' },
  { name: 'Generosidad', type: 'Social', description: 'Dar y compartir con los demás sin esperar algo a cambio.' },
  { name: 'Honor', type: 'Social', description: 'Mantener una conducta íntegra y respetable.' },
  { name: 'Integridad', type: 'Social', description: 'Actuar con honestidad y coherencia con los principios.' },
  { name: 'Igualdad', type: 'Social', description: 'Promover la equidad y el respeto hacia todas las personas.' },
  { name: 'Transparencia', type: 'Social', description: 'Ser claro y abierto en las acciones y comunicaciones.' },
  { name: 'Equidad', type: 'Social', description: 'Buscar la justicia y la igualdad en la distribución de recursos y oportunidades.' },
  { name: 'Armonía', type: 'Social', description: 'Fomentar la paz y la convivencia pacífica entre las personas.' },
  { name: 'Justicia', type: 'Social', description: 'Abogar por el respeto de los derechos y la equidad en decisiones.' },
  { name: 'Respeto al medio ambiente', type: 'Social', description: 'Cuidar y proteger el entorno natural y los recursos naturales.' },
  { name: 'Empatía', type: 'Eje emocional', description: 'Comprender y compartir los sentimientos y perspectivas de los demás.' },
  { name: 'Salud y bienestar', type: 'Eje emocional', description: 'Promover el cuidado y la mejora de la salud física y mental.' },
  { name: 'Compasión', type: 'Eje emocional', description: 'Mostrar sensibilidad y comprensión hacia el sufrimiento de otros.' },
  { name: 'Creatividad', type: 'Eje emocional', description: 'Generar ideas originales y soluciones innovadoras.' },
  { name: 'Cariño', type: 'Eje emocional', description: 'Mostrar afecto y ternura hacia los demás.' },
  { name: 'Autocontrol', type: 'Eje emocional', description: 'Mantener la calma y manejar emociones y acciones de manera equilibrada.' },
  { name: 'Calma', type: 'Eje emocional', description: 'Mantener la tranquilidad y serenidad frente a situaciones estresantes.' },
  { name: 'Iniciativa', type: 'Eje emocional', description: 'Tomar acciones y decisiones proactivas.' },
  { name: 'Paciencia', type: 'Eje emocional', description: 'Tener tolerancia y tranquilidad en situaciones que requieren tiempo.' },
  { name: 'Autoestima', type: 'Eje emocional', description: 'Tener una valoración positiva y confianza en uno mismo.' },
  { name: 'Alegría-felicidad', type: 'Eje emocional', description: 'Experimentar sentimientos de gozo y bienestar.' },
  { name: 'Optimismo', type: 'Eje emocional', description: 'Mantener una actitud positiva y esperanzadora hacia el futuro.' },
  { name: 'Privacidad', type: 'Eje emocional', description: 'Valorar el derecho a mantener la intimidad y privacidad personal.' },
  { name: 'Libertad', type: 'Eje emocional', description: 'Defender y promover la autonomía y libertad individual.' },
  { name: 'Mente abierta', type: 'Eje emocional', description: 'Estar dispuesto a considerar nuevas ideas y perspectivas.' },
  { name: 'Innovación', type: 'Eje emocional', description: 'Buscar y aplicar nuevas ideas, conceptos y enfoques para resolver problemas y mejorar.' },
  { name: 'Diversión', type: 'Eje emocional', description: 'Disfrutar de actividades y momentos alegres que brindan felicidad y satisfacción.' }
];



function getFirstValues(array) {
  // Comprobamos si el array tiene menos de 5 elementos
  if (array.length < 5) {
    throw new Error('El array debe contener al menos 5 elementos.');
  }
  
  // Creamos una copia del array original
  const copiaArray = [...array];
  
  // Creamos un nuevo array para almacenar los elementos aleatorios
  const elementosAleatorios = [];
  
  // Obtenemos 5 elementos aleatorios del array
  for (let i = 0; i < 5; i++) {
    // Generamos un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
    
    // Extraemos el elemento aleatorio y lo agregamos al nuevo array
    elementosAleatorios.push(copiaArray.splice(indiceAleatorio, 1)[0]);
  }
  
  // Devolvemos el array con los elementos aleatorios
  return elementosAleatorios;
}






function App() {

  const [initialValues, setInitialValues] = useState([])
  const [currentValue, setCurrentValue] = useState({})
  const [valuesShowed, setValuesShowed] = useState([])
  const [isFirstCharged, setIsFirstCharged] = useState(true)
  

  useEffect(() => {
    const initialValues = getFirstValues(values) 
    setInitialValues(initialValues)
  }, [])
  
  useEffect(() => {

if(isFirstCharged) {
  if(initialValues.length > 0) {
    setValuesShowed(initialValues)
    setIsFirstCharged(false)
  }
}

  
  }, [initialValues])
  
  
  useEffect(() => {
  if(valuesShowed.length === 5) {
    getNewValue()
  }
  }, [valuesShowed])
  
  function getNewValue () {
    const indiceAleatorio = Math.floor(Math.random() * values.length);
    
    const isValuesShowed = valuesShowed.map(value => value.name).includes(values[indiceAleatorio].name)
    
    if(isValuesShowed) {
      getNewValue()
      return
    }
    
    const copyOfValuesShowed = [...valuesShowed]
    copyOfValuesShowed.push(values[indiceAleatorio])
    setValuesShowed(copyOfValuesShowed)
    
  
    
    if(values.length === copyOfValuesShowed.length) {
      alert('Se supone que se han mostrado todos')
    }
    
    setCurrentValue(values[indiceAleatorio])
  }
  
  function replaceValue(replacedValue) {
    const copyInitialValues = [...initialValues]
    const indice = copyInitialValues.findIndex(objeto => objeto === replacedValue);
    
    if (indice !== -1) {
      copyInitialValues.splice(indice, 1, currentValue);
    }
    
    const copyOfValuesShowed = [...valuesShowed]
    copyOfValuesShowed.push(currentValue)
    setValuesShowed(copyOfValuesShowed)
    
    setInitialValues(copyInitialValues)
    getNewValue()
  }
  
  
  function showDescription (value) {
    alert(value.description)
  }


  
  return (
    <div className="App">
    <div className='values--count'>{ valuesShowed.length } / { values.length }</div>
    <div className='values--container'>
      { initialValues.map(value => {
        return (
        <div key={value.name} className='card--value'>
        <button onClick={() => replaceValue(value)}>Sustituir</button>
        <button onClick={() => showDescription(value)}>Ver descripción</button>
        <p>{ value.name }</p>
        <p className='card--type'>{ value.type }</p>
        </div>)
      })
      }
      
      </div>
      
      <div className='card--value'>
        <p>{ currentValue && currentValue.name}</p>
        <button onClick={getNewValue}>Muestra nuevo Valor</button>
        <button onClick={() => showDescription(currentValue)}>Ver descripción</button>
      </div>
     
    </div>
  );
}

export default App;
