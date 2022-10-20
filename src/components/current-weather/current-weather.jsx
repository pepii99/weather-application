import './current-weather.css';

const CurrentWeather = ({ data }) => {
  const { feels_like, humidity, pressure, temp } = data.main;

  const getTime = () => {
    const date = new Date();
    date
      .toLocaleString('en-US', {
        hour12: false,
        year: '2-digit',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .toString();

    return date.toString().slice(0, 21);
  };

  return (
    <div className='current-weather'>
      <div className='left'>
        <p className='weather-description'>{data.weather[0].main}</p>
        <p className='city'>{data.name}</p>
        <p className='time'>{getTime()}</p>
        <p className='temperature'>{Math.round(temp)}°C</p>
        <img
          src={`animated/${data.weather[0].icon}.svg`}
          alt='weather'
          className='weather-icon'
        />
      </div>
      <div className='right'>
        <div className='details'>
          <div className='parameter-row'>
            <div className='parameter-icon'>
              <img src='animated/thermometer.svg' alt='thermometer' />
            </div>
            <div className='parameter-label'>
              Feels like
              <div className='parameter-value'>{Math.round(feels_like)}°C</div>
            </div>
          </div>
          <div className='parameter-row'>
            <div className='parameter-icon'>
              <img src='animated/wind.svg' alt='wind-speed' />
            </div>
            <div className='parameter-label'>
              Wind
              <div className='parameter-value'>
                {Math.floor(data.wind.speed)} km/h
              </div>
            </div>
          </div>
          <div className='parameter-row'>
            <div className='parameter-icon'>
              <img src='animated/humidity.svg' alt='humidity' />
            </div>
            <div className='parameter-label'>
              Humidity
              <div className='parameter-value'>{humidity}%</div>
            </div>
          </div>
          <div className='parameter-row'>
            <div className='parameter-icon'>
              <img src='animated/weather.svg' alt='pressure' />
            </div>
            <div className='parameter-label'>
              Pressure
              <div className='parameter-value'>{pressure} hPa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
