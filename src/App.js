import React, {Component} from 'react';
import './App.css';
import EstimateView from './EstimateView';
import MapView from './MapView';
import SettingsView from './SettingsView';
import DonateView from './DonateView';
import AppFooter from './AppFooter';
import {Types} from './utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: Types.View.ESTIMATE,
      transportationMode: Types.TransportationMode.WALKING,
    }

    this.initializeLocalStorageState();
    this.state = {
      ...this.state,
      ...this.loadLocalStorageState(),
    };

    this.changeView = this
      .changeView
      .bind(this);
    this.changeTransportationMode = this
      .changeTransportationMode
      .bind(this);
    this.changeCurrentStation = this
      .changeCurrentStation
      .bind(this);
    this.changeDestinations = this
      .changeDestinations
      .bind(this);
  }

  // Sets the initial localStorage state if it is not already set
  initializeLocalStorageState() {
    try {
      if (!localStorage.getItem(Types.LocalStorageKey.TRANSPORTATION)) {
        localStorage.setItem(Types.LocalStorageKey.TRANSPORTATION, Types.TransportationMode.WALKING);
      }
      if (!localStorage.getItem(Types.LocalStorageKey.DONATED)) {
        localStorage.setItem(Types.LocalStorageKey.DONATED, Types.TransportationMode.NOT_DONATED);
      }
    } catch (e) {
      // Consider using cookies
    }
  }

  // Loads initial state of app from localStorage
  loadLocalStorageState() {
    try {
      return {
        transportationMode: localStorage.getItem(Types.LocalStorageKey.TRANSPORTATION),
        donated: localStorage.getItem(Types.LocalStorageKey.DONATED)
      };
    } catch (e) {
      return {};
    }
  }

  changeView(view) {
    this.setState({view});
  }

  changeTransportationMode(transportationMode) {
    this.setState({transportationMode});
  }

  changeDonated(donated) {
    this.setState({donated});
  }

  changeCurrentStation(currentStation) {
    this.setState({currentStation});
  }

  changeDestinations(destinations) {
    this.setState({destinations});
  }

  switchView() {
    if (this.state.view === Types.View.MAP) {
      return <MapView></MapView>;
    } else if (this.state.view === Types.View.SETTINGS) {
      return <SettingsView
        changeTransportationMode={this.changeTransportationMode}
        transportationMode={this.state.transportationMode}></SettingsView>;
    } else if (this.state.view === Types.View.DONATE) {
      return <DonateView changeDonated={this.changeDonated} donated={this.state.donated}></DonateView>;
    } else {
      return <EstimateView
        changeCurrentStation={this.changeCurrentStation}
        changeDestinations={this.changeDestinations}
        currentStation={this.state.currentStation}
        destinations={this.state.destinations}></EstimateView>
    }
  }

  render() {
    return (
      <div>
        {this.switchView()}
        <AppFooter changeView={this.changeView} donated={this.state.donated} currentView={this.state.view}></AppFooter>
      </div>
    );
  }
}
