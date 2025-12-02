// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.querySelector('.header__nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        headerNav.classList.toggle('active');
    });
}

// Close mobile menu when clicking on link
const navLinks = document.querySelectorAll('.header__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    });
});

// Search functionality
const searchBtn = document.getElementById('search');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchInput = document.querySelector('.hero__input');
        if (searchInput.value.trim()) {
            alert(`Searching for: ${searchInput.value}`);
            // Add your actual search logic here
        }
    });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.footer__form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="text"]');
        if (emailInput.value.trim()) {
            alert(`Thank you for subscribing with: ${emailInput.value}`);
            emailInput.value = '';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.header__link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && navLink) {
            navLink.classList.add('active');
        } else if (navLink) {
            navLink.classList.remove('active');
        }
    });
});

// Property card hover effect enhancement
const propertyCards = document.querySelectorAll('.property__card');
propertyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Animation on scroll (simple version)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.work__card, .property__card, .testimonial__card').forEach(el => {
    observer.observe(el);
});
