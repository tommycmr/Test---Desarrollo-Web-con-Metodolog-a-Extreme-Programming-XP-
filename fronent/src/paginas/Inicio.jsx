import { useEffect, useState } from 'react'
import TarjetaHeroe from '../componentes/TarjetaHeroe'
import { obtenerAvengers, eliminarAvenger } from '../servicios/api'

const Inicio = () => {
  const [avengers, setAvengers] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargarAvengers = async () => {
      try {
        const { data } = await obtenerAvengers()
        setAvengers(data)
      } catch (err) {
        setError('⚠️ No se pudieron cargar los Vengadores.')
      } finally {
        setCargando(false)
      }
    }
    cargarAvengers()
  }, [])

  const handleEliminar = async (id) => {
    try {
      await eliminarAvenger(id)
      setAvengers(avengers.filter(a => a.id !== id))
    } catch (error) {
      alert('Error al eliminar el Vengador.')
    }
  }

  if (cargando) return <div className="loader">Cargando Vengadores...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="contenedor-tarjetas">
      {avengers.length === 0 ? (
        <p className="mensaje-vacio">No hay Vengadores registrados.</p>
      ) : (
        avengers.map(heroe => (
          <TarjetaHeroe 
            key={heroe.id} 
            heroe={heroe}
            onEliminar={handleEliminar}
          />
        ))
      )}
    </div>
  )
}

export default Inicio
