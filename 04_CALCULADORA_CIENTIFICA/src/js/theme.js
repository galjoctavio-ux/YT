/**
 * Theme Module
 * Calculadora Científica MVP
 * Toggle modo claro/oscuro
 */

// Constantes
const STORAGE_KEY = 'calculadora_tema';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

// Referencias
let themeToggleBtn = null;

/**
 * Inicializa el módulo de tema
 */
export function initTheme() {
    themeToggleBtn = document.getElementById('themeToggle');

    // Detectar tema inicial
    const savedTheme = getSavedTheme();
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Prioridad: guardado > sistema
    const initialTheme = savedTheme || (systemPrefersDark ? THEME_DARK : THEME_LIGHT);

    // Aplicar tema inicial
    applyTheme(initialTheme);

    // Configurar event listener para el botón
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Escuchar cambios en preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Solo aplicar si no hay tema guardado
        if (!getSavedTheme()) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
    });
}

/**
 * Alterna entre tema claro y oscuro
 */
export function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

    applyTheme(newTheme);
    saveTheme(newTheme);
}

/**
 * Aplica un tema específico
 * @param {string} theme - Tema a aplicar ('light' o 'dark')
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Actualizar meta theme-color para móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.content = theme === THEME_DARK ? '#0F172A' : '#F8FAFC';
    }
}

/**
 * Obtiene el tema actual
 * @returns {string} Tema actual
 */
export function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
}

/**
 * Guarda el tema en localStorage
 * @param {string} theme - Tema a guardar
 */
function saveTheme(theme) {
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
        console.warn('No se pudo guardar preferencia de tema:', e);
    }
}

/**
 * Obtiene el tema guardado en localStorage
 * @returns {string|null} Tema guardado o null
 */
function getSavedTheme() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        return null;
    }
}
