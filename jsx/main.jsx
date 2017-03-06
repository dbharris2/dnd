/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DNDContainer from './dnd_container';

const App = () => (
  <MuiThemeProvider>
    <DNDContainer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
