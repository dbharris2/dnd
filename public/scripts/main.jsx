/* @flow */

const React = require('react');
const ReactDOM = require('react-dom');
const SpellsGrid = require('./spellsGrid.jsx');

ReactDOM.render(
  <SpellsGrid url='/api/spells' />,
  document.getElementById('content')
);
