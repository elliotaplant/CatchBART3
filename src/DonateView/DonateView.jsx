import React, {Component} from 'react';
import './DonateView.css';
import FontAwesome from 'react-fontawesome';
import {Types} from '../utils';

export default class DonateView extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    let hasDonated = null;

    try {
      hasDonated = localStorage.getItem(Types.LocalStorageKey.DONATED);
    } catch (e) {
      hasDonated = Types.Donated.NOT_DONATED;
    }
    this.state = {hasDonated};
  }

  setDonated(hasDonated) {
    console.log('hasDonated', hasDonated);
    localStorage.setItem(Types.LocalStorageKey.DONATED, hasDonated);
    this.setState({hasDonated});
  }

  toggleDonated() {
    const newDonated = this.state.hasDonated === Types.Donated.HAS_DONATED
      ? Types.Donated.NOT_DONATED
      : Types.Donated.HAS_DONATED;

    this.setDonated(newDonated);
  }

  donationToggle() {
    return (
      <FontAwesome
        className={'donation-toggle ' + this.state.hasDonated}
        name={this.state.hasDonated === Types.Donated.HAS_DONATED
          ? 'toggle-on'
          : 'toggle-off'}
        onClick={() => this.toggleDonated()}></FontAwesome>
    );
  }

  render() {
    return (
      <div className="donation-view">
        <h1>Donations</h1>
        <p>Please consider donating to this charity to help support women in softare</p>
        <label>I donated! Please don't bug me any more</label>
        {this.donationToggle()}
      </div>
    );
  }
}
