//Este componente despliega el formulario con el que se piden los datos necesarios para cálcular

export default function Form({estadoI, setEstadoI,aceleracion,setAceleracion,velocidadI,setVelocidadI,velocidadF,setVelocidadF,posicionI,setPosicionI,posicionF,setPosicionF,time, setTime}) {
  return(
    <div className="flex flex-col justify-items-start items-center border border-teal-950 rounded-md p-4 w-120 h-80 mt-10 mb-10">
      <label className="mr-2">Posición inicial (x<sub>i</sub>) :
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" step="0.01" type="number" name="PosI" value={posicionI} onChange={(e)=>setPosicionI(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Posición final (x<sub>f</sub>) :
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" step="0.01" type="number" name="PosF" value={posicionF} onChange={(e)=>setPosicionF(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Aceleración (a) :  
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" step="0.01" type="number" value={aceleracion} onChange={(e)=>setAceleracion(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Velocidad inicial (v<sub>i</sub>) :
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" step="0.01" type="number" value={velocidadI} onChange={(e)=>setVelocidadI(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Velocidad final (v<sub>f</sub>) :
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" step="0.01" type="number" value={velocidadF} onChange={(e)=>setVelocidadF(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Tiempo (t) :
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" step="0.01" type="number" value={time} onChange={(e)=>setTime(parseInt(e.target.value))}/>
      </label>
      
      {/* <label>Lanzamiento hacia arriba
      <input type="checkbox" name="switch-button" checked={estadoI} onChange={(e)=>setEstadoI(estadoI?false:true)} class="switch-button__checkbox"/>
      </label> */}
    </div>
  )
}