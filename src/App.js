import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimates: 'aggresstimates'
    };
  }

  render() {
    return (<div className="App">
      <AppHeader></AppHeader>
      <ul id="destinations-list"></ul>
      {this.state.estimates}
    </div>);
  }
}
export default App;
