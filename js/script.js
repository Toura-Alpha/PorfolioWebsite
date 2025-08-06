document.addEventListener('DOMContentLoaded', () => {
    // ----------------- Intersection Observer for Scroll Animations -----------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once visible to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }); // Trigger when 20% visible, offset bottom by 50px

    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach(el => observer.observe(el));

    // ----------------- Active Navigation Link Highlight -----------------
    const navLinks = document.querySelectorAll('.nav a');
    // Get the current page filename (e.g., "index.html", "projects.html")
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // ----------------- Typewriter Effect for Hero Subtitle -----------------
    const heroSubtitle = document.querySelector('.hero-content h2');
    const textToType = "Intermediate Software Developer | Full-Stack Engineer";
    let i = 0;
    let typingSpeed = 70; // milliseconds per character

    function typeWriter() {
        if (heroSubtitle) {
            if (i < textToType.length) {
                heroSubtitle.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }
    // Start typewriter only on the home page
    if (heroSubtitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        heroSubtitle.textContent = ''; // Clear initial text
        typeWriter();
    }

    // ----------------- Project Modal Functionality -----------------
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-button');
    const modalImage = document.getElementById('modalProjectImage');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalDescription = document.getElementById('modalProjectDescription');
    const modalTechTags = document.getElementById('modalProjectTechTags');
    const modalLiveDemo = document.getElementById('modalLiveDemo');
    const modalGitHub = document.getElementById('modalGitHub');

    if (modal) { // Ensure modal elements exist on the page (only on projects.html)
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                const title = card.querySelector('h4').textContent;
                const description = card.querySelector('.project-content p').textContent;
                const techTags = card.querySelector('.tech-tags').innerHTML;
                const liveDemoLink = card.querySelector('.project-links a:nth-child(1)') ? card.querySelector('.project-links a:nth-child(1)').href : '#';
                const githubLink = card.querySelector('.project-links a:nth-child(2)') ? card.querySelector('.project-links a:nth-child(2)').href : '#';

                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalTechTags.innerHTML = techTags;
                modalLiveDemo.href = liveDemoLink;
                modalGitHub.href = githubLink;

                modal.style.display = 'flex'; // Show the modal
                document.body.style.overflow = 'hidden'; // Prevent scrolling background
            });
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Hide the modal
            document.body.style.overflow = ''; // Restore scrolling
        });

        // Close modal when clicking outside the content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // ----------------- Contact Form Validation -----------------
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const message = contactForm.elements['message'].value.trim();

            if (name === '' || email === '' || message === '') {
                displayFormMessage('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                displayFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual backend submission)
            setTimeout(() => {
                displayFormMessage('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset(); // Clear the form
            }, 1000);
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function displayFormMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = `form-message ${type}`; // Add type class (success/error)
        formMessage.style.display = 'block'; // Show the message

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});
