import React, {Component} from 'react';
import AppHeader from './AppHeader';
import LoadingMessage from './LoadingMessage';
import DestinationsList from './DestinationsList';
import {BartUtils, LocationUtils, ObjectUtils, Types} from '../utils';
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
    this
      .updateClosestStation()
      .then(() => this.updateStationEstimates())
      .catch(error => this.showEstimatesError(error))
    }

  updateClosestStation() {
    return LocationUtils
      .getUsersCurrentLocation()
      .then(location => BartUtils.findClosestStation(location))
      .then(currentStation => this.props.changeCurrentStation(currentStation))
      .catch(error => this.showStationLocationError(error))
    }

  updateStationEstimates() {
    return BartUtils
      .getStationDestionationEstimates(this.props.currentStation.abbr)
      .then(destinations => this.props.changeDestinations(destinations))
      .catch(error => this.showEstimatesError(error));
  }

  removeErrors() {
    this.setState({stationLocationError: null, estimatesError: null,})
  }

  showStationLocationError(error) {
    this.setState({stationLocationError: true});
    console.error('Station location error', error);
  }

  showEstimatesError(error) {
    this.setState({estimatesError: true});
    console.error('Estimates error', error);
  }

  calculateLoadingState() {
    if (this.props.estimatesError) {
      return Types.LoadingState.ESTIMATES_ERROR;
    } else if (this.props.stationLocationError) {
      return Types.LoadingState.STATION_LOCATION_ERROR;
    } else if (this.props.currentStation) {
      if (this.props.destinations) {
        return Types.LoadingState.LOADED;
      }
      return Types.LoadingState.LOADING_TIME_ESTIMATES;
    }
    return Types.LoadingState.GETTING_USER_LOCATION;
  }

  refreshButtons() {
    return (
      <div className="refresh-buttons">
        <button className="refresh-station-button" onClick={this.updateFullPath}>Refresh</button>
      </div>
    )
  }

  render() {
    return (
      <div className={this.calculateLoadingState()}>
        <AppHeader currentStation={this.props.currentStation}>
          {this.refreshButtons()}
        </AppHeader>
        <LoadingMessage loadingState={this.calculateLoadingState()}></LoadingMessage>
        <DestinationsList
          destinations={this.props.destinations}
          stationDistance={ObjectUtils.safeGet(() => this.props.currentStation.distance)}
          transportationMode={this.state.transportationMode}></DestinationsList>
      </div>
    );
  }
}
