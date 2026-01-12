# 03_RIESGOS_OPORTUNIDADES.md
## Análisis de Riesgos y Oportunidades - ISO 9001:2015 (6.1)

---

## Referencia al Plan Maestro

| Campo | Valor |
|-------|-------|
| **Documento Analizado** | 02_MASTER_PLAN.md |
| **Título** | Plan Maestro: Calculadora Científica en Línea |
| **Versión Analizada** | 1.3 |
| **Fecha de Análisis** | 2026-01-11 |
| **Alcance del Análisis** | Totalidad del documento: Contexto técnico, visión, alcance MVP, objetivos, fases de ejecución, requisitos, dependencias, restricciones y stack tecnológico |

---

## Lista de Riesgos Identificados

### R-01: Capacidad técnica limitada del usuario
- **Descripción**: El usuario presenta un nivel técnico básico-principiante y requiere guía completa durante todo el proceso de desarrollo.
- **Origen**: Sección "Contexto Técnico del Usuario" → "Nivel Técnico del Usuario".

### R-02: Dependencia total de la IA para la generación de código
- **Descripción**: El usuario actúa exclusivamente como orquestador, delegando toda la escritura de código a la IA. Esto genera dependencia técnica para cualquier modificación, corrección o mantenimiento del sistema.
- **Origen**: Sección "Contexto Técnico del Usuario" → "Rol en el Desarrollo".

### R-03: Presupuesto nulo para el proyecto
- **Descripción**: El proyecto cuenta con $0 MXN de presupuesto, limitando las opciones a servicios y herramientas exclusivamente gratuitos.
- **Origen**: Sección "Contexto Técnico del Usuario" → "Recursos Técnicos Disponibles".

### R-04: Restricción a servicios gratuitos únicamente
- **Descripción**: Existe una restricción explícita a utilizar solo servicios sin costo, lo cual aplica a hosting, herramientas y APIs.
- **Origen**: Sección "Contexto Técnico del Usuario" → "Recursos Técnicos Disponibles" y Anotación de Contexto en "Dependencias y Restricciones".

### R-05: Máquina virtual sin especificaciones definidas
- **Descripción**: Se reporta disponibilidad de una máquina virtual, pero no se especifican características técnicas (proveedor, capacidad, sistema operativo, conectividad).
- **Origen**: Sección "Contexto Técnico del Usuario" → "Recursos Técnicos Disponibles" y Anotación de Contexto en "Dependencias Técnicas".

### R-06: Duraciones de fase no definidas
- **Descripción**: Las tres fases de ejecución (Fase 1: MVP, Fase 2: Calculadora Científica, Fase 3: Gráfica + Conversión) tienen "Duración Estimada: Por definir", lo que impide la planificación temporal del proyecto.
- **Origen**: Sección "Fases de Ejecución" → Tablas de cada fase.

### R-07: Dependencias técnicas no identificadas
- **Descripción**: La sección de dependencias técnicas permanece vacía con la indicación "Por definir en fase de análisis técnico", dejando incertidumbre sobre requisitos externos.
- **Origen**: Sección "Dependencias y Restricciones" → "Dependencias Técnicas".

### R-08: Restricciones del proyecto no formalizadas
- **Descripción**: Las restricciones generales del proyecto figuran como "Por definir según contexto técnico del usuario", existiendo solo como anotaciones de contexto.
- **Origen**: Sección "Dependencias y Restricciones" → "Restricciones".

### R-09: Persistencia de datos limitada a localStorage
- **Descripción**: El historial de cálculos se almacenará exclusivamente en localStorage del navegador, lo que implica pérdida de datos si el usuario limpia el navegador o cambia de dispositivo.
- **Origen**: Sección "Alcance del MVP" y "Stack Tecnológico Recomendado".

### R-10: Ausencia de mecanismo de sincronización entre dispositivos
- **Descripción**: Al utilizar únicamente localStorage, no existe forma de mantener el historial consistente entre diferentes dispositivos o navegadores del mismo usuario.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "localStorage" como única opción de persistencia.

### R-11: Complejidad incremental significativa entre fases
- **Descripción**: Las fases posteriores (cálculo de derivadas, integrales, graficación de funciones) representan un salto técnico considerable respecto al MVP, requiriendo posiblemente bibliotecas o motores especializados.
- **Origen**: Sección "Fases de Ejecución" → Fase 2 y Fase 3.

### R-12: Requisito de base de datos para conversión de unidades
- **Descripción**: La Fase 3 incluye la creación de "Base de datos de unidades y factores de conversión", lo cual excede las capacidades del stack actual basado en localStorage.
- **Origen**: Sección "Fases de Ejecución" → Fase 3 → "Tareas Principales".

