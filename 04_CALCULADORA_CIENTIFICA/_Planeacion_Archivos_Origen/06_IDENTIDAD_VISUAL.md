# 06_IDENTIDAD_VISUAL.md
## Identidad Visual: Calculadora Científica en Línea

---

## Información del Documento
| Campo | Valor |
|-------|-------|
| Fecha de Creación | 2026-01-11 |
| Última Actualización | 2026-01-11 |
| Versión | 1.0 |
| Documento de Referencia | 02_MASTER_PLAN.md, 05_UI_UX.md |
| Alcance | Sistema de diseño completo para MVP y fases posteriores |

---

## 1. Análisis y Justificación

### 1.1 Dirección Visual Seleccionada

**Estilo: Minimalismo Funcional con Acentos Vibrantes**

La identidad visual de la Calculadora Científica adopta un enfoque **minimalista y funcional** con toques de color vibrante que transmiten precisión, modernidad y accesibilidad.

### 1.2 Justificación de la Dirección

| Factor | Decisión | Justificación |
|--------|----------|---------------|
| **Propósito del producto** | Interfaz limpia y despejada | Una calculadora requiere máxima legibilidad y mínima distracción visual |
| **Público objetivo** | Diseño accesible e intuitivo | Usuario principiante que necesita claridad inmediata |
| **Psicología del color** | Azul como primario | Transmite confianza, precisión y profesionalismo - ideal para herramientas de cálculo |
| **Tendencias actuales** | Glassmorphism sutil + modo oscuro | Estética moderna que eleva la percepción de calidad |
| **Contexto técnico** | Colores de alto contraste | Compatible con CSS puro y accesibilidad WCAG AA |
| **Tipo de software** | Identidad web-first | Optimizada para navegadores modernos en desktop y móvil |

### 1.3 Alineación con el Proyecto

```
✅ Claridad de Acción (UX-01)      → Contraste alto, jerarquía visual clara
✅ Retroalimentación Inmediata     → Estados de color diferenciados
✅ Prevención de Errores           → Colores semánticos claros
✅ Accesibilidad Básica (UX-06)    → Contraste WCAG AA garantizado
✅ Presupuesto $0                  → Solo fuentes Google Fonts gratuitas
```

---

## 2. Paleta de Colores

### 2.1 Colores Principales

| Rol | Color | Hex | RGB | Uso | Justificación |
|-----|-------|-----|-----|-----|---------------|
| **Primario** | Azul Eléctrico | `#3B82F6` | rgb(59, 130, 246) | Botón igual (=), enlaces, elementos de acción principal | Azul transmite precisión matemática, confianza y claridad mental |
| **Primario Hover** | Azul Intenso | `#2563EB` | rgb(37, 99, 235) | Estado hover de elementos primarios | Oscurecimiento natural para feedback visual |
| **Primario Activo** | Azul Profundo | `#1D4ED8` | rgb(29, 78, 216) | Estado activo/pressed | Profundidad para indicar activación |
| **Secundario** | Gris Pizarra | `#64748B` | rgb(100, 116, 139) | Botones numéricos, texto secundario | Neutral profesional, no compite con primario |
| **Acento** | Ámbar Brillante | `#F59E0B` | rgb(245, 158, 11) | Operadores (+, -, ×, ÷), indicadores especiales | Contraste cálido que destaca las operaciones matemáticas |
| **Acento Hover** | Ámbar Intenso | `#D97706` | rgb(217, 119, 6) | Estado hover de operadores | Variación consistente del acento |

### 2.2 Colores de Fondo

| Modo | Rol | Color | Hex | Uso |
|------|-----|-------|-----|-----|
| **Claro** | Fondo principal | Blanco humo | `#F8FAFC` | Background general de la aplicación |
| **Claro** | Fondo elevado | Blanco | `#FFFFFF` | Cards, displays, elementos elevados |
| **Claro** | Fondo sutil | Gris claro | `#F1F5F9` | Áreas de separación, historial |
| **Oscuro** | Fondo principal | Carbón | `#0F172A` | Background general modo oscuro |
| **Oscuro** | Fondo elevado | Pizarra oscura | `#1E293B` | Cards, displays modo oscuro |
| **Oscuro** | Fondo sutil | Pizarra media | `#334155` | Separadores, historial modo oscuro |

