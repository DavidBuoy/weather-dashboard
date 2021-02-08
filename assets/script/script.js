// Time

var currentDate = luxon.DateTime.local().toFormat('(MM/dd/yyyy)');
document.getElementById('current-date').textContent = currentDate;


// I COULDNT GET THE SEARCH TO WORK BUT THIS WORKS IF YOU CNAHGE THE CITY NAME.
testCity = 'Portland';

// CURRENT WEATHER BLOCK

// my key for the Weather API
var weatherAPIKey = "&units=imperial&appid=8bad128a49d2bfd8cd773b4a9bdd241c";
var uvIndexKey = "";

// This function allows me to display the CURRENT TEMPS ON THE MAIN BOX
function updateDisplay(weatherData) {
    var currentTemp = weatherData.main.temp;
    var currentHumidity = weatherData.main.humidity;
    var currentWind = weatherData.wind.speed;
    var currentIcon = 'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png'
    

    document.getElementById('current-temp').textContent = currentTemp;
    document.getElementById('current-humidity').textContent = currentHumidity;
    document.getElementById('current-wind').textContent = currentWind;
    document.getElementById('current-icon').src = currentIcon;

    return;
};

// This grabs the current weather
// Postman
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + testCity + weatherAPIKey)
    .then(response => response.json())
    .then(data => {
        // THIS LOGS ALL THE DATA AND THE TESTING THE TEMP
        // console.log(data);
        // console.log(data.main.temp);
        if (data) {
            weatherForcast(data.id)
            updateDisplay(data)
        }
        return;
    });


// FORECAST BLOCKS

// This Function is what grabs i think the future forcast. (Walk Through with dan before class)
function updateForecastDisplay(forecastData) {
    forecastData = JSON.parse(forecastData);
        // console.log(forecastData);



    
    var futureDateTwo = luxon.DateTime.local().plus({ days: 2 }).toFormat('MM/dd/yyyy');
    var futureDateThree = luxon.DateTime.local().plus({ days: 3 }).toFormat('MM/dd/yyyy');
    var futureDateFour = luxon.DateTime.local().plus({ days: 4 }).toFormat('MM/dd/yyyy');
    var futureDateFive = luxon.DateTime.local().plus({ days: 5 }).toFormat('MM/dd/yyyy');

    document.getElementById('forecast-date-two').textContent = futureDateTwo;
    document.getElementById('forecast-date-three').textContent = futureDateThree;
    document.getElementById('forecast-date-four').textContent = futureDateFour;
    document.getElementById('forecast-date-five').textContent = futureDateFive;
    
// DAY BLOCK ONE
    var futureDateOne = luxon.DateTime.local().plus({ days: 1 }).toFormat('MM/dd/yyyy');
    var boxOneIcon = 'https://openweathermap.org/img/wn/' + forecastData.list[3].weather[0].icon + '.png';
    var boxOneTemps = forecastData.list[3].main.temp;
    var boxOneHumid = forecastData.list[3].main.humidity;

    document.getElementById('forecast-date-one').textContent = futureDateOne;
    document.getElementById('weather-icon-one').src = boxOneIcon;
    document.getElementById('forecast-temp-one').textContent = boxOneTemps;
    document.getElementById('forecast-humid-one').textContent = boxOneHumid;

// DAY BLOCK TWO
    var futureDateTwo = luxon.DateTime.local().plus({ days: 2 }).toFormat('MM/dd/yyyy');
    var boxTwoIcon = 'https://openweathermap.org/img/wn/' + forecastData.list[11].weather[0].icon + '.png';
    var boxTwoTemps = forecastData.list[11].main.temp;
    var boxTwoHumid = forecastData.list[11].main.humidity;

    document.getElementById('forecast-date-two').textContent = futureDateTwo;
    document.getElementById('weather-icon-two').src = boxTwoIcon;
    document.getElementById('forecast-temp-two').textContent = boxTwoTemps;
    document.getElementById('forecast-humid-two').textContent = boxTwoHumid;

    // DAY BLOCK THREE
    var futureDateThree = luxon.DateTime.local().plus({ days: 3 }).toFormat('MM/dd/yyyy');
    var boxThreeIcon = 'https://openweathermap.org/img/wn/' + forecastData.list[11].weather[0].icon + '.png';
    var boxThreeTemps = forecastData.list[11].main.temp;
    var boxThreeHumid = forecastData.list[11].main.humidity;

    document.getElementById('forecast-date-three').textContent = futureDateThree;
    document.getElementById('weather-icon-three').src = boxThreeIcon;
    document.getElementById('forecast-temp-three').textContent = boxThreeTemps;
    document.getElementById('forecast-humid-three').textContent = boxThreeHumid;

    // DAY BLOCK FOUR
    var futureDateFour = luxon.DateTime.local().plus({ days: 4 }).toFormat('MM/dd/yyyy');
    var boxFourIcon = 'https://openweathermap.org/img/wn/' + forecastData.list[18].weather[0].icon + '.png';
    var boxFourTemps = forecastData.list[18].main.temp;
    var boxFourHumid = forecastData.list[18].main.humidity;

    document.getElementById('forecast-date-four').textContent = futureDateFour;
    document.getElementById('weather-icon-four').src = boxFourIcon;
    document.getElementById('forecast-temp-four').textContent = boxFourTemps;
    document.getElementById('forecast-humid-four').textContent = boxFourHumid;

    // DAY BLOCK FIVE
    var futureDateFive = luxon.DateTime.local().plus({ days: 5 }).toFormat('MM/dd/yyyy');
    var boxFiveIcon = 'https://openweathermap.org/img/wn/' + forecastData.list[26].weather[0].icon + '.png';
    var boxFiveTemps = forecastData.list[26].main.temp;
    var boxFiveHumid = forecastData.list[26].main.humidity;

    document.getElementById('forecast-date-five').textContent = futureDateFive;
    document.getElementById('weather-icon-five').src = boxFiveIcon;
    document.getElementById('forecast-temp-five').textContent = boxFiveTemps;
    document.getElementById('forecast-humid-five').textContent = boxFiveHumid;


    return
};



function weatherForcast(cityId) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + weatherAPIKey)
        .then(response => response.text())
        .then(result => {
            updateForecastDisplay(result)
        })
        .catch(error => console.log('error', error));
        
    // console.log(updateForecastDisplay(result));
};








