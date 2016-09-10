/* @flow */

const React = require('react');
const ReactDOM = require('react-dom');

import List from './list.jsx';
import Grid from './grid.jsx';

var monstersGrid = function() {
  return (
    <div key='/api/monsters'>
      <Grid 
        columns={["name", "size", "type", "alignment"]}
        dataType='json'
        dataUrl='/api/monsters'
        placeholderText='Search Monsters...' />
      <br />
    </div>
  ); 
}

var spellsGrid = function() {
  return (
    <div key='/api/spells'>
      <Grid 
        columns={["name", "range", "components", "school"]}
        dataType='json'
        dataUrl='/api/spells'
        key='/api/spells'
        placeholderText='Search Spells...' />
      <br />
    </div>
  ); 
}

var grid = function(gridType: string) {
  if (gridType === 'monsters') {
    return monstersGrid();
  } else if (gridType === 'spells') {
    return spellsGrid();
  } else {
    return null;
  }
}

ReactDOM.render(
  <List 
    items={['monsters', 'spells']}
    componentBlock={grid} />,
  document.getElementById('content')
);
