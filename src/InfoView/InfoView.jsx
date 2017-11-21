import React, {Component} from 'react';
import './InfoView.css';
import FontAwesome from 'react-fontawesome';
import {Types} from '../utils';

export default class InfoView extends Component {
  constructor(props) {
    super(props);

    let transportationMode = Types.TransportationMode.WALKING;
    try {
      transportationMode = localStorage.getItem(Types.LocalStorageKey.TRANSPORTATION);
      if (!transportationMode) {
        transportationMode = Types.TransportationMode.WALKING;
      }
    } catch (e) {
      // Maybe set a cookie here?
    }
    this.state = {transportationMode};

  }
  transportSelectionElement({mode, icon,}) {
    return <FontAwesome
      className={mode === this.state.transportationMode && 'selected'}
      name={icon}
      size="3x"
      onClick={() => this.selectTransportMode(mode)}></FontAwesome>
  }

  selectTransportMode(mode) {
    localStorage.setItem(Types.LocalStorageKey.TRANSPORTATION, mode);
    this.setState({ transportationMode: mode });
  }

  render() {
    const transportationElements = [
      {
        mode: Types.TransportationMode.WALKING,
        icon: 'hand-o-right',
      }, {
        mode: Types.TransportationMode.BICYCLING,
        icon: 'bicycle',
      }, {
        mode: Types.TransportationMode.DRIVING,
        icon: 'car',
      },
    ].map(transportationType => this.transportSelectionElement(transportationType));

    return (
      <div className="info-view">
        <h1>Settings</h1>
        <h2>Transportation mode</h2>
        <div className="transportation-selection-area">
          {transportationElements}
        </div>

        <p>To save this app to your homescreen, press the box with the arrow and then press 'Save to home screen'</p>
        <p>Made by Elliot Plant</p>
        <a mailto="elliotaplant@gmail.com">elliotaplant@gmail.com</a>
        <a href="https://github.com/elliotaplant/CatchBART3">github.com/elliotaplant/CatchBART3</a>

      </div>
    );
  }
}
