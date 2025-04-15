// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Initialize Typed.js for typing effect
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        const typed = new Typed(typedElement, {
            strings: ['Frontend Developer', 'UI/UX Designer', 'Creative Problem Solver'],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            loop: true
        });
    }

    // Initialize ParticlesJS for background effect
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6C63FF"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6C63FF",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            // Toggle nav
            navLinks.classList.toggle('active');
            // Toggle burger animation
            burger.classList.toggle('active');
        });
    }

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animated Counter
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounter, 1);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Start counter animation when the about section comes into view
    const aboutSection = document.getElementById('about');
    
    if (aboutSection && counters.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(aboutSection);
    }

    // Animate skill progress bars
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');
    
    if (skillSection && progressBars.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(progressBar => {
                        const width = progressBar.getAttribute('data-width');
                        progressBar.style.width = width;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillSection);
    }

    // Form submission handler (prevent default and show success message)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create a success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <p>Your message has been sent successfully!</p>
            `;
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Reset form after 5 seconds (in a real application, you'd process the form data here)
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="subject" name="subject" placeholder="Subject" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn primary-btn submit-btn">
                        <span>Send Message</span> <i class="fas fa-paper-plane"></i>
                    </button>
                `;
            }, 5000);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add CSS class for elements that need to animate on hover or interaction
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            const buttonRect = this.getBoundingClientRect();
            const diameter = Math.max(buttonRect.width, buttonRect.height);
            const radius = diameter / 2;
            
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.clientX - buttonRect.left - radius}px`;
            ripple.style.top = `${e.clientY - buttonRect.top - radius}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}); 