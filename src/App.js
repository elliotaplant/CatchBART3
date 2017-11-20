import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import LoadingMessage from './LoadingMessage';
import EstimateView from './EstimateView';
import DestinationsList from './DestinationsList';
import AppFooter from './AppFooter';
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
  }


  render() {
    return (
      <div>
        <EstimateView></EstimateView>
        <AppFooter></AppFooter>
      </div>
    );
  }
}
