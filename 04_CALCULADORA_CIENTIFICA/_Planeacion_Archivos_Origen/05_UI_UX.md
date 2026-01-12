# 05_UI_UX.md
## Diseño UX/UI Funcional: Calculadora Científica en Línea

---

## Información del Documento
| Campo | Valor |
|-------|-------|
| Fecha de Creación | 2026-01-11 |
| Última Actualización | 2026-01-11 |
| Versión | 1.0 |
| Documento de Referencia | 02_MASTER_PLAN.md |
| Alcance | MVP - Fase 1 (Calculadora Básica) |

---

## 1. Principios de UX del Sistema

### 1.1 Reglas Obligatorias de Experiencia de Usuario

| ID | Principio | Descripción | Obligatoriedad |
|----|-----------|-------------|----------------|
| UX-01 | **Claridad de Acción** | Cada elemento interactivo debe comunicar claramente su función sin necesidad de texto adicional | OBLIGATORIO |
| UX-02 | **Retroalimentación Inmediata** | Toda acción del usuario debe generar una respuesta visual en menos de 100ms | OBLIGATORIO |
| UX-03 | **Prevención de Errores** | El sistema debe prevenir errores antes de que ocurran (ej: deshabilitar botones inválidos) | OBLIGATORIO |
| UX-04 | **Recuperación de Errores** | Si ocurre un error, el sistema debe mostrar mensaje claro y opción de recuperación | OBLIGATORIO |
| UX-05 | **Consistencia Visual** | Todos los elementos del mismo tipo deben comportarse y verse de manera idéntica | OBLIGATORIO |
| UX-06 | **Accesibilidad Básica** | El sistema debe ser navegable por teclado y legible en diferentes tamaños | OBLIGATORIO |
| UX-07 | **Estado Visible** | El usuario siempre debe saber en qué estado se encuentra el sistema | OBLIGATORIO |

### 1.2 Restricciones Derivadas del Contexto Técnico

> 📋 **[RESTRICCIÓN DE CONTEXTO]**: Usuario con nivel básico-principiante. La interfaz debe minimizar la curva de aprendizaje.

| Restricción | Implicación UX |
|-------------|----------------|
| Usuario principiante | No usar jerga técnica en mensajes de error o etiquetas |
| Presupuesto $0 | No incluir elementos que requieran servicios de pago |
| Ejecución por IA | Toda decisión de comportamiento debe estar explícitamente documentada |

---

## 2. Estructura de Navegación

### 2.1 Arquitectura de Pantallas

```
[PANTALLA ÚNICA - Single Page Application]
├── ZONA: Encabezado
│   └── Título de la aplicación
│   └── (Opcional) Acceso a historial
├── ZONA: Principal
│   ├── Display de operación actual
│   ├── Display de resultado
│   └── Teclado numérico y de operaciones
├── ZONA: Historial
│   └── Lista de operaciones previas (colapsable)
└── ZONA: Pie de página
    └── Información básica / créditos
```

### 2.2 Pantalla Inicial (Estado por Defecto)

| Elemento | Estado Inicial | Comportamiento |
|----------|----------------|----------------|
| Display de operación | Vacío o "0" | Texto alineado a la derecha |
| Display de resultado | Oculto o "0" | Se muestra al existir operación |
| Teclado numérico | Todos habilitados | Números 0-9, punto decimal |
| Botones de operación | Todos habilitados | +, -, ×, ÷ |
| Botón igual (=) | Deshabilitado | Se habilita cuando hay operación válida |
| Botón limpiar (C) | Habilitado | Siempre disponible |
| Historial | Vacío o colapsado | Mensaje "Sin operaciones" si vacío |

### 2.3 Menú Principal

> ⚠️ **NOTA MVP**: Para el MVP no se requiere menú de navegación tradicional. La aplicación es de pantalla única.

| Componente | Incluido en MVP | Justificación |
|------------|-----------------|---------------|
| Menú hamburguesa | NO | Complejidad innecesaria para calculadora básica |
| Navegación por tabs | NO | Solo hay una funcionalidad principal |
| Acceso a historial | SÍ | Requisito RF-05 y RF-06 |
| Selector de modo | NO | Solo aplica para fases futuras |

### 2.4 Submenús

