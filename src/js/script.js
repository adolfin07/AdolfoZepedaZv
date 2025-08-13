const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    } else {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    }
});

const btn = document.getElementById("project-btn");
const img = document.getElementById("project-img");

btn.addEventListener("mouseenter", () => {
    img.classList.add("scale-105");
});

btn.addEventListener("mouseleave", () => {
    img.classList.remove("scale-105");
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-on-scroll");

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
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});


