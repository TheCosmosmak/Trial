document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE NAVIGATION ---
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileNavToggle && mobileMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
            mobileNavToggle.classList.toggle('is-open');
        });
    }


    // --- ANIMATIONS ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.timeline-grid .panel, .manga-grid .panel');
    animatedElements.forEach(el => observer.observe(el));

});

