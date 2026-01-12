/**
 * Calculator Module
 * Calculadora Científica MVP
 * Lógica core de cálculos matemáticos
 */

// Configuración
const MAX_DECIMALS = 8;

/**
 * Suma dos números
 * @param {number} a - Primer operando
 * @param {number} b - Segundo operando
 * @returns {number} Resultado de la suma
 */
export function add(a, b) {
    return roundResult(a + b);
}

/**
 * Resta dos números
 * @param {number} a - Primer operando
 * @param {number} b - Segundo operando
 * @returns {number} Resultado de la resta
 */
export function subtract(a, b) {
    return roundResult(a - b);
}

/**
 * Multiplica dos números
 * @param {number} a - Primer operando
 * @param {number} b - Segundo operando
 * @returns {number} Resultado de la multiplicación
 */
export function multiply(a, b) {
    return roundResult(a * b);
}

/**
 * Divide dos números
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number|object} Resultado o error si división por cero
 */
export function divide(a, b) {
    if (b === 0) {
        return { error: 'ERR-01', message: 'No se puede dividir entre cero' };
    }
    return roundResult(a / b);
}

/**
 * Ejecuta un cálculo con el operador especificado
 * @param {number} num1 - Primer operando
 * @param {string} operator - Operador (+, -, ×, ÷)
 * @param {number} num2 - Segundo operando
 * @returns {number|object} Resultado o error
 */
export function calculate(num1, operator, num2) {
    // Validar que los operandos sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        return { error: 'ERR-03', message: 'Operación incompleta' };
    }

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
        case '−': // Unicode minus
            return subtract(num1, num2);
        case '×':
        case '*':
        case 'x':
        case 'X':
            return multiply(num1, num2);
        case '÷':
        case '/':
            return divide(num1, num2);
        default:
            return { error: 'ERR-03', message: 'Operador no válido' };
    }
}

/**
 * Redondea el resultado a un máximo de decimales
 * @param {number} value - Valor a redondear
 * @returns {number} Valor redondeado
 */
function roundResult(value) {
    // Verificar si el resultado es demasiado grande
    if (!isFinite(value)) {
        return { error: 'ERR-02', message: 'Número demasiado grande' };
    }

    // Redondear a máximo de decimales configurado
    const factor = Math.pow(10, MAX_DECIMALS);
    return Math.round(value * factor) / factor;
}

/**
 * Verifica si un valor es un error
 * @param {any} value - Valor a verificar
 * @returns {boolean} True si es un error
 */
export function isError(value) {
    return value !== null && typeof value === 'object' && 'error' in value;
}

/**
 * Formatea un número para mostrar en display
 * @param {number} value - Número a formatear
 * @returns {string} Número formateado
 */
export function formatNumber(value) {
    if (typeof value !== 'number') {
        return String(value);
    }

    // Si es un entero, mostrarlo sin decimales
    if (Number.isInteger(value)) {
        return String(value);
    }

    // Convertir a string y limitar decimales
    let str = value.toFixed(MAX_DECIMALS);

    // Remover ceros finales innecesarios
    str = str.replace(/\.?0+$/, '');

    return str;
}
