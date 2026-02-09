document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    });

    // Simple Form Handler (for demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate sending
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
            }, 1500);
        });
    }

    // Add staggered animation to recipe cards if they exist
    const cards = document.querySelectorAll('article');
    if (cards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    entry.target.classList.remove('opacity-0'); // Ensure it becomes visible
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        cards.forEach((card, index) => {
            card.classList.add('opacity-0'); // Hide initially
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }
});
