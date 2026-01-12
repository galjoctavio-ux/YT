/**
 * Modal Module
 * Calculadora Científica MVP
 * Sistema de modales (confirmación de borrado)
 */

// Referencias DOM
let modalOverlay = null;
let modalTitle = null;
let modalMessage = null;
let modalConfirmBtn = null;
let modalCancelBtn = null;

// Callbacks actuales
let currentOnConfirm = null;
let currentOnCancel = null;

// Elemento que tenía foco antes de abrir modal
let previousActiveElement = null;

/**
 * Inicializa el módulo de modales
 */
export function initModal() {
    modalOverlay = document.getElementById('modalOverlay');
    modalTitle = document.getElementById('modalTitle');
    modalMessage = document.getElementById('modalMessage');
    modalConfirmBtn = document.getElementById('modalConfirm');
    modalCancelBtn = document.getElementById('modalCancel');

    // Configurar event listeners
    if (modalConfirmBtn) {
        modalConfirmBtn.addEventListener('click', handleConfirm);
    }

    if (modalCancelBtn) {
        modalCancelBtn.addEventListener('click', handleCancel);
    }

    // Cerrar al hacer click en overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                handleCancel();
            }
        });
    }

    // Cerrar con Escape
    document.addEventListener('keydown', handleKeyDown);
}

/**
 * Muestra un modal de confirmación genérico
 * @param {string} title - Título del modal
 * @param {string} message - Mensaje del modal
 * @param {Function} onConfirm - Callback al confirmar
 * @param {Function} onCancel - Callback al cancelar (opcional)
 */
export function showConfirmModal(title, message, onConfirm, onCancel = null) {
    if (!modalOverlay) return;

    // Guardar elemento con foco actual
    previousActiveElement = document.activeElement;

    // Actualizar contenido
    if (modalTitle) modalTitle.textContent = title;
    if (modalMessage) modalMessage.textContent = message;

    // Guardar callbacks
    currentOnConfirm = onConfirm;
    currentOnCancel = onCancel;

    // Mostrar modal
    modalOverlay.hidden = false;

    // Enfocar botón cancelar (opción segura)
    if (modalCancelBtn) {
        modalCancelBtn.focus();
    }

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

/**
 * Muestra el modal específico de borrar historial
 * @param {Function} onConfirm - Callback al confirmar borrado
 */
export function showDeleteHistoryModal(onConfirm) {
    showConfirmModal(
        'Confirmar borrado',
        '¿Eliminar todo el historial de cálculos? Esta acción no se puede deshacer.',
        onConfirm
    );
}

/**
 * Cierra el modal
 */
export function closeModal() {
    if (!modalOverlay) return;

    modalOverlay.hidden = true;

    // Restaurar scroll del body
    document.body.style.overflow = '';

    // Restaurar foco
    if (previousActiveElement) {
        previousActiveElement.focus();
        previousActiveElement = null;
    }

    // Limpiar callbacks
    currentOnConfirm = null;
    currentOnCancel = null;
}

/**
 * Maneja click en botón confirmar
 */
function handleConfirm() {
    if (currentOnConfirm) {
        currentOnConfirm();
    }
    closeModal();
}

/**
 * Maneja click en botón cancelar
 */
function handleCancel() {
    if (currentOnCancel) {
        currentOnCancel();
    }
    closeModal();
}

/**
 * Maneja teclas mientras el modal está abierto
 * @param {KeyboardEvent} event - Evento de teclado
 */
function handleKeyDown(event) {
    if (!modalOverlay || modalOverlay.hidden) return;

    // Cerrar con Escape
    if (event.key === 'Escape') {
        event.preventDefault();
        handleCancel();
        return;
    }

    // Atrapar foco dentro del modal
    if (event.key === 'Tab') {
        trapFocus(event);
    }
}

/**
 * Mantiene el foco atrapado dentro del modal
 * @param {KeyboardEvent} event - Evento de Tab
 */
function trapFocus(event) {
    const focusableElements = modalOverlay.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
        // Shift+Tab: si estamos en el primer elemento, ir al último
        if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    } else {
        // Tab: si estamos en el último elemento, ir al primero
        if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
}
