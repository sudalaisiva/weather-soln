let id = '0e22760c3f068258592dacc0e2d5c2c5';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
let city = document.querySelector('.name');
let form = document.querySelector("form");
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');
form.addEventListener("submit", (e) => {
    e.preventDefault();  
    if(valueSearch.value != ''){
        searchWeather();
    }
    else{
        alert("please enter a city");
    }
});
const searchWeather = () => {
    fetch(url+'&q='+ valueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.cod == 200){
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('span').innerText = data.main.temp;
                description.innerText = data.weather[0].description;

                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            }else{
                alert("city not found");
            }
            valueSearch.value = '';
        })
}

const initApp = () => {
    valueSearch.value = 'Tirunelveli';
    searchWeather();
}
initApp();