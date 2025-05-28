import { Link, useLocation } from 'react-router-dom'
import '../estilos/navegacion.css'

const Navegacion = () => {
  const location = useLocation()

  return (
    <nav className="navegacion">
      <h1 className="logo">🛡️ Vengadores</h1>
      <div className="enlaces">
        <Link to="/" className={location.pathname === '/' ? 'activo' : ''}>🏠 Inicio</Link>
        <Link to="/registrar" className={location.pathname === '/registrar' ? 'activo' : ''}>➕ Nuevo</Link>
      </div>
    </nav>
  )
}

export default Navegacion
