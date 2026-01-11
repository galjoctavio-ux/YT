# Control de Cambios
| Versión | Fecha | Descripción |
|---------|-------|-------------|
| 1.0 | 2026-01-09 | Creación inicial |
| 1.1 | 2026-01-09 | Agregado contexto técnico del usuario |

---

# Contexto Técnico del Usuario

> ⚠️ **NOTA**: Esta sección es CONTEXTO, no decisiones. Sirve para informar decisiones futuras.

## Perfil del Usuario
| Aspecto | Valor |
|---------|-------|
| Nivel técnico | **Básico** |
| Rol en desarrollo | **Orquestador de IA** |
| Experiencia en dominio | Por determinar |

## Recursos Disponibles
| Recurso | Disponibilidad |
|---------|---------------|
| Servidor/VM | ❌ Ninguno |
| Presupuesto | **$0 MXN** (solo gratuitos) |
| Dominio propio | ❌ No tiene |

## Implicaciones para el Proyecto
- 🔹 Hosting debe ser **100% gratuito**
- 🔹 No requiere configuración de servidor
- 🔹 Despliegue debe ser **simple** (nivel básico)
- 🔹 La IA manejará toda la implementación
- 🔹 Se usará subdominio gratuito (ej: usuario.github.io o usuario.netlify.app)

---

# Selección Tecnológica

## Decisión Tomada
**Opción B: HTML + Tailwind CSS**

## Stack Definitivo
| Componente | Tecnología |
|------------|------------|
| Frontend | HTML5 + Tailwind CSS (CDN) |
| Estilos | Tailwind CSS v3 |
| Hosting | Netlify (gratuito) |
| Dominio | Subdominio Netlify (tuconsultorio.netlify.app) |

## Justificación
- ✅ 100% gratuito
- ✅ Diseño moderno con menos código
- ✅ Compatible con nivel básico (la IA implementa)
- ✅ Despliegue simple en Netlify
- ✅ URL profesional gratuita

---

# Plan Maestro - Consultorio Dental

## 1. Información del Proyecto
- **Nombre**: Página Web Consultorio Dental
- **Tipo**: web_page
- **Flujo**: Simple (1 idea)
- **Fecha de inicio**: 2026-01-09

## 2. Alcance del Proyecto

### Incluido en el MVP
- ✅ Landing page de una sola página
- ✅ Identidad visual del consultorio
- ✅ Información de ubicación/dirección
- ✅ Métodos de contacto
- ✅ Diseño responsive (desktop y móvil)

### Excluido del MVP
- ❌ Sistema de citas en línea
- ❌ Blog o sección de noticias
- ❌ Galería de trabajos
- ❌ Precios de servicios
- ❌ Formulario de contacto complejo
- ❌ Integración con sistemas externos

## 3. Objetivos del MVP
1. Crear presencia digital básica del consultorio
2. Facilitar que pacientes encuentren la dirección
3. Proporcionar métodos de contacto directos
4. Reflejar la identidad visual profesional

## 4. Estructura de la Página

### Secciones propuestas:
1. **Header** - Logo + navegación mínima
2. **Hero** - Mensaje de bienvenida + identidad visual
3. **Ubicación** - Dirección + mapa (opcional)
4. **Contacto** - Teléfono, WhatsApp, email, redes
5. **Footer** - Créditos básicos

## 5. Fases de Ejecución

| Fase | Descripción | Estimación |
|------|-------------|------------|
| 1 | Definición de contexto técnico | 1 sesión |
| 2 | Selección tecnológica | 1 sesión |
| 3 | Diseño UX/UI funcional | 1 sesión |
| 4 | Identidad visual | 1 sesión |
| 5 | Implementación | 1-2 sesiones |
| 6 | Verificación | 1 sesión |
| 7 | Despliegue | 1 sesión |

## 6. Requisitos Derivados

### De "Identidad Visual":
- REQ-01: El usuario debe proporcionar logo o permitir creación de texto estilizado
- REQ-02: Definir paleta de colores

### De "Dirección":
- REQ-03: El usuario debe proporcionar dirección completa
- REQ-04: Decidir si incluir mapa embebido

