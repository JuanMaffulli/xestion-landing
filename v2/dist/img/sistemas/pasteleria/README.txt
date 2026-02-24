═══════════════════════════════════════════════════════════════
SISTEMA PARA PASTELERÍA - INFORMACIÓN GENERAL
═══════════════════════════════════════════════════════════════

Carpeta: img/sistemas/pasteleria/
Landing page: sistema-pasteleria.html

Este sistema está diseñado específicamente para pastelerías y panaderías
con funcionalidades avanzadas de gestión de recetas, costos y producción.

═══════════════════════════════════════════════════════════════
MÓDULOS DEL SISTEMA (basado en análisis de código VBA)
═══════════════════════════════════════════════════════════════

1. VENTAS Y PEDIDOS
   Archivos VBA: Venta_Lista.frm, Venta_NuevoModif.frm, Venta_Prod_NuevoModif.frm
   Funcionalidad: Registro de ventas, pedidos, estados, seguimiento de entregas

2. CLIENTES
   Archivos VBA: Cliente_Lista.frm, Cliente_NuevoModif.frm, Cliente_Busqueda.frm
   Funcionalidad: ABM completo, cuenta corriente, cobros

3. PRODUCTOS (CATÁLOGO)
   Archivos VBA: Producto_Lista.frm, Producto_NuevoModif.frm, Producto_Busqueda.frm
   Funcionalidad: Catálogo con precios, costos calculados, categorías

4. RECETAS (PRODUCTO-INSUMO) ⭐ FUNCIONALIDAD ESTRELLA
   Archivos VBA: Producto_Insumo_NuevoModif.frm
   Funcionalidad: Asignación de insumos a cada producto con cantidades
   Característica clave: Cálculo automático de costo de producción

5. INSUMOS (MATERIAS PRIMAS)
   Archivos VBA: Insumo_Lista.frm, Insumo_NuevoModif.frm
   Funcionalidad: Catálogo de materias primas con precios, proveedores, stock

6. CAJA Y MOVIMIENTOS
   Archivos VBA: Caja_Lista.frm, Caja_Mov_NuevoModif.frm, Caja_TransInt_Lista.frm
   Funcionalidad: Ingresos, egresos, transferencias, control diario

7. COMPRAS DE INSUMOS
   Archivos VBA: Compra_Lista.frm, Compra_NuevoModif.frm, Compra_Lista_Productos.frm
   Funcionalidad: Registro de compras a proveedores, actualización de precios

8. PROVEEDORES
   Archivos VBA: Proveedor_Lista.frm, Proveedor_NuevoModif.frm, Proveedor_CuentaCorriente.frm
   Funcionalidad: ABM con cuenta corriente, pagos, control de deudas

9. COTIZACIONES
   Archivos VBA: Cotizacion_Lista.frm, Cotizacion_NuevoModif.frm, Cotizacion_Busqueda.frm
   Funcionalidad: Presupuestos para clientes con conversión a venta

10. GASTOS OPERATIVOS
    Archivos VBA: Gasto_Lista.frm, Gasto_NuevoModif.frm
    Funcionalidad: Registro de gastos con categorías para análisis

11. TAREAS/PRODUCCIÓN
    Archivos VBA: Tarea_Lista.frm, Tarea_NuevoModif.frm
    Funcionalidad: Control de producción diaria, estados, prioridades

12. PERSONAL
    Archivos VBA: Personal_Lista.frm, Personal_NuevoModif.frm
    Funcionalidad: Empleados, puestos, sueldos, pagos

13. REPORTES Y ANÁLISIS
    Funcionalidad: Rentabilidad por producto, ventas por período, costos, productos más vendidos

═══════════════════════════════════════════════════════════════
DIFERENCIAS CLAVE CON EL SISTEMA DE GRÁFICA
═══════════════════════════════════════════════════════════════

✓ Sistema de RECETAS (Producto-Insumo)
  - Cada producto tiene una lista de insumos necesarios
  - Cantidades precisas de cada materia prima
  - Cálculo automático de costo de producción

✓ Control de STOCK DE INSUMOS
  - Registro de compras de materias primas
  - Consumo por producción
  - Alertas de stock bajo

✓ Actualización AUTOMÁTICA de costos
  - Si cambia el precio de la harina, se actualizan todos los productos que la usan
  - Márgenes de ganancia en tiempo real
  - Decisiones de precios basadas en datos actuales

✓ Gestión de PRODUCCIÓN más detallada
  - Lista de tareas basada en pedidos
  - Control de qué elaborar para cada fecha
  - Seguimiento de estados (pendiente, en proceso, completado)

✓ Precio: $180.000 ARS (vs $150.000 de gráfica)
  - Mayor complejidad técnica
  - Más módulos integrados
  - Funcionalidad de recetas única

═══════════════════════════════════════════════════════════════
CONTENIDO DE LA LANDING PAGE
═══════════════════════════════════════════════════════════════

Título: "Sistema para Pasteleria"

Descripción: "Excel profesional con gestión de recetas, insumos, costos,
ventas, producción y caja. Todo integrado para tu negocio."

Características destacadas:
1. Recetas con costos automáticos
2. Control de stock de insumos
3. Entrega rápida y soporte

Beneficios principales:
- Costo real por producto
- Control de stock de insumos
- Recetas personalizables
- Márgenes claros
- Control de caja diario
- Pedidos organizados

═══════════════════════════════════════════════════════════════
ARCHIVOS NECESARIOS EN ESTA CARPETA
═══════════════════════════════════════════════════════════════

📄 README.txt (este archivo)
📄 README-CAPTURAS.txt (lista detallada de las 15 capturas necesarias)
📄 README-PRESENTACION.txt (specs de la imagen de presentación)

🖼️ presentacion.png (imagen principal para tarjeta de precio)

🖼️ CAPTURAS DEL SISTEMA (15 imágenes):
   1. venta-nueva.png
   2. venta-historial.png
   3. cliente-lista.png
   4. producto-receta.png ⭐
   5. producto-lista.png
   6. insumo-lista.png
   7. caja-movimientos.png
   8. cotizacion-historial.png
   9. compra-historial.png
   10. proveedor-lista.png
   11. proveedor-cuenta-corriente.png
   12. gasto-historial.png
   13. tarea-lista.png
   14. personal-lista.png
   15. reporte.png

═══════════════════════════════════════════════════════════════
PRÓXIMOS PASOS
═══════════════════════════════════════════════════════════════

1. ✅ Landing page creada (sistema-pasteleria.html)
2. ✅ Estructura de carpetas creada
3. ✅ Documentación completa generada
4. ⏳ Capturar las 15 imágenes del sistema real
5. ⏳ Subir imágenes a esta carpeta
6. ⏳ Verificar que todas las rutas funcionan correctamente
7. ⏳ Probar la landing en navegador
8. ⏳ Ajustar textos si es necesario

═══════════════════════════════════════════════════════════════
CONTACTO Y SOPORTE
═══════════════════════════════════════════════════════════════

WhatsApp: +54 9 11 2883-9719
YouTube: https://youtube.com (actualizar con canal real)

═══════════════════════════════════════════════════════════════
