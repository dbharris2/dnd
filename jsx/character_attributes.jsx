/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import {renderArrayWithTitle, horizontalElement} from './render_helpers.jsx'

export default function CharacterAttributes(props: {
  attributes: Object,
}) {
  return (
    <Flexbox flexDirection='row' justifyContent='space-around'>
      {horizontalElement('CHA:', props.attributes.charisma)}
      {horizontalElement('CON:', props.attributes.constitution)}
      {horizontalElement('DEX:', props.attributes.dexterity)}
      {horizontalElement('INT:', props.attributes.intelligence)}
      {horizontalElement('STR:', props.attributes.strength)}
      {horizontalElement('WIS:', props.attributes.wisdom)}
    </Flexbox>
  );
};
