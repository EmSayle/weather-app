import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import axios from 'axios';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    this.getForecast('Manchester');
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  getForecast(city) {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((res) => {
        this.setState({
          location: {
            city: res.data.location.city,
            country: res.data.location.country,
          },
          forecasts: res.data.forecasts,
        });
      });
  }

  render() {
    const selectedDate = this.state.selectedDate;
    const selectedForecast =
    this.state.forecasts.find(forecast => forecast.date === selectedDate);

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
          }


      </div>
    );
  }
}


export default App;
