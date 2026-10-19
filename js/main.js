/* =====================================================
   ÁRIDOS Y TRANSPORTES — JavaScript mínimo
   Solo: menú móvil, header scroll y año dinámico.
   Sin lógica de negocio. 100% informativo.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Menú móvil ---------- */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Cerrar menú al hacer clic en un enlace
        navMenu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ---------- Sombra del header al hacer scroll ---------- */
    const header = document.querySelector('.header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ---------- Año dinámico en el footer ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});
