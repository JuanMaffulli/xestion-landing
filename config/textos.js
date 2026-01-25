/* ============================================
   XESTION - CONFIGURACIÓN EDITABLE
   Archivo: config/textos.js
   
   ACÁ PODÉS EDITAR TODOS LOS TEXTOS Y PRECIOS
   sin tocar el HTML principal
   ============================================ */

const CONFIG = {
    
    // ============================================
    // INFORMACIÓN DE CONTACTO
    // ============================================
    contacto: {
        whatsapp: "5491128839719",
        calendly: "https://calendly.com/xestion/consulta-general",
        email: "contacto@xestion.com"
    },

    // ============================================
    // TEXTOS HERO (Encabezado principal)
    // ============================================
    hero: {
        badge: "🇦🇷 Desde Argentina para toda Latinoamérica",
        titulo: "Sistemas de Gestión Profesionales",
        tituloVerde: "sobre Excel",
        subtitulo: "Ordenamos tu negocio sin cambiar tu forma de trabajar. Sin sistemas complicados. Sin software que nadie entiende.",
        subtituloDestacado: "Solo Excel, llevado al siguiente nivel."
    },

    // ============================================
    // PRECIOS - PLANES PRINCIPALES
    // ============================================
    precios: {
        impulso: {
            nombre: "Plan Impulso",
            descripcion: "Sistema ya armado con adaptaciones incluidas para tu negocio",
            precio: "497",
            moneda: "USD",
            periodo: "pago único",
            extra: "Incluye adaptaciones necesarias",
            features: [
                "Sistema de gestión completo",
                "Adaptado a tu forma de trabajar",
                "Clientes, ventas, compras y caja",
                "Reportes automáticos",
                "Capacitación incluida",
                "30 días de soporte incluido"
            ]
        },
        medida: {
            nombre: "A Medida",
            descripcion: "Sistema 100% personalizado, creado desde cero trabajando uno a uno",
            precio: "997",
            moneda: "USD",
            periodo: "desde",
            extra: "Presupuesto según complejidad",
            features: [
                "Desarrollo desde cero para vos",
                "Reuniones de diseño personalizadas",
                "Sin límites de funciones",
                "Integración con lo que ya usás",
                "Capacitación para tu equipo",
                "Soporte prioritario"
            ]
        }
    },

    // ============================================
    // PLANES DE SOPORTE MENSUAL
    // ============================================
    soporte: {
        celda: {
            nombre: "Plan Celda",
            emoji: "📊",
            precio: "$17.000",
            moneda: "ARS/mes",
            descripcion: "Para quienes prefieren resolver por su cuenta",
            features: [
                "Soporte por WhatsApp (48hs hábiles)",
                "Corrección de errores críticos",
                "1 ajuste menor por mes",
                "Ideal para sistemas simples"
            ]
        },
        formula: {
            nombre: "Plan Fórmula",
            emoji: "🧮",
            precio: "$32.000",
            moneda: "ARS/mes",
            descripcion: "El equilibrio perfecto para la mayoría",
            destacado: true,
            features: [
                "Soporte por WhatsApp (24hs hábiles)",
                "Corrección de errores",
                "3 ajustes menores por mes",
                "Backups automáticos semanales",
                "Optimización del sistema"
            ]
        },
        macro: {
            nombre: "Plan Macro",
            emoji: "⚡",
            precio: "$45.000",
            moneda: "ARS/mes",
            descripcion: "Para sistemas en la nube con múltiples usuarios",
            features: [
                "Soporte prioritario (12hs hábiles)",
                "Corrección de errores inmediata",
                "Ajustes ilimitados",
                "Backups automáticos diarios",
                "Hosting de base de datos incluido",
                "Acceso prioritario a nuevas funciones",
                "Importación/limpieza de datos anual"
            ]
        },
        sinPlan: {
            nombre: "Sin Plan",
            emoji: "📝",
            precio: "Por hora",
            moneda: "",
            descripcion: "Pagás solo cuando necesitás",
            features: [
                "Sin compromiso mensual",
                "Hora de soporte: $8.500 ARS",
                "Hora de desarrollo: $12.000 ARS",
                "Ideal para sistemas estables",
                "Respuesta según disponibilidad"
            ]
        }
    },

    // ============================================
    // COMPARATIVA DE SOLUCIONES
    // ============================================
    comparativa: {
        local: {
            nombre: "Excel + OneDrive",
            subtitulo: "Ideal para empezar",
            usuarios: "1 a 2 (máx. 3 con cuidado)",
            accesoRemoto: "Solo OneDrive compartido",
            sinInternet: true,
            rolesPermisos: false,
            escalabilidad: "Limitada",
            costoInicial: "Bajo",
            mantenimiento: "$17.000 ARS/mes",
            dispositivos: "Windows + Office 365"
        },
        nube: {
            nombre: "Excel + Base de Datos en Nube",
            subtitulo: ".NET + SQL Server",
            usuarios: "2 a 10 simultáneos",
            accesoRemoto: true,
            sinInternet: false,
            rolesPermisos: true,
            escalabilidad: "Alta",
            costoInicial: "Medio",
            mantenimiento: "$45.000 ARS/mes",
            dispositivos: "Windows + Office 2013+"
        }
    }
};

// No tocar esta línea - exporta la configuración
if (typeof module !== 'undefined') module.exports = CONFIG;
