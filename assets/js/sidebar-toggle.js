// Select the sidebar element and toggle button
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Sidebar';

// Append the button to the body or any container
document.body.appendChild(toggleButton);

// Create an overlay for mobile view
const overlay = document.createElement('div');
overlay.classList.add('overlay');
overlay.style.display = 'none';
document.body.appendChild(overlay);

// Function to toggle the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
}

// Event listener for button click
toggleButton.addEventListener('click', toggleSidebar);

// Event listener for overlay click to close the sidebar
overlay.addEventListener('click', toggleSidebar);

// Event listener for window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    }
});