| Submenú | Estado MVP | Descripción |
|---------|------------|-------------|
| Panel de historial | INCLUIDO | Lista desplegable/colapsable de operaciones anteriores |
| Configuración | EXCLUIDO | No hay opciones configurables en MVP |
| Modos de calculadora | EXCLUIDO | Aplica para Fase 2+ |

---

## 3. Flujos de Usuario

### 3.1 Flujo Principal (Happy Path) - Realizar Cálculo Básico

```
INICIO
    │
    ▼
[1] Usuario ve pantalla inicial con display en "0"
    │
    ▼
[2] Usuario presiona número (ej: "5")
    ├── Display muestra: "5"
    ├── Retroalimentación visual: botón presionado
    │
    ▼
[3] Usuario presiona operador (ej: "+")
    ├── Display muestra: "5 +"
    ├── Operador queda visualmente seleccionado
    │
    ▼
[4] Usuario presiona segundo número (ej: "3")
    ├── Display muestra: "5 + 3"
    ├── Botón "=" se habilita
    │
    ▼
[5] Usuario presiona "="
    ├── Display resultado muestra: "8"
    ├── Operación se guarda en historial
    ├── Retroalimentación de éxito
    │
    ▼
[6] Sistema listo para nueva operación
    ├── Usuario puede:
    │   ├── Continuar operando con el resultado
    │   ├── Limpiar e iniciar nueva operación
    │   └── Ver historial de operaciones
    │
    ▼
FIN (Estado: Listo para siguiente operación)
```

### 3.2 Flujo de Operación Continua (Encadenamiento)

```
[Precondición: Resultado "8" visible en pantalla]
    │
    ▼
[1] Usuario presiona operador (ej: "×")
    ├── Display muestra: "8 ×"
    ├── Resultado anterior se usa como primer operando
    │
    ▼
[2] Usuario continúa flujo normal desde paso [4] del Happy Path
```

### 3.3 Flujo de Error - División por Cero

```
INICIO (Usuario intenta: "5 ÷ 0 =")
    │
    ▼
[1] Usuario ingresa "5 ÷ 0"
    │
    ▼
[2] Usuario presiona "="
    │
    ▼
[3] Sistema detecta error de división por cero
    │
    ▼
[4] Sistema muestra estado de error
    ├── Display resultado: "Error"
    ├── Mensaje: "No se puede dividir entre cero"
    ├── Visual: Indicador de error (sin color específico - ver restricciones)
    │
    ▼
[5] Opciones de recuperación disponibles:
    ├── Botón "C" (Limpiar): Reinicia a estado inicial
    ├── Botón "←" (Borrar): Elimina último dígito para corregir
    │
    ▼
[6] Usuario usa opción de recuperación
    │
    ▼
FIN (Estado: Listo para nueva operación)
```

### 3.4 Flujo de Error - Sintaxis Inválida

```
INICIO (Usuario presiona operador sin número previo)
    │
    ▼
[1] Usuario presiona operador (ej: "+") sin número previo
    │
    ▼
[2] Sistema PREVIENE el error:
    ├── Opción A: Ignorar la entrada (no se registra)
    ├── Opción B: Usar "0" implícito como primer operando
    │
    ▼
> ⚠️ **REQUIERE DECISIÓN HUMANA**: Seleccionar comportamiento (A o B)
```

### 3.5 Flujo de Historial

```
INICIO
    │
    ▼
[1] Usuario activa panel de historial
    ├── Click en botón/icono de historial
    ├── O: Gesto de deslizar (móvil) - **REQUIERE DECISIÓN HUMANA**
    │
    ▼
[2] Panel de historial se expande
    ├── Muestra lista de operaciones (más reciente primero)
    ├── Formato: "5 + 3 = 8" (operación completa)
    ├── Máximo visible: **REQUIERE DECISIÓN HUMANA** (recomendado: 10-20)
    │
    ▼
[3] Usuario puede:
    ├── [A] Seleccionar operación anterior
    │   └── Resultado se copia al display actual
    ├── [B] Cerrar historial sin seleccionar
    │   └── Panel se colapsa
    ├── [C] Limpiar historial
    │   └── Confirmación requerida antes de borrar
    │
    ▼
FIN
```

---

## 4. Componentes UI Funcionales

### 4.1 Botones

