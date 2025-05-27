# Avengers API Backend

API REST para gestionar el registro de miembros de los Avengers, usando Node.js, Express, Prisma y MySQL.

## Tecnologías usadas

- Node.js
- Express
- Prisma ORM
- MySQL
- Cors
- dotenv

## Requisitos

- Tener instalado Node.js (v14+)
- Tener MySQL corriendo y una base de datos creada (por ejemplo: `avengers`)
- Cliente REST para probar (Thunder Client, Postman, etc)

## Instalación

1. Clonar el repositorio (o copiar los archivos a tu carpeta local)

2. Instalar dependencias

```bash
npm install
```

3. Configurar la base de datos en `.env`

```env
DATABASE_URL="mysql://root:@localhost:3306/avengers"
```

4. Ejecutar migración y generar cliente Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Archivos principales

- `schema.prisma`: definición del modelo Avenger y datasource MySQL
- `server.js`: servidor Express con rutas para CRUD Avengers

## Rutas disponibles

### POST `/avengers/load`

Carga múltiples Avengers desde un JSON.

### GET `/avengers`

Devuelve todos los Avengers guardados.

### DELETE `/avengers/:id`

Elimina un Avenger por su id.

## Cómo ejecutar el servidor

```bash
node server.js
```

## Prueba de la API

Usar Thunder Client, Postman o cualquier cliente REST para:

- POST `/avengers/load` con JSON para agregar Avengers
- GET `/avengers` para listarlos
- DELETE `/avengers/:id` para borrar un Avenger
