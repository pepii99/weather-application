import './forecast.css';
import ForecastDay from '../forecast-day/forecast-day';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const todayDay = new Date().getDay();

let forecastDays = WEEK_DAYS.slice(todayDay, WEEK_DAYS.length - 1).concat(
  WEEK_DAYS.slice(0, todayDay - 2)
);

const Forecast = ({ data }) => {
  const forecastData = data.list.filter((_, i) => i % 8 === 0);
  forecastData.shift();

  return (
    <div className='forecast'>
      <label className='title'>Daily</label>
      <div className='forecast-grid'>
        {forecastData.map((element, index) => (
          <ForecastDay data={element} day={forecastDays[index]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
