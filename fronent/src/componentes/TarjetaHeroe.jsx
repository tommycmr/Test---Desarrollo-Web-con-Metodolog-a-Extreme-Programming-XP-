
import '../estilos/tarjetas.css' 

const TarjetaHeroe = ({ heroe, onEliminar }) => {
  return (
    <div className="tarjeta">
      <h3>{heroe.alias}</h3>
      <p><strong>Nombre real:</strong> {heroe.nombre}</p>
      <p><strong>Habilidades:</strong> {heroe.habilidades}</p>
      <p><strong>Actor:</strong> {heroe.actor}</p>
      <button 
        className="boton-eliminar"
        onClick={() => onEliminar(heroe.id)}
      >
        🗑️ Eliminar
      </button>
    </div>
  )
}

export default TarjetaHeroe
