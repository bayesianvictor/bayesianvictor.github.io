// Automatic year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Load the navbar from nav.html into the placeholder
function loadNavbar() {
    document.getElementById('navbar-placeholder').innerHTML = "<nav><p>Navbar Loaded!</p></nav>";
}
window.onload = loadNavbar;
