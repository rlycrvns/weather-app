// Init Weath object
const weather = new Weather('Portland', 'OR', 'USA');
// Init UI
const ui = new UI();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
