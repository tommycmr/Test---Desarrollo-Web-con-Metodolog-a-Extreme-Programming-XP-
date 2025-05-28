# 🛡️ Registro de Vengadores - Frontend

Aplicación web para gestión de miembros de los Vengadores usando React + Vite

## 📋 Requisitos Previos
- Node.js v18 o superior
- npm v9 o superior
- Backend en ejecución en http://localhost:3000
- Navegador moderno (Chrome 90+, Firefox 88+)

## 🚀 Instalación Rápida
1. Clonar el repositorio: git clone https://github.com/tu-usuario/avengers-front.git && cd avengers-front
2. Instalar dependencias: npm install
3. Crear el archivo .env con: VITE_API_BASE_URL=http://localhost:3000
4. Iniciar la aplicación: npm run dev

## 🗃️ Estructura del Proyecto
src/
├── componentes/      - Componentes reutilizables
│   ├── Navegacion.jsx
│   └── TarjetaHeroe.jsx
├── paginas/          - Vistas principales
│   ├── Inicio.jsx
│   └── Registrar.jsx
├── servicios/        - Lógica de conexión API
│   └── api.js
├── estilos/          - Hojas de estilo
│   ├── navegacion.css
│   └── tarjetas.css
└── App.jsx           - Configuración principal

## 🌐 Endpoints del Backend
Método | Ruta | Función
-------|------|--------
GET    | /avengers        | Obtener todos los vengadores
POST   | /avengers/load   | Registrar nuevo vengador
DELETE | /avengers/:id    | Eliminar vengador

## 🛠️ Comandos Esenciales
- Iniciar en modo desarrollo: npm run dev
- Crear build de producción: npm run build
- Previsualizar build: npm run preview
- Verificar calidad de código: npm run lint

## 📦 Dependencias Principales
Paquete           | Versión   | Uso
------------------|-----------|------------------------
react             | ^18.2.0   | Biblioteca principal
react-router-dom  | ^6.22.3   | Enrutamiento
axios             | ^1.6.2    | Peticiones HTTP
vite              | ^5.0.8    | Bundler y servidor

## ✨ Características Clave
- Interfaz Responsive: Adaptable a móviles y tablets
- Validación en Tiempo Real: Para formularios de registro
- Animaciones Suaves: Transiciones CSS
- Manejo de Errores: Notificaciones intuitivas
- Actualización en Vivo: Hot Reload integrado

## 🚨 Solución de Problemas
Problema                   | Solución
---------------------------|----------------------------------
Datos no se cargan         | Verificar conexión backend
Error 404 en API           | Confirmar URL en .env
Estilos no aplicados       | Reiniciar servidor
Errores de CORS            | Configurar headers en backend

## 🤝 Guía de Contribución
1. Crear una nueva rama: git checkout -b feature/nombre-funcionalidad
2. Hacer commits descriptivos: git commit -m "feat: añade validación de formulario"
3. Subir los cambios: git push origin nombre-rama
4. Abrir un Pull Request siguiendo las XP Guidelines
