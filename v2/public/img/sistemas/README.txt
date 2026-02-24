==========================================
  ESTRUCTURA DE CARPETAS PARA SISTEMAS
==========================================

Esta es la nueva organizacion de imagenes por sistema:

img/sistemas/
  │
  ├─ grafica/
  │   ├─ venta-nueva.png
  │   ├─ venta-historial.png
  │   ├─ cliente-lista.png
  │   ├─ cliente-cuenta-corriente.png
  │   ├─ producto-lista.png
  │   ├─ caja-movimientos.png
  │   ├─ cotizacion-historial.png
  │   ├─ compra-historial.png
  │   ├─ proveedor-lista.png
  │   ├─ proveedor-cuenta-corriente.png
  │   ├─ gasto-historial.png
  │   ├─ tarea-lista.png
  │   ├─ personal-lista.png
  │   └─ insumo-lista.png
  │
  ├─ pasteleria/          <- Futuro sistema de pasteleria
  │   └─ (capturas del sistema de pasteleria)
  │
  ├─ otro-sistema/        <- Otros sistemas futuros
  │   └─ (capturas de otros sistemas)
  │
  └─ sistema1.png         <- Imagenes generales (para el index)
      sistema2.jpg
      sistema3.png
      ...

IMPORTANTE:
-----------
- Cada sistema tiene su propia carpeta
- Los nombres de archivo deben coincidir con los que estan en el HTML
- El carrusel muestra las imagenes en orden
- Las imagenes se pueden ampliar con click
- Funciona con swipe en movil

PARA AGREGAR UN NUEVO SISTEMA:
-------------------------------
1. Crear carpeta: img/sistemas/nombre-sistema/
2. Subir las capturas con nombres descriptivos
3. Crear una pagina HTML similar a sistema-grafica.html
4. Actualizar las rutas de imagenes en el HTML
5. Agregar el sistema al catalogo en index.html

RESOLUCION RECOMENDADA:
-----------------------
- Minimo: 1200x800px
- Optimo: 1600x1000px
- Formato: PNG (mejor) o JPG
- Peso: Menos de 500KB por imagen

