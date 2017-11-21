import React, {Component} from 'react';
import './App.css';
import EstimateView from './EstimateView';
import MapView from './MapView';
import InfoView from './InfoView';
import AppFooter from './AppFooter';
import {Types} from './utils';

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
      view: Types.View.ESTIMATE
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({view});
  }

  switchView() {
    if (this.state.view === Types.View.MAP) {
      return <MapView></MapView>;
    } else if (this.state.view === Types.View.INFO) {
      return <InfoView></InfoView>;
    } else if (this.state.view === Types.View.DONATE) {
      return <div>DONATE</div>;
    } else {
      return <EstimateView></EstimateView>
    }
  }

  render() {
    return (
      <div>
        {this.switchView()}
        <AppFooter changeView={this.changeView}></AppFooter>
      </div>
    );
  }
}
