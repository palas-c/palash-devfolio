// Sticky Navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation with a twist
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission with a creative animation
    form.style.transition = 'opacity 0.5s';
    form.style.opacity = '0';
    setTimeout(() => {
        alert('Message sent successfully!');
        form.reset();
        form.style.opacity = '1';
    }, 500);
});

// Smooth scroll for "Explore My Skills" button
document.querySelector('.btn-about').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth'
    });
});

// Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => observer.observe(card));