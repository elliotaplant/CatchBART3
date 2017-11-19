import React from 'react';
import {Types} from '../utils';
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
  }

  return loadingText && <div className="loading-message">{loadingText}</div>;
}