#### 4.1.1 Clasificación de Botones

| Tipo | Uso | Ejemplos | Comportamiento |
|------|-----|----------|----------------|
| **PRIMARIO** | Acción principal de confirmación | `=` (igual) | Mayor prominencia visual, estado hover distintivo |
| **SECUNDARIO** | Acciones estándar recurrentes | `0-9`, `+`, `-`, `×`, `÷`, `.` | Estilo uniforme, feedback al presionar |
| **CRÍTICO** | Acciones destructivas o que requieren precaución | `C` (limpiar todo), `Borrar historial` | Requiere confirmación si afecta datos |
| **AUXILIAR** | Funciones complementarias | `←` (borrar dígito), `Historial` | Menos prominencia visual |

#### 4.1.2 Estados de Botones

| Estado | Descripción | Cuándo Aplica |
|--------|-------------|---------------|
| **DEFAULT** | Estado normal, listo para interacción | Siempre que esté habilitado |
| **HOVER** | Usuario posiciona cursor sobre el botón | Solo desktop (no aplica touch) |
| **ACTIVE/PRESSED** | Usuario está presionando el botón | Durante el click/tap |
| **DISABLED** | Botón no disponible para interacción | Cuando la acción no es válida |
| **SELECTED** | Operador actualmente seleccionado | Solo para botones de operación (+, -, ×, ÷) |

#### 4.1.3 Especificación de Botones del Teclado

| Botón | Tipo | Tecla Equivalente | Comportamiento |
|-------|------|-------------------|----------------|
| `0` | SECUNDARIO | `0`, `Numpad0` | Agrega "0" al display |
| `1-9` | SECUNDARIO | `1-9`, `Numpad1-9` | Agrega dígito al display |
| `.` | SECUNDARIO | `.`, `,` | Agrega punto decimal (solo uno por número) |
| `+` | SECUNDARIO | `+`, `Shift+=` | Operación suma |
| `-` | SECUNDARIO | `-` | Operación resta |
| `×` | SECUNDARIO | `*`, `x`, `X` | Operación multiplicación |
| `÷` | SECUNDARIO | `/` | Operación división |
| `=` | PRIMARIO | `Enter`, `=` | Ejecutar cálculo |
| `C` | CRÍTICO | `Escape`, `Delete` | Limpiar todo |
| `←` | AUXILIAR | `Backspace` | Borrar último dígito |

### 4.2 Displays (Campos de Visualización)

| Display | Propósito | Contenido | Interactividad |
|---------|-----------|-----------|----------------|
| **Display Principal** | Mostrar operación en curso | Números y operadores ingresados | Solo lectura |
| **Display Resultado** | Mostrar resultado del cálculo | Número resultado o mensaje de error | Solo lectura, seleccionable para copiar |

#### 4.2.1 Reglas del Display Principal

| Regla | Descripción |
|-------|-------------|
| Longitud máxima | **REQUIERE DECISIÓN HUMANA** (recomendado: 15-20 caracteres) |
| Overflow | Truncar con "..." al inicio o reducir tamaño de fuente |
| Separador de miles | **REQUIERE DECISIÓN HUMANA** (sí/no, formato: 1,000 o 1 000) |
| Precisión decimal | **REQUIERE DECISIÓN HUMANA** (recomendado: hasta 8 decimales) |

### 4.3 Panel de Historial

| Característica | Especificación |
|----------------|----------------|
| Posición | **REQUIERE DECISIÓN HUMANA** (lateral derecho / inferior / modal) |
| Estado inicial | Colapsado |
| Máximo de entradas | **REQUIERE DECISIÓN HUMANA** (recomendado: 50 en localStorage) |
| Formato de entrada | `[operación] = [resultado]` |
| Orden | Más reciente primero (descendente) |
| Persistencia | localStorage (sobrevive cierre de navegador) |

#### 4.3.1 Acciones del Historial

| Acción | Tipo de Botón | Comportamiento |
|--------|---------------|----------------|
| Expandir/Colapsar | AUXILIAR | Toggle del panel |
| Seleccionar entrada | AUXILIAR | Carga resultado en display principal |
| Limpiar historial | CRÍTICO | Requiere confirmación |

### 4.4 Modales

> ⚠️ **NOTA MVP**: Uso mínimo de modales. Solo para confirmaciones críticas.