### 2.3 Colores Semánticos

| Tipo | Nombre | Hex | Uso | Ejemplo en Calculadora |
|------|--------|-----|-----|------------------------|
| **Éxito** | Verde Esmeralda | `#10B981` | Operación completada, confirmación positiva | Resultado calculado correctamente |
| **Error** | Rojo Coral | `#EF4444` | Errores, validaciones fallidas | ERR-01: División por cero |
| **Advertencia** | Ámbar | `#F59E0B` | Precauciones, acciones irreversibles | Modal de "Borrar historial" |
| **Info** | Azul cielo | `#0EA5E9` | Información contextual, tips | Mensaje "Valor copiado" |

### 2.4 Colores de Texto

| Modo | Variante | Hex | Contraste* | Uso |
|------|----------|-----|------------|-----|
| **Claro** | Principal | `#0F172A` | 15.5:1 | Texto body, números en display |
| **Claro** | Secundario | `#475569` | 7.4:1 | Labels, texto explicativo |
| **Claro** | Terciario | `#94A3B8` | 3.5:1 | Placeholders, texto deshabilitado |
| **Oscuro** | Principal | `#F8FAFC` | 15.5:1 | Texto body modo oscuro |
| **Oscuro** | Secundario | `#CBD5E1` | 9.7:1 | Texto secundario modo oscuro |
| **Oscuro** | Terciario | `#64748B` | 4.1:1 | Placeholders modo oscuro |

> *Contraste calculado contra el fondo correspondiente. Todos cumplen WCAG AA (4.5:1 para texto normal).

---

## 3. Tipografía

### 3.1 Fuentes Seleccionadas

| Rol | Fuente | Fallback | Justificación |
|-----|--------|----------|---------------|
| **Principal (Display/Números)** | `JetBrains Mono` | `'Consolas', monospace` | Fuente monoespaciada optimizada para números, excelente legibilidad de dígitos |
| **Secundaria (UI/Body)** | `Inter` | `'Segoe UI', system-ui, sans-serif` | Fuente humanista moderna, máxima legibilidad en interfaces |

### 3.2 Implementación Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3.3 Escala Tipográfica

Sistema basado en escala de **1.25 (Major Third)** con base de 16px:

| Token | Tamaño | Line Height | Peso | Uso |
|-------|--------|-------------|------|-----|
| `--text-xs` | 12px / 0.75rem | 1.5 | 400 | Badges, etiquetas pequeñas |
| `--text-sm` | 14px / 0.875rem | 1.5 | 400 | Texto auxiliar, notas |
| `--text-base` | 16px / 1rem | 1.5 | 400 | Texto body, botones, labels |
| `--text-lg` | 20px / 1.25rem | 1.4 | 500 | Subtítulos, historial items |
| `--text-xl` | 25px / 1.563rem | 1.3 | 600 | Títulos de sección |
| `--text-2xl` | 32px / 2rem | 1.2 | 600 | Display resultado secundario |
| `--text-3xl` | 40px / 2.5rem | 1.1 | 700 | Display resultado principal |
| `--text-4xl` | 48px / 3rem | 1.0 | 700 | Display numérico grande |

### 3.4 Pesos de Fuente

| Peso | Valor | Uso |
|------|-------|-----|
| **Regular** | 400 | Texto body, placeholders |
| **Medium** | 500 | Botones, labels activos |
| **Semibold** | 600 | Subtítulos, valores destacados |
| **Bold** | 700 | Display de resultado, encabezados |

---

## 4. Estilo Visual

