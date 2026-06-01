// app.js

// Dynamic navigation highlighting on scroll
const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Active logic when page scrolls into range
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Console signature for recruiter debugging
console.log(
    "%cVarun V. | Backend Developer Portfolio", 
    "color: #3b82f6; font-size: 16px; font-weight: bold; font-family: sans-serif;"
);
console.log(
    "%cLooking for SDE-1 Backend Opportunities in Bangalore & Remote.", 
    "color: #06b6d4; font-size: 12px; font-family: sans-serif;"
);
