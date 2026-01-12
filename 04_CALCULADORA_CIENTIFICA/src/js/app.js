/**
 * App Principal
 * Calculadora Científica MVP
 * Punto de entrada que integra todos los módulos
 */

// Importar módulos
import { calculate, isError, formatNumber } from './calculator.js';
import { initDisplay, updateOperation, updateResult, showError, clear } from './display.js';
import { initHistory, saveOperation, clearHistory, renderHistory } from './history.js';
import { initKeyboard } from './keyboard.js';
import { initTheme } from './theme.js';
import { initModal, showDeleteHistoryModal } from './modal.js';

// Estado de la calculadora
const state = {
    currentNumber: '0',
    previousNumber: null,
    operator: null,
    shouldResetDisplay: false,
    lastOperation: null,  // Para repetir operación con =
    lastOperand: null
};

/**
 * Inicializa la aplicación
 */
function init() {
    // Inicializar módulos
    initDisplay();
    initHistory();
    initTheme();
    initModal();
    initKeyboard(handleAction);

    // Configurar event listeners del teclado visual
    setupKeypadListeners();

    // Configurar botón de limpiar historial
    setupHistoryControls();

    // Configurar toggle de historial (móvil)
    setupHistoryToggle();

    // Escuchar selección de historial
    document.addEventListener('historySelect', handleHistorySelect);

    // Mostrar estado inicial
    updateDisplay();

    console.log('Calculadora Científica MVP inicializada');
}

/**
 * Configura los event listeners del teclado visual
 */
function setupKeypadListeners() {
    const keypad = document.querySelector('.keypad');
    if (!keypad) return;

    keypad.addEventListener('click', (e) => {
        const button = e.target.closest('.btn');
        if (!button) return;

        const action = button.dataset.action;
        const value = button.dataset.value;

        handleAction({ action, value });
    });
}

/**
 * Configura controles del panel de historial
 */
function setupHistoryControls() {
    const clearHistoryBtn = document.getElementById('clearHistory');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            showDeleteHistoryModal(() => {
                clearHistory();
                showAlert('Historial eliminado', 'info');
            });
        });
    }
}

/**
 * Configura toggle de historial para móvil
 */
function setupHistoryToggle() {
    const historyToggle = document.getElementById('historyToggle');
    const historyPanel = document.querySelector('.history-panel');

    if (historyToggle && historyPanel) {
        historyToggle.addEventListener('click', () => {
            const isActive = historyPanel.classList.toggle('active');
            historyToggle.setAttribute('aria-expanded', isActive);

            if (isActive) {
                historyPanel.classList.add('entering');
                setTimeout(() => {
                    historyPanel.classList.remove('entering');
                }, 300);
            }
        });
    }
}

/**
 * Maneja las acciones del teclado (visual o físico)
 * @param {Object} action - Objeto con action y value
 */
function handleAction({ action, value }) {
    switch (action) {
        case 'number':
            inputNumber(value);
            break;
        case 'decimal':
            inputDecimal();
            break;
        case 'operator':
            inputOperator(value);
            break;
        case 'equals':
            executeCalculation();
            break;
        case 'clear':
            clearAll();
            break;
        case 'backspace':
            backspace();
            break;
    }

    updateDisplay();
}

/**
 * Ingresa un número
 * @param {string} digit - Dígito a agregar
 */
function inputNumber(digit) {
    if (state.shouldResetDisplay) {
        state.currentNumber = digit;
        state.shouldResetDisplay = false;
    } else if (state.currentNumber === '0') {
        state.currentNumber = digit;
    } else if (state.currentNumber.length < 20) {
        state.currentNumber += digit;
    }
}

/**
 * Ingresa punto decimal
 */
function inputDecimal() {
    if (state.shouldResetDisplay) {
        state.currentNumber = '0.';
        state.shouldResetDisplay = false;
        return;
    }

    // Solo agregar punto si no existe ya
    if (!state.currentNumber.includes('.')) {
        state.currentNumber += '.';
    }
}

/**
 * Ingresa un operador
 * @param {string} op - Operador
 */
