async function getWeather() {
  const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
  const city = document.getElementById('cityInput').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Description: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
