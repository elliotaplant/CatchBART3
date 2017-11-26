import React, {Component} from 'react';
import './SettingsView.css';
import FontAwesome from 'react-fontawesome';
import {Types} from '../utils';

export default class SettingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceType: this.getMobileOperatingSystem()
    };
  }
  transportSelectionElement({mode, icon,}) {
    return <FontAwesome
      className={mode === this.props.transportationMode
        ? 'selected'
        : null}
      name={icon}
      size="3x"
      onClick={() => this.selectTransportMode(mode)}
      key={mode}></FontAwesome>
  }

  selectTransportMode(mode) {
    localStorage.setItem(Types.LocalStorageKey.TRANSPORTATION, mode);
    this
      .props
      .changeTransportationMode(mode);
  }

  /**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
  getMobileOperatingSystem() {
    try {

      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return Types.DeviceType.WINDOWS;
      }

      if (/android/i.test(userAgent)) {
        return Types.DeviceType.ANDROID;
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return Types.DeviceType.IOS;
      }
    } catch (e) {}

    return Types.DeviceType.UNKNOWN;
  }

  saveToHomeScreenText() {
    if (this.state.deviceType === Types.DeviceType.IOS) {
      return <p>To get quick access to this app on your iOS device, you can save it to your homescreen by opening
        <a href={window.location.href}>
          {' ' + window.location.host + window.location.pathname + ' '}</a>
        in Safari
        <FontAwesome className="safari-icon" name="safari"></FontAwesome>, pressing the
        <img className="ios-share-icon" src="ios-share-icon.png" alt="ios-share-icon"/>
        icon at the bottom of the page, and then pressing the
        <img className="ios-add-to-homescreen" src="ios-add-to-homescreen.png" alt="ios-add-to-homescreen"/>
        button
      </p>
    } else if (this.state.deviceType === Types.DeviceType.ANDROID) {
      return <p>To get quick access to this app on your Android device, you can save it to your homescreen by
        opening
        <a href={window.location.href}>
          {' ' + window.location.host + window.location.pathname + ' '}</a>
        in Chrome&nbsp;
        <FontAwesome className="chrome-icon" name="chrome"></FontAwesome>, pressing the&nbsp;
        <img className="android-menu-icon" src="android-menu-icon.png" alt="android-menu-icon"/>&nbsp;
        icon at the top-right of the page, and then pressing "Add to Home Screen"
      </p>
    }
    return null;
  }

  render() {
    const transportationElements = [
      {
        mode: Types.TransportationMode.WALKING,
        icon: 'blind',
      }, {
        mode: Types.TransportationMode.BICYCLING,
        icon: 'bicycle',
      }, {
        mode: Types.TransportationMode.DRIVING,
        icon: 'car',
      },
    ].map(transportationType => this.transportSelectionElement(transportationType));

    return (
      <div className="settings-view">
        <div className="page-header">
          <h1 className="main-title">Settings</h1>
        </div>
        <div className="scroll-area">

          <div className="transportation-mode section">
            <h2 className="section-header">Transportation mode</h2>
            <div className="transportation-selection-area">
              {transportationElements}
            </div>
          </div>

          <div className="save-to-homescreen section">
            <h2 className="section-header">Add to Home Screen</h2>
            {this.saveToHomeScreenText()}
          </div>

          <div className="credits section">
            <h2 className="section-header">Author</h2>
            <div className="author-text-line">Made by&nbsp;
              <a href="http://www.elliotplant.com">
                Elliot Plant</a>
            </div>
            <div className="author-text-line">Let me know what you think!&nbsp;
              <a href="mailto:elliotaplant@gmail.com?Subject=CatchBART">
                elliotaplant@gmail.com</a>
            </div>
            <div className="author-text-line">Contribute to this project on&nbsp;
              <a href="https://github.com/elliotaplant/CatchBART3">
                GitHub</a>
            </div>
            <div className="fake-footer"></div>
          </div>
        </div>

      </div>
    );
  }
}