### 4.1 Bordes y Radios

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-none` | 0 | Elementos con esquinas rectas |
| `--radius-sm` | 4px | Badges, etiquetas pequeñas |
| `--radius-md` | 8px | Botones, inputs |
| `--radius-lg` | 12px | Cards, paneles |
| `--radius-xl` | 16px | Modales, containers principales |
| `--radius-2xl` | 24px | Display principal de calculadora |
| `--radius-full` | 9999px | Botones circulares, avatares |

> 💡 **Decisión de diseño**: Radios generosos (8-16px) para transmitir modernidad y suavidad, contrastando con la precisión matemática del contenido.

### 4.2 Sistema de Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Elevación mínima, botones |
| `--shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)` | Cards, elementos flotantes |
| `--shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)` | Modales, dropdowns |
| `--shadow-xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)` | Elementos super-elevados |
| `--shadow-inner` | `inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)` | Inputs, displays (efecto hundido) |
| `--shadow-glow-primary` | `0 0 20px rgba(59, 130, 246, 0.4)` | Hover en botón primario (efecto glow) |
| `--shadow-glow-accent` | `0 0 20px rgba(245, 158, 11, 0.4)` | Hover en operadores |

#### Sombras Modo Oscuro

| Token | Valor |
|-------|-------|
| `--shadow-dark-sm` | `0 1px 2px rgba(0, 0, 0, 0.3)` |
| `--shadow-dark-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)` |
| `--shadow-dark-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4)` |

### 4.3 Sistema de Espaciado

Sistema basado en múltiplos de **4px** (escala de 4):

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-0` | 0 | Sin espaciado |
| `--space-1` | 4px | Micro-espaciado (entre iconos y texto) |
| `--space-2` | 8px | Espaciado interno elementos pequeños |
| `--space-3` | 12px | Padding botones pequeños |
| `--space-4` | 16px | Padding estándar, gaps |
| `--space-5` | 20px | Separación entre grupos |
| `--space-6` | 24px | Padding cards y secciones |
| `--space-8` | 32px | Separación entre secciones |
| `--space-10` | 40px | Márgenes principales |
| `--space-12` | 48px | Espaciado layout principal |
| `--space-16` | 64px | Márgenes de página |

### 4.4 Iconografía

| Aspecto | Especificación |
|---------|----------------|
| **Librería recomendada** | Lucide Icons (MIT License, gratuita) |
| **Alternativa** | Heroicons (MIT License) |
| **Estilo** | Outline (línea) para iconos de UI, Solid para estados activos |
| **Tamaños** | 16px (pequeño), 20px (estándar), 24px (grande) |
| **Stroke width** | 1.5px - 2px |
| **Color** | Heredar del texto (currentColor) |

**Iconos principales para la calculadora:**
- `history` - Panel de historial
- `trash-2` - Limpiar/Eliminar
- `delete` - Backspace (←)
- `copy` - Copiar resultado
- `sun` / `moon` - Toggle modo claro/oscuro
- `x` - Cerrar modal

---

## 5. Modo Oscuro / Claro

### 5.1 Paleta Modo Claro

```css
:root {
  /* Backgrounds */
  --bg-primary: #F8FAFC;
  --bg-elevated: #FFFFFF;
  --bg-subtle: #F1F5F9;
  
  /* Text */
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-tertiary: #94A3B8;
  
  /* Borders */
  --border-default: #E2E8F0;
  --border-strong: #CBD5E1;
  
  /* Interactive */
  --primary: #3B82F6;
  --primary-hover: #2563EB;
  --accent: #F59E0B;
  --accent-hover: #D97706;
}
```

### 5.2 Paleta Modo Oscuro

```css
[data-theme="dark"] {
  /* Backgrounds */
  --bg-primary: #0F172A;
  --bg-elevated: #1E293B;
  --bg-subtle: #334155;
  
  /* Text */
  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-tertiary: #64748B;
  
  /* Borders */
  --border-default: #334155;
  --border-strong: #475569;
  
  /* Interactive (se mantienen vibrantes) */
  --primary: #3B82F6;
  --primary-hover: #60A5FA;
  --accent: #F59E0B;
  --accent-hover: #FBBF24;
}
```

