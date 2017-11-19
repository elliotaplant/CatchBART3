import React, {Component} from 'react';
import {MathUtils, Types} from '../utils';
import './AppHeader.css';

class AppHeader extends Component {

  // Gets the header text fron the loading state passed to the header
  headerTextFromLoadingState() {
    if (this.props.loadingState === Types.LoadingState.LOADED) {
      return this.props.closestStation.longName;
    } else if (this.props.loadingState === Types.LoadingState.GETTING_USER_LOCATION) {
      return 'Finding closest BART station';
    } else if (this.props.loadingState === Types.LoadingState.FINDING_CLOSEST_STATION) {
      return 'Finding closest station';
    } else if (this.props.loadingState === Types.LoadingState.LOADING_TIME_ESTIMATES) {
      return 'Loading time estimates';
    }
  }

  // Calculates the font size based on the number of characters in the header
  headerStyleFromHeaderText(headerText) {
    const maxSize = 300; // vw
    let size = 1;
    if (headerText.length) {
      size = maxSize / (20 + headerText.length);
    }
    return { 'font-size': size + 'vw' };
  }

  // Displays the distance to the closes station if possible
  distanceToClosestStation() {
    if (this.props.loadingState === Types.LoadingState.LOADED) {
      return (<h2 className="distance-to-closest-station">
        {MathUtils.roundNumberTo1DecimalPlace(this.props.closestStation.distance)} miles
      </h2>)
    }
    return null;
  }

  render() {
    const headerText = this.headerTextFromLoadingState();
    const headerStyle = this.headerStyleFromHeaderText(headerText);
    return (<header className={`page-header ${this.props.loadingState}`}>
      <h1 className="main-title" style={headerStyle}>{headerText}</h1>
      {this.distanceToClosestStation()}
      {this.props.children}
    </header>);
  }
}
export default AppHeader;
