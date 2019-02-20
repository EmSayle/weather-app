import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

import '../styles/forecast-sums.scss';


const ForecastSummary = (props) => (
  <span>
    <div className="forecast-summary__date"><span>{moment(props.date).format('ddd Do MMM')}</span></div>
    <div className="forecast-summary__temperature">{props.temperature}</div>
    <div className="forecast-summary__description">{props.description}</div>
    <br />
    <div className="forecast-summary__icon"><WeatherIcon name="owm" iconId={props.icon} className="icons" /></div>
    <br />
    <button onClick={() => props.onSelect(props.date)}>More Details</button>
  </span>);


ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastSummary;
