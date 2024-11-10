const key = "d8b1cf18868e8e33b4a2b29437860538";

async function getWeather(city = "Londrina") {  
  const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`);
  const data = await response.json();
  
  document.getElementById("name").textContent = data.name;
  document.getElementById("country").textContent = data.sys.country;
  document.getElementById("temp").textContent = data.main.temp.toFixed(1);
  document.getElementById("weather-main").textContent = data.weather[0].main;
  document.getElementById("temp-min").textContent = data.main.temp_min.toFixed(1);
  document.getElementById("temp-max").textContent = data.main.temp_max.toFixed(1);
  
}

getWeather();

async function getCity() {
    const city = document.getElementById("input-search").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";
    if (city === '' || !isNaN(Number(city))) {
        error.textContent = "Digite o nome de uma cidade para consulta!";
        return;
    }



    getWeather(city);
}