const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

// Crear overlay dinámicamente
let overlay = document.createElement('div');
overlay.id = 'mobile-overlay';
overlay.className = 'fixed inset-0 bg-black/50 hidden z-10';
document.body.appendChild(overlay);

// Asegurar que el menú esté encima del overlay
mobileMenu.classList.add('z-20', 'fixed', 'top-0', 'left-0', 'h-screen', 'w-64', 'bg-[var(--dark-blue)]', 'pt-20', 'px-6', 'flex', 'flex-col', 'space-y-6', 'transition-transform', 'duration-300', 'transform', '-translate-x-full');

// Función para abrir menú
function openMenu() {
    mobileMenu.classList.remove('hidden', '-translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    menuOpenIcon.classList.add('hidden');
    menuCloseIcon.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Función para cerrar menú
function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300); // espera animación
    menuOpenIcon.classList.remove('hidden');
    menuCloseIcon.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Toggle menú al hacer clic en el botón
menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden') || mobileMenu.classList.contains('-translate-x-full')) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Cerrar menú al hacer clic en cualquier link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Cerrar menú al hacer clic fuera (overlay)
overlay.addEventListener('click', closeMenu);

// Animación hover en proyecto
const btn = document.getElementById("project-btn");
const img = document.getElementById("project-img");

btn.addEventListener("mouseenter", () => {
    img.classList.add("scale-105");
});

btn.addEventListener("mouseleave", () => {
    img.classList.remove("scale-105");
});

// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-on-scroll, .skill");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0;
                entry.target.classList.forEach(cls => {
                    if (cls.startsWith('delay-')) {
                        delay = parseInt(cls.replace('delay-', ''), 10);
                    }
                });

                setTimeout(() => {
                    entry.target.classList.add(
                        "transition",
                        "duration-700",
                        "ease-out",
                        "opacity-100",
                        "translate-y-0"
                    );
                    entry.target.classList.remove("opacity-0", "translate-y-4");
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});
