import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* import './App.css' */
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)
  const [aceleracion,setAceleracion] = useState(0)
  const [velocidadI,setVelocidadI] = useState(0)
  const [velocidadF,setVelocidadF] = useState(0)
  const [posicionI,setPosicionI] = useState(0)
  const [posicionF,setPosicionF] = useState(0)
  const [time, setTime] = useState(0)
  const [estadoI, setEstadoI] = useState(0)
  return (
    <div className="App">
      <Form/>
    </div>
  )
}

export default App
