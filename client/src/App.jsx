import { useState } from 'react'

/* import './App.css' */
import Form from './components/form'
import Suggestions from './components/Suggestions'

function App() {
  const [aceleracion,setAceleracion] = useState(0)
  const [velocidadI,setVelocidadI] = useState(0)
  const [velocidadF,setVelocidadF] = useState(0)
  const [posicionI,setPosicionI] = useState(0)
  const [posicionF,setPosicionF] = useState(0)
  const [time, setTime] = useState(0)
  const [estadoI, setEstadoI] = useState(false)

  function handleInputAceleracion(e){
    setAceleracion(e.target.value)
    console.log("Aceleración: " + aceleracion)
  }
  return (
    <div className="App">
      <Form
        aceleracion={aceleracion}
        setAceleracion={setAceleracion}
        velocidadI={velocidadI}
        setVelocidadI={setVelocidadI}
        velocidadF={velocidadF}
        setVelocidadF={setVelocidadF}
        posicionI={posicionI}
        setPosicionI={setPosicionI}
        posicionF={posicionF}
        setPosicionF={setPosicionF}
        time={time}
        setTime={setTime}
        estadoI={estadoI}
        setEstadoI={setEstadoI}
      />
      <Suggestions 
        aceleracion={aceleracion}
        velocidadI={velocidadI}
        velocidadF={velocidadF}
        posicionI={posicionI}
        posicionF={posicionF}
        time={time}
        estadoI={estadoI}
      />


    </div>
  )
}

export default App
