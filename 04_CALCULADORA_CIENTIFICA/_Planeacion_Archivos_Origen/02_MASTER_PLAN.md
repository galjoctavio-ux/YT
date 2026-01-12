# 02_MASTER_PLAN.md
## Plan Maestro: Calculadora Científica en Línea

---

## Información General
| Campo | Valor |
|-------|-------|
| Fecha de Creación | 2026-01-11 |
| Última Actualización | 2026-01-11 |
| Estado | En Planeación |

---

## Contexto Técnico del Usuario

> ⚠️ **NOTA**: Esta sección documenta CONTEXTO proporcionado por el usuario, no constituye decisiones técnicas ni prescripciones.

### Nivel Técnico del Usuario
- **Nivel**: Básico - Principiante
- **Descripción**: Necesita guía completa durante todo el proceso de desarrollo

### Rol en el Desarrollo
- **Rol**: Orquestador de IA
- **Descripción**: La IA escribe el código, el usuario dirige y supervisa

### Recursos Técnicos Disponibles
| Recurso | Estado | Observaciones |
|---------|--------|---------------|
| **Presupuesto** | $0 MXN | Limitado a opciones sin costo |
| **Máquina Virtual** | Disponible | Sin especificación de proveedor o características |
| **Servicios Preferidos** | Solo gratuitos | Restricción aplicable a hosting, herramientas y APIs |

---

## Visión del Proyecto
Crear una herramienta en línea para realizar cálculos de manera accesible y fácil de usar, que evolucione desde funciones básicas hasta capacidades científicas y de graficación.

---

## Tipo de Software
| Campo | Valor |
|-------|-------|
| **Tipo** | 🌐 Página Web |
| **Descripción** | Sitio informativo, landing page, portafolio |
| **Plataforma** | Navegador web (desktop y móvil) |

---

## Alcance del MVP

### Incluido en MVP (Fase 1)
- ✅ Calculadora básica con operaciones fundamentales (suma, resta, multiplicación, división)
- ✅ Interfaz de usuario intuitiva y responsiva (HTML/CSS/JS)
- ✅ Historial de cálculos realizados (localStorage)
- ✅ Diseño web optimizado para SEO

> 📋 **[ANOTACIÓN DE CONTEXTO]**: El usuario indica preferencia por servicios gratuitos. Las tecnologías seleccionadas (HTML/CSS/JS + localStorage) son compatibles con esta restricción.

### Fuera del MVP (Fases Posteriores)
- ⏳ Calculadora científica (integrales, derivadas, ecuaciones)
- ⏳ Calculadora gráfica (visualización de funciones)
- ⏳ Soporte para conversión de unidades
- ⏳ Calculadora de propina para varios países

---

## Objetivos del MVP

### Objetivo Principal
> Desarrollar una calculadora básica funcional con una interfaz intuitiva que permita realizar operaciones matemáticas fundamentales y conservar un historial de cálculos.

### Objetivos Específicos
1. **O1**: Implementar operaciones básicas (suma, resta, multiplicación, división)
2. **O2**: Diseñar una interfaz de usuario accesible y atractiva
3. **O3**: Integrar sistema de historial de cálculos
4. **O4**: Garantizar compatibilidad con dispositivos móviles y escritorio

---

## Fases de Ejecución

### 📌 FASE 1: MVP - Calculadora Básica
| Elemento | Detalle |
|----------|---------|
| **Duración Estimada** | Por definir |
| **Prioridad** | Alta |
| **Entregables** | Calculadora funcional con operaciones básicas, historial e interfaz |

**Tareas Principales:**
- [ ] Diseño de interfaz de usuario
- [ ] Implementación de operaciones matemáticas básicas
- [ ] Sistema de historial de cálculos
- [ ] Pruebas de funcionalidad
- [ ] Despliegue inicial

> 📋 **[ANOTACIÓN DE CONTEXTO]**: El usuario reporta nivel técnico básico-principiante con rol de orquestador de IA. Las tareas de implementación serán ejecutadas por IA con supervisión del usuario.

---

### 📌 FASE 2: Calculadora Científica
| Elemento | Detalle |
|----------|---------|
| **Duración Estimada** | Por definir |
| **Prioridad** | Media |
| **Entregables** | Funciones científicas integradas |

