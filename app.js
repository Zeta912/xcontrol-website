// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links li a');

// Function to handle the active state based on the current URL hash
function handleActiveState() {
    navLinks.forEach(link => {
        // Get the href attribute of each link
        const linkHref = link.getAttribute('href');

        // Check if the current URL hash matches the link's href
        if (linkHref === window.location.hash) {
            // Add 'active' class to the matching link
            link.classList.add('active');
        } else {
            // Remove 'active' class from other links
            link.classList.remove('active');
        }
    });
}

// Add event listener for hashchange to handle active state on URL change
window.addEventListener('hashchange', handleActiveState);

// Handle active state on initial page load
handleActiveState();