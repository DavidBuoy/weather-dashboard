// Time

var currentDate = luxon.DateTime.local().toFormat('(MM/dd/yyyy)');
document.getElementById('current-date').textContent = currentDate;



// CURRENT WEATHER BLOCK

// my key for the Weather API
var weatherAPIKey = "&units=imperial&appid=8bad128a49d2bfd8cd773b4a9bdd241c" 
var uvIndexKey = ""

// This function allows me to display the CURRENT TEMPS ON THE MAIN BOX
function updateDisplay(weatherData) {
    var currentTemp = weatherData.main.temp;
    var currentHumidity = weatherData.main.humidity;
    var currentWind = weatherData.wind.speed;

    // might be how I get the Icon.
    // var currentIcon = weatherData.weather;
    
    console.log(weatherData);

    document.getElementById('current-temp').textContent = currentTemp;
    document.getElementById('current-humidity').textContent = currentHumidity;
    document.getElementById('current-wind').textContent = currentWind;

    return;
}


testCity = 'Portland'

// this grabs the current weather
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
// Forcase Dates
var futureDateOne = luxon.DateTime.local().plus({ days: 1 }).toFormat('MM/dd/yyyy');
var futureDateTwo = luxon.DateTime.local().plus({ days: 2 }).toFormat('MM/dd/yyyy');
var futureDateThree = luxon.DateTime.local().plus({ days: 3 }).toFormat('MM/dd/yyyy');
var futureDateFour = luxon.DateTime.local().plus({ days: 4 }).toFormat('MM/dd/yyyy');
var futureDateFive = luxon.DateTime.local().plus({ days: 5 }).toFormat('MM/dd/yyyy');

document.getElementById('forecast-date-one').textContent = futureDateOne;
document.getElementById('forecast-date-two').textContent = futureDateTwo;
document.getElementById('forecast-date-three').textContent = futureDateThree;
document.getElementById('forecast-date-four').textContent = futureDateFour;
document.getElementById('forecast-date-five').textContent = futureDateFive;




// This Function is what grabs i think the future forcast. (Walk Through with dan before class)
function updateForecastDisplay(forecastData) {
    // console.log(forecastData);
    document.getElementById('forcast').textContent = forecastData
    return
};

function weatherForcast(cityId) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + weatherAPIKey, requestOptions)
        .then(response => response.text())
        .then(result => {
            updateForecastDisplay(result)
        })
        .catch(error => console.log('error', error));
};








