// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Animate skill progress bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight - 100) {
            const width = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// CV Download function
function downloadCV() {
    alert('Your CV file will be downloaded.');
}

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});
