import React, {Component} from 'react';
import './App.css';
import ReactGA from 'react-ga';
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
    };

    // initialize google analytics with unique tracking number
    ReactGA.initialize('UA-110477899-1');

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
    ReactGA.pageview(view);
    this.setState({view});
  }

  changeTransportationMode(transportationMode) {
    ReactGA.event({
      category: 'Settings',
      action: 'Change Transportation Mode',
      value: transportationMode
    });

    this.setState({transportationMode});
  }

  changeDonated(donated) {
    ReactGA.event({
      category: 'Settings',
      action: 'Change Donated',
      value: donated
    });

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
        destinations={this.state.destinations}
        transportationMode={this.state.transportationMode}></EstimateView>
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
