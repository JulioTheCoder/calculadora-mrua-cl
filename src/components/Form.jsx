

export default function Form({estadoI, setEstadoI,aceleracion,setAceleracion,velocidadI,setVelocidadI,velocidadF,setVelocidadF,posicionI,setPosicionI,posicionF,setPosicionF,time, setTime}) {
  return(
    <div className="flex flex-col justify-items-start items-center border border-teal-950 rounded-md p-4 w-96 h-80 mt-10 mb-10">
      <label className="mr-2">Posición inicial:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" name="PosI" value={posicionI} onChange={(e)=>setPosicionI(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Posición final:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" name="PosF" value={posicionF} onChange={(e)=>setPosicionF(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Aceleración:  
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={aceleracion} onChange={(e)=>setAceleracion(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Velocidad inicial:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={velocidadI} onChange={(e)=>setVelocidadI(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Velocidad final:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={velocidadF} onChange={(e)=>setVelocidadF(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Tiempo:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={time} onChange={(e)=>setTime(parseInt(e.target.value))}/>
      </label>
      
      {/* <label>Lanzamiento hacia arriba
      <input type="checkbox" name="switch-button" checked={estadoI} onChange={(e)=>setEstadoI(estadoI?false:true)} class="switch-button__checkbox"/>
      </label> */}
    </div>
  )
}