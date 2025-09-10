class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.slider-btn.prev');
        this.nextBtn = document.querySelector('.slider-btn.next');
        this.currentSlide = 0;
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        this.showSlide(this.currentSlide);
        this.bindEvents();
        this.startAutoSlide();
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => this.stopAutoSlide());
            heroSection.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

class TestimonialSlider {
    constructor() {
        this.testimonials = [
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                author: "Jessya Inn",
                title: "CEO Photographer"
            },
            {
                text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                author: "John Smith",
                title: "Business Owner"
            },
            {
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
                author: "Sarah Johnson",
                title: "Marketing Director"
            }
        ];
        
        this.currentTestimonial = 0;
        this.testimonialText = document.querySelector('.testimonial-text');
        this.authorName = document.querySelector('.author-info h4');
        this.authorTitle = document.querySelector('.author-info p');
        this.prevBtn = document.querySelector('.testimonial-btn.prev');
        this.nextBtn = document.querySelector('.testimonial-btn.next');
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        this.showTestimonial(this.currentTestimonial);
        this.bindEvents();
        this.startAutoSlide();
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevTestimonial());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextTestimonial());
        }
        
        const testimonialSection = document.querySelector('.testimonial');
        if (testimonialSection) {
            testimonialSection.addEventListener('mouseenter', () => this.stopAutoSlide());
            testimonialSection.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    showTestimonial(index) {
        const testimonial = this.testimonials[index];
        
        if (this.testimonialText) {
            this.testimonialText.textContent = testimonial.text;
        }
        
        if (this.authorName) {
            this.authorName.textContent = testimonial.author;
        }
        
        if (this.authorTitle) {
            this.authorTitle.textContent = testimonial.title;
        }
    }
    
    nextTestimonial() {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
        this.showTestimonial(this.currentTestimonial);
        this.resetAutoSlide();
    }
    
    prevTestimonial() {
        this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
        this.showTestimonial(this.currentTestimonial);
        this.resetAutoSlide();
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextTestimonial();
        }, 6000);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        const navLinks = document.querySelectorAll('.nav a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const topBarHeight = document.querySelector('.top-bar').offsetHeight;
                    const offsetTop = targetSection.offsetTop - headerHeight - topBarHeight;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.observer = null;
        this.init();
    }
    
    init() {
        if (this.counters.length === 0) return;
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        this.counters.forEach(counter => {
            this.observer.observe(counter);
        });
    }
    
    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/,/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }
}

class MobileMenu {
    constructor() {
        this.menuToggle = null;
        this.nav = document.querySelector('.nav');
        this.init();
    }
    
    init() {
        this.createMenuToggle();
        this.bindEvents();
    }
    
    createMenuToggle() {
        if (window.innerWidth <= 768) {
            this.menuToggle = document.createElement('button');
            this.menuToggle.className = 'mobile-menu-toggle';
            this.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            this.menuToggle.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 24px;
                color: var(--primary-color);
                cursor: pointer;
                padding: 10px;
            `;
            
            const header = document.querySelector('.header .container');
            if (header) {
                header.appendChild(this.menuToggle);
            }
        }
    }
    
    bindEvents() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => {
                this.toggleMenu();
            });
        }
        
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });
    }
    
    toggleMenu() {
        if (this.nav) {
            this.nav.classList.toggle('mobile-open');
        }
    }
    
    closeMenu() {
        if (this.nav) {
            this.nav.classList.remove('mobile-open');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
    new TestimonialSlider();
    new SmoothScroll();
    new CounterAnimation();
    new MobileMenu();
    
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
            }
            
            .nav.mobile-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav ul {
                flex-direction: column;
                padding: 20px;
                gap: 0;
            }
            
            .nav li {
                border-bottom: 1px solid #eee;
            }
            
            .nav a {
                display: block;
                padding: 15px 0;
            }
            
            .mobile-menu-toggle {
                display: block !important;
            }
        }
        
        @media (min-width: 769px) {
            .mobile-menu-toggle {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(style);
});

window.addEventListener('resize', () => {
    const existingToggle = document.querySelector('.mobile-menu-toggle');
    if (window.innerWidth <= 768 && !existingToggle) {
        new MobileMenu();
    } else if (window.innerWidth > 768 && existingToggle) {
        existingToggle.remove();
    }
});
