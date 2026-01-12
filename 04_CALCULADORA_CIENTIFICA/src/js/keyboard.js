/**
 * Keyboard Module
 * Calculadora Científica MVP
 * Soporte para teclado físico
 */

// Mapeo de teclas a acciones
const KEY_MAP = {
    // Números
    '0': { action: 'number', value: '0' },
    '1': { action: 'number', value: '1' },
    '2': { action: 'number', value: '2' },
    '3': { action: 'number', value: '3' },
    '4': { action: 'number', value: '4' },
    '5': { action: 'number', value: '5' },
    '6': { action: 'number', value: '6' },
    '7': { action: 'number', value: '7' },
    '8': { action: 'number', value: '8' },
    '9': { action: 'number', value: '9' },

    // Punto decimal
    '.': { action: 'decimal', value: '.' },
    ',': { action: 'decimal', value: '.' },

    // Operadores
    '+': { action: 'operator', value: '+' },
    '-': { action: 'operator', value: '-' },
    '*': { action: 'operator', value: '×' },
    'x': { action: 'operator', value: '×' },
    'X': { action: 'operator', value: '×' },
    '/': { action: 'operator', value: '÷' },

    // Igual
    '=': { action: 'equals' },
    'Enter': { action: 'equals' },

    // Limpiar
    'Escape': { action: 'clear' },
    'Delete': { action: 'clear' },
    'c': { action: 'clear' },
    'C': { action: 'clear' },

    // Backspace
    'Backspace': { action: 'backspace' }
};

// Callback para manejar las acciones
let actionHandler = null;

/**
 * Inicializa los eventos de teclado
 * @param {Function} handler - Función callback para manejar acciones
 */
export function initKeyboard(handler) {
    actionHandler = handler;
    document.addEventListener('keydown', handleKeyDown);
}

/**
 * Maneja el evento keydown
 * @param {KeyboardEvent} event - Evento de teclado
 */
function handleKeyDown(event) {
    // No procesar si el foco está en un input o si se están usando modificadores
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }

    // Ignorar si hay modificadores (excepto Shift para +)
    if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
    }

    // Manejar Shift+= como +
    if (event.shiftKey && event.key === '=') {
        event.preventDefault();
        if (actionHandler) {
            actionHandler({ action: 'operator', value: '+' });
        }
        highlightButton('operator', '+');
        return;
    }

    // Buscar la acción correspondiente a la tecla
    const mapping = KEY_MAP[event.key];

    if (mapping) {
        event.preventDefault();

        if (actionHandler) {
            actionHandler(mapping);
        }

        // Proporcionar feedback visual en el botón correspondiente
        highlightButton(mapping.action, mapping.value);
    }
}

/**
 * Proporciona feedback visual al presionar tecla
 * @param {string} action - Tipo de acción
 * @param {string} value - Valor asociado
 */
function highlightButton(action, value) {
    // Buscar el botón correspondiente
    let selector;

    switch (action) {
        case 'number':
        case 'decimal':
            selector = `[data-action="${action}"][data-value="${value}"]`;
            break;
        case 'operator':
            selector = `[data-action="operator"][data-value="${value.replace('×', '×').replace('−', '-')}"]`;
            break;
        case 'equals':
            selector = '[data-action="equals"]';
            break;
        case 'clear':
            selector = '[data-action="clear"]';
            break;
        case 'backspace':
            selector = '[data-action="backspace"]';
            break;
        default:
            return;
    }

    const button = document.querySelector(selector);

    if (button) {
        // Agregar clase de activo temporalmente
        button.classList.add('active');
        button.focus();

        // Remover después de un breve tiempo
        setTimeout(() => {
            button.classList.remove('active');
        }, 100);
    }
}

/**
 * Destruye los eventos de teclado
 */
export function destroyKeyboard() {
    document.removeEventListener('keydown', handleKeyDown);
    actionHandler = null;
}
