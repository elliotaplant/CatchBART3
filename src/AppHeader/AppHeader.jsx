import React, {Component} from 'react';
import {MathUtils, Types,} from '../utils';
import './AppHeader.css';

class AppHeader extends Component {

  // Calculates the font size based on the number of characters in the header
  headerStyleFromHeaderText(headerText) {
    const maxSize = 300; // vw
    let size = 1;
    if (headerText.length) {
      size = maxSize / (20 + headerText.length);
    }
    return {
      'font-size': size + 'vw'
    };
  }

  // Displays the distance to the closes station if possible
  distanceToClosestStation() {
    return (
      <h2 className="distance-to-closest-station">
        {MathUtils.roundNumberTo1DecimalPlace(this.props.closestStation.distance)}
        miles
      </h2>
    )
  }

  render() {
    if (this.props.closestStation) {
      const headerText = this.props.closestStation.longName;
      const headerStyle = this.headerStyleFromHeaderText(headerText);
      return (
        <header className="page-header">
          <h1 className="main-title" style={headerStyle}>{headerText}</h1>
          {this.distanceToClosestStation()}
          {this.props.children}
        </header>
      );
    }
    return null;
  }
}
export default AppHeader;