### De "Métodos de contacto":
- REQ-05: El usuario debe proporcionar número de teléfono
- REQ-06: El usuario debe proporcionar WhatsApp (puede ser el mismo)
- REQ-07: El usuario debe proporcionar email de contacto
- REQ-08: Listar redes sociales si aplica

### De "Diseño sencillo":
- REQ-09: Una sola página (no múltiples)
- REQ-10: Navegación mínima o sin navegación
- REQ-11: Carga rápida, sin animaciones pesadas

---

# Diseño UX/UI Funcional

## 1. Principios de UX (Obligatorios)
- ✅ Una sola página (single page)
- ✅ Información visible sin scroll excesivo
- ✅ Contacto accesible en todo momento
- ✅ Mobile-first design
- ✅ Carga menor a 3 segundos

## 2. Estructura de Navegación

### Pantalla Única
```
┌─────────────────────────────────────┐
│           HEADER                    │
│   Logo    |    [Contactar]          │
├─────────────────────────────────────┤
│           HERO                      │
│   Nombre del consultorio            │
│   Slogan o mensaje de bienvenida    │
├─────────────────────────────────────┤
│           UBICACIÓN                 │
│   📍 Dirección completa             │
│   [Mapa embebido - opcional]        │
├─────────────────────────────────────┤
│           CONTACTO                  │
│   📞 Teléfono   💬 WhatsApp         │
│   ✉️ Email     🔗 Redes sociales    │
├─────────────────────────────────────┤
│           FOOTER                    │
│   © 2026 Consultorio Dental         │
└─────────────────────────────────────┘
```

## 3. Componentes UI

### Botones
| Tipo | Uso | Estilo |
|------|-----|--------|
| Primario | WhatsApp/Llamar | Fondo sólido, color de acento |
| Secundario | Ver mapa | Borde, sin fondo |

### Información de Contacto
- Cada método de contacto es clickeable
- WhatsApp abre `wa.me/numero`
- Teléfono abre `tel:numero`
- Email abre `mailto:email`

## 4. Reglas para Ejecución con IA

### La IA PUEDE:
- Implementar la estructura definida arriba
- Aplicar clases de Tailwind CSS
- Crear diseño responsive
- Optimizar para móvil

### La IA NO PUEDE:
- Agregar secciones no listadas
- Cambiar el orden de las secciones
- Agregar animaciones complejas
- Modificar la estructura aprobada

### La IA DEBE PREGUNTAR si:
- Falta algún dato de contacto
- No hay logo disponible
- La dirección no está clara

---

# Identidad Visual

## Información del Negocio
| Campo | Valor |
|-------|-------|
| **Nombre** | Dental-IA |
| **Slogan** | "Tu sonrisa, nuestra tecnología" |

## Paleta de Colores
| Uso | Color | Código Hex | Tailwind |
|-----|-------|------------|----------|
| Primario | Azul Dental | `#0077B6` | `bg-[#0077B6]` |
| Secundario | Blanco | `#FFFFFF` | `bg-white` |
| Acento | Verde Menta | `#48CAE4` | `bg-[#48CAE4]` |
| Texto | Gris Oscuro | `#1A1A2E` | `text-[#1A1A2E]` |
| Fondo | Gris Claro | `#F8F9FA` | `bg-[#F8F9FA]` |

## Tipografía
| Uso | Fuente | Tailwind |
|-----|--------|----------|
| Títulos | Inter Bold | `font-bold` |
| Cuerpo | Inter Regular | `font-normal` |

## Estilo Visual
- ✓ Minimalista Moderno
- ✓ Bordes redondeados (`rounded-lg`)
- ✓ Espacios amplios
- ✗ Sin modo oscuro

## Datos de Contacto
| Tipo | Valor | Link |
|------|-------|------|
| Teléfono | (33) 1234-5678 | `tel:+523312345678` |
| WhatsApp | +52 33 1234 5678 | `https://wa.me/523312345678` |
| Email | contacto@dental-ia.com | `mailto:contacto@dental-ia.com` |
| Dirección | Av. Vallarta 1234, Col. Centro, Guadalajara, Jalisco | - |
| Instagram | @dental.ia | `https://instagram.com/dental.ia` |
| Facebook | /DentalIA | `https://facebook.com/DentalIA` |


