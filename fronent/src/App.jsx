import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navegacion from './componentes/Navegacion'
import Inicio from './paginas/Inicio'
import Registrar from './paginas/Registrar'

const App = () => {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </Router>
  )
}

export default App