require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5501;

app.use(cors());
app.use(express.json());

app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
    const apiKeyWeather = process.env.API_KEY_OPENWEATHER;
    const apiKeyTimezone = process.env.API_KEY_TIMEZONE;

    try {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKeyWeather}`);
        const weatherData = await weatherResponse.json();

        const { lat, lon } = weatherData.coord;

        const timezoneResponse = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKeyTimezone}&format=json&by=position&lat=${lat}&lng=${lon}`);
        const timezoneData = await timezoneResponse.json();

        res.json({
            weather: weatherData,
            timezone: timezoneData
        });
    } catch (error) {
        res.status(500).json({error: 'Erro ao obter dados das APIs'});
    };
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});