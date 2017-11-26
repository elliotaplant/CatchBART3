import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Types} from '../utils';
import './AppFooter.css';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  viewIcons() {
    return [
      {
        icon: 'list',
        view: Types.View.ESTIMATE
      }, {
        icon: 'map',
        view: Types.View.MAP
      }, {
        icon: 'gear',
        view: Types.View.SETTINGS
      },
    ].map(viewIcon => this.mapIcon(viewIcon));
  }

  wrappedChangeView(view) {
    return() => this
      .props
      .changeView(view);
  }

  currentViewClass(view) {
    if (view === this.props.currentView) {
      return 'current-view';
    }
    return null;
  }

  mapIcon({icon, view}) {
    return <FontAwesome
      onClick={this.wrappedChangeView(view)}
      name={icon}
      size="2x"
      className={this.currentViewClass(view)}
      key={icon}></FontAwesome>
  }

  render() {
    return (<footer className="app-footer">
      {this.viewIcons()}
    </footer>);
  }
}
