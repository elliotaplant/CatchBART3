import React, {Component} from 'react';
import {MathUtils, Types} from '../utils';
import './AppHeader.css';

class AppHeader extends Component {
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

  distanceToClosestStation() {
    if (this.props.loadingState === Types.LoadingState.LOADED) {
      return (<h2 id="disance-to-closest-station">
        {MathUtils.roundNumberTo1DecimalPlace(this.props.closestStation.distance)} miles
      </h2>)
    }
    return null;
  }

  render() {
    return (<header className="page-header">
      <h1 id="main-title">{this.headerTextFromLoadingState()}</h1>
      {this.distanceToClosestStation()}
    </header>);
  }
}
export default AppHeader;
