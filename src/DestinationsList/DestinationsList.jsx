import React from 'react';
import './DestinationsList.css';

/*
props = Estimate[]
*/
function DestinationsList(props) {
  const estimateElements = (props.estimates || []).map(estimate => {
    console.log('estimate',estimate);
    return <li>{estimate.destination} {estimate.estimate.map(e => <span>{e.minutes} </span>)}</li>;
  })

  return <ul>{estimateElements}</ul>;
}
export default DestinationsList;
