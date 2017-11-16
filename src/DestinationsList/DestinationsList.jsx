import React, {Component} from 'react';
import TrainEstimate from './TrainEstimate';
import './DestinationsList.css';

/*

Destination = {
  destination: string, // longName
  estimate: Estimate[]
}

props = {
  destinations: Destination[],
  stationDistance: number, // miles
}
*/
export default class DestinationsList extends Component {

  createTrainEstimate(trainEstimate) {
    return <TrainEstimate
      estimate={trainEstimate}
      stationDistance={this.props.stationDistance}
      transportationMode={this.props.transportationMode}></TrainEstimate>;
  }

  lineColorClassForDestination(destination) {
    return `line-color-${destination
      .estimate[0]
      .color}`
      .toLowerCase();
  }

  render() {
    const destinationElements = (this.props.destinations || []).map(destination => {
      return <li className="destination-entry-item">
        <div className={'line-color ' + this.lineColorClassForDestination(destination)}></div>
        <div className="destination-entry-info">
          <div className="destination-long-name">
            {destination.destination}
          </div>
          <div className="estimates-list">
            {
              destination
                .estimate
                .map(estimate => this.createTrainEstimate(estimate))
            }
          </div>
        </div>
      </li>;
    });
    return <ul>{destinationElements}</ul>;
  }
}
