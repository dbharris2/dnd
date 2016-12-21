const React: any = require('react');

import {
  renderDictionary,
} from './render_helpers.jsx'

export default function CharacterEquipment(props: {equipment: Object}) {
  return (
    <div>
      {
        props.equipment != null ?
          renderDictionary(props.equipment) :
          <div></div>
      }
    </div>
  );
};
