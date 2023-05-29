import { useState } from 'react'

import Form from './components/Form'
import Suggestions from './components/Suggestions'
import Answer from './components/Answer'

function App() {
  //Estados inicializados con los que funciona el proyecto
  const [aceleracion,setAceleracion] = useState()
  const [velocidadI,setVelocidadI] = useState()
  const [velocidadF,setVelocidadF] = useState()
  const [posicionI,setPosicionI] = useState()
  const [posicionF,setPosicionF] = useState()
  const [time, setTime] = useState()
  const [estadoI, setEstadoI] = useState(false)
  const [res, setRes] = useState("");
  const [msg, setMsg] = useState("");
//---------------------------------------------------------------

  //Funciones que hacen los calculos necesarios
    //Velocidad final
    function calcVelocidadF() {
      let vf;

      vf=(velocidadI)+(aceleracion*time)
      setMsg("Velocidad final =");
      setRes(vf);
    }

    function calcVelocidadF2() {
      let vf;
      vf=(velocidadI**2)+ (2*aceleracion)*(posicionF-posicionI);
      vf= Math.abs(vf)
      vf= Math.sqrt(vf);
      setMsg("Velocidad final =");
      setRes(vf);
    }
    //--------------------------------------------------------
    //Velocidad inicial
    function calcVelocidadI() {
      let vi;

      vi=(posicionF-posicionI)/time;
      vi=Math.abs(vi)
      setMsg("Velocidad inicial =");
      setRes(vi);
    }

    function calcVelocidadI2() {
      let vi;

      vi=(velocidadF)-(aceleracion*time)
      vi=Math.abs(vi)
      setMsg("Velocidad inicial =");
      setRes(vi);
    }

    function calcVelocidadI3() {
      let vi;

      vi=(velocidadF**2)-(2*aceleracion)*(posicionF-posicionI)
      vi=Math.abs(vi)
      vi=Math.sqrt(vi)
      setMsg("Velocidad inicial =");
      setRes(vi);
    }
    //------------------------------------------------------------------

    //Aceleración
    function calcAceleracion() {
      let a;

      a= (velocidadF - velocidadI)/time;
      a = Math.abs(a)
      setMsg("Aceleración =");
      setRes(a);
    }

    function calcAceleracion2() {
      let a;

      a = ((velocidadF**2) - (velocidadI**2))/(2*(posicionF-posicionI));
      a = Math.abs(a)
      setMsg("Aceleración =");
      setRes(a);
    }
    //-------------------------------------------------------------------

    //Posición inicial
    function calcPosicionI() {
      let xi;

      xi= posicionF-(velocidadI*time)-((1/2) * aceleracion * time**2)
      
      setMsg("Posición Inicial =");
      setRes(xi);
    }

    function calcPosicionI2() {
      let xi;

      xi= (velocidadF-velocidadI)*time/(2-((1/2)*aceleracion*(time**2)));
      
      setMsg("Posición Inicial =");
      setRes(xi);
    }
    //------------------------------------------------------------------------------

    //Posición final
    function calcPosicionF() {
      let xf;

      xf=posicionI+(velocidadI*time)+((1/2) * aceleracion * (time**2))

      setMsg("Posición Final =");
      setRes(xf);
    }

    function calcPosicionF2() {
      let xf;

      xf=posicionI+(((velocidadI+velocidadF)/2)*time)

      setMsg("Posición Final =");
      setRes(xf);
    }
    //---------------------------------------------------------------------------

    //Tiempo
    function calcTime() {
      let t;

      t= (velocidadF - velocidadI)/ aceleracion
      t=Math.abs(t);
      setMsg("Tiempo =");
      setRes(t);
    }

    function calcTime2() {
      let t;

      t= (2*(posicionF-posicionI))/(velocidadF + velocidadI)
      t=Math.abs(t);
      setMsg("Tiempo =");
      setRes(t);
    }
    //--------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------

  //Componentes que se visualizarán con sus respectivos parámetros

  return (
    <div className='flex flex-col items-center '>
    <h1 className="text-teal-950 font-bold underline text-2xl mt-3">Calculadora MRUA</h1>
      <Form //El formulario pedirá los datos para operar
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
        calcAceleracion2={calcAceleracion2}
        calcPosicionI={calcPosicionI}
        calcPosicionI2={calcPosicionI2}
        calcPosicionF={calcPosicionF}
        calcPosicionF2={calcPosicionF2}
        calcVelocidadI={calcVelocidadI}
        calcVelocidadI2={calcVelocidadI2}
        calcVelocidadI3={calcVelocidadI3}
        calcVelocidadF={calcVelocidadF}
        calcVelocidadF2={calcVelocidadF2}
        calcTime={calcTime}
        calcTime2={calcTime2}
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
//-------------------------------------------------------------------------------------
export default App
