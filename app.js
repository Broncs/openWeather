// init storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();

// initialize wather object

const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// get weather on dom load
document.addEventListener("DOMContentLoaded", getLocation);

// cahnge location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  //   change location
  weather.changeLocation(city, state);

  // set location in LS
  storage.setLocationData(city, state);
  //   get and display weather
  getWeather();

  // close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

// get geo location
function getLocation() {
  if (navigator.geolocation) {
    const location = navigator.geolocation.getCurrentPosition(
      showPosition,
      showError
    );
  } else {
    console.log("err");
  }
}

// showing position by geolocation
function showPosition(position) {
  weather
    .getWeatherByLocation(position.coords.latitude, position.coords.longitude)
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
// handler error if not allow by user
function showError(error) {
  if (error) {
    weather
      .getWeatherByLocation("-23.5489", "-46.6388")
      .then((results) => {
        ui.paint(results);
      })
      .catch((err) => console.log(err));
  }
}
