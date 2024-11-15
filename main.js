function cleanVal() {
  document.getElementById("input-search").value = "";
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getWeather(city = "São Paulo") {  
  try {
    const responseWeather = await fetch(`http://127.0.0.1:5501/api/weather?city=${city}`);
    const { weather, timezone } = await responseWeather.json();

    console.log("Weather Data:", weather);
    console.log("Timezone Data:", timezone);

    const fullDate = timezone.formatted;

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
    const month = yearMonth[monthNum];

    const country = timezone.countryName;

    const time = fullDate.split(" ")[1];
    
    document.getElementById("name").textContent = weather.name;
    document.getElementById("temp").textContent = weather.main.temp.toFixed(1);
    document.getElementById("weather-main").textContent = weather.weather[0].main;
    document.getElementById("temp-min").textContent = weather.main.temp_min.toFixed(1);
    document.getElementById("temp-max").textContent = weather.main.temp_max.toFixed(1);
    document.getElementById("region").textContent = timezone.regionName;
    document.getElementById("day-week").textContent = capitalizeFirstLetter(dayWeek);
    document.getElementById("day").textContent = day;
    document.getElementById("year").textContent = year;
    document.getElementById("month").textContent = month;
    document.getElementById("country").textContent = country;
    document.getElementById("time").textContent = time;
    
  } catch (error) {
    document.getElementById("error").textContent = "Erro no servidor";
  };
};

getWeather();

async function getCity() {
    const city = document.getElementById("input-search");
    const cityName = city.value.trim();
    const error = document.getElementById("error");

    error.textContent = "";
    if (cityName === '' || !isNaN(Number(cityName))) {
        error.textContent = "Digite o nome de uma cidade para consulta!";
        return;
    }

    getWeather(cityName);
};