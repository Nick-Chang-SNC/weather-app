class Weather {
  constructor(city, country) {
    this.apiKey = "e9b7bbbc31a2114472f2cd44d14968ed";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=imperial`
    );

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
