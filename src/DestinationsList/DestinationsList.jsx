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

  render() {
    const destinationElements = (this.props.destinations || []).map(destination => {
      return <li className="destination-entry-item">
        <div className="destination-long-name">{destination.destination}</div>
        {
          destination
            .estimate
            .map(estimate => this.createTrainEstimate(estimate))
        }
      </li>;
    });
    return <ul>{destinationElements}</ul>;
  }
}
