const myApiKey = '43fff0f24e49016b67c758a49f1275b3';
const tempCity = 'Roswell, Georgia';
// const url = `http://api.openweathermap.org/geo/1.0/direct?q=${tempCity}&limit=2&appid=${myApiKey}`;
// let lat;
// let lon;
// const url3 = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myApiKey}`
var search = ""
var currentWeather = ""
// var forcast = ""
// fetch some weather data

// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data is', data);
//         lat = data.lat;
//         lon = data.lon;
//         // you could nest that second fetch inside this then statement.
//         // your could return cityLat and cityLon and then insert that into the second fetch
//         const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myApiKey}`
//         fetch(url2)
//             .then(response => {
//                 lat = data.lat;
//                 lon = data.lon;
                

//                 const url3 = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myApiKey}`
//             })
//     })

    var searchBtn = document.getElementById('search')
    searchBtn.addEventListener('click', function() {
        var searchBtnEl = document.getElementById('input');
        search = searchBtnEl.value
        //add function call to get weather
        currentW(search)
        forecast(search)
    })

    function currentW(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`)
        .then(response => {
            return response.json();
            
        })
        .then(data => {
            var todayTemp = document.getElementById('todayTemp')
            todayTemp.textContent = `Temperature: ${data.main.temp}`; 
            var todayHumid = document.getElementById('todayHumid')
            todayHumid.textContent = `Humidity: ${data.main.humidity}%`;
            var todayWind = document.getElementById('todayWind')
            todayWind.textContent = `Wind Speed: ${data.wind.speed} Mph`;
            var toddizle = document.getElementById('DOW')
            toddizle.textContent = city

        })
    }
    function forecast(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${myApiKey}`)
        .then(response => {
            return response.json();

        })
        .then(data => {
            console.log(data)
            var thanksJoseph = document.getElementsByClassName('that');
            var j = 0;
            console.log(thanksJoseph[j].children)
            for(var i = 6; i <= 40  ; i += 8) {
                var forecastdate = thanksJoseph[j].children[0]
                forecastdate.textContent = data.list[i].dt_txt
                var forecastTemp = thanksJoseph[j].children[2]
                forecastTemp.textContent = `Temperature: ${data.list[i].main.temp}`;
                var forecastWind = thanksJoseph[j].children[3]
                forecastWind.textContent = `Wind Speed: ${data.list[i].wind.speed}`;
                var forecastHumid = thanksJoseph[j].children[4]
                forecastHumid.textContent = `Humidity: ${data.list[i].main.humidity}%`;

                j++
            }
        })
    }
    