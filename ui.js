class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Umidade Relativa: ${weather.main.humidity}%`;
    this.feelslike.textContent = `Sensação Térmica: ${weather.main.feels_like} °C`;
    this.dewpoint.textContent = `Pressão Atmosférica: ${weather.main.pressure}hPa`;
    // metro por seg, para  km/h *3.6

    this.wind.textContent = `
    Vento: ${(weather.wind.speed * 3.6).toFixed(1)} Km/h`;
  }
}
