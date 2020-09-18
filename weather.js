class Weather {
  constructor(city, state) {
    this.apiKey = "706a03f142ba1c09c641ca8aa0053b9b";
    this.city = city;
    this.state = state;
    this.units = "metric";
    this.lang = "pt_br";
  }

  //   Fetch weather from API

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=${this.units}&lang=${this.lang}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //   change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
