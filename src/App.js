import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import {BartUtils, LocationUtils, Types} from './utils';
import DestinationsList from './DestinationsList';

// Base class for the app - holds state for entire app
/*
Location: [lat, long]

Station: {
  name: string,
  abbr: string
  location: Location,
  distance: number
}

Estimate: {
  ???
}
state = {
  userLocation: Location,
  closestStation: Station,
  estimates: {
    northbound: Estimate[],
    southbound: Estimate[],
  }
}
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.init();
  }

  init() {
    LocationUtils
      .getUsersCurrentLocation()
      .then(location => this.setState({userLocation: location}))
      .then(() => BartUtils.findClosestStation(this.state.userLocation))
      .then(closestStation => this.setState({closestStation}))
      .then(() => this.getStationEstimates(this.state.closestStation.abbr))
      .then(estimates => this.setState({estimates}))
  }

  getStationEstimates(abbr) {
    return BartUtils.getStationEstimates(abbr);
  }

  calculateLoadingState() {
    if (this.state.userLocation) {
      if (this.state.closestStation) {
        if (this.state.estimates) {
          return Types.LoadingState.LOADED;
        }
        return Types.LoadingState.LOADING_TIME_ESTIMATES;
      }
      return Types.LoadingState.FINDING_CLOSEST_STATION
    }
    return Types.LoadingState.GETTING_USER_LOCATION;
  }

  render() {
    return (<div className="App">
      <AppHeader loadingState={this.calculateLoadingState()}
        closestStation={this.state.closestStation}></AppHeader>
      <DestinationsList estimates={this.state.estimates}></DestinationsList>
    </div>);
  }
}
export default App;
