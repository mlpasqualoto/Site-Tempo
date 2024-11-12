const keyWeather = "d8b1cf18868e8e33b4a2b29437860538";
const keyDay = "76QEYH68IURS";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getWeather(city = "Londrina") {  
  try {
    const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${keyWeather}`);
    const dataWeather = await responseWeather.json();

    const lat = dataWeather.coord.lat;
    const lon = dataWeather.coord.lon;
    const responseDay = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${keyDay}&format=json&by=position&lat=${lat}&lng=${lon}`);
    const dataDay = await responseDay.json();

    const fullDate = dataDay.formatted;

    // separa a data cheia das horas
    const onlyDate = fullDate.split(" ")[0];
    
    // converte o dia de numeral para dia da semana
    const date = new Date(onlyDate);
    const options = {weekday: 'long'};
    const dayWeek = date.toLocaleDateString('pt-BR', options);

    // separa o dia da data cheia
    const day = onlyDate.split("-")[2];

    // separa o ano da data cheia
    const year = onlyDate.split("-")[0];

    // separa o mês da data cheia
    const monthNum = onlyDate.split("-")[1];
    
    // conver o mês númerico em string
    const yearMonth = {'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'};
    let month = '';
    for (let key in yearMonth) {
      if (key === monthNum) {
        month = yearMonth[key];
      };
    };

    const country = dataDay.countryName;

    const time = fullDate.split(" ")[1];
    
    document.getElementById("name").textContent = dataWeather.name;
    document.getElementById("temp").textContent = dataWeather.main.temp.toFixed(1);
    document.getElementById("weather-main").textContent = dataWeather.weather[0].main;
    document.getElementById("temp-min").textContent = dataWeather.main.temp_min.toFixed(1);
    document.getElementById("temp-max").textContent = dataWeather.main.temp_max.toFixed(1);
    document.getElementById("region").textContent = dataDay.regionName;
    document.getElementById("day-week").textContent = capitalizeFirstLetter(dayWeek);
    document.getElementById("day").textContent = day;
    document.getElementById("year").textContent = year;
    document.getElementById("month").textContent = month;
    document.getElementById("country").textContent = country;
    document.getElementById("time").textContent = time;
    
  } catch (error) {
    document.getElementById("error").textContent = "Erro no servidor";
    return;
  }
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