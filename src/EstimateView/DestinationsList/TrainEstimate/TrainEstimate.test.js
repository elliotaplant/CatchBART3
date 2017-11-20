import React from 'react';
import ReactDOM from 'react-dom';
import DestinationsList from './DestinationsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DestinationsList />, div);
});
