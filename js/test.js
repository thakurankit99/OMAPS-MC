// Toggle Dropdown Menu
function toggleMenu() {
    document.querySelector('.menu-dropdown').classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    let menu = document.querySelector('.menu-dropdown');
    let button = document.querySelector('.menu-button');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Toggle Mobile Navbar Expansion
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.expand-arrow').classList.toggle('active');
}

function copyUrlToClipboard() {
    navigator.clipboard.writeText(window.location.href)
    .then(() => {
        // Provide visual feedback (color change)
        const button = document.querySelector('.share-button-overlay');
        button.style.backgroundColor = '#0c66d4'; // Temporary darker blue
        setTimeout(() => {
            button.style.backgroundColor = '#1685ec'; // Reset to original color
        }, 800);
    })
    .catch(err => {
        console.error('Error copying URL:', err);
    });
}