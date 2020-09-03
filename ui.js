class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.round(weather.main.temp)}℉`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelslike.textContent = `Feels Like: ${Math.round(
      weather.main.feels_like
    )}℉`;
    this.pressure.textContent = `Atmospheric Pressure: ${weather.main.pressure}hPa`;
    this.wind.textContent = `Windspeed: ${Math.round(weather.wind.speed)}mph`;
  }
}
