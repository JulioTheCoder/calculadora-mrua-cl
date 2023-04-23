

export default function Suggestions({velocidadI, aceleracion, velocidadF, posicionI, posicionF, time, estadoI }) {
  return(
    <div>
    
      {  <button>Posición inicial</button>}
      {velocidadI != 0 && posicionI != 0 && time > 0 && aceleracion > 0 &&  <button>Poscición final</button>}
      {velocidadI != 0 && velocidadF != 0 && time > 0 &&  <button>Aceleración</button>}
      {velocidadF != 0 && aceleracion > 0 && time > 0 && <button>Velocidad inicial</button>}
      {velocidadI != 0 && aceleracion > 0 && time > 0 && <button>Velocidad final</button>}
      {velocidadI != 0 && velocidadF !=0 && aceleracion > 0 && <button>Tiempo</button>}
      
      

    </div>
  )
}