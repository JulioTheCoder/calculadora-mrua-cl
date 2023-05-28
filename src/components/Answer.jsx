

export default function Answer({msg, res}) {
  return(
    <div className="flex flex-col">
      <h2 className="mt-10 w-48">Respuesta</h2>
      <hr className="border-teal-900 border-2 "/>
      <h3>{`${msg} ${res}`}</h3>
      
    </div>
  )
}