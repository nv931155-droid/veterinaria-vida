# Veterinaria Vida

Sitio web profesional para una clínica veterinaria, desarrollado con React + Vite y estilo moderno con paleta de colores institucional.

## Stack
- React
- Vite
- CSS moderno con diseño responsive

## Requisitos
- Node.js 18+
- npm

## Instalación
```bash
npm install
```

## Desarrollo local
```bash
npm run dev
```

## Build de producción
```bash
npm run build
```

## Deploy en Render
Se recomienda usar una configuración de sitio estático con el siguiente flujo:
- Build command: `npm install && npm run build`
- Publish directory: `dist`

También puedes usar el archivo `render.yaml` incluido en la raíz para desplegarlo en Render.

## Estructura principal
- `src/App.jsx` — contenido y componentes de la aplicación
- `src/styles.css` — estilos generales, paleta y responsive design
- `public/favicon.svg` — marca de la clínica
