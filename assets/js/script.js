var apiKey = "92df3b5850644acb605bee9c3642c1d4";
var rootUrl = "https://openweathermap.org";
var searchInputEl = document.querySelector("#search-input")
var searchForm = document.querySelector("#search-form")
// var cityName = "New York";
// document.getElementById("search-input");
// var requestCityUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   cityName +
//   "&appid=" +
//   apiKey;


function getCurrentWeather() {
  fetch(requestCityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.coord.lat, data.coord.lon);
      console.log(data.coord.lat, data.coord.lon);
    });
}

// getCurrentWeather();

function getCoordinates(citySearch) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
  fetch(apiUrl).then(function (response) {
    return response.json();
  })
  .then(function(data){
      console.log(data);
  })
}

getCoordinates("Atlanta");

function searchSubmit(event){
    if(!searchInput.value){
        return;
    }
    event.preventDefault();
    var search = searchInputEl.value.trim;
    console.log("button works")
    getCoordinates(search);
    searchInputEl.value = "";

}

searchForm.addEventListener("submit", searchSubmit);

function fetchWeather(){

}