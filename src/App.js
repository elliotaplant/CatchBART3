import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import {BartUtils, LocationUtils, ObjectUtils, Types} from './utils';
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
    this.state = {
      transportationMode: Types.TransportationMode.WALKING
    };

    this.init();
  }

  init() {
    LocationUtils
      .getUsersCurrentLocation()
      .then(location => this.setState({userLocation: location}))
      .then(() => BartUtils.findClosestStation(this.state.userLocation))
      .then(closestStation => this.setState({closestStation}))
      .then(() => BartUtils.getStationDestionationEstimates(this.state.closestStation.abbr))
      .then(destinations => this.setState({destinations}))
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
    return (
      <div className="App">
        <AppHeader loadingState={this.calculateLoadingState()} closestStation={this.state.closestStation}></AppHeader>
        <DestinationsList
          destinations={this.state.destinations}
          stationDistance={ObjectUtils.safeGet(() => this.state.closestStation.distance)}
          transportationMode={this.state.transportationMode}></DestinationsList>
      </div>
    );
  }
}
export default App;
