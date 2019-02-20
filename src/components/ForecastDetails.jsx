import React from 'react';
import moment from 'moment';

const ForecastDetails = (props) => (
  <span className="forecast">
    <div className="forecast-summary__date">{moment(props.forecast.date).format('ddd Do MMM')}</div>
    <div className="forecast-summary__temperature-min">{props.forecast.temperature.min}</div>
    <div className="forecast-summary__temperature-max">{props.forecast.temperature.max}</div>
    <div className="forecast-summary__humidity">{props.forecast.humidity}</div>
    <div className="forecast-summary__wind-speed">{props.forecast.wind.speed}</div>
    <div className="forecast-summary__wind-direction">{props.forecast.wind.direction}</div>
  </span>
);

export default ForecastDetails;
