/**
 * Display Module
 * Calculadora Científica MVP
 * Gestión del display (mostrar operación, resultado, errores)
 */

// Configuración
const MAX_DISPLAY_LENGTH = 20;

// Referencias a elementos DOM
let displayOperation = null;
let displayResult = null;

/**
 * Inicializa las referencias del DOM
 */
export function initDisplay() {
    displayOperation = document.getElementById('displayOperation');
    displayResult = document.getElementById('displayResult');
}

/**
 * Actualiza el display de operación
 * @param {string} text - Texto de la operación
 */
export function updateOperation(text) {
    if (!displayOperation) return;

    // Truncar si es muy largo
    if (text.length > MAX_DISPLAY_LENGTH + 5) {
        text = '...' + text.slice(-(MAX_DISPLAY_LENGTH + 2));
    }

    displayOperation.textContent = text;
}

/**
 * Actualiza el display de resultado
 * @param {string|number} value - Valor a mostrar
 */
export function updateResult(value) {
    if (!displayResult) return;

    // Remover clase de error si existe
    displayResult.classList.remove('error');

    let text = String(value);

    // Verificar longitud y ajustar tamaño de fuente si necesario
    if (text.length > MAX_DISPLAY_LENGTH) {
        // Para números muy largos, podríamos reducir la fuente
        // Por ahora, truncamos con indicador
        text = text.slice(0, MAX_DISPLAY_LENGTH - 1) + '…';
    }

    displayResult.textContent = text;

    // Anunciar cambio para lectores de pantalla
    displayResult.setAttribute('aria-label', `Resultado: ${value}`);
}

/**
 * Muestra un mensaje de error en el display
 * @param {string} message - Mensaje de error
 */
export function showError(message) {
    if (!displayResult) return;

    displayResult.classList.add('error');
    displayResult.textContent = message;
    displayResult.setAttribute('aria-label', `Error: ${message}`);
}

/**
 * Limpia ambos displays
 */
export function clear() {
    updateOperation('');
    updateResult('0');
}

/**
 * Obtiene el valor actual del display de resultado
 * @returns {string} Valor actual
 */
export function getCurrentResult() {
    if (!displayResult) return '0';
    return displayResult.textContent;
}

/**
 * Obtiene la operación actual
 * @returns {string} Operación actual
 */
export function getCurrentOperation() {
    if (!displayOperation) return '';
    return displayOperation.textContent;
}
