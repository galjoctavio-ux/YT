/**
 * TIANGUIS CULTURAL - Main JavaScript
 * Scroll effects, navigation, and page transitions
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initPageTransitions();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded',
                nav.classList.contains('is-open'));
        });

        // Close nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                nav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Set active nav link
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.getAttribute('href') === currentPath ||
            (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html') ||
            currentPath.includes(link.getAttribute('href').replace('.html', ''))) {
            link.classList.add('nav__link--active');
        }
    });
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    if (!revealElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Page Transitions
 */
function initPageTransitions() {
    const transitionEl = document.querySelector('.page-transition');
    const links = document.querySelectorAll('a[href$=".html"]');

    if (!transitionEl) return;

    links.forEach(link => {
        // Skip external links
        if (link.hostname !== window.location.hostname) return;

        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if same page
            if (href === window.location.pathname) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            transitionEl.classList.add('is-active');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Remove transition on page load
    window.addEventListener('pageshow', () => {
        transitionEl.classList.remove('is-active');
    });
}

/**
 * Parallax Effect (optional - add .parallax class)
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    if (!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/**
 * Smooth Scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
