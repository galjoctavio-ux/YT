# 🎪 PLAN MAESTRO: TIANGUIS CULTURAL DE GUADALAJARA
## "El Manifiesto Digital" — Fusión Clay × Ramotion × AKQA

> *"No estamos diseñando simplemente un sitio web; estamos construyendo el sistema operativo de la cultura alternativa en Guadalajara."*

---

## 📋 Índice

1. [Visión del Proyecto](#1-visión-del-proyecto)
2. [Identidad Visual & UI (The Brand System)](#2-identidad-visual--ui-the-brand-system)
3. [Estrategia de UX (User Experience)](#3-estrategia-de-ux-user-experience)
4. [Especificaciones Técnicas (The Stack)](#4-especificaciones-técnicas-the-stack)
5. [Arquitectura del Sitio](#5-arquitectura-del-sitio)
6. [Elementos de Diseño Clave (UI Components)](#6-elementos-de-diseño-clave-ui-components)
7. [Páginas Principales](#7-páginas-principales)
8. [Propuesta de Contenido Visual (Asset List)](#8-propuesta-de-contenido-visual-asset-list)
9. [Roadmap de Implementación](#9-roadmap-de-implementación)
10. [Verificación de Calidad](#10-verificación-de-calidad)

---

## 1. Visión del Proyecto

### 1.1 El Concepto Creativo: "Raw Sophistication"

La web del Tianguis Cultural debe sentirse como una **extensión del concreto, el ruido y el arte del Parque Agua Azul**, pero con una ingeniería de software impecable.

| Principio | Descripción |
|-----------|-------------|
| **Raw Sophistication** | Estética brutalista refinada, no sucia |
| **Frictionless Chaos** | Experiencia fluida dentro del caos organizado |
| **Cultural Archive** | El sitio como repositorio de historia viva |

### 1.2 El Problema

El Tianguis Cultural es historia viva de la cultura alternativa tapatía desde 2010. Su presencia digital no refleja su importancia cultural ni sirve las necesidades reales de sus usuarios:
- En movimiento
- Bajo el sol
- Con conexión intermitente
- Necesitan información en tiempo real

### 1.3 La Solución

Crear **"The Digital Fanzine"**: una plataforma que transforma un espacio físico de 6 horas semanales en una **institución digital 24/7**.

---

## 2. Identidad Visual & UI (The Brand System)

Buscaremos una estética **"Neo-Brutalista"**: honesta, cruda, pero extremadamente pulida en su ejecución.

### 2.1 Paleta de Colores

No usaremos colores "limpios". Usaremos tonos que evoquen **la calle, el metal y la cultura urbana**:

```css
:root {
  /* === COLORES BASE === */
  --asfalto-profundo: #121212;    /* Fondo principal - evita negro puro para reducir fatiga visual */
  --papel-reciclado: #E8E6E1;     /* Textos principales - sensación de fanzine/periódico viejo */
  --papel-crema: #F5F0E8;         /* Fondos alternativos de sección */
  
  /* === COLORES DE ACCIÓN === */
  --cempasuchil-neon: #FF5F00;    /* CTAs - vibrante, mexicano, destaca sobre oscuro */
  --azul-industrial: #2B3A67;     /* Elementos secundarios/soporte técnico */
  
  /* === COLORES FUNCIONALES === */
  --gris-concreto: #6B6B6B;       /* Textos secundarios */
  --rojo-emergencia: #D62828;     /* Alertas, errores */
  --verde-disponible: #2ECC71;    /* Estados positivos */
  --amarillo-agotandose: #F4D03F; /* Estados de advertencia */
}
```

### 2.2 Tipografía

**El contraste es clave** — tipografías pesadas brutalistas contra cuerpo legible técnico:

| Uso | Fuente | Peso | Carácter |
|-----|--------|------|----------|
| **Titulares** | `Syne` o `Archivo Black` | 700-900 | Pesadas, geométricas, mucha personalidad |
| **Cuerpo de texto** | `Inter` o `IBM Plex Sans` | 400/500 | Altamente legibles, toque técnico/ingenieril |
| **Código/Datos** | `JetBrains Mono` | 400 | Monospace para etiquetas y datos |

### 2.3 Elementos Visuales

#### Tratamiento de Imágenes
- Fotografía de **alta resolución real** del tianguis (NO stock)
- Filtro de **"grano de película"** o **duotono en hover**
- Transición sutil entre estados

#### Bordes y Sombras (Brutalismo Puro)
```css
/* CERO bordes redondeados */
.component {
  border-radius: 0;
}

/* Sombras sólidas (hard shadows) en lugar de difuminadas */
.card {
  box-shadow: 8px 8px 0px var(--asfalto-profundo);
}

.card:hover {
  box-shadow: 12px 12px 0px var(--cempasuchil-neon);
  transform: translate(-4px, -4px);
}
```

#### Texturas
- Uso **sutil de texturas de "ruido"** o papel en los fondos
- Evitar superficies planas digitales
- Pattern overlay con opacidad baja (~5-10%)

---

## 3. Estrategia de UX (User Experience)

Siguiendo la filosofía de **Clay**, la interfaz debe ser "invisible" para que el contenido brille.

### 3.1 Enfoque MVP: Sitio Estático

> ⚠️ **Decisión de Seguridad:** Se elimina el "Modo Dinámico" y funciones en tiempo real para evitar riesgos de APIs expuestas.

El MVP será un **sitio completamente estático** con contenido pre-generado:

```
┌─────────────────────────────────────────────────────────────┐
│                    MODO ÚNICO: "EXPLORA"                    │
│                  (Contenido Estático)                       │
├─────────────────────────────────────────────────────────────┤
│  📖 Enfoque Editorial                                       │
│  • Historia del Tianguis                                    │
│  • Catálogo de Expositores (datos estáticos JSON)          │
│  • Información general del evento                          │
│  • Galería de fotos                                         │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Micro-interacciones (Estilo Ramotion)

#### Transiciones de Página
- **Page transitions fluidas** usando CSS puro o `Framer Motion`
- Evitar el "salto blanco" entre páginas
- Efecto de slide o fade con easing personalizado

#### Scroll Narrativo
- Elementos aparecen con **staggering** (retraso escalonado)
- Animación sutil de entrada que guía la vista
- Parallax suave en imágenes hero

---

## 4. Especificaciones Técnicas (The Stack) — MVP Seguro

> ⚠️ **Decisión de Seguridad:** Stack simplificado sin backend, CMS, APIs ni servicios externos que requieran tokens.

| Componente | Tecnología | Razón |
|------------|------------|-------|
| **Framework** | **Next.js 14+ (Static Export)** | Sitio 100% estático, sin servidor |
| **Estilos** | **Vanilla CSS** o **Tailwind CSS** | Diseño brutalista con precisión |
| **Animaciones** | **CSS Animations + Framer Motion** | Interacciones fluidas sin dependencias pesadas |
| **Datos** | **JSON estático** | Archivos `.json` en `/public/data/` |
| **Hosting** | **Vercel / GitHub Pages** | CDN global, sin servidores |
| **Analytics** | **Plausible** (opcional) | Privacy-first, ligero |

### 4.1 Estructura de Archivos (MVP Estático)

```
Pagina_web_tianguis/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Home: "The Pulse"
│   ├── directorio/
│   │   └── page.tsx            # Directorio: "The Grid"
│   ├── mapa/
│   │   └── page.tsx            # Mapa SVG estático
│   └── historia/
│       └── page.tsx            # Historia: "Time-Travel"
│
├── components/
│   ├── ui/                     # Componentes base
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Tag.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── features/
│   │   ├── ExpositorGrid.tsx   # Grid estático de expositores
│   │   └── StaticMap.tsx       # Mapa SVG sin geolocalización
│   └── effects/
│       ├── PageTransition.tsx
│       └── ScrollReveal.tsx
│
├── public/
│   ├── data/
│   │   └── expositores.json    # Datos estáticos
│   ├── icons/                  # Iconografía custom SVG
│   ├── images/                 # Fotografías del tianguis
│   ├── textures/               # Patrones de fondo
│   └── map.svg                 # Mapa SVG estático
│
├── styles/
│   ├── globals.css             # Variables CSS + base
│   └── fonts.css               # Carga de tipografías
│
├── next.config.js              # output: 'export' para estático
└── package.json
```

---

## 5. Arquitectura del Sitio (MVP Simplificado)

> ⚠️ **Eliminado:** Blog, Modo Live, perfiles dinámicos.

```
                              ┌─────────────┐
                              │    HOME     │
                              │ "The Pulse" │
                              └──────┬──────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        │                            │                            │
        ▼                            ▼                            ▼
┌───────────────┐          ┌───────────────┐          ┌───────────────┐
│  DIRECTORIO   │          │     MAPA      │          │   HISTORIA    │
│  "The Grid"   │          │  (SVG Estático)│          │ "Time-Travel" │
│ (JSON local)  │          │               │          │               │
└───────────────┘          └───────────────┘          └───────────────┘
```

---

## 6. Elementos de Diseño Clave (UI Components)

### 6.1 Live Card (Widget de Eventos) //no implementes esto //

Un widget en la parte superior con **luz parpadeante** (CSS `pulse`) que indica qué banda está tocando ahora.

```
┌────────────────────────────────────────────────────────────┐
│ 🔴 EN VIVO AHORA                                          │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ♫  PANTEON ROCOCO                                        │
│     Escenario Principal · Termina en 25 min               │
│                                                            │
│  ┌──────────────────┐  ┌─────────────────────────────────┐│
│  │ [Foto de Banda]  │  │ SIGUIENTE:                      ││
│  │                  │  │ ◇ 14:30 - Los Rastrillos        ││
│  │                  │  │ ◇ 16:00 - Inspector             ││
│  └──────────────────┘  └─────────────────────────────────┘│
│                                                            │
│     [ 🎧 Escuchar Audio ]    [ 🎵 Ver en Spotify ]        │
└────────────────────────────────────────────────────────────┘
```

**Interacción:** Click abre modal con perfil de Spotify de la banda.

### 6.2 Infinite Grid (Directorio de Expositores)

Cuadrícula con sistema de **etiquetas estilo "precio de ropa"**:

```
┌─────────────────────────────────────────────────────────────┐
│  FILTROS                                                    │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
│  │  TODOS │ │TATUAJES│ │VINILOS │ │  ROPA  │ │ COMIDA │    │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓▓▓▓│ │
│  │▓▓ [FOTO/GIF]  ▓▓│  │▓▓ [FOTO/GIF]  ▓▓│  │▓▓ [FOTO]  ▓▓│ │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓▓▓▓│ │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────┤ │
│  │ DISCO CAOS      │  │ TINTA URBANA    │  │ VINTAGE GDL │ │
│  │ ┌─────┐ ┌─────┐ │  │ ┌──────┐        │  │ ┌─────┐     │ │
│  │ │VINYL│ │PUNK │ │  │ │TATTOO│        │  │ │ROPA │     │ │
│  │ └─────┘ └─────┘ │  │ └──────┘        │  │ └─────┘     │ │
│  │ Puesto: A-23    │  │ Puesto: B-07    │  │ Puesto: C-12│ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Interacción:** Hover convierte imagen estática en **GIF/video corto** del artista trabajando.

### 6.3 Mapa SVG "Low-Latency" (Agua Azul Navigator)

Mapa **SVG interactivo** del Parque Agua Azul (NO Google Maps embebido):

```
┌─────────────────────────────────────────────────────────────┐
│  🗺️ AGUA AZUL NAVIGATOR                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│     ┌─────────────────────────────────────────────────┐    │
│     │                                                  │    │
│     │   [Ilustración SVG Estilizada del Parque]       │    │
│     │                                                  │    │
│     │   🔵 Tu ubicación (si está en el parque)        │    │
│     │                                                  │    │
│     │   Zonas:                                        │    │
│     │   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━            │    │
│     │   🟠 Vinilos    🟣 Ropa      🔵 Arte            │    │
│     │   🟢 Comida     🔴 Escenario ⚪ Servicios       │    │
│     │                                                  │    │
│     └─────────────────────────────────────────────────┘    │
│                                                             │
│  ACCESIBILIDAD                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │ 🚻 Baños     │ │ 🚪 Salidas   │ │ ☂️ Sombra    │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                             │
│  FOOD TRACKER                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🌮 Tacos de la Esquina    │  🟢 DISPONIBLE         │   │
│  │ 🍕 Pizza Artesanal        │  🟡 AGOTÁNDOSE         │   │
│  │ 🥤 Café El Ahumado        │  🔴 AGOTADO            │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- **Geolocalización:** Punto azul indica posición exacta dentro del tianguis
- **Zonas de Calor:** Muestra dónde hay mayor actividad
- **Accesibilidad:** Marcadores claros para baños, salidas de emergencia, sombra

### 6.4 Audio Widget (Live Stream)

```
┌───────────────────────────────────────────────────┐
│ 🔴 ESCENARIO PRINCIPAL                            │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━               │
│                                                   │
│  ▶  ━━━━━━━━━━━━━━━━━━━━━━━━━━  🔊 ───○────      │
│                                                   │
│  Panteon Rococo · En vivo ahora                  │
└───────────────────────────────────────────────────┘
```

### 6.5 Sistema de Reseñas (Spray Cans)

**NO usar estrellas amarillas de Google.** Sistema de **"Spray Cans"** (latas de aerosol):

```
┌─────────────────────────────────────────────┐
│  "El mejor lugar para encontrar vinilos     │
│   de punk mexicano de los 90s"              │
│                                             │
│   🎨🎨🎨🎨🎨  (5 latas = 5 estrellas)         │
│   — @vinilo_hunter · hace 2 semanas         │
└─────────────────────────────────────────────┘
```

---

## 7. Páginas Principales (MVP)

### 7.1 HOME: "The Pulse"

```
┌────────────────────────────────────────────────────────────────────┐
│  [HEADER: Logo + Nav]                                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ╔════════════════════════════════════════════════════════════╗   │
│  ║                                                            ║   │
│  ║   [IMAGEN HERO ESTÁTICA O GIF ANIMADO]                    ║   │
│  ║                                                            ║   │
│  ║   TIANGUIS CULTURAL                                       ║   │
│  ║   EL CORAZÓN DE LA CULTURA ALTERNATIVA                    ║   │
│  ║                                                            ║   │
│  ║   [ VER DIRECTORIO ]    [ VER MAPA ]                      ║   │
│  ╚════════════════════════════════════════════════════════════╝   │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │ � PRÓXIMO EVENTO (texto estático)                         │   │
│  │ Todos los Sábados | 10:00 - 16:00 | Parque Agua Azul      │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  ▸ ZONAS DESTACADAS                                               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                  │
│  │ 🎵      │ │ 🎨      │ │ 👕      │ │ 🌮      │                  │
│  │ Vinilos │ │  Arte   │ │  Ropa   │ │ Comida  │                  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘                  │
│                                                                    │
│  [FOOTER]                                                         │
└────────────────────────────────────────────────────────────────────┘
```

### 7.2 HISTORIA: "Time-Travel"

**Experiencia de scroll horizontal (sin audio):**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ← SCROLL HORIZONTAL →                                                      │
│                                                                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐     │
│  │             │   │             │   │             │   │             │     │
│  │   [B/N]     │→→→│   [B/N]     │→→→│  [COLOR]    │→→→│  [COLOR]    │     │
│  │   2010      │   │   2015      │   │   2020      │   │   2024      │     │
│  │             │   │             │   │             │   │             │     │
│  │ El primer   │   │ La primera  │   │ Regreso     │   │ 14 años de  │     │
│  │ tianguis    │   │ batalla de  │   │ post-       │   │ historia    │     │
│  │             │   │ bandas      │   │ pandemia    │   │             │     │
│  └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Propuesta de Contenido Visual (Asset List)

### 8.1 Video Requerido

| Asset | Especificaciones | Descripción |
|-------|------------------|-------------|
| **Hero Video** | 15s, B/N, slow-motion, loop | Cortes rápidos: manos tatuando, vinilo girando, multitud |

### 8.2 Iconografía Custom

**Estilo:** Dibujados a mano alzada (doodle urbano), NO vectores genéricos:

| Icono | Uso |
|-------|-----|
| 🍕 (custom) | Comida |
| 🎸 (custom) | Música |
| 🎨 (custom) | Arte |
| 👕 (custom) | Ropa |
| 💿 (custom) | Vinilos |
| ✒️ (custom) | Tatuajes |
| 🎨 (spray can) | Sistema de rating |

### 8.3 Fotografía

- **Requisitos:** Fotos reales del tianguis, alta resolución
- **Tratamiento:** Grano de película, duotono en hover
- **NO usar:** Stock photos genéricas

### 8.4 Texturas

- Ruido/Noise sutil para fondos
- Textura de papel reciclado
- Pattern de halftone para overlays

---

## 9. Roadmap de Implementación (MVP Simplificado)

### Fase 1: Foundation (Semana 1)
- [ ] Setup proyecto Next.js 14+ con `output: 'export'`
- [ ] Configurar CSS/Tailwind con tokens de diseño
- [ ] Implementar sistema tipográfico
- [ ] Crear componentes UI base (Button, Card, Tag)
- [ ] Preparar estructura de datos JSON estáticos

### Fase 2: Core Pages (Semana 2)
- [ ] Desarrollar Home "The Pulse" (estático)
- [ ] Implementar Directorio "The Grid" con filtros JS locales
- [ ] Crear Mapa SVG estático
- [ ] Desarrollar sección Historia

### Fase 3: Polish & Deploy (Semana 3)
- [ ] Scroll narrativo con staggering
- [ ] Transiciones de página CSS
- [ ] Optimización de imágenes
- [ ] Testing responsive
- [ ] Deploy estático a Vercel/GitHub Pages

---

## 10. Verificación de Calidad

| Criterio | Herramienta | Meta |
|----------|-------------|------|
| **Performance** | Lighthouse | Score > 90 |
| **Accessibility** | axe DevTools | 0 errores críticos |
| **SEO** | Lighthouse | Score > 95 |
| **Mobile** | Chrome DevTools | 100% responsive |
| **Animaciones** | 60fps | Sin drops de frame |

---

## 📌 Decisiones Tomadas (MVP Seguro)

| # | Decisión | Resultado | Razón |
|---|----------|-----------|-------|
| 1 | Hero Visual | **Imagen/GIF estático** | Evita carga de video pesado |
| 2 | Datos de Expositores | **JSON estático local** | Sin API = Sin riesgos de seguridad |
| 3 | Audio Stream | **❌ Eliminado del MVP** | Requiere backend y tokens |
| 4 | Mapa | **SVG estático** | Sin geolocalización ni Mapbox |
| 5 | Fotografía | **Imágenes locales** | Pendiente: sesión real o IA |

---

## 🔒 Funciones Eliminadas por Seguridad

| Función | Riesgo | Status |
|---------|--------|--------|
| API Routes (`/api/*`) | Exposición de endpoints | ❌ Eliminado |
| CMS (Sanity/Strapi) | Tokens expuestos, panel admin | ❌ Eliminado |
| Audio Streaming | Backend requerido | ❌ Eliminado |
| Geolocalización | Privacidad, permisos | ❌ Eliminado |
| Mapbox SDK | Token API expuesto | ❌ Eliminado |
| Food Tracker (tiempo real) | API en tiempo real | ❌ Eliminado |
| Modo "Live" dinámico | Lógica de servidor | ❌ Eliminado |
| Sistema de Reseñas | Requiere autenticación | ❌ Eliminado |
| Blog dinámico | CMS requerido | ❌ Eliminado |

---

## 🎯 Siguiente Paso Sugerido

**Iniciar desarrollo del MVP estático:**

1. **Setup Next.js** con `output: 'export'`
2. **Crear datos JSON** de expositores de ejemplo
3. **Diseñar SVG** del mapa del parque

---

*Documento actualizado: Enero 2026*
*Versión: 2.0 — Fusión Clay × Ramotion × AKQA*