**Tareas Principales:**
- [ ] Implementación de funciones trigonométricas
- [ ] Cálculo de derivadas e integrales
- [ ] Resolución de ecuaciones
- [ ] Funciones exponenciales y logarítmicas

---

### 📌 FASE 3: Calculadora Gráfica + Conversión de Unidades
| Elemento | Detalle |
|----------|---------|
| **Duración Estimada** | Por definir |
| **Prioridad** | Media-Baja |
| **Entregables** | Graficación de funciones, conversión de unidades y calculadora de propina |

**Tareas Principales:**
- [ ] Motor de graficación de funciones
- [ ] Interfaz de visualización gráfica
- [ ] Sistema de conversión de unidades
- [ ] Base de datos de unidades y factores de conversión
- [ ] Calculadora de propina con soporte multi-país

---

## Requisitos Derivados

### Requisitos Funcionales
| ID | Requisito | Origen | Prioridad |
|----|-----------|--------|-----------|
| RF-01 | El sistema debe realizar sumas | IDEA_1 | Alta |
| RF-02 | El sistema debe realizar restas | IDEA_1 | Alta |
| RF-03 | El sistema debe realizar multiplicaciones | IDEA_1 | Alta |
| RF-04 | El sistema debe realizar divisiones | IDEA_1 | Alta |
| RF-05 | El sistema debe guardar historial de operaciones | CARACTERÍSTICA_2 | Media |
| RF-06 | El sistema debe mostrar historial de operaciones | CARACTERÍSTICA_2 | Media |
| RF-07 | El sistema debe calcular propinas según país/cultura | CARACTERÍSTICA_4 | Baja |

### Requisitos No Funcionales
| ID | Requisito | Origen | Prioridad |
|----|-----------|--------|-----------|
| RNF-01 | La interfaz debe ser intuitiva y accesible | CARACTERÍSTICA_1 | Alta |
| RNF-02 | El sistema debe ser responsivo (móvil/escritorio) | CARACTERÍSTICA_1 | Alta |
| RNF-03 | Los cálculos deben ejecutarse en tiempo real | General | Alta |

---

## Dependencias y Restricciones

### Dependencias Técnicas
> Por definir en fase de análisis técnico.

> 📋 **[ANOTACIÓN DE CONTEXTO]**: El usuario dispone de una máquina virtual (sin especificar características). Este recurso podría considerarse para desarrollo o pruebas si se requiere.

### Restricciones
> Por definir según contexto técnico del usuario.

> 📋 **[ANOTACIÓN DE CONTEXTO - RESTRICCIONES CONOCIDAS]**:
> - Presupuesto: $0 MXN (sin inversión monetaria disponible)
> - Servicios: Solo opciones gratuitas
> - Capacidad técnica: Usuario requiere guía completa

---

## Stack Tecnológico Recomendado

### Frontend (Página Web)
| Tecnología | Propósito |
|------------|----------|
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos y diseño responsivo |
| **JavaScript (Vanilla)** | Lógica de la calculadora |
| **localStorage** | Persistencia del historial |

### Herramientas de Desarrollo
| Herramienta | Propósito |
|-------------|----------|
| **VS Code** | Editor de código |
| **Live Server** | Servidor de desarrollo local |
| **Git/GitHub** | Control de versiones |

### Despliegue
| Opción | Descripción |
|--------|-------------|
| **GitHub Pages** | Hosting gratuito para sitios estáticos |
| **Netlify** | Alternativa con CI/CD integrado |
| **Vercel** | Opción con previews automáticos |

> 📋 **[ANOTACIÓN DE CONTEXTO]**: Las tres opciones de despliegue listadas son compatibles con la restricción de presupuesto $0 MXN reportada por el usuario. Todas ofrecen planes gratuitos para sitios estáticos.

---

## Control de Cambios

| Versión | Fecha | Descripción del Cambio |
|---------|-------|------------------------|
| 1.3 | 2026-01-11 | Integración de sección 'Contexto Técnico del Usuario' y anotaciones dispersas para decisiones futuras |
| 1.2 | 2026-01-11 | Agregado Tipo de Software (Página Web), stack tecnológico recomendado y alcance actualizado |
| 1.1 | 2026-01-11 | Iteración #1: Agregada calculadora de propina a Fase 3 y requisito RF-07 |
| 1.0 | 2026-01-11 | Creación inicial del Plan Maestro basado en bloque [ESTADO_SINC_ANTIGRAVITY] con 3 fases definidas |

---
