const navbar = document.querySelector('.header .navbar');
const contactInfo = document.querySelector('.contact-info');
const scrollTopBtn = document.getElementById('scroll-top');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    contactInfo.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
    navbar.classList.remove('active');
};

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
};

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');

    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Fade-in on scroll via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
