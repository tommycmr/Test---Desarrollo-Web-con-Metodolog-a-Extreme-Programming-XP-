import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const obtenerAvengers = () => api.get('/avengers')
export const eliminarAvenger = (id) => api.delete(`/avengers/${id}`)
export const registrarAvenger = (nuevoAvenger) => api.post('/avengers/load', { avengers: [nuevoAvenger] })

export default api