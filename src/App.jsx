import { useState } from 'react'

import Form from './components/Form'
import Suggestions from './components/Suggestions'
import Answer from './components/Answer'

function App() {
  const [aceleracion,setAceleracion] = useState(0)
  const [velocidadI,setVelocidadI] = useState(0)
  const [velocidadF,setVelocidadF] = useState(0)
  const [posicionI,setPosicionI] = useState(0)
  const [posicionF,setPosicionF] = useState(0)
  const [time, setTime] = useState(0)
  const [estadoI, setEstadoI] = useState(false)
  const [res, setRes] = useState("");
  const [msg, setMsg] = useState("");

  function calcAceleracion() {
    let a;

    a= (velocidadF - velocidadI)/time;
    setMsg("Aceleración =");
    setRes(a);
  }

  function calcVelocidadI() {
    let vi;

    vi=velocidadF-(aceleracion*time)
    setMsg("Velocidad inicial =");
    setRes(vi);
  }

  function calcVelocidadF() {
    let vf;

    vf=velocidadI+(aceleracion*time)
    setMsg("Velocidad final =");
    setRes(vf);
  }

  function calcPosicionI() {
    let xi;

    xi= posicionF-(velocidadI*time)-((1/2) * aceleracion * time**2)
    
    setMsg("Posición Inicial =");
    setRes(xi);
  }

  function calcPosicionF() {
    let xf;

    xf=posicionI+(velocidadI*time)+((1/2) * aceleracion * (time**2))

    setMsg("Posición Final =");
    setRes(xf);
  }

  function calcTime() {
    let t;

    t= (velocidadF - velocidadI)/ aceleracion
    setMsg("Tiempo");
    setRes(t);
  }
  return (
    <div className='flex flex-col items-center '>
    <h1 className="text-teal-950 font-bold underline text-2xl mt-3">Calculadora MRUA</h1>
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
        calcAceleracion={calcAceleracion}
        calcPosicionI={calcPosicionI}
        calcPosicionF={calcPosicionF}
        calcVelocidadI={calcVelocidadI}
        calcVelocidadF={calcVelocidadF}
        calcTime={calcTime}
        aceleracion={aceleracion}
        velocidadI={velocidadI}
        velocidadF={velocidadF}
        posicionI={posicionI}
        posicionF={posicionF}
        time={time}
        estadoI={estadoI}
      />
      
      <Answer msg={msg} res={res}/>

    </div>
  )
}

export default App
