document.addEventListener('DOMContentLoaded', () => {
    const tapButton = document.getElementById('tapButton');
    const pointsDisplay = document.getElementById('points');
    const levelDisplay = document.getElementById('level');
    const nextLevelPointsDisplay = document.getElementById('nextLevelPoints');
    const notificationArea = document.getElementById('notification');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const transferBtn = document.querySelector('.transfer-btn');

    const authOverlay = document.getElementById('authOverlay');
    const showLoginBtn = document.getElementById('showLogin');
    const showRegisterBtn = document.getElementById('showRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginSubmitBtn = document.getElementById('loginSubmit');
    const registerSubmitBtn = document.getElementById('registerSubmit');

    let points = 0;
    let level = 1;
    const pointsPerTap = 1;
    let pointsToNextLevel = 100;
    const levelThresholds = [100, 300, 700, 1500, 3000, 6000, 12000, 24000, 48000]; // Example thresholds

    // Function to update the UI
    function updateUI() {
        pointsDisplay.textContent = points;
        levelDisplay.textContent = level;
        nextLevelPointsDisplay.textContent = pointsToNextLevel;
    }

    // Function to show a notification
    function showNotification(message) {
        notificationArea.textContent = message;
        notificationArea.style.display = 'block';
        setTimeout(() => {
            notificationArea.style.display = 'none';
        }, 3000); // Hide after 3 seconds
    }

    // Event listener for the tap button
    tapButton.addEventListener('click', () => {
        points += pointsPerTap;
        updateUI();

        if (points >= pointsToNextLevel && level < 10) {
            level++;
            pointsToNextLevel = levelThresholds[level - 2] * 2 || pointsToNextLevel * 2; // Example logic
            updateUI();
            showNotification('Congratulations! You reached Level ' + level);
        } else if (level === 10 && points >= pointsToNextLevel) {
            showNotification('You are at the maximum level!');
        }
    });

    // Menu button toggle
    menuBtn.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Transfer button (needs back-end logic)
    transferBtn.addEventListener('click', () => {
        alert('Transfer functionality will be implemented with the back-end.');
        // In a real application, this would trigger a modal or form for transferring points.
    });

    // Registration/Login Overlay
    showLoginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    showRegisterBtn.addEventListener('click', () => {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // (In a real application, these would send data to the back-end)
    loginSubmitBtn.addEventListener('click', () => {
        alert('Login functionality will be implemented with the back-end.');
        // After successful login, you'd typically hide the overlay and potentially redirect.
    });

    registerSubmitBtn.addEventListener('click', () => {
        alert('Registration functionality (including email confirmation) will be implemented with the back-end.');
        // After successful registration, you'd typically hide the overlay and potentially redirect.
    });

    // Initially show the registration/login overlay
    authOverlay.style.display = 'flex';
});