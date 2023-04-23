

export default function Suggestions({calcAceleracion,calcPosicionI,calcPosicionF,calcVelocidadI,calcVelocidadF,calcTime,velocidadI, aceleracion, velocidadF, posicionI, posicionF, time, estadoI }) {
  return(
    <div className="flex flex-col items-center">
      <h2 className="">Calcular</h2>
      <div className="mx-2 my-2 space-x-2 mt-5 mb-5 relative h-12 ">
      {posicionF != 0 && /* velocidadI != NaN && */ aceleracion > 0 && time > 0 &&  <button className="border border-teal-600 rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcPosicionI()}>Posición inicial</button>}
      {velocidadI > 0 && aceleracion > 0 && time > 0 &&  <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcPosicionF()}>Poscición final</button>}
      {/* velocidadI != NaN && */ velocidadF != 0 && time > 0 && aceleracion == 0 &&  <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcAceleracion()}>Aceleración</button>}
      {velocidadF != 0 && aceleracion > 0 && time > 0 && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadI()}>Velocidad inicial</button>}
      { velocidadI >= 0 && aceleracion > 0 && time > 0 && velocidadF==0 && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadF()}>Velocidad final</button>}
      {/* velocidadI != NaN && */ velocidadF !=0 && aceleracion > 0 && time==0 && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={() => calcTime()}>Tiempo</button>}
      </div>
      

    </div>
  )
}