#### 4.4.1 Modal de Confirmación de Borrado

| Elemento | Especificación |
|----------|----------------|
| **Cuándo aparece** | Usuario solicita "Limpiar historial" |
| **Título** | "Confirmar borrado" |
| **Mensaje** | "¿Eliminar todo el historial de cálculos? Esta acción no se puede deshacer." |
| **Botón confirmar** | Tipo CRÍTICO, texto "Eliminar todo" |
| **Botón cancelar** | Tipo AUXILIAR, texto "Cancelar" |
| **Cierre** | Click fuera del modal = Cancelar |

### 4.5 Alertas y Mensajes

| Tipo de Alerta | Uso | Duración | Posición |
|----------------|-----|----------|----------|
| **ERROR** | División por cero, sintaxis inválida | Hasta que usuario corrija | En display o debajo |
| **ÉXITO** | Operación completada (opcional) | 1-2 segundos, auto-ocultar | **REQUIERE DECISIÓN HUMANA** |
| **INFORMATIVO** | Historial copiado, valor copiado | 2 segundos, auto-ocultar | Cerca del elemento afectado |

#### 4.5.1 Mensajes de Error Definidos

| Código | Mensaje Usuario | Trigger |
|--------|-----------------|---------|
| ERR-01 | "No se puede dividir entre cero" | Operación `x ÷ 0` |
| ERR-02 | "Número demasiado grande" | Resultado > límite del sistema |
| ERR-03 | "Operación incompleta" | Presionar `=` sin operación válida |

---

## 5. Reglas Explícitas para Ejecución con IA

### 5.1 Qué Puede Hacer la IA

| Categoría | Acciones Permitidas |
|-----------|---------------------|
| **Implementación de flujos** | Codificar los flujos documentados exactamente como se describen |
| **Creación de componentes** | Desarrollar los componentes UI listados con los estados especificados |
| **Lógica matemática** | Implementar operaciones básicas (+, -, ×, ÷) |
| **Manejo de errores** | Implementar los mensajes de error definidos en la tabla ERR-XX |
| **Persistencia** | Usar localStorage para historial según especificación |
| **Accesibilidad básica** | Agregar soporte de teclado según mapeo de teclas documentado |
| **Estados de botones** | Implementar los 5 estados definidos (default, hover, active, disabled, selected) |
| **Responsive** | Adaptar layout para móvil y desktop manteniendo funcionalidad |

### 5.2 Qué NO Puede Decidir la IA

| Categoría | Decisiones Prohibidas | Acción Requerida |
|-----------|----------------------|------------------|
| **Comportamiento no documentado** | Agregar funcionalidades no listadas | Marcar como pendiente de decisión |
| **Flujos alternativos** | Crear flujos de usuario no especificados | Consultar antes de implementar |
| **Interpretación de ambigüedades** | Asumir comportamiento cuando hay múltiples opciones | Solicitar clarificación |
| **Colores y estilos visuales** | Seleccionar paleta de colores o tipografías | Esperar documento de Identidad Visual |
| **Textos no especificados** | Redactar mensajes o labels no documentados | Proponer y esperar aprobación |
| **Priorización de features** | Decidir qué implementar primero fuera del MVP | Seguir orden del Plan Maestro |
| **Librerías externas** | Agregar dependencias no autorizadas | Proponer y esperar aprobación |

### 5.3 Cuándo Debe Preguntar al Usuario

| Situación | Ejemplo | Formato de Pregunta |
|-----------|---------|---------------------|
| **Ambigüedad funcional** | Comportamiento de operador sin número previo | "El documento indica opción A u opción B. ¿Cuál implementar?" |
| **Valor no definido** | Máximo de dígitos en display | "¿Cuántos caracteres máximo debe soportar el display?" |
| **Conflicto de requisitos** | Dos especificaciones contradictorias | "RF-X indica [A] pero sección Y indica [B]. ¿Cuál tiene prioridad?" |
| **Edge case no cubierto** | Usuario presiona `=` repetidamente | "¿Qué debe hacer el sistema si se presiona `=` múltiples veces seguidas?" |
| **Decisión de experiencia** | Animaciones de transición | "¿Se requieren animaciones al cambiar de estado? No está especificado." |

