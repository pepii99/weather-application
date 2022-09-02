import './forecast-day.css';

// const getTime = () => {
//   const date = new Date();
//   const hour = date.getHours();
//   const mins = date.getMinutes();
//   const together = [hour, mins].join(':');
//   return together;
// };

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

  return date.toString().slice(16, 21);
};

const ForecastDay = ({ data, day }) => {
  return (
    <div className='forecast-day'>
      <div className='forecast-data'>
        <p className='day'>{day}</p>
        <p className='time'>{getTime()}</p>
        <p className='description'>{data.weather[0].description}</p>
        <p className='temp'>{Math.round(data.main.temp_max)}°C</p>
      </div>
      <div className='forecast-day-img'>
        <img
          src={`animated/${data.weather[0].icon}.svg`}
          alt='forecast-weather'
          className='forecast-day-icon'
        />
      </div>
    </div>
  );
};

export default ForecastDay;
