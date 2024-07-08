const apiKey = 'fe0fca2794a06a4d548d69ddfe6517b4';  

document.getElementById('fetch-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        alert('Please enter a location.');
    }
});

function fetchWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <div class="weather-item"><strong>Location:</strong> ${data.name}, ${data.sys.country}</div>
        <div class="weather-item"><strong>Temperature:</strong> ${data.main.temp}°C</div>
        <div class="weather-item"><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div class="weather-item"><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div class="weather-item"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;
}

// Geolocation API to get the user's current location and fetch weather data
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayWeatherData(data))
            .catch(error => console.error('Error fetching the weather data:', error));
    });
}
