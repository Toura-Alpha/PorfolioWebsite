document.addEventListener('DOMContentLoaded', () => {
    // --- Constants for Page Routing ---
    const protectedPages = ['index.html', 'projects.html', 'profile.html', 'contact.html'];
    const authPages = ['login.html', 'signup.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Helper Functions ---
    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    function redirectTo(page) {
        window.location.href = page;
    }

    function displayAuthMessage(msg, type, element) {
        if (element) { // Ensure the element exists on the current page
            element.textContent = msg;
            element.className = `auth-message ${type}`;
            element.style.display = 'block';
            setTimeout(() => { element.style.display = 'none'; }, 5000);
        }
    }

    // --- Authentication & Redirection Logic ---
    // This runs on every page load to check authentication status
    if (protectedPages.includes(currentPage) && !isLoggedIn()) {
        redirectTo('landing.html'); // Redirect to landing if not logged in
    } else if ((authPages.includes(currentPage) || currentPage === 'landing.html') && isLoggedIn()) {
        redirectTo('index.html'); // Redirect to index if already logged in
    }

    // --- Logout Functionality ---
    // This button exists on protected pages
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        if (isLoggedIn()) {
            logoutButton.style.display = 'block'; // Show logout button if logged in
        } else {
            logoutButton.style.display = 'none'; // Hide if not logged in
        }

        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser'); // Clear current user info
            redirectTo('landing.html');
        });
    }

    // --- Login Form Handling (on login.html) ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const email = loginForm.elements['email'].value;
            const password = loginForm.elements['password'].value;
            const authMessage = document.getElementById('authMessage');

            // IMPORTANT: For production, NEVER store passwords directly in localStorage.
            // This is for demonstration purposes ONLY.
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify({ email: user.email, username: user.username }));
                displayAuthMessage('Login successful! Redirecting...', 'success', authMessage);
                setTimeout(() => redirectTo('index.html'), 1500);
            } else {
                displayAuthMessage('Invalid email or password.', 'error', authMessage);
            }
        });
    }

    // --- Signup Form Handling (on signup.html) ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = signupForm.elements['username'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value; // IMPORTANT: Insecure for production!
            const authMessage = document.getElementById('authMessage');

            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                displayAuthMessage('Email already registered. Please login or use a different email.', 'error', authMessage);
                return;
            }

            // Simple validation for password length (optional, add more as needed)
            if (password.length < 6) {
                displayAuthMessage('Password must be at least 6 characters long.', 'error', authMessage);
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            displayAuthMessage('Signup successful! Please login.', 'success', authMessage);
            setTimeout(() => redirectTo('login.html'), 1500);
        });
    }
});
