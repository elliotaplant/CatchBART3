import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Types} from '../utils';
import './AppFooter.css';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.changeToEstimate = this
      .changeToEstimate
      .bind(this);
  }
  changeToEstimate() {
    this
      .props
      .changeView(Types.View.ESTIMATE);
  }

  return (
    <footer className="app-footer">
      <FontAwesome onClick={this.changeToEstimate} className="estimate-icon" name="list" size="2x"></FontAwesome>
      <FontAwesome onClick={props.changeView(Types.View.MAP)} className="map-icon" name="map" size="2x"></FontAwesome>
      <FontAwesome
        onClick={props.changeView(Types.View.INFO)}
        className="info-icon"
        name="question-circle"
        size="2x"></FontAwesome>
      <FontAwesome
        onClick={props.changeView(Types.View.DONATE)}
        className="donate-icon"
        name="heart"
        size="2x"></FontAwesome>
    </footer>
  )
}