### 5.4 Decisiones Pendientes (REQUIERE DECISIÓN HUMANA)

> ⚠️ **IMPORTANTE**: Los siguientes puntos deben ser resueltos antes o durante la implementación.

| ID | Área | Pregunta | Opciones Sugeridas |
|----|------|----------|-------------------|
| DH-01 | Flujo error | ¿Qué hacer si usuario presiona operador sin número previo? | A) Ignorar entrada, B) Usar "0" implícito |
| DH-02 | Historial | ¿Cómo se activa el historial en móvil? | A) Botón, B) Gesto deslizar, C) Ambos |
| DH-03 | Historial | ¿Cuántas operaciones máximo mostrar en pantalla? | 10, 15, 20 |
| DH-04 | Display | ¿Longitud máxima de caracteres en display? | 15, 20, 25 |
| DH-05 | Display | ¿Usar separador de miles? | Sí (1,000) / No (1000) |
| DH-06 | Display | ¿Cuántos decimales máximo mostrar? | 6, 8, 10 |
| DH-07 | Historial | ¿Posición del panel de historial? | Derecha, Inferior, Modal |
| DH-08 | Alertas | ¿Mostrar alerta de éxito al completar operación? | Sí / No |
| DH-09 | Comportamiento | ¿Qué hacer al presionar `=` múltiples veces? | A) Nada, B) Repetir última operación |
| DH-10 | Historial | ¿Máximo de entradas a guardar en localStorage? | 50, 100, ilimitado |

---

## 6. Matriz de Trazabilidad UX ↔ Requisitos

| ID Requisito | Descripción | Componente UX | Sección de Referencia |
|--------------|-------------|---------------|----------------------|
| RF-01 | Realizar sumas | Botón `+`, lógica de cálculo | 4.1.3 |
| RF-02 | Realizar restas | Botón `-`, lógica de cálculo | 4.1.3 |
| RF-03 | Realizar multiplicaciones | Botón `×`, lógica de cálculo | 4.1.3 |
| RF-04 | Realizar divisiones | Botón `÷`, lógica de cálculo, ERR-01 | 4.1.3, 4.5.1 |
| RF-05 | Guardar historial | Panel historial, localStorage | 4.3 |
| RF-06 | Mostrar historial | Panel historial, flujo 3.5 | 3.5, 4.3 |
| RNF-01 | Interfaz intuitiva | Principios UX, estructura simplificada | 1.1, 2.1 |
| RNF-02 | Sistema responsivo | Layout adaptativo por zona | 2.1 (implícito) |
| RNF-03 | Cálculos en tiempo real | Retroalimentación inmediata (UX-02) | 1.1 |

---

## 7. Restricciones de Implementación

### 7.1 Restricciones Técnicas Derivadas

| Restricción | Origen | Impacto en UX |
|-------------|--------|---------------|
| Solo tecnologías gratuitas | Contexto técnico usuario | No usar fuentes de pago, iconos con licencia |
| localStorage para historial | Stack tecnológico | Límite de ~5MB, sin sincronización entre dispositivos |
| Sin framework JS | Stack tecnológico (Vanilla JS) | Gestión manual de estados y DOM |
| HTML/CSS/JS puros | Stack tecnológico | Componentes deben ser reutilizables manualmente |

### 7.2 Lo que NO Incluye Este Documento

| Elemento | Razón de Exclusión | Documento Correspondiente |
|----------|-------------------|---------------------------|
| Colores específicos | Fuera de alcance (estética) | 06_IDENTIDAD_VISUAL.md |
| Tipografías | Fuera de alcance (estética) | 06_IDENTIDAD_VISUAL.md |
| Wireframes visuales | Fuera de alcance (diseño gráfico) | Requiere herramienta de diseño |
| Mockups | Fuera de alcance (diseño gráfico) | Requiere herramienta de diseño |
| Animaciones específicas | Fuera de alcance (estética) | 06_IDENTIDAD_VISUAL.md |
| Iconografía | Fuera de alcance (estética) | 06_IDENTIDAD_VISUAL.md |

---

## Control de Cambios

| Versión | Fecha | Descripción del Cambio |
|---------|-------|------------------------|
| 1.0 | 2026-01-11 | Creación inicial del documento de Diseño UX/UI Funcional |

---
