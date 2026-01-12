/**
 * History Module
 * Calculadora Científica MVP
 * Persistencia del historial con localStorage
 */

// Configuración
const STORAGE_KEY = 'calculadora_historial';
const MAX_ENTRIES = 50;
const MAX_DISPLAY_ENTRIES = 10;

// Referencia al elemento del historial
let historyList = null;

/**
 * Inicializa el módulo de historial
 */
export function initHistory() {
    historyList = document.getElementById('historyList');
    renderHistory();
}

/**
 * Guarda una operación en el historial
 * @param {string} operation - La operación realizada (ej: "5 + 3")
 * @param {string|number} result - El resultado de la operación
 */
export function saveOperation(operation, result) {
    const history = getHistory();

    const entry = {
        operation: operation,
        result: String(result),
        timestamp: Date.now()
    };

    // Agregar al inicio del array
    history.unshift(entry);

    // Limitar a máximo de entradas (FIFO)
    if (history.length > MAX_ENTRIES) {
        history.pop();
    }

    // Guardar en localStorage
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
        console.warn('No se pudo guardar en localStorage:', e);
    }

    // Actualizar UI
    renderHistory();
}

/**
 * Obtiene el historial desde localStorage
 * @returns {Array} Array de operaciones
 */
export function getHistory() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Error al leer historial:', e);
    }
    return [];
}

/**
 * Limpia todo el historial
 */
export function clearHistory() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.warn('Error al limpiar historial:', e);
    }
    renderHistory();
}

/**
 * Renderiza el panel de historial en la UI
 */
export function renderHistory() {
    if (!historyList) return;

    const history = getHistory();

    // Si no hay historial, mostrar mensaje vacío
    if (history.length === 0) {
        historyList.innerHTML = '<p class="history-empty">Sin operaciones</p>';
        return;
    }

    // Limitar elementos mostrados
    const displayHistory = history.slice(0, MAX_DISPLAY_ENTRIES);

    // Construir HTML de items
    const html = displayHistory.map((entry, index) => `
    <div class="history-item" data-index="${index}" tabindex="0" role="button" aria-label="Seleccionar resultado ${entry.result}">
      <div class="history-item-operation">${escapeHtml(entry.operation)} =</div>
      <div class="history-item-result">${escapeHtml(entry.result)}</div>
    </div>
  `).join('');

    historyList.innerHTML = html;

    // Agregar event listeners a los items
    const items = historyList.querySelectorAll('.history-item');
    items.forEach(item => {
        item.addEventListener('click', handleItemClick);
        item.addEventListener('keydown', handleItemKeydown);
    });
}

/**
 * Maneja click en item del historial
 * @param {Event} event - Evento de click
 */
function handleItemClick(event) {
    const index = parseInt(event.currentTarget.dataset.index, 10);
    const history = getHistory();

    if (history[index]) {
        // Disparar evento personalizado con el resultado seleccionado
        const customEvent = new CustomEvent('historySelect', {
            detail: {
                operation: history[index].operation,
                result: history[index].result
            }
        });
        document.dispatchEvent(customEvent);
    }
}

/**
 * Maneja teclado en item del historial
 * @param {KeyboardEvent} event - Evento de teclado
 */
function handleItemKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleItemClick(event);
    }
}

/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
