# 🚀 Xestion Landing Page

## Estructura del Proyecto

```
xestion-landing/
├── index.html          ← Página principal (acá está todo el HTML)
├── css/
│   └── styles.css      ← Todos los estilos (colores, fuentes, etc.)
├── config/
│   └── textos.js       ← Precios y textos editables (referencia)
├── img/
│   ├── logo.png        ← TU LOGO ACÁ
│   └── sistemas/       ← Capturas de tus sistemas
│       ├── sistema1.png
│       ├── sistema2.png
│       └── ...
└── README.md           ← Este archivo
```

---

## 📝 Cómo Editar

### 1. LOGO
1. Guardá tu logo como `logo.png` en la carpeta `img/`
2. Si tiene otro nombre, buscá en `index.html`:
   ```html
   <img src="img/logo.png" alt="Xestion" class="logo">
   ```
   Y cambiá `logo.png` por el nombre de tu archivo.

---

### 2. PRECIOS (en index.html)

**Plan Impulso** - Buscá: `Plan Impulso`
```html
<span class="precio-moneda">USD</span>
<span class="precio-valor">497</span>
<span class="precio-periodo">pago único</span>
```

**Plan A Medida** - Buscá: `A Medida`
```html
<span class="precio-moneda">USD</span>
<span class="precio-valor">997</span>
```

**Planes de Soporte** - Buscá: `Plan Celda`, `Plan Fórmula`, `Plan Macro`
```html
<div class="soporte-precio">$17.000 <small>ARS/mes</small></div>
```

---

### 3. FOTOS DE SISTEMAS

1. Guardá tus capturas en: `img/sistemas/`
2. En `index.html`, buscá: `<!-- SISTEMA 1 -->`
3. Descomentá la línea de la imagen y editá:

**Antes:**
```html
<div class="sistema-imagen">
    <!-- Descomentar cuando tengas la imagen:
    <img src="img/sistemas/sistema1.png" alt="Sistema de gestión de clientes">
    -->
    <div class="sistema-imagen-placeholder">
        ...
    </div>
</div>
```

**Después:**
```html
<div class="sistema-imagen">
    <img src="img/sistemas/mi-captura.png" alt="Gestión de Clientes">
</div>
```

4. Cambiá el título y descripción en `.sistema-info`:
```html
<div class="sistema-info">
    <h4>Gestión de Clientes</h4>
    <p>Control completo de tu cartera de clientes.</p>
</div>
```

---

### 4. TEXTOS

Todos los textos están en `index.html`. Usá **Ctrl+F** para buscar y reemplazar.

**Ejemplos de búsqueda:**
- `"¿Te suena familiar?"` → Título de la sección problema
- `"Sistemas de Gestión Profesionales"` → Título principal
- `"Desde Argentina"` → Badge de ubicación

---

### 5. COLORES

Abrí `css/styles.css` y buscá al principio:
```css
:root {
    --verde-excel: #217346;      /* Verde principal */
    --verde-oscuro: #1a5c38;     /* Verde hover/oscuro */
    --blanco: #FFFFFF;
    --gris-fondo: #F8FAF9;
    --gris-texto: #555555;
}
```

---

### 6. LINKS DE CONTACTO

**WhatsApp** - Buscá: `wa.me`
```html
<a href="https://wa.me/5491128839719" ...>
```

**Calendly** - Buscá: `calendly.com`
```html
<a href="https://calendly.com/xestion/consulta-general" ...>
```

---

## 🌐 Cómo Subir Online

### Opción 1: Netlify (Recomendado - Gratis)
1. Andá a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastrá la carpeta `xestion-landing` completa
3. ¡Listo! Te da un link tipo `random-name.netlify.app`
4. Después podés conectar tu dominio

### Opción 2: GitHub Pages (Gratis)
1. Subí la carpeta a un repositorio de GitHub
2. Habilitá GitHub Pages en Settings
3. Te da un link tipo `usuario.github.io/xestion-landing`

---

## 📱 Responsive

La página está optimizada para:
- ✅ Desktop (computadora)
- ✅ Tablet
- ✅ Mobile (celular) - Optimizado para Instagram

---

## ❓ Preguntas Frecuentes

**¿Puedo agregar más sistemas al carrusel?**
Sí, copiá un bloque `<div class="carrusel-item">...</div>` y editalo.

**¿Cómo cambio los nombres de los planes de soporte?**
Buscá `Plan Celda`, `Plan Fórmula`, `Plan Macro` en el HTML y cambialos.

**¿Puedo agregar más secciones?**
Sí, copiá una sección existente (`<section>...</section>`) y modificala.

---

## 🆘 Soporte

Si tenés dudas, buscá en el código los comentarios con `<!-- ... -->` que explican cada sección.

¡Éxitos con Xestion! 🚀
