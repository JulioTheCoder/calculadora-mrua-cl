

export default function Form({estadoI, setEstadoI,aceleracion,setAceleracion,velocidadI,setVelocidadI,velocidadF,setVelocidadF,posicionI,setPosicionI,posicionF,setPosicionF,time, setTime}) {
  return(
    <div>
      <label>Posición inicial
        <input type="number" name="PosI" value={posicionI} onChange={(e)=>setPosicionI(e.target.value)}/>
      </label>

      <label>Posición final
        <input type="number" name="PosF" value={posicionF} onChange={(e)=>setPosicionF(e.target.value)}/>
      </label>

      <label>Aceleración
        <input type="number" value={aceleracion} onChange={(e)=>setAceleracion(e.target.value)}/>
      </label>

      <label>Velocidad inicial
        <input type="number" value={velocidadI} onChange={(e)=>setVelocidadI(e.target.value)}/>
      </label>

      <label>Velocidad final
        <input type="number" value={velocidadF} onChange={(e)=>setVelocidadF(e.target.value)}/>
      </label>

      <label>Tiempo
        <input type="number" value={time} onChange={(e)=>setTime(e.target.value)}/>
      </label>
      
      <label>Lanzamiento hacia arriba
      <input type="checkbox" name="switch-button" checked={estadoI} onChange={(e)=>setEstadoI(estadoI?false:true)} class="switch-button__checkbox"/>
      </label>
    </div>
  )
}