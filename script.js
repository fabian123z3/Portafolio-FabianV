// Navegación smooth scroll y efectos
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

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Mostrar/ocultar navbar al hacer scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    // Cambiar estilo del navbar al hacer scroll
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Typing effect para el nombre
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Iniciar efecto de escritura cuando la página carga
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Intersection Observer para animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observar elementos para animar
document.querySelectorAll('.skill-card, .cert-card, .project-card, .about-highlights .highlight').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remover notificación después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: #6366f1;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }
}

// CSS para partículas y animaciones
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes floatParticle {
        from {
            transform: translateY(100vh) translateX(0);
        }
        to {
            transform: translateY(-100vh) translateX(100px);
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(dynamicStyles);

// Inicializar partículas
createParticles();

// Animación de números en stats (si existen)
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const finalValue = parseInt(number.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(counter);
            }
            number.textContent = Math.floor(currentValue) + '+';
        }, stepTime);
    });
}

// Efecto parallax en el hero
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        heroVisual.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}

// Highlight active nav link
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

highlightActiveSection();

// Lazy loading para imágenes (si se agregan en el futuro)
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

// Observar todas las imágenes con data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Animación mejorada para los enlaces de certificados
document.querySelectorAll('.cert-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animación de entrada al cargar la página
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animar elementos del hero
    const heroElements = document.querySelectorAll('.hero-header > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Manejar errores de carga de recursos
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzMzNDE1NSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';
    }
}, true);

// ===== FUNCIONALIDAD DE PROYECTOS MEJORADA =====
function toggleProjectDetails(projectId) {
    const details = document.getElementById(`${projectId}-details`);
    const button = event.currentTarget;
    
    details.classList.toggle('active');
    
    // Cambiar texto e icono del botón
    const btnText = button.querySelector('span');
    const svg = button.querySelector('svg');
    
    if (details.classList.contains('active')) {
        btnText.textContent = 'Ocultar proyecto';
        svg.innerHTML = '<path d="M5 12h14M12 19l7-7-7-7"/>';
        svg.style.transform = 'rotate(90deg)';
        // Scroll suave hacia los detalles
        setTimeout(() => {
            details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        btnText.textContent = 'Ver proyecto';
        svg.innerHTML = '<path d="M5 12h14M12 5l7 7-7 7"/>';
        svg.style.transform = 'rotate(0deg)';
    }
}

// Función para cambiar imagen en la galería
function switchImage(projectId, imageSrc, index) {
    const mainImage = document.getElementById(`main-${projectId}`);
    
    // Efecto fade
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
    }, 150);
    
    // Actualizar thumbnails activos
    const thumbs = document.querySelectorAll(`#${projectId}-details .thumb-img`);
    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Precargar imágenes para mejor rendimiento
function preloadImages() {
    // Precargar logo
    const logo = new Image();
    logo.src = 'FUERZATOTAL.png';
    
    // Precargar screenshots
    for (let i = 1; i <= 8; i++) {
        const img = new Image();
        img.src = `${i}.jpeg`;
    }
}

// Animaciones y efectos
document.addEventListener('DOMContentLoaded', () => {
    // Precargar imágenes
    preloadImages();
    
    // Animación hover en logos tech
    const techLogos = document.querySelectorAll('.tech-logo');
    techLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto parallax suave en las tarjetas
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = `translate(${x * 3}px, ${y * 3}px)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'translate(0, 0)';
            }
        });
    });
});

// CSS adicional para animaciones
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    #main-fuerzatotal {
        transition: opacity 0.3s ease;
    }
    
    .project-icon {
        transition: transform 0.3s ease;
    }
    
    .tech-logo {
        transition: all 0.3s ease;
    }
    
    .btn-details svg {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(additionalStyles);

console.log('✨ Portafolio de Fabian Villablanca Vega cargado exitosamente!');
console.log('🚀 Desarrollado con pasión y mucho código');
console.log('💼 ¿Interesado en trabajar juntos? ¡Contáctame!');