### 5.3 Reglas de Contraste

| Combinación | Modo Claro | Modo Oscuro | Cumple WCAG AA |
|-------------|------------|-------------|----------------|
| Texto principal / Fondo | #0F172A / #F8FAFC (15.5:1) | #F8FAFC / #0F172A (15.5:1) | ✅ Sí |
| Texto secundario / Fondo | #475569 / #F8FAFC (7.4:1) | #CBD5E1 / #0F172A (9.7:1) | ✅ Sí |
| Primario / Fondo | #3B82F6 / #FFFFFF (4.5:1) | #3B82F6 / #1E293B (4.7:1) | ✅ Sí |
| Acento / Fondo | #F59E0B / #FFFFFF (2.9:1)* | #F59E0B / #1E293B (5.2:1) | ⚠️ Solo decorativo en claro |
| Error / Fondo | #EF4444 / #FFFFFF (4.5:1) | #EF4444 / #1E293B (5.1:1) | ✅ Sí |

> *El acento ámbar en modo claro requiere texto oscuro encima o uso solo decorativo.

### 5.4 Transición Entre Modos

```css
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

---

## 6. Aplicación en Componentes

### 6.1 Botones

#### Botón Primario (Igual =)

| Estado | Background | Texto | Borde | Sombra |
|--------|------------|-------|-------|--------|
| **Default** | `#3B82F6` | `#FFFFFF` | none | `--shadow-sm` |
| **Hover** | `#2563EB` | `#FFFFFF` | none | `--shadow-glow-primary` |
| **Active** | `#1D4ED8` | `#FFFFFF` | none | `--shadow-inner` |
| **Disabled** | `#94A3B8` | `#FFFFFF` (0.6 opacity) | none | none |

```css
.btn-primary {
  background: var(--primary);
  color: #FFFFFF;
  font-weight: 600;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  border: none;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-hover);
  box-shadow: var(--shadow-glow-primary);
  transform: translateY(-1px);
}

.btn-primary:active {
  background: #1D4ED8;
  transform: translateY(0);
  box-shadow: var(--shadow-inner);
}
```

#### Botón Secundario (Números 0-9)

| Estado | Background | Texto | Borde | Sombra |
|--------|------------|-------|-------|--------|
| **Default** | `--bg-elevated` | `--text-primary` | `--border-default` | `--shadow-sm` |
| **Hover** | `--bg-subtle` | `--text-primary` | `--border-strong` | `--shadow-md` |
| **Active** | `--bg-subtle` | `--text-primary` | `--primary` | `--shadow-inner` |
| **Disabled** | `--bg-subtle` (0.5) | `--text-tertiary` | none | none |

#### Botón Acento (Operadores +, -, ×, ÷)

| Estado | Background | Texto | Borde | Sombra |
|--------|------------|-------|-------|--------|
| **Default** | `#F59E0B` | `#FFFFFF` | none | `--shadow-sm` |
| **Hover** | `#D97706` | `#FFFFFF` | none | `--shadow-glow-accent` |
| **Active** | `#B45309` | `#FFFFFF` | none | `--shadow-inner` |
| **Selected** | `#D97706` | `#FFFFFF` | `2px solid #FFFFFF` | `--shadow-glow-accent` |

#### Botón Crítico (C - Limpiar)

| Estado | Background | Texto |
|--------|------------|-------|
| **Default** | `transparent` | `#EF4444` |
| **Hover** | `#FEE2E2` | `#DC2626` |
| **Active** | `#FECACA` | `#B91C1C` |

### 6.2 Display (Pantalla de Resultado)

```css
.display {
  background: var(--bg-elevated);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-inner);
  border: 1px solid var(--border-default);
}

.display-result {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--text-primary);
  text-align: right;
  line-height: 1;
}

.display-operation {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--text-secondary);
  text-align: right;
  margin-bottom: var(--space-2);
}
```

