import React from 'react';
import './DestinationsList.css';

/*
props = Estimate[]
*/
function DestinationsList(props) {
  // Assume we don't have any estimates
  let concattedEstimates = [];
  // Attempt to get the estimates from the props
  try {
    concattedEstimates = [...props.estimates.northbound, ...props.estimates.southbound];
  } catch (e) { }

  const estimateElements = concattedEstimates.map(estimate => {
    return <li>Estimate! {estimate.time}</li>;
  })

  return <ul>{estimateElements}</ul>;
}
export default DestinationsList;
