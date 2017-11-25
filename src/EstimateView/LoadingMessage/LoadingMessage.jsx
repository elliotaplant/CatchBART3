import React from 'react';
import {Types} from '../../utils';
import './LoadingMessage.css';

export default function LoadingMessage(props) {

  let loadingText = null;
  // Gets the header text fron the loading state
  if (props.loadingState === Types.LoadingState.GETTING_USER_LOCATION) {
    loadingText = 'Finding closest BART station';
  } else if (props.loadingState === Types.LoadingState.FINDING_CLOSEST_STATION) {
    loadingText = 'Finding closest station';
  } else if (props.loadingState === Types.LoadingState.LOADING_TIME_ESTIMATES) {
    loadingText = 'Loading time estimates';
  } else if (props.loadingState === Types.LoadingState.ESTIMATES_ERROR) {
    loadingText = 'There was an error retrieving the station estimates from BART';
  } else if (props.loadingState === Types.LoadingState.STATION_LOCATION_ERROR) {
    loadingText = 'We couldn\'t find the closest BART station. Please choose one from the list below';
  }

  return loadingText && <div className="loading-message">{loadingText}</div>;
}
