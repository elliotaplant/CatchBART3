import React, {Component} from 'react';
import AppHeader from './AppHeader';
import LoadingMessage from './LoadingMessage';
import DestinationsList from './DestinationsList';
import {BartUtils, LocationUtils, ObjectUtils, Types,} from '../utils';
import './EstimateView.css';

export default class EstimateView extends Component {
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
      .catch(() => this.showEstimatesError())
  }

  updateClosestStation() {
    this.setState({userLocation: null, closestStation: null,})
    return LocationUtils
      .getUsersCurrentLocation()
      .then(location => this.setState({userLocation: location}))
      .then(() => BartUtils.findClosestStation(this.state.userLocation))
      .then(closestStation => this.setState({closestStation}))
      .catch(() => this.showStationLocationError())
  }

  updateStationEstimates() {
    this.setState({destinations: null})
    return BartUtils
      .getStationDestionationEstimates(this.state.closestStation.abbr)
      .then(destinations => this.setState({destinations}))
      .catch(() => this.showEstimatesError());
  }

  showStationLocationError() {
    this.setState({ stationLocationError: true });
  }

  showEstimatesError() {
    this.setState({ estimatesError: true });
  }

  calculateLoadingState() {
    if (this.state.estimatesError) {
      return 'There was an error retrieving the station estimates from BART';
    } else if (this.state.stationLocationError) {
      return 'We couldn\'t find the closest BART station. Please choose one from the list below';
    } else if (this.state.userLocation) {
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
      <div className={this.calculateLoadingState()}>
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
