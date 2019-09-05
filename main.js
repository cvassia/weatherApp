let appId = "ade413bc0426ddfa59413a49e3349f7e";
let units = "metric";
let button = document.getElementById("searchBtn");

function searchWeather(city) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    fetch(
            `${proxy}http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appId}&units=${units}`
        )
        .then(result => {
            return result.json();
        })
        .then(result => {
            serverResult(result);
        })
        .catch();
}

button.addEventListener("click", () => {
    let city = document.getElementById("searchInput").value;
    if (city) {
        searchWeather(city);
    }
});

document.addEventListener("keyup", e => {
    if (e.which === 13) {
        let city = document.getElementById("searchInput").value;
        if (city) {
            searchWeather(city);
        }
    }
});

function serverResult(data) {
    console.log(data);
    switch (data.list[0].weather[0].main) {
        case "Clear":
            document.body.style.backgroundImage = "url('sunny.jpg')";

            break;
        case "Clouds":
            document.body.style.backgroundImage = "url('cloudy.jpg')";

            break;
        case "Rain":
        case "Drizzle":
        case "Mist":
            document.body.style.backgroundImage = "url('rain1.jpg')";

            break;
        case "Thunderstorm":
            document.body.style.backgroundImage = "url('thunderstorm.jpg')";

            break;
        case "Snow":
            document.body.style.backgroundImage = "url('snow.jpg')";

            break;
        case "Haze":
            document.body.style.backgroundImage = "url('haze.jpg')";

            break;

        default:
            document.body.style.backgroundImage = "url('defaultpro.jpg')";

            break;
    }

    let weatherContainer = document.getElementById("weatherContainer");
    let cityHeader = document.getElementById("cityHeader");
    let temperature = document.getElementById("temperature");
    let temperatureMin = document.getElementById("temperatureMin");
    let temperatureMax = document.getElementById("temperatureMax");
    let weatherDescriptionHeader = document.getElementById(
        "weatherDescriptionHeader"
    );
    let iconImg = document.getElementById("iconImg");
    let windSpeed = document.getElementById("windSpeed");
    let humidity = document.getElementById("humidity");

    let sunrise = document.getElementById("sunrise");
    let sunset = document.getElementById("sunset");

    let day1 = document.getElementById("day1");
    let day2 = document.getElementById("day2");
    let day3 = document.getElementById("day3");
    let day4 = document.getElementById("day4");
    let day5 = document.getElementById("day5");

    let iconImg1 = document.getElementById("iconImg1");
    let iconImg2 = document.getElementById("iconImg2");
    let iconImg3 = document.getElementById("iconImg3");
    let iconImg4 = document.getElementById("iconImg4");
    let iconImg5 = document.getElementById("iconImg5");

    let temp1 = document.getElementById("temp1");
    let temp2 = document.getElementById("temp2");
    let temp3 = document.getElementById("temp3");
    let temp4 = document.getElementById("temp4");
    let temp5 = document.getElementById("temp5");

    weatherContainer.style.visibility = "visible";

    cityHeader.innerHTML = data.city.name + "   " + data.city.country;
    weatherDescriptionHeader.innerHTML = data.list[0].weather[0].description;

    temperature.innerHTML = Math.floor(data.list[0].main.temp) + "&#176";
    temperatureMin.innerHTML =
        "min " + Math.floor(data.list[0].main.temp_min) + "&#176";
    temperatureMax.innerHTML =
        "max " + Math.floor(data.list[0].main.temp_max) + "&#176";

    windSpeed.innerHTML += data.list[0].wind.speed + "m/s";
    humidity.innerHTML += data.list[0].main.humidity + "%";

    iconImg.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    let unix = data.city.sunrise;
    let date = new Date(unix * 1000);
    let sunriseTime = date.toString().slice(16, 21);
    let unit = data.city.sunset;
    let date2 = new Date(unit * 1000);
    let sunsetTime = date2.toString().slice(16, 21);

    sunrise.innerHTML += sunriseTime;
    sunset.innerHTML += sunsetTime;

    iconImg1.src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
    iconImg2.src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
    iconImg3.src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
    iconImg4.src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
    iconImg5.src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;

    let day1unit = data.list[8].dt_txt;
    let day1month = day1unit.slice(5, 7);
    let day1day = day1unit.slice(8, 11);
    day1.innerHTML += day1day + "/" + day1month;

    let day2unit = data.list[16].dt_txt;
    let day2month = day2unit.slice(5, 7);
    let day2day = day2unit.slice(8, 11);
    day2.innerHTML += day2day + "/" + day2month;

    let day3unit = data.list[24].dt_txt;
    let day3month = day3unit.slice(5, 7);
    let day3day = day3unit.slice(8, 11);
    day3.innerHTML += day3day + "/" + day3month;

    let day4unit = data.list[32].dt_txt;
    let day4month = day4unit.slice(5, 7);
    let day4day = day4unit.slice(8, 11);
    day4.innerHTML += day4day + "/" + day4month;

    let day5unit = data.list[39].dt_txt;
    let day5month = day5unit.slice(5, 7);
    let day5day = day5unit.slice(8, 11);
    day5.innerHTML += day5day + "/" + day5month;
    day5.style.paddingLeft = "12px";

    temp1.innerHTML = Math.floor(data.list[8].main.temp) + "&#176";
    temp2.innerHTML = Math.floor(data.list[16].main.temp) + "&#176";
    temp3.innerHTML = Math.floor(data.list[24].main.temp) + "&#176";
    temp4.innerHTML = Math.floor(data.list[32].main.temp) + "&#176";
    temp5.innerHTML = Math.floor(data.list[39].main.temp) + "&#176";
}