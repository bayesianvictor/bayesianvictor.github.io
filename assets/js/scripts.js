// Automatic year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Load the navbar from nav.html into the placeholder
function loadNavbar() {
    console.log("Attempting to fetch the navbar...");
    fetch('nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log("Navbar successfully fetched!");
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching the navbar:", error);
        });
}

window.onload = loadNavbar;
