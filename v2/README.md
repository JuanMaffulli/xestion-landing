# Xestion Landing v2

Versión modernizada del sitio web de Xestion, construida con tecnologías modernas.

## Stack Tecnológico

- **[Astro 5](https://astro.build)** — Generador de sitios estáticos ultrarrápido
- **[Tailwind CSS 3](https://tailwindcss.com)** — Utilidades CSS, responsive y consistente
- **TypeScript** — Datos tipados y configuración centralizada
- **Componentes Astro** — Arquitectura modular y reutilizable

## Estructura del Proyecto

```
v2/
├── public/
│   └── img/          → Imágenes (copiar desde ../img/)
├── src/
│   ├── components/   → Componentes reutilizables (.astro)
│   ├── data/         → Datos y configuración (config.ts)
│   ├── layouts/      → Layout base con navbar y footer
│   ├── pages/        → Páginas del sitio
│   └── styles/       → Estilos globales + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar la carpeta de imágenes
# (copiar ../img/ dentro de public/img/)

# 3. Desarrollo local
npm run dev

# 4. Build para producción
npm run build

# 5. Preview del build
npm run preview
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con todas las secciones |
| `/sistemas` | Catálogo de sistemas armados |
| `/sistema-grafica` | Detalle del sistema para gráficas |
| `/sistema-pasteleria` | Detalle del sistema para pastelerías |

## Editar Contenido

Todos los textos, precios, testimonios y datos están centralizados en:

📁 `src/data/config.ts`

Modificá ese archivo para actualizar contenido sin tocar los componentes.

## Mejoras vs Versión Anterior

- ✅ **Componentes reutilizables** — Cero duplicación de HTML
- ✅ **Build optimizado** — HTML minificado, CSS purgado automáticamente
- ✅ **Tailwind CSS** — Diseño consistente y responsive sin CSS manual
- ✅ **Animaciones scroll** — Reveal suave con IntersectionObserver
- ✅ **Navbar fija** — Con glassmorphism al scrollear
- ✅ **Navegación mobile** — Menú hamburguesa responsive
- ✅ **SEO mejorado** — Meta tags Open Graph incluidos
- ✅ **TypeScript** — Datos tipados y autocompletado en el IDE
- ✅ **Arquitectura limpia** — Cada sección es un componente independiente
- ✅ **Lightbox integrado** — Para ver capturas en grande
- ✅ **0 KB de JS innecesario** — Astro genera HTML estático puro
