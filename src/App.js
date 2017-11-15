import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import DestinationsList from './DestinationsList';

// Base class for the app - holds state for entire app
/*
Location: {
  x: number,
  y: number
}

Station: {
  name: string,
  abbr: string
  coords?: {
    x: number,
    y: number
  },
}

Estimate: {
  ???
}
state = {
  userLocation: Location,
  closestStation: Station,
  estimates: {
    northbound: Estimate[],
    southbound: Estimate[],
  }
}
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimates: 'aggresstimates'
    };
  }

  calculateLoadingState() {
    if (this.state.userLocation) {
      if (this.state.closestStation) {
        if (this.state.estimates) {
          return 'loaded'
        }
        return 'finding closest station';
      }
    }
    return 'getting user location';
  }

  render() {
    return (<div className="App">
      <AppHeader loadingState={this.calculateLoadingState()}></AppHeader>
      <DestinationsList></DestinationsList>
    </div>);
  }
}
export default App;
