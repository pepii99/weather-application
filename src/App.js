import { useState } from 'react';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import {
  WEATHER_API_URL,
  FORECAST_WEATHER_API_URL,
  WEATHER_API_KEY,
} from './api';
import Forecast from './components/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(', ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // console.log(currentWeatherFetch);

    const forecastWeatherFetch = fetch(
      `${FORECAST_WEATHER_API_URL}/?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // console.log(forecastWeatherFetch);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather(weatherResponse);
        setForecastWeather(forecastResponse);
      })
      .catch((error) => console.error(error));

    // console.log(currentWeather);
    // console.log(forecastWeather);
  };

  return (
    <div className='App'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
