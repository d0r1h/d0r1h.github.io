// ===== Animated Counter for Stats =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// ===== Intersection Observer for Stats Animation =====
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Button Click Handlers =====
const exploreBtn = document.getElementById('exploreBtn');
const learnBtn = document.getElementById('learnBtn');
const contactBtn = document.getElementById('contactBtn');

if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

if (learnBtn) {
    learnBtn.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback if about section doesn't exist
            alert('Learn more about our AI solutions! Contact us for a consultation.');
        }
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback contact action
            alert('Ready to get started? Email us at: contact@stellarai.com');
        }
    });
}

// ===== Parallax Effect for Hero Visual =====
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        heroVisual.style.transform = `translateY(calc(-50% + ${rate}px))`;
    });
}

// ===== Service Cards Stagger Animation =====
const serviceCards = document.querySelectorAll('.service-card');
const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            cardsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardsObserver.observe(card);
});

// ===== Add Glow Effect on Mouse Move =====
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = hero.getBoundingClientRect();
        
        const x = ((clientX - left) / width) * 100;
        const y = ((clientY - top) / height) * 100;
        
        hero.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 245, 255, 0.05) 0%, transparent 50%)`;
    });
}

// ===== Navbar Background on Scroll =====
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ===== Add Cursor Trail Effect (Optional Enhancement) =====
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
});

// ===== Console Welcome Message =====
console.log('%c🚀 Welcome to Stellar AI Consultancy', 'font-size: 20px; font-weight: bold; color: #00f5ff;');
console.log('%cNavigating the future of intelligence', 'font-size: 14px; color: #7b2ff7;');
console.log('%cInterested in joining our team? Email: careers@stellarai.com', 'font-size: 12px; color: #fff;');
