//Este comonente se encarga de mostrar las sugerencias de los cálculos que se pueden efectuar dependiendo de los datos ingresados

export default function Suggestions({calcAceleracion,calcAceleracion2,calcPosicionI,calcPosicionI2,calcPosicionF,calcPosicionF2,calcVelocidadI,calcVelocidadI2,calcVelocidadF, calcVelocidadF2,calcTime,calcTime2,velocidadI, aceleracion, velocidadF, posicionI, posicionF, time, estadoI }) {
  return(
    <div className="flex flex-col items-center">
      <h2 className="">Calcular</h2>
      <div className="mx-2 my-2 space-x-2 mt-5 mb-5 relative h-12 ">
      {!(isNaN(velocidadI)) && time>=0 && aceleracion > 0 &&  <button className="border border-teal-600 rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcPosicionI()}>x<sub>i</sub>=v<sub>i</sub>*t+(1/2)*a*t<sup>2</sup></button>}
      {!(isNaN(velocidadI)) && velocidadF !== 0 && time>=0 && aceleracion > 0 &&  <button className="border border-teal-600 rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcPosicionI2()}>x<sub>i</sub>=&Delta;v*t/(2-(1/2)*a*t<sup>2</sup>)</button>}
      {!(isNaN(posicionI)) && velocidadI>=0 && aceleracion >= 0 && time > 0 &&  <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcPosicionF()}>x<sub>f</sub>=x<sub>i</sub>+v<sub>i</sub>t+(1/2)*a*t</button>}
      {!(isNaN(posicionI)) && velocidadI >= 0 && velocidadF >= 0 && time >= 0 &&  <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcPosicionF2()}>x<sub>f</sub>= x<sub>i</sub>(v<sub>i</sub>+v<sub>f </sub>/2)*t</button>}
      {!(isNaN(velocidadF)) && !(isNaN(posicionI)) && time > 0 &&  <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcAceleracion()}>a=&Delta;v/t</button>}
      {!(isNaN(velocidadF)) && !(isNaN(velocidadI)) && !(isNaN(posicionF)) && !(isNaN(posicionI)) &&  <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcAceleracion2()}>a=(v<sub>f</sub><sup>2</sup>-v<sub>i</sub><sup>2</sup>)/2*&Delta;x </button>}
      {!(isNaN(posicionF)) && !(isNaN(posicionI)) && time > 0 && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadI()}>v<sub>i</sub>=(x<sub>f</sub>-x<sub>i</sub>)/t</button>}
      {!(isNaN(velocidadF)) && aceleracion > 0 && time > 0 && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadI2()}>v<sub>i</sub>=v<sub>f</sub>-a*t</button>}
      {!(isNaN(velocidadF)) && aceleracion > 0 && !(isNaN(posicionF)) && !(isNaN(posicionI)) && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadI3()}>|v<sub>i</sub><sup>2</sup>|=v<sub>f</sub>-2*a*(x<sub>f</sub>-x<sub>i</sub>) </button>}
      { velocidadI >= 0 && aceleracion > 0 && time > 0 && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadF()}>v<sub>f</sub>=v<sub>i</sub>+a*t</button>}
      { velocidadI >= 0 && aceleracion >= 0 && !(isNaN(posicionF)) && !(isNaN(posicionF)) && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={()=>calcVelocidadF2()}>|v<sub>f</sub><sup>2</sup>|=v<sub>i</sub><sup>2</sup>+2*a*(&Delta;x)</button>}
      {!(isNaN(velocidadF)) && aceleracion > 0 && !(isNaN(velocidadI)) && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={() => calcTime()}>t=&Delta;v/a</button>}
      {!(isNaN(velocidadF)) && aceleracion > 0 && !(isNaN(velocidadI)) && <button className="border border-teal- rounded-md w-48 h-10 hover:bg-teal-900 hover:text-white duration-200" onClick={() => calcTime2()}>t=(2*&Delta;v)/(v<sub>i</sub>+v<sub>f</sub>)</button>}
      </div>
      

    </div>
  )
}