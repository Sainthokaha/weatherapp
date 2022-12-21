let loc = document.querySelector('#location');
let tempicon = document.querySelector('#temp-icon');
let tempvalue = document.querySelector('#temp-value');
let climate = document.querySelector('#climate');
let iconfile;
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';
});

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab46cd0936fe590e9ddc7717a3c2f3ec`        );

        const weatherData = await response.json();
        // console.log(weatherData);
        const {name} = weatherData;
        const {feels_like} = weatherData.main;
        const {id, main} = weatherData.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = Math.round(feels_like - 273);
        if (id < 300 && id > 200) {
                        tempicon.src = "icon/thunderstorm.png"
                    }
                    else if (id < 400 && id > 300) {
                        tempicon.src = "icon/wind.png"
                    }
                    else if (id < 600 && id > 500) {
                        tempicon.src = "icon/rain.png"
                    }
                    else if (id < 700 && id > 600) {
                        tempicon.src = "icon/snow.png"
                    }
                    else if (id < 800 && id > 700) {
                        tempicon.src = "icon/wind.png"
                    }
                    else if (id == 800) {
                        tempicon.src = "icon/wind.png"
                    }
    } catch(error) {
        alert('City not found');
    }

}

window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const proxy = `https://cors-anywhere.herokuapp.com/`

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ab46cd0936fe590e9ddc7717a3c2f3ec`
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const {name} = data;
                    const {feels_like} = data.main;
                    const {id, main} = data.weather[0];
                    loc.textContent =  name;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273);
                    if (id < 300 && id > 200) {
                        tempicon.src = "icon/thunderstorm.png"
                    }
                    else if (id < 400 && id > 300) {
                        tempicon.src = "icon/wind.png"
                    }
                    else if (id < 600 && id > 500) {
                        tempicon.src = "icon/rain.png"
                    }
                    else if (id < 700 && id > 600) {
                        tempicon.src = "icon/snow.png"
                    }
                    else if (id < 800 && id > 700) {
                        tempicon.src = "icon/wind.png"
                    }
                    else if (id == 800) {
                        tempicon.src = "icon/wind.png"
                    }
                })
        })
    }
})
