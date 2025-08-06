document.addEventListener('DOMContentLoaded', () => {
    // --- General Site Interactions ---

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach(el => observer.observe(el));

    // Active Navigation Link Highlight (only for protected pages)
    const navLinks = document.querySelectorAll('.nav a');
    if (navLinks.length > 0) { // Check if navigation exists (implies protected page)
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // Typewriter Effect for Hero Subtitle (only on index.html)
    const heroSubtitle = document.querySelector('.hero-content h2');
    const textToType = "Intermediate Software Developer | Full-Stack Engineer";
    let i = 0;
    let typingSpeed = 70;

    function typeWriter() {
        if (heroSubtitle) {
            if (i < textToType.length) {
                heroSubtitle.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }
    // Check if it's the index.html or root path
    const currentPageFilename = window.location.pathname.split('/').pop();
    if (heroSubtitle && (currentPageFilename === 'index.html' || currentPageFilename === '')) {
        heroSubtitle.textContent = ''; // Clear initial text
        typeWriter();
    }

    // Project Modal Functionality (only on projects.html)
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

    // Contact Form Validation (only on contact.html)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const message = contactForm.elements['message'].value.trim();

            if (name === '' || email === '' || message === '') {
                displayFormMessage('Please fill in all fields.', 'error', formMessage);
                return;
            }

            if (!isValidEmail(email)) {
                displayFormMessage('Please enter a valid email address.', 'error', formMessage);
                return;
            }

            // Simulate form submission (replace with actual backend submission)
            setTimeout(() => {
                displayFormMessage('Thank you for your message! I will get back to you soon.', 'success', formMessage);
                contactForm.reset(); // Clear the form
            }, 1000);
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // This is a helper function that was moved from auth.js, but contact form still needs it.
    // So, it's duplicated here or could be made global if preferred.
    function displayFormMessage(msg, type, element) {
        if (element) {
            element.textContent = msg;
            element.className = `form-message ${type}`;
            element.style.display = 'block';
            setTimeout(() => { element.style.display = 'none'; }, 5000);
        }
    }

    // --- Mobile Menu Toggle Logic ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav'); // Select the nav element, not just the ul

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            // Prevent scrolling when mobile menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when a link is clicked
        nav.querySelectorAll('a, button').forEach(item => {
            item.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
