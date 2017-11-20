import React from 'react';
import FontAwesome from 'react-fontawesome';
import './AppFooter.css';

export default function AppFooter(props) {
  return (<footer className="app-footer">
    <FontAwesome className="donate-icon" name="heart" size="2x"></FontAwesome>
    <FontAwesome className="donate-icon" name="question-circle" size="2x"></FontAwesome>
    <FontAwesome className="info-icon" name="info-circle" size="2x"></FontAwesome>
  </footer>)
}
