let appId = "ade413bc0426ddfa59413a49e3349f7e";
let units = "metric";
let button = document.getElementById("searchBtn");


function searchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        serverResult(result);
    }).catch();
}


button.addEventListener("click", () => {
    let city = document.getElementById("searchInput").value;
    if (city) {
        searchWeather(city)
    }
});


function serverResult(data) {
    console.log(data);
    switch (data.weather[0].main) {
        case "Clear":
            document.body.style.backgroundImage = "url('sunny.jpg')"

            break;
        case "Clouds":
            document.body.style.backgroundImage = "url('cloudy.jpg')"


            break;
        case "Rain":
        case "Drizzle":
        case "Mist":
            document.body.style.backgroundImage = "url('rain1.jpg')"


            break;
        case "Thunderstorm":
            document.body.style.backgroundImage = "url('thunderstorm.jpg')"


            break;
        case "Snow":
            document.body.style.backgroundImage = "url('snow.jpg')"



            break;
        case "Haze":
            document.body.style.backgroundImage = "url('haze.jpg')"


            break;

        default:
            document.body.style.backgroundImage = "url('defaultpro.jpg')"

            break;
    }

    let weatherContainer = document.getElementById("weatherContainer");
    let cityHeader = document.getElementById("cityHeader");
    let temperature = document.getElementById("temperature");
    let temperatureMin = document.getElementById("temperatureMin");
    let temperatureMax = document.getElementById("temperatureMax");
    let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
    let iconImg = document.getElementById("iconImg");
    let windSpeed = document.getElementById("windSpeed");
    let humidity = document.getElementById("humidity");

    weatherContainer.style.visibility = "visible";

    cityHeader.innerHTML = data.name;
    weatherDescriptionHeader.innerHTML = data.weather[0].description;

    temperature.innerHTML = Math.floor(data.main.temp) + "&#176";
    temperatureMin.innerHTML = "min " + Math.floor(data.main.temp_min) + "&#176";
    temperatureMax.innerHTML = "max " + Math.floor(data.main.temp_max) + "&#176";

    windSpeed.innerHTML = "wind speed  " + data.wind.speed + "m/s";
    humidity.innerHTML = "humidity  " +
        data.main.humidity + "%";



    iconImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



};