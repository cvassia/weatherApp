let movingText = document.getElementsByTagName('h1')[0];

function textEffect(animationName) {
  var text = movingText.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	movingText.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
                addEffect();
            }
			}, 100)
	}

	addEffect();
};

textEffect('fly-in-out');



let movingText1 = document.getElementsByTagName('h2')[0];

function textEffect1(animationName) {
  var text = movingText1.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	movingText1.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
                addEffect();
            }
			}, 100)
	}

	addEffect();
};
textEffect1('fly-in-out');


let movingText2 = document.getElementsByTagName('h3')[0];

function textEffect2(animationName) {
  var text = movingText2.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	movingText2.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
                addEffect();
            }
			}, 100)
	}

	addEffect();
};

textEffect2('fly-in-out');








let appId = "ade413bc0426ddfa59413a49e3349f7e";
let units = "metric";
let button = document.getElementById("searchBtn");


function searchWeather(city) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    fetch(
            `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appId}&units=${units}`
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
   

    let switchVar = new Date();
    let switchVar2 = switchVar.getHours();

    let unix = data.city.sunrise;
    let date = new Date(unix * 1000);
    let sunriseTime = date.toString().slice(16, 21);
    let unit = data.city.sunset;
    let date2 = new Date(unit * 1000);
    let sunsetTime = date2.toString().slice(16, 21);
    let sunsetHour = date2.toString().slice(16, 18);

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

    document.getElementById("text").style.display = "none";

    switch (data.list[0].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
                document.body.style.backgroundImage = "url('sunny.jpg')";
            } else {
                document.body.style.backgroundImage = "url('night_sunny.jpg')";
            }

            break;

        case "few clouds":
            document.body.style.backgroundImage = "url('few_clouds.jpg')";
            break;
        case "scattered clouds":
            document.body.style.backgroundImage = "url('scattered_clouds.jpg')";
            break;
        case "broken clouds":
            document.body.style.backgroundImage = "url('broken_clouds.jpg')";
            break;
        case "overcast clouds":
            document.body.style.backgroundImage = "url('cloudy.jpg')";
            break;

        case "light rain":
        case "light intensity shower rain":
            document.body.style.backgroundImage = "url('rain1.jpg')";
            break;
        case "shower rain":
        case "ragged shower rain":
            document.body.style.backgroundImage = "url('shower_rain.jpg')";
            break;
        case "moderate rain":
        case "freezing rain":
            document.body.style.backgroundImage = "url('moderate_rain.jpg')";
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
            document.body.style.backgroundImage = "url('heavy_intensity_rain.jpg')";
            break;
        case "extreme rain":
            document.body.style.backgroundImage = "url('intensity_rain.jpg')";
            break;

        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
            document.body.style.backgroundImage = "url('drizzle.jpg')";

            break;
        case "mist":
            document.body.style.backgroundImage = "url('mist.jpg')";

            break;
        case "Smoke":
            document.body.style.backgroundImage = "url('smoke.jpg')";

            break;
        case "fog":
            document.body.style.backgroundImage = "url('fog.jpg')";

            break;
        case "sand/ dust whirls":
            document.body.style.backgroundImage = "url('dust_whirls.jpg')";

            break;

        case "sand":
            document.body.style.backgroundImage = "url('sand.jpg')";

            break;
        case "volcanic ash":
            document.body.style.backgroundImage = "url('volcanic_ash.jpg')";

            break;
        case "squalls":
            document.body.style.backgroundImage = "url('squalls.jpg')";

            break;
        case "dust":
            document.body.style.backgroundImage = "url('dust.jpg')";

            break;
        case "tornado":
            document.body.style.backgroundImage = "url('tornado.jpg')";
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
            document.body.style.backgroundImage = "url('thunderstorm1.jpg')";
            break;
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
            document.body.style.backgroundImage = "url('thunderstorm.jpg')";
            break;

        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
        case "Shower snow":
            document.body.style.backgroundImage = "url('sleet.jpg')";
            break;

        case "Snow":
            document.body.style.backgroundImage = "url('snow.jpg')";
            break;

        case "Heavy shower snow":
        case "Heavy snow":
            document.body.style.backgroundImage = "url('heavy_snow.jpg')";
            break;

        case "Haze":
            document.body.style.backgroundImage = "url('haze.jpg')";
            break;

        default:
            document.body.style.backgroundImage = "url('def.jpg')";
            break;
    }

    

    weatherContainer.style.visibility = "visible";

    cityHeader.innerHTML = data.city.name + "   " + data.city.country;
    weatherDescriptionHeader.innerHTML = data.list[0].weather[0].description;

    temperature.innerHTML = Math.floor(data.list[0].main.temp) + "&#176";
    temperatureMin.innerHTML =
        "min " + Math.floor(data.list[0].main.temp_min) + "&#176";
    temperatureMax.innerHTML =
        "max " + Math.floor(data.list[7].main.temp_max) + "&#176";

    windSpeed.innerHTML =
        '<i class="fas fa-wind"></i> ' + data.list[0].wind.speed + "m/s";
    humidity.innerHTML =
        '<i class="fas fa-tint"></i> ' + data.list[0].main.humidity + "%";

    // iconImg.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    // iconImg1.src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
    // iconImg2.src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
    // iconImg3.src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
    // iconImg4.src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
    // iconImg5.src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;

    switch (data.list[0].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/32.png";
                iconImg1.src = "icons/32.png";
                iconImg2.src = "icons/32.png";
                iconImg3.src = "icons/32.png";
                iconImg4.src = "icons/32.png";
                iconImg5.src = "icons/32.png";
            } else {
                iconImg.src = "icons/31.png";
                iconImg1.src = "icons/31.png";
                iconImg2.src = "icons/31.png";
                iconImg3.src = "icons/31.png";
                iconImg4.src = "icons/31.png";
                iconImg5.src = "icons/31.png";
            }

            break;

        case "few clouds":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/34.png";
                iconImg1.src = "icons/34.png";
                iconImg2.src = "icons/34.png";
                iconImg3.src = "icons/34.png";
                iconImg4.src = "icons/34.png";
                iconImg5.src = "icons/34.png";
            } else {
                iconImg.src = "icons/33.png";
                iconImg1.src = "icons/33.png";
                iconImg2.src = "icons/33.png";
                iconImg3.src = "icons/33.png";
                iconImg4.src = "icons/33.png";
                iconImg5.src = "icons/33.png";
            }
            break;
        case "scattered clouds":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/30.png";
                iconImg1.src = "icons/30.png";
                iconImg2.src = "icons/30.png";
                iconImg3.src = "icons/30.png";
                iconImg4.src = "icons/30.png";
                iconImg5.src = "icons/30.png";
            } else {
                iconImg.src = "icons/29.png";
                iconImg1.src = "icons/29.png";
                iconImg2.src = "icons/29.png";
                iconImg3.src = "icons/29.png";
                iconImg4.src = "icons/29.png";
                iconImg5.src = "icons/29.png";
            }
            break;
        case "broken clouds":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/28.png";
                iconImg1.src = "icons/28.png";
                iconImg2.src = "icons/28.png";
                iconImg3.src = "icons/28.png";
                iconImg4.src = "icons/28.png";
                iconImg5.src = "icons/28.png";
            } else {
                iconImg.src = "icons/27.png";
                iconImg1.src = "icons/27.png";
                iconImg2.src = "icons/27.png";
                iconImg3.src = "icons/27.png";
                iconImg4.src = "icons/27.png";
                iconImg5.src = "icons/27.png";
            }
            break;
        case "overcast clouds":
            iconImg.src = "icons/26.png";
            iconImg1.src = "icons/26.png";
            iconImg2.src = "icons/26.png";
            iconImg3.src = "icons/26.png";
            iconImg4.src = "icons/26.png";
            iconImg5.src = "icons/26.png";
            break;

        case "light rain":
        case "light intensity shower rain":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/39.png";
                iconImg1.src = "icons/39.png";
                iconImg2.src = "icons/39.png";
                iconImg3.src = "icons/39.png";
                iconImg4.src = "icons/39.png";
                iconImg5.src = "icons/39.png";
            } else {
                iconImg.src = "icons/45.png";
                iconImg1.src = "icons/45.png";
                iconImg2.src = "icons/45.png";
                iconImg3.src = "icons/45.png";
                iconImg4.src = "icons/45.png";
                iconImg5.src = "icons/45.png";
            }
            break;
        case "shower rain":
        case "ragged shower rain":
        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
            iconImg.src = "icons/9.png";
            iconImg1.src = "icons/9.png";
            iconImg2.src = "icons/9.png";
            iconImg3.src = "icons/9.png";
            iconImg4.src = "icons/9.png";
            iconImg5.src = "icons/9.png";
            break;
        case "moderate rain":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/39.png";
                iconImg1.src = "icons/39.png";
                iconImg2.src = "icons/39.png";
                iconImg3.src = "icons/39.png";
                iconImg4.src = "icons/39.png";
                iconImg5.src = "icons/39.png";
            } else {
                iconImg.src = "icons/37.png";
                iconImg1.src = "icons/37.png";
                iconImg2.src = "icons/37.png";
                iconImg3.src = "icons/37.png";
                iconImg4.src = "icons/37.png";
                iconImg5.src = "icons/37.png";
            }

        case "freezing rain":
            iconImg.src = "icons/10.png";
            iconImg1.src = "icons/10.png";
            iconImg2.src = "icons/10.png";
            iconImg3.src = "icons/10.png";
            iconImg4.src = "icons/10.png";
            iconImg5.src = "icons/10.png";
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
        case "extreme rain":
            iconImg.src = "icons/5.png";
            iconImg1.src = "icons/5.png";
            iconImg2.src = "icons/5.png";
            iconImg3.src = "icons/5.png";
            iconImg4.src = "icons/5.png";
            iconImg5.src = "icons/5.png";
            break;





        case "mist":
            iconImg.src = "icons/22.png";
            iconImg1.src = "icons/22.png";
            iconImg2.src = "icons/22.png";
            iconImg3.src = "icons/22.png";
            iconImg4.src = "icons/22.png";
            iconImg5.src = "icons/22.png";

            break;
        case "Smoke":
            iconImg.src = "icons/19.png";
            iconImg1.src = "icons/19.png";
            iconImg2.src = "icons/19.png";
            iconImg3.src = "icons/19.png";
            iconImg4.src = "icons/19.png";
            iconImg5.src = "icons/19.png";

            break;
        case "fog":
            iconImg.src = "icons/201.png";
            iconImg1.src = "icons/201.png";
            iconImg2.src = "icons/201.png";
            iconImg3.src = "icons/201.png";
            iconImg4.src = "icons/201.png";
            iconImg5.src = "icons/201.png";

            break;
        case "sand/ dust whirls":
            iconImg.src = "icons/191.png";
            iconImg1.src = "icons/191.png";
            iconImg2.src = "icons/191.png";
            iconImg3.src = "icons/191.png";
            iconImg4.src = "icons/191.png";
            iconImg5.src = "icons/191.png";

            break;

        case "sand":
            iconImg.src = "icons/191.png";
            iconImg1.src = "icons/191.png";
            iconImg2.src = "icons/191.png";
            iconImg3.src = "icons/191.png";
            iconImg4.src = "icons/191.png";
            iconImg5.src = "icons/191.png";

            break;
        case "volcanic ash":
            iconImg.src = "icons/121.png";
            iconImg1.src = "icons/121.png";
            iconImg2.src = "icons/121.png";
            iconImg3.src = "icons/121.png";
            iconImg4.src = "icons/121.png";
            iconImg5.src = "icons/121.png";

            break;
        case "squalls":
            if (switchVar2 < sunsetHour) {
                iconImg.src = "icons/5.png";
                iconImg1.src = "icons/5.png";
                iconImg2.src = "icons/5.png";
                iconImg3.src = "icons/5.png";
                iconImg4.src = "icons/5.png";
                iconImg5.src = "icons/5.png";
            } else {
                iconImg.src = "icons/45.png";
                iconImg1.src = "icons/45.png";
                iconImg2.src = "icons/45.png";
                iconImg3.src = "icons/45.png";
                iconImg4.src = "icons/45.png";
                iconImg5.src = "icons/45.png";
            }

            break;
        case "dust":
            iconImg.src = "icons/191.png";
            iconImg1.src = "icons/191.png";
            iconImg2.src = "icons/191.png";
            iconImg3.src = "icons/191.png";
            iconImg4.src = "icons/191.png";
            iconImg5.src = "icons/191.png";

            break;
        case "tornado":
            iconImg.src = "icons/0.png";
            iconImg1.src = "icons/0.png";
            iconImg2.src = "icons/0.png";
            iconImg3.src = "icons/0.png";
            iconImg4.src = "icons/0.png";
            iconImg5.src = "icons/0.png";
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":

        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
            iconImg.src = "icons/1.png";
            iconImg1.src = "icons/1.png";
            iconImg2.src = "icons/1.png";
            iconImg3.src = "icons/1.png";
            iconImg4.src = "icons/1.png";
            iconImg5.src = "icons/1.png";
            break;


        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
            iconImg.src = "icons/6.png";
            iconImg1.src = "icons/6.png";
            iconImg2.src = "icons/6.png";
            iconImg3.src = "icons/6.png";
            iconImg4.src = "icons/6.png";
            iconImg5.src = "icons/6.png";
            break;

        case "Shower snow":
        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
            iconImg.src = "icons/7.png";
            iconImg1.src = "icons/7.png";
            iconImg2.src = "icons/7.png";
            iconImg3.src = "icons/7.png";
            iconImg4.src = "icons/7.png";
            iconImg5.src = "icons/7.png";
            break;

        case "Snow":
            iconImg.src = "icons/13.png";
            iconImg1.src = "icons/13.png";
            iconImg2.src = "icons/13.png";
            iconImg3.src = "icons/13.png";
            iconImg4.src = "icons/13.png";
            iconImg5.src = "icons/13.png";
            break;

        case "Heavy shower snow":
        case "Heavy snow":
            iconImg.src = "icons/18.png";
            iconImg1.src = "icons/18.png";
            iconImg2.src = "icons/18.png";
            iconImg3.src = "icons/18.png";
            iconImg4.src = "icons/18.png";
            iconImg5.src = "icons/18.png";
            break;

        case "Haze":
            iconImg.src = "icons/201.png";
            iconImg1.src = "icons/201.png";
            iconImg2.src = "icons/201.png";
            iconImg3.src = "icons/201.png";
            iconImg4.src = "icons/201.png";
            iconImg5.src = "icons/201.png";
            break;

        default:
            iconImg.src = "icons/421.png";
            iconImg1.src = "icons/421.png";
            iconImg2.src = "icons/421.png";
            iconImg3.src = "icons/421.png";
            iconImg4.src = "icons/421.png";
            iconImg5.src = "icons/421.png";
            break;
    }

    switch (data.list[8].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
                iconImg1.src = "icons/32.png";
              
            } else {
                iconImg1.src = "icons/31.png";
               
            }

            break;

        case "few clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg1.src = "icons/34.png";
              
            } else {
                
                iconImg1.src = "icons/33.png";
               
            }
            break;
        case "scattered clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg1.src = "icons/30.png";
                
            } else {
               
                iconImg1.src = "icons/29.png";
               
            }
            break;
        case "broken clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg1.src = "icons/28.png";
               
            } else {
              
                iconImg1.src = "icons/27.png";
               
            }
            break;
        case "overcast clouds":
          
            iconImg1.src = "icons/26.png";
           
            break;

        case "light rain":
        case "light intensity shower rain":
            if (switchVar2 < sunsetHour) {
                
                iconImg1.src = "icons/39.png";
              
            } else {
               
                iconImg1.src = "icons/45.png";
               
            }
            break;
        case "shower rain":
        case "ragged shower rain":
        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
            
            iconImg1.src = "icons/9.png";
          
            break;
        case "moderate rain":
            if (switchVar2 < sunsetHour) {
               
                iconImg1.src = "icons/39.png";
               
            } else {
                
                iconImg1.src = "icons/37.png";
               
            }

        case "freezing rain":
            
            iconImg1.src = "icons/10.png";
            
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
        case "extreme rain":
           
            iconImg1.src = "icons/5.png";
           
            break;





        case "mist":
           
            iconImg1.src = "icons/22.png";
           

            break;
        case "Smoke":
            
            iconImg1.src = "icons/19.png";
           

            break;
        case "fog":
            
            iconImg1.src = "icons/201.png";
            

            break;
        case "sand/ dust whirls":
           
            iconImg1.src = "icons/191.png";
           

            break;

        case "sand":
            
            iconImg1.src = "icons/191.png";
            

            break;
        case "volcanic ash":
            
            iconImg1.src = "icons/121.png";
           

            break;
        case "squalls":
            if (switchVar2 < sunsetHour) {
               
                iconImg1.src = "icons/5.png";
             
            } else {
                
                iconImg1.src = "icons/45.png";
               
            }

            break;
        case "dust":
           
            iconImg1.src = "icons/191.png";
           

            break;
        case "tornado":
            
            iconImg1.src = "icons/0.png";
           
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":

        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
            
            iconImg1.src = "icons/1.png";
            
            break;


        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
            
            iconImg1.src = "icons/6.png";
           
            break;

        case "Shower snow":
        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
            
            iconImg1.src = "icons/7.png";
           
            break;

        case "Snow":
           
            iconImg1.src = "icons/13.png";
            
            break;

        case "Heavy shower snow":
        case "Heavy snow":
            
            iconImg1.src = "icons/18.png";
            
            break;

        case "Haze":
            
            iconImg1.src = "icons/201.png";
            
            break;

        default:
           
            iconImg1.src = "icons/421.png";
            
            break;
    }




    switch (data.list[16].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
               
                iconImg2.src = "icons/32.png";
              
            } else {
                
                iconImg2.src = "icons/31.png";
             
            }

            break;

        case "few clouds":
            if (switchVar2 < sunsetHour) {
          
                iconImg2.src = "icons/34.png";
             
            } else {
             
                iconImg2.src = "icons/33.png";
            
            }
            break;
        case "scattered clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg2.src = "icons/30.png";
              
            } else {
               
                iconImg2.src = "icons/29.png";
           
            }
            break;
        case "broken clouds":
            if (switchVar2 < sunsetHour) {
              
                iconImg2.src = "icons/28.png";
             
            } else {
            
                iconImg2.src = "icons/27.png";
            
            }
            break;
        case "overcast clouds":
           
            iconImg2.src = "icons/26.png";
         
            break;

        case "light rain":
        case "light intensity shower rain":
            if (switchVar2 < sunsetHour) {
              
                iconImg2.src = "icons/39.png";
            
            } else {
           
                iconImg2.src = "icons/45.png";
             
            }
            break;
        case "shower rain":
        case "ragged shower rain":
        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
        
            iconImg2.src = "icons/9.png";
         
            break;
        case "moderate rain":
            if (switchVar2 < sunsetHour) {
              
                iconImg2.src = "icons/39.png";
              
            } else {
          
                iconImg2.src = "icons/37.png";
             
            }

        case "freezing rain":
           
            iconImg2.src = "icons/10.png";
          
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
        case "extreme rain":
          
            iconImg2.src = "icons/5.png";
      
            break;





        case "mist":
           
            iconImg2.src = "icons/22.png";
         

            break;
        case "Smoke":
         
            iconImg2.src = "icons/19.png";
         

            break;
        case "fog":
        
            iconImg2.src = "icons/201.png";
          

            break;
        case "sand/ dust whirls":
          
            iconImg2.src = "icons/191.png";
      

            break;

        case "sand":
           
            iconImg2.src = "icons/191.png";
            

            break;
        case "volcanic ash":
          
            iconImg2.src = "icons/121.png";
          

            break;
        case "squalls":
            if (switchVar2 < sunsetHour) {
              
                iconImg2.src = "icons/5.png";
               
            } else {
             
                iconImg2.src = "icons/45.png";
            
            }

            break;
        case "dust":
         
            iconImg2.src = "icons/191.png";
          

            break;
        case "tornado":
        
            iconImg2.src = "icons/0.png";
        
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":

        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
           
            iconImg2.src = "icons/1.png";
           
            break;


        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
           
            iconImg2.src = "icons/6.png";
          
            break;

        case "Shower snow":
        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
           
            iconImg2.src = "icons/7.png";
          
            break;

        case "Snow":
         
            iconImg2.src = "icons/13.png";
         
            break;

        case "Heavy shower snow":
        case "Heavy snow":
          
            iconImg2.src = "icons/18.png";
           
            break;

        case "Haze":
           
            iconImg2.src = "icons/201.png";
          
            break;

        default:
          
            iconImg2.src = "icons/421.png";
           
            break;
    }



    switch (data.list[24].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
               
                iconImg3.src = "icons/32.png";
            
            } else {
               
                iconImg3.src = "icons/31.png";
               
            }

            break;

        case "few clouds":
            if (switchVar2 < sunsetHour) {
                
                iconImg3.src = "icons/34.png";
            
            } else {
                
                iconImg3.src = "icons/33.png";
             
            }
            break;
        case "scattered clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg3.src = "icons/30.png";
              
            } else {
               
                iconImg3.src = "icons/29.png";
               
            }
            break;
        case "broken clouds":
            if (switchVar2 < sunsetHour) {
              
                iconImg3.src = "icons/28.png";
             
            } else {
              
                iconImg3.src = "icons/27.png";
              
            }
            break;
        case "overcast clouds":
         
            iconImg3.src = "icons/26.png";
          
            break;

        case "light rain":
        case "light intensity shower rain":
            if (switchVar2 < sunsetHour) {
                
                iconImg3.src = "icons/39.png";
               
            } else {
              
                iconImg3.src = "icons/45.png";
              
            }
            break;
        case "shower rain":
        case "ragged shower rain":
        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
           
            iconImg3.src = "icons/9.png";
          
            break;
        case "moderate rain":
            if (switchVar2 < sunsetHour) {
               
                iconImg3.src = "icons/39.png";
           
            } else {
              
                iconImg3.src = "icons/37.png";
              
            }

        case "freezing rain":
         
            iconImg3.src = "icons/10.png";
            
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
        case "extreme rain":
           
            iconImg3.src = "icons/5.png";
          
            break;





        case "mist":
           
            iconImg3.src = "icons/22.png";
           

            break;
        case "Smoke":
            
            iconImg3.src = "icons/19.png";
         

            break;
        case "fog":
            
            iconImg3.src = "icons/201.png";
           

            break;
        case "sand/ dust whirls":
            
            iconImg3.src = "icons/191.png";
           

            break;

        case "sand":
           
            iconImg3.src = "icons/191.png";
           

            break;
        case "volcanic ash":
           
            iconImg3.src = "icons/121.png";
           

            break;
        case "squalls":
            if (switchVar2 < sunsetHour) {
              
                iconImg3.src = "icons/5.png";
               
            } else {
             
                iconImg3.src = "icons/45.png";
              
            }

            break;
        case "dust":
            
            iconImg3.src = "icons/191.png";
          

            break;
        case "tornado":
           
            iconImg3.src = "icons/0.png";
         
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":

        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
           
            iconImg3.src = "icons/1.png";
           
            break;


        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
            
            iconImg3.src = "icons/6.png";
          
            break;

        case "Shower snow":
        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
           
            iconImg3.src = "icons/7.png";
         
            break;

        case "Snow":
          
            iconImg3.src = "icons/13.png";
        
            break;

        case "Heavy shower snow":
        case "Heavy snow":
            
            iconImg3.src = "icons/18.png";
         
            break;

        case "Haze":
            
            iconImg3.src = "icons/201.png";
       
            break;

        default:
          
            iconImg3.src = "icons/421.png";
         
            break;
    }



    switch (data.list[32].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
                
                iconImg4.src = "icons/32.png";
            } else {
             
                iconImg4.src = "icons/31.png";
            }

            break;

        case "few clouds":
            if (switchVar2 < sunsetHour) {
              
                iconImg4.src = "icons/34.png";
            } else {
                
                iconImg4.src = "icons/33.png";
            }
            break;
        case "scattered clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg4.src = "icons/30.png";
            } else {
               
                iconImg4.src = "icons/29.png";
            }
            break;
        case "broken clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg4.src = "icons/28.png";
            } else {
             
                iconImg4.src = "icons/27.png";
            }
            break;
        case "overcast clouds":
           
            iconImg4.src = "icons/26.png";
            break;

        case "light rain":
        case "light intensity shower rain":
            if (switchVar2 < sunsetHour) {
               
                iconImg4.src = "icons/39.png";
            } else {
                
                iconImg4.src = "icons/45.png";
            }
            break;
        case "shower rain":
        case "ragged shower rain":
        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
           
            iconImg4.src = "icons/9.png";
            break;
        case "moderate rain":
            if (switchVar2 < sunsetHour) {
            
                iconImg4.src = "icons/39.png";
            } else {
               
                iconImg4.src = "icons/37.png";
            }

        case "freezing rain":
           
            iconImg4.src = "icons/10.png";
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
        case "extreme rain":
           
            iconImg4.src = "icons/5.png";
            break;





        case "mist":
           
            iconImg4.src = "icons/22.png";

            break;
        case "Smoke":
         
            iconImg4.src = "icons/19.png";

            break;
        case "fog":
           
            iconImg4.src = "icons/201.png";

            break;
        case "sand/ dust whirls":
          
            iconImg4.src = "icons/191.png";

            break;

        case "sand":
          
            iconImg4.src = "icons/191.png";

            break;
        case "volcanic ash":
           
            iconImg4.src = "icons/121.png";

            break;
        case "squalls":
            if (switchVar2 < sunsetHour) {
              
                iconImg4.src = "icons/5.png";
            } else {
               
                iconImg4.src = "icons/45.png";
              
            }

            break;
        case "dust":
           
            iconImg4.src = "icons/191.png";
           

            break;
        case "tornado":
            
            iconImg4.src = "icons/0.png";
           
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":

        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
           
            iconImg4.src = "icons/1.png";
          
            break;


        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
           
            iconImg4.src = "icons/6.png";
            
            break;

        case "Shower snow":
        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
          
            iconImg4.src = "icons/7.png";
           
            break;

        case "Snow":
           
            iconImg4.src = "icons/13.png";
           
            break;

        case "Heavy shower snow":
        case "Heavy snow":
            
            iconImg4.src = "icons/18.png";
         
            break;

        case "Haze":
           
            iconImg4.src = "icons/201.png";
            
            break;

        default:
          
            iconImg4.src = "icons/421.png";
            break;
    }




    switch (data.list[39].weather[0].description) {
        case "clear sky":
            if (switchVar2 < sunsetHour) {
              
                iconImg5.src = "icons/32.png";
            } else {
                
                iconImg5.src = "icons/31.png";
            }

            break;

        case "few clouds":
            if (switchVar2 < sunsetHour) {
                
                iconImg5.src = "icons/34.png";
            } else {
               
                iconImg5.src = "icons/33.png";
            }
            break;
        case "scattered clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg5.src = "icons/30.png";
            } else {
              
                iconImg5.src = "icons/29.png";
            }
            break;
        case "broken clouds":
            if (switchVar2 < sunsetHour) {
               
                iconImg5.src = "icons/28.png";
            } else {
               
                iconImg5.src = "icons/27.png";
            }
            break;
        case "overcast clouds":
            
            iconImg5.src = "icons/26.png";
            break;

        case "light rain":
        case "light intensity shower rain":
            if (switchVar2 < sunsetHour) {
              
                iconImg5.src = "icons/39.png";
            } else {
             
                iconImg5.src = "icons/45.png";
            }
            break;
        case "shower rain":
        case "ragged shower rain":
        case "drizzle":
        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
           
            iconImg5.src = "icons/9.png";
            break;
        case "moderate rain":
            if (switchVar2 < sunsetHour) {
              
                iconImg5.src = "icons/39.png";
            } else {
               
                iconImg5.src = "icons/37.png";
            }

        case "freezing rain":
          
            iconImg5.src = "icons/10.png";
            break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
        case "very heavy rain":
        case "extreme rain":
           
            iconImg5.src = "icons/5.png";
            break;





        case "mist":
          
            iconImg5.src = "icons/22.png";

            break;
        case "Smoke":
         
            iconImg5.src = "icons/19.png";

            break;
        case "fog":
           
            iconImg5.src = "icons/201.png";

            break;
        case "sand/ dust whirls":
            
            iconImg5.src = "icons/191.png";

            break;

        case "sand":
           
            iconImg5.src = "icons/191.png";

            break;
        case "volcanic ash":
            
            iconImg5.src = "icons/121.png";

            break;
        case "squalls":
            if (switchVar2 < sunsetHour) {
               
                iconImg5.src = "icons/5.png";
            } else {
                
                iconImg5.src = "icons/45.png";
            }

            break;
        case "dust":
            
            iconImg5.src = "icons/191.png";

            break;
        case "tornado":
            
            iconImg5.src = "icons/0.png";
            break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":

        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
            
            iconImg5.src = "icons/1.png";
            break;


        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
           
            iconImg5.src = "icons/6.png";
            break;

        case "Shower snow":
        case "light snow":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
            
            iconImg5.src = "icons/7.png";
            break;

        case "Snow":
            
            iconImg5.src = "icons/13.png";
            break;

        case "Heavy shower snow":
        case "Heavy snow":
            
            iconImg5.src = "icons/18.png";
            break;

        case "Haze":
            
            iconImg5.src = "icons/201.png";
            break;

        default:
          
            iconImg5.src = "icons/421.png";
            break;
    }
    sunrise.innerHTML = "<i class='fas fa-sun'></i> " + sunriseTime;
    sunset.innerHTML = "<i class='fas fa-moon'></i> " + sunsetTime;



    let day1unit = data.list[8].dt_txt;
    let day1month = day1unit.slice(5, 7);
    let day1day = day1unit.slice(8, 11);
    day1.innerHTML = day1day + "/" + day1month;

    let day2unit = data.list[16].dt_txt;
    let day2month = day2unit.slice(5, 7);
    let day2day = day2unit.slice(8, 11);
    day2.innerHTML = day2day + "/" + day2month;

    let day3unit = data.list[24].dt_txt;
    let day3month = day3unit.slice(5, 7);
    let day3day = day3unit.slice(8, 11);
     day3.innerHTML = day3day + "/" + day3month;

    let day4unit = data.list[32].dt_txt;
    let day4month = day4unit.slice(5, 7);
    let day4day = day4unit.slice(8, 11);
    day4.innerHTML = day4day + "/" + day4month;

    let day5unit = data.list[39].dt_txt;
    let day5month = day5unit.slice(5, 7);
    let day5day = day5unit.slice(8, 11);
    day5.innerHTML = day5day + "/" + day5month;
    day5.style.paddingLeft = "12px";

    temp1.innerHTML = Math.floor(data.list[8].main.temp) + "&#176";
    temp2.innerHTML = Math.floor(data.list[16].main.temp) + "&#176";
    temp3.innerHTML = Math.floor(data.list[24].main.temp) + "&#176";
    temp4.innerHTML = Math.floor(data.list[32].main.temp) + "&#176";
    temp5.innerHTML = Math.floor(data.list[39].main.temp) + "&#176";

    function convertToF(celsius) {
        return celsius * 9/5 + 32
      };

      
      





}