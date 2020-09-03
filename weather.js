class Weather {
  constructor(city, state, country) {
    this.apiKey = 'fce82652c4b710fb5e44244e803fb9c2';
    this.city = city;
    this.state = state;
    this.country = country;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&units=imperial&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change Location
  changeLocation(city, state, country) {
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
