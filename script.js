// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Set up the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Array to hold the coordinates of pinned countries
const pins = [];

// Function to add a pin
function addPin(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    // Add the pin to the map
    L.marker([lat, lng]).addTo(map)
        .bindPopup(`Pinned Location: ${lat.toFixed(2)}, ${lng.toFixed(2)}`)
        .openPopup();

    // Store the coordinates
    pins.push({ lat, lng });
}

// Add a click event listener to the map
map.on('click', addPin);
