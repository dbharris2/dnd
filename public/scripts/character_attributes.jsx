/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import {renderArrayWithTitle} from './render_helpers.jsx'

function horizontalElement(title: string, description: string) {
  const style: Object = {
    marginRight: '5px',
  };
  return (
    <Flexbox>
      <Flexbox style={style}>
        <b>{title}</b>
      </Flexbox>
      <Flexbox>
        {description}
      </Flexbox>
    </Flexbox>
  );
}

export default function CharacterAttributes(props: {
  attributes: Object,
}) {
  return (
    <Flexbox flexDirection='row' justifyContent='space-around'>
      <Flexbox flexDirection='column'>
        {horizontalElement('CHA:', props.attributes.charisma)}
      </Flexbox>
      <Flexbox flexDirection='column'>
        {horizontalElement('CON:', props.attributes.constitution)}
      </Flexbox>
      <Flexbox flexDirection='column'>
        {horizontalElement('DEX:', props.attributes.dexterity)}
      </Flexbox>
      <Flexbox flexDirection='column'>
        {horizontalElement('INT:', props.attributes.intelligence)}
      </Flexbox>
      <Flexbox flexDirection='column'>
        {horizontalElement('STR:', props.attributes.strength)}
      </Flexbox>
      <Flexbox flexDirection='column'>
        {horizontalElement('WIS:', props.attributes.wisdom)}
      </Flexbox>
    </Flexbox>
  );
};
