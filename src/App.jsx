import { useState } from 'react'

import Form from './components/Form'
import Suggestions from './components/Suggestions'
import Answer from './components/Answer'

function App() {
  const [distancia,setDistancia] = useState(0)
  const [min, setMin] = useState(0)
  const [seg, setSeg] = useState(0)
  const [miliSeg, setMiliSeg] = useState(0)
  const [estadoI, setEstadoI] = useState(false)
  const [res, setRes] = useState("");
  const [msg, setMsg] = useState("");

  /* function calcAceleracion() {
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
  } */

  function calc() {
    let time=0;

    if (min>0) {
      time= time + (min * 60);
    }else if (seg>0) {
      time = time + seg;
    }else if (miliSeg > 0) {
      time = time + (miliSeg/1000)
    }

    setRes(distancia/time)
    setMsg("m/s")
  }

  return (
    <div className='flex flex-col items-center '>
    <h1 className="text-teal-950 font-bold underline text-2xl mt-3">Calculadora MRUA</h1>
      <Form
      calc={calc}
        distancia={distancia}
        setDistancia={setDistancia}
        min={min}
        setMin={setMin}
        seg={seg}
        setSeg={setSeg}
        miliSeg={miliSeg}
        setMiliSeg={setMiliSeg}

      />
      {/* <Suggestions 
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
      /> */}
      
      <Answer msg={msg} res={res}/>

    </div>
  )
}

export default App