### 6.3 Cards (Panel de Historial)

```css
.card {
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-default);
}

.card-header {
  font-family: 'Inter', sans-serif;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.history-item {
  padding: var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.15s ease;
}

.history-item:hover {
  background: var(--bg-subtle);
}

.history-item-operation {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-base);
  color: var(--text-secondary);
}

.history-item-result {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
}
```

### 6.4 Modales

```css
.modal-overlay {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--bg-elevated);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-xl);
  max-width: 400px;
  width: 90%;
}

.modal-title {
  font-family: 'Inter', sans-serif;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.modal-message {
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.modal-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
}
```

### 6.5 Alertas y Mensajes

```css
.alert {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
}

.alert-error {
  background: #FEE2E2;
  color: #991B1B;
  border: 1px solid #FECACA;
}

.alert-success {
  background: #D1FAE5;
  color: #065F46;
  border: 1px solid #A7F3D0;
}

.alert-info {
  background: #E0F2FE;
  color: #075985;
  border: 1px solid #BAE6FD;
}

/* Modo oscuro */
[data-theme="dark"] .alert-error {
  background: rgba(239, 68, 68, 0.15);
  color: #FCA5A5;
  border-color: rgba(239, 68, 68, 0.3);
}
```

---

## 7. Variables CSS Completas

```css
:root {
  /* === COLORES === */
  /* Primarios */
  --primary: #3B82F6;
  --primary-hover: #2563EB;
  --primary-active: #1D4ED8;
  
  /* Acento */
  --accent: #F59E0B;
  --accent-hover: #D97706;
  
  /* Semánticos */
  --success: #10B981;
  --error: #EF4444;
  --warning: #F59E0B;
  --info: #0EA5E9;
  
  /* Fondos - Modo Claro */
  --bg-primary: #F8FAFC;
  --bg-elevated: #FFFFFF;
  --bg-subtle: #F1F5F9;
  
  /* Texto - Modo Claro */
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-tertiary: #94A3B8;
  
  /* Bordes */
  --border-default: #E2E8F0;
  --border-strong: #CBD5E1;
  
  /* === TIPOGRAFÍA === */
  --font-display: 'JetBrains Mono', 'Consolas', monospace;
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3rem;
  
  /* === ESPACIADO === */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  
  /* === BORDES === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* === SOMBRAS === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --shadow-glow-primary: 0 0 20px rgba(59, 130, 246, 0.4);
  --shadow-glow-accent: 0 0 20px rgba(245, 158, 11, 0.4);
  
  /* === TRANSICIONES === */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
}

/* === MODO OSCURO === */
[data-theme="dark"] {
  --bg-primary: #0F172A;
  --bg-elevated: #1E293B;
  --bg-subtle: #334155;
  
  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-tertiary: #64748B;
  
  --border-default: #334155;
  --border-strong: #475569;
  
  --primary-hover: #60A5FA;
  --accent-hover: #FBBF24;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}
```

---

## 8. Guía Rápida de Implementación

### 8.1 Checklist de Implementación

- [ ] Importar fuentes Google Fonts (Inter + JetBrains Mono)
- [ ] Definir variables CSS en `:root`
- [ ] Implementar toggle de modo oscuro con `data-theme="dark"`
- [ ] Aplicar sistema de espaciado consistente
- [ ] Verificar contraste WCAG AA en todos los elementos de texto
- [ ] Testear sombras y efectos glow en ambos modos

### 8.2 Prioridades de Estilo

1. **Alta**: Colores principales, tipografía del display, botones
2. **Media**: Sistema de sombras, bordes redondeados, espaciado
3. **Baja**: Animaciones de transición, efectos glow

---

## Control de Cambios

| Versión | Fecha | Descripción del Cambio |
|---------|-------|------------------------|
| 1.0 | 2026-01-11 | Creación inicial del documento de Identidad Visual |

---