function inputOperator(op) {
    // Si hay operación pendiente, ejecutarla primero
    if (state.operator && !state.shouldResetDisplay) {
        executeCalculation(false);
    }

    state.previousNumber = state.currentNumber;
    state.operator = op;
    state.shouldResetDisplay = true;

    // Limpiar operación repetida
    state.lastOperation = null;
    state.lastOperand = null;

    // Remover selección de otros operadores
    document.querySelectorAll('.btn-accent').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Marcar operador actual como seleccionado
    const opBtn = document.querySelector(`[data-action="operator"][data-value="${op}"]`);
    if (opBtn) {
        opBtn.classList.add('selected');
    }
}

/**
 * Ejecuta el cálculo
 * @param {boolean} saveToHistory - Si se debe guardar en historial
 */
function executeCalculation(saveToHistory = true) {
    let num1, num2, operator;

    // Si no hay operador pero hay última operación (para repetir =)
    if (!state.operator && state.lastOperation && state.lastOperand !== null) {
        num1 = parseFloat(state.currentNumber);
        num2 = state.lastOperand;
        operator = state.lastOperation;
    } else if (state.operator && state.previousNumber !== null) {
        num1 = parseFloat(state.previousNumber);
        num2 = parseFloat(state.currentNumber);
        operator = state.operator;

        // Guardar para repetir con =
        state.lastOperation = operator;
        state.lastOperand = num2;
    } else {
        return; // No hay operación que ejecutar
    }

    const result = calculate(num1, operator, num2);

    // Desmarcar operadores
    document.querySelectorAll('.btn-accent.selected').forEach(btn => {
        btn.classList.remove('selected');
    });

    if (isError(result)) {
        showError(result.message);
        state.currentNumber = '0';
        state.previousNumber = null;
        state.operator = null;
        state.shouldResetDisplay = true;
        return;
    }

    // Construir operación para historial
    const operationStr = `${formatNumber(num1)} ${operator} ${formatNumber(num2)}`;
    const resultStr = formatNumber(result);

    // Guardar en historial
    if (saveToHistory) {
        saveOperation(operationStr, resultStr);
    }

    // Actualizar estado
    state.currentNumber = resultStr;
    state.previousNumber = null;
    state.operator = null;
    state.shouldResetDisplay = true;
}

/**
 * Limpia todo
 */
function clearAll() {
    state.currentNumber = '0';
    state.previousNumber = null;
    state.operator = null;
    state.shouldResetDisplay = false;
    state.lastOperation = null;
    state.lastOperand = null;

    // Desmarcar operadores
    document.querySelectorAll('.btn-accent.selected').forEach(btn => {
        btn.classList.remove('selected');
    });

    clear();
}

/**
 * Borra el último dígito
 */
function backspace() {
    if (state.shouldResetDisplay) {
        return; // No hacer nada si estamos esperando nuevo número
    }

    if (state.currentNumber.length > 1) {
        state.currentNumber = state.currentNumber.slice(0, -1);
    } else {
        state.currentNumber = '0';
    }
}

/**
 * Actualiza el display
 */
function updateDisplay() {
    // Construir string de operación
    let operationStr = '';

    if (state.previousNumber !== null && state.operator) {
        operationStr = `${formatNumber(parseFloat(state.previousNumber))} ${state.operator}`;
    }

    updateOperation(operationStr);
    updateResult(state.currentNumber);
}

/**
 * Maneja selección desde historial
 * @param {CustomEvent} event - Evento con detalle de la operación
 */
function handleHistorySelect(event) {
    const { result } = event.detail;

    // Cargar resultado como número actual
    state.currentNumber = result;
    state.shouldResetDisplay = true;

    updateDisplay();

    // Cerrar panel en móvil
    const historyPanel = document.querySelector('.history-panel');
    if (historyPanel) {
        historyPanel.classList.remove('active');
    }
}

/**
 * Muestra una alerta temporal
 * @param {string} message - Mensaje
 * @param {string} type - Tipo (error, success, info)
 */
function showAlert(message, type = 'info') {
    const container = document.getElementById('alertContainer');
    if (!container) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.setAttribute('role', 'alert');

    container.appendChild(alert);

    // Auto-remover después de 3 segundos
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(20px)';
        setTimeout(() => {
            alert.remove();
        }, 200);
    }, 3000);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
