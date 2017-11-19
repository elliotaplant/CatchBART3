import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import LoadingMessage from './LoadingMessage';
import DestinationsList from './DestinationsList';
import {BartUtils, LocationUtils, ObjectUtils, Types} from './utils';

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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transportationMode: Types.TransportationMode.WALKING
    };

    this.updateFullPath = this
      .updateFullPath
      .bind(this);
    this.updateClosestStation = this
      .updateClosestStation
      .bind(this);
    this.updateStationEstimates = this
      .updateStationEstimates
      .bind(this);
    this.calculateLoadingState = this
      .calculateLoadingState
      .bind(this);
    this.refreshButtons = this
      .refreshButtons
      .bind(this);

    this.updateFullPath();
  }

  updateFullPath() {
    this.setState({userLocation: null, closestStation: null, destinations: null})
    this
      .updateClosestStation()
      .then(() => this.updateStationEstimates())
  }

  updateClosestStation() {
    this.setState({userLocation: null, closestStation: null,})
    return LocationUtils
      .getUsersCurrentLocation()
      .then(location => this.setState({userLocation: location}))
      .then(() => BartUtils.findClosestStation(this.state.userLocation))
      .then(closestStation => this.setState({closestStation}))
  }

  updateStationEstimates() {
    this.setState({destinations: null})
    return BartUtils
      .getStationDestionationEstimates(this.state.closestStation.abbr)
      .then(destinations => this.setState({destinations}));
  }

  calculateLoadingState() {
    if (this.state.userLocation) {
      if (this.state.closestStation) {
        if (this.state.destinations) {
          return Types.LoadingState.LOADED;
        }
        return Types.LoadingState.LOADING_TIME_ESTIMATES;
      }
      return Types.LoadingState.FINDING_CLOSEST_STATION
    }
    return Types.LoadingState.GETTING_USER_LOCATION;
  }

  refreshButtons() {
    return (
      <div className="refresh-buttons">
        <button className="refresh-estimates-button" onClick={this.updateStationEstimates}>Refresh Estimates</button>
        <button className="refresh-station-button" onClick={this.updateFullPath}>Refresh Location</button>
      </div>
    )
  }

  render() {
    return (
      <div className={`App ${this.calculateLoadingState()}`}>
        <AppHeader closestStation={this.state.closestStation}>
          {this.refreshButtons()}
        </AppHeader>
        <LoadingMessage loadingState={this.calculateLoadingState()}></LoadingMessage>
        <DestinationsList
          destinations={this.state.destinations}
          stationDistance={ObjectUtils.safeGet(() => this.state.closestStation.distance)}
          transportationMode={this.state.transportationMode}></DestinationsList>
      </div>
    );
  }
}
