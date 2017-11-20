import React from 'react';
import {LocationUtils} from '../../../utils';
import './TrainEstimate.css';

/*
Estimate = {
  color: string, // "BLUE"
  delay: string, // "112"
  direction: string, // "South"
  hexcolor: string, // "#0099cc"
  length: string, // "4"
  minutes: string, // "2"
  platform: string, // "1"
}

props = {
  estimate: Estimate
  timeToStation: number // TO BE IMPLEMENTED
}
*/
export default function TrainEstimate(props) {
  const urgencyClass = 'urgency-' + LocationUtils.calculateUrgency(
    props.estimate.minutes,
    props.stationDistance,
    props.transportationMode
  );
  const classNames = ['train-estimate', urgencyClass,].join(' ');
  const minutes = props.estimate.minutes === 'Leaving' ? '0' : props.estimate.minutes;
  return <div className={classNames}>{minutes}</div>;
}
