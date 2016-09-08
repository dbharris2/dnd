var React = require('react');
var ReactDOM = require('react-dom');
var SpellsGrid = require('./spellsGrid.jsx');

ReactDOM.render(
  <SpellsGrid url='/api/spells' />,
  document.getElementById('content')
);