### R-13: Funcionalidad de propina requiere datos multi-país
- **Descripción**: La calculadora de propina con soporte multi-país (RF-07) requiere información cultural y legislativa de diversos países, sin especificar la fuente de estos datos.
- **Origen**: Sección "Requisitos Funcionales" → RF-07 y Sección "Fases de Ejecución" → Fase 3.

---

## Lista de Oportunidades Identificadas

### O-01: Stack tecnológico simple y accesible
- **Descripción**: El uso de HTML5, CSS3 y JavaScript Vanilla representa una curva de aprendizaje reducida y amplia compatibilidad con recursos educativos disponibles.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "Frontend".

### O-02: Independencia de backend para el MVP
- **Descripción**: El MVP no requiere infraestructura de servidor, permitiendo desarrollo y despliegue como sitio completamente estático.
- **Origen**: Sección "Stack Tecnológico Recomendado" y "Alcance del MVP".

### O-03: Múltiples opciones de hosting gratuito
- **Descripción**: Existen tres plataformas de despliegue identificadas (GitHub Pages, Netlify, Vercel) que ofrecen planes gratuitos compatibles con las restricciones del proyecto.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "Despliegue" y Anotación de Contexto asociada.

### O-04: Compatibilidad con flujos CI/CD sin costo
- **Descripción**: Las plataformas Netlify y Vercel incluyen integración continua y despliegue continuo de forma gratuita.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "Despliegue".

### O-05: Previsualizaciones automáticas de cambios
- **Descripción**: Vercel ofrece previews automáticos, facilitando la revisión de modificaciones antes del despliegue a producción.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "Despliegue" → Vercel.

### O-06: Infraestructura de desarrollo estándar y gratuita
- **Descripción**: Las herramientas de desarrollo especificadas (VS Code, Live Server, Git/GitHub) son estándar de la industria, gratuitas y ampliamente documentadas.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "Herramientas de Desarrollo".

### O-07: Control de versiones integrado desde el inicio
- **Descripción**: La inclusión de Git/GitHub desde el diseño inicial permite trazabilidad del código y facilita colaboración futura.
- **Origen**: Sección "Stack Tecnológico Recomendado" → "Herramientas de Desarrollo".

### O-08: Diseño optimizado para SEO como requisito
- **Descripción**: El MVP incluye explícitamente la optimización para motores de búsqueda, potenciando la visibilidad orgánica del proyecto.
- **Origen**: Sección "Alcance del MVP" → "Incluido en MVP".

### O-09: Enfoque mobile-first implícito
- **Descripción**: Los requisitos RNF-01 y RNF-02 establecen interfaz responsiva para móvil y escritorio como prioridad alta, alineándose con patrones de uso actuales.
- **Origen**: Sección "Requisitos No Funcionales".

### O-10: Disponibilidad de máquina virtual para pruebas
- **Descripción**: Existe una máquina virtual disponible que podría utilizarse para entornos de desarrollo o pruebas sin costos adicionales.
- **Origen**: Sección "Contexto Técnico del Usuario" → "Recursos Técnicos Disponibles".

### O-11: Modelo de desarrollo escalable por fases
- **Descripción**: La estructura de tres fases permite entregas incrementales, validando el producto desde el MVP antes de invertir esfuerzo en funcionalidades avanzadas.
- **Origen**: Sección "Fases de Ejecución".

### O-12: Priorización clara de requisitos
- **Descripción**: Los requisitos funcionales y no funcionales están clasificados por prioridad (Alta, Media, Baja), facilitando la toma de decisiones de alcance.
- **Origen**: Sección "Requisitos Funcionales" y "Requisitos No Funcionales".

### O-13: Trazabilidad de requisitos a ideas origen
- **Descripción**: Cada requisito funcional está vinculado a su idea o característica de origen (IDEA_1, CARACTERÍSTICA_2, etc.), permitiendo rastrear la justificación de cada función.
- **Origen**: Sección "Requisitos Derivados" → Columna "Origen".

### O-14: Ejecutabilidad en tiempo real sin latencia de red
- **Descripción**: Los cálculos se ejecutan localmente en el navegador (RNF-03), eliminando dependencia de conectividad para la funcionalidad core.
- **Origen**: Sección "Requisitos No Funcionales" → RNF-03.

---

## Control de Cambios

| Versión | Fecha | Descripción del Cambio |
|---------|-------|------------------------|
| 1.0 | 2026-01-11 | Creación inicial del análisis de riesgos y oportunidades basado en 02_MASTER_PLAN.md v1.3 |

---
