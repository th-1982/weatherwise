const apiKey = "134110c9d7e80875d1290fe648b29c6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=munich";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();