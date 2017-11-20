import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Types} from '../utils';
import './AppFooter.css';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this.viewIcons = [
      { icon: 'list', view: Types.View.ESTIMATE},
      { icon: 'map', view: Types.View.MAP},
      { icon: 'info-circle', view: Types.View.INFO},
      { icon: 'heart', view: Types.View.DONATE},
    ].map(viewIcon => this.mapIcon(viewIcon))
  }

  wrappedChangeView(view) {
    return () => this.props.changeView(view);
  }

  mapIcon({ icon, view }) {
    return <FontAwesome onClick={this.wrappedChangeView(view)} name={icon} size="2x"></FontAwesome>
  }

  render() {
    return (
      <footer className="app-footer">
        {this.viewIcons}
      </footer>
    );
  }
}
