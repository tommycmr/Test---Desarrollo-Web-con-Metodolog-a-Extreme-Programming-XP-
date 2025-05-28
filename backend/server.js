import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Ruta para importar Avengers
app.post('/avengers/load', async (req, res) => {
  const { avengers } = req.body

  try {
    for (const avenger of avengers) {
      await prisma.avenger.create({
        data: {
          nombre: avenger.nombre,
          alias: avenger.alias,
          habilidades: avenger.habilidades.join(', '),
          actor: avenger.actor
        }
      })
    }

    res.status(201).json({ message: 'Avengers cargados correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al cargar los Avengers' })
  }
})


// Ruta para borrar Avengers por ID
app.delete('/avengers/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    await prisma.avenger.delete({
      where: { id }
    })
    res.json({ message: `Avenger con id ${id} eliminado correctamente` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al eliminar el Avenger' })
  }
})

// Ruta GET para obtener todos los Avengers
app.get('/avengers', async (req, res) => {
  try {
    const avengers = await prisma.avenger.findMany()
    res.json(avengers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener los Avengers' })
  }
})



app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})
