const searchButton = document.querySelector('.search-button');
let inputName = document.querySelector('.city-name');


const apiKey = "b57187c883c53425843dea1139bb6fe5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `q=${cityName}` + `&appid=${apiKey}` + '&units=metric');

  if (response.status == 404) {
    document.querySelector('.error-message').style.display = 'initial';
  } else {
    let data = await response.json();
 
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = cityName;
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.weather-image').src = 'images/' + data.weather[0].main + '.png';
  
    document.querySelector('.weather-open').style.display = "initial";
    document.querySelector('.error-message').style.display = 'none';
  }

}
searchButton.addEventListener('click', () => {
  let cityName = inputName.value;
  checkWeather(cityName);

 
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let cityName = inputName.value;
    checkWeather(cityName);
    document.querySelector('.weather-open').style.display = "initial";
  }
})
