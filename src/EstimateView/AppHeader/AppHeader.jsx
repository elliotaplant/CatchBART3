import React, {Component} from 'react';
import {MathUtils} from '../../utils';
import './AppHeader.css';

export default class AppHeader extends Component {

  // Calculates the font size based on the number of characters in the header
  headerStyleFromHeaderText(headerText) {
    const maxSize = 300; // vw
    let size = 1;
    if (headerText.length) {
      size = maxSize / (20 + headerText.length);
    }
    return {
      'fontSize': size + 'vw'
    };
  }

  // Displays the distance to the closes station if possible
  distanceToClosestStation() {
    return (
      <h2 className="distance-to-closest-station">
        {MathUtils.roundNumberTo1DecimalPlace(this.props.currentStation.distance) + ' '}
        miles
      </h2>
    )
  }

  render() {
    if (this.props.currentStation) {
      const headerText = this.props.currentStation.longName;
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
