import React, {Component} from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (<header className="page-header">
      <h1 id="main-title">{this.props.loadingState}</h1>
    </header>);
  }
}
export default AppHeader;
