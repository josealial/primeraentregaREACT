import { useState } from "react"

function Agendador() {
  const [mes, setMes] = useState('enero')
  const [diaSemana, setDiaSemana] = useState('lunes')
  const [hora, setHora] = useState('')

  const handleAgendar = () => {
    alert(`Se agendó para el ${diaSemana} de ${mes} a las ${hora}.`)
    
  }

  return (
    <div>
      <h1>Agendador</h1>
      
      <label htmlFor="mes">Mes:</label>
      <select id="mes" value={mes} onChange={(e) => setMes(e.target.value)}>
        <option value="enero">Enero</option>
        <option value="febrero">Febrero</option>
        <option value="febrero">Marzo</option>
        <option value="febrero">Aril</option>
        <option value="febrero">Mayo</option>
        <option value="febrero">Junio</option>
        <option value="febrero">Julio</option>
        <option value="febrero">Agosto</option>
        <option value="febrero">Septiembre</option>
        <option value="febrero">Octubre</option>
        <option value="febrero">Noviembre</option>
        <option value="febrero">Diciembre</option>
        </select>
      
      <br />
      
      <label htmlFor="diaSemana">Día de la Semana:</label>
      <select id="diaSemana" value={diaSemana} onChange={(e) => setDiaSemana(e.target.value)}>
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="martes">Miercoles</option>
        <option value="martes">Jueves</option>
        <option value="martes">Viernes</option>
      </select>
      
      <br />
      
      <label htmlFor="hora">Hora:</label>
      <input type="time" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
      
      <br />
      
      <button onClick={handleAgendar}>Agendar</button>
    </div>
  )
}

export default Agendador

