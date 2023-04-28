

export default function Form({calc, distancia, setDistancia, min, setMin, seg, setSeg, miliSeg, setMiliSeg}) {
  return(
    <div className="flex flex-col justify-items-start items-center border border-teal-950 rounded-md p-4 w-96 h-80 mt-10 mb-10">
      <label className="mr-2">Distancia recorrida (m):
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" name="PosI" value={distancia} onClick={(e)=>e.target.select()} onChange={(e)=>setDistancia(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Minutos:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" name="PosF" value={min} onClick={(e)=>e.target.select()} onChange={(e)=>setMin(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Segundos:  
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={seg} onClick={(e)=>e.target.select()} onChange={(e)=>setSeg(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Milisegundos:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={miliSeg} onClick={(e)=>e.target.select()} onChange={(e)=>setMiliSeg(parseInt(e.target.value))}/>
      </label>

      <button onClick={(e)=> calc()} className="mt-8 border border-teal-600 rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200">Calcular</button>

      {/* <label className="mr-2">Velocidad final:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={velocidadF} onChange={(e)=>setVelocidadF(parseInt(e.target.value))}/>
      </label>

      <label className="mr-2">Tiempo:
        <input className="ml-2 border border-teal-600 mb-2 mt-2 rounded-md pl-2" type="number" value={time} onChange={(e)=>setTime(parseInt(e.target.value))}/>
      </label> */}
      
      {/* <label>Lanzamiento hacia arriba
      <input type="checkbox" name="switch-button" checked={estadoI} onChange={(e)=>setEstadoI(estadoI?false:true)} class="switch-button__checkbox"/>
      </label> */}
    </div>
  )
}