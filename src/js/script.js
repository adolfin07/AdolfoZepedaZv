const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

let overlay = document.createElement('div');
overlay.id = 'mobile-overlay';
overlay.className = 'fixed inset-0 bg-black/50 hidden opacity-0 z-10 transition-opacity duration-500';
document.body.appendChild(overlay);

// Estado inicial del menú
mobileMenu.classList.add(
    'z-20', 'fixed', 'top-0', 'left-0', 'h-screen', 'w-64',
    'bg-[var(--dark-blue)]', 'pt-20', 'px-6', 'flex', 'flex-col',
    'space-y-6', 'transform', 'transition-transform', 'duration-500',
    '-translate-x-full'
);

function openMenu() {
    // Mostrar menú SIN animación todavía
    mobileMenu.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Esperar un frame para que el navegador pinte el estado inicial
    requestAnimationFrame(() => {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.add('translate-x-0');

        overlay.classList.add('opacity-100');
    });

    menuOpenIcon.classList.add('hidden');
    menuCloseIcon.classList.remove('hidden');
}

function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-100');

    // Esperar la animación para ocultarlo 100%
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 500);

    menuOpenIcon.classList.remove('hidden');
    menuCloseIcon.classList.add('hidden');
}

menuBtn.addEventListener('click', () => {
    if (
        mobileMenu.classList.contains('hidden') ||
        mobileMenu.classList.contains('-translate-x-full')
    ) {
        openMenu();
    } else {
        closeMenu();
    }
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

overlay.addEventListener('click', closeMenu);

const cards = document.querySelectorAll('.zoom-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('scale-105');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('scale-105');
    });
});

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
