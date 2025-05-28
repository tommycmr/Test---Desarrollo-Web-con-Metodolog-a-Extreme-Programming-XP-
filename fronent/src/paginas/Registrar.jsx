import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registrarAvenger } from '../servicios/api'



const Registrar = () => {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    nombre: '',
    alias: '',
    habilidades: '',
    actor: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registrarAvenger({
        ...formulario,
        habilidades: formulario.habilidades.split(',')
      })
      navigate('/')
    } catch (error) {
      console.error('Error registrando:', error)
    }
  }

  return (
    <div className="contenedor-formulario">
      <h2>Registrar Nuevo Vengador</h2>
      <form onSubmit={handleSubmit}>
        <div className="grupo-formulario">
          <label>Nombre real:</label>
          <input
            type="text"
            value={formulario.nombre}
            onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
            required
          />
        </div>
        
        <div className="grupo-formulario">
          <label>Alias:</label>
          <input
            type="text"
            value={formulario.alias}
            onChange={(e) => setFormulario({...formulario, alias: e.target.value})}
            required
          />
        </div>
        
        <div className="grupo-formulario">
          <label>Habilidades (separar por comas):</label>
          <input
            type="text"
            value={formulario.habilidades}
            onChange={(e) => setFormulario({...formulario, habilidades: e.target.value})}
            required
          />
        </div>
        
        <div className="grupo-formulario">
          <label>Actor/Actriz:</label>
          <input
            type="text"
            value={formulario.actor}
            onChange={(e) => setFormulario({...formulario, actor: e.target.value})}
            required
          />
        </div>
        
        <button type="submit" className="boton-primario">
          Registrar Vengador
        </button>
      </form>
    </div>
  )
}

export default Registrar