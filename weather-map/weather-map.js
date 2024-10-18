// Initialize the map
let map = L.map('map').setView([20.5937, 78.9629], 5); // Centered in India

// Add OpenStreetMap Base Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add Esri World Imagery (Satellite View)
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Add Layer Control for switching between maps
L.control.layers({
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    "Satellite View": satelliteLayer
}).addTo(map);

// OpenWeatherMap API Key
const apiKey = '6a875f477d89eb738cd5e2952816d680'; // Replace with your OpenWeather API key

// Function to fetch and display current weather for a specific city
async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

// Function to add marker to map for a city with weather data
async function addWeatherMarker(city) {
    const loadingBox = document.getElementById('loading');
    loadingBox.style.display = 'block'; // Show loading

    try {
        const weatherData = await getWeather(city);
        if (weatherData && weatherData.coord) {
            const { lat, lon } = weatherData.coord;

            // Clear previous markers
            map.eachLayer((layer) => {
                if (layer.options && layer.options.pane === "markerPane") {
                    map.removeLayer(layer);
                }
            });

            // Set map view to the new city's location
            map.setView([lat, lon], 10);

            // Add marker
            const marker = L.marker([lat, lon]).addTo(map);

            // Display weather details in popup
            marker.bindPopup(`
                <strong>${weatherData.name}</strong><br>
                Weather: ${weatherData.weather[0].description}<br>
                Temperature: ${weatherData.main.temp} °C<br>
                Humidity: ${weatherData.main.humidity}%<br>
                Wind Speed: ${weatherData.wind.speed} m/s
            `).openPopup();
        } else {
            alert('City not found. Please try another.');
        }
    } catch (error) {
        alert('Failed to retrieve weather data.');
    } finally {
        loadingBox.style.display = 'none'; // Hide loading
    }
}

// Handle form submission
document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    if (city) {
        addWeatherMarker(city);
    }
});
