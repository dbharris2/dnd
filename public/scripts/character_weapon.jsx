/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import {horizontalElement, verticalElement} from './render_helpers.jsx';

export default function CharacterWeapon(props: {
  attack: string,
  damage: string,
  damageType: string,
  description: string,
  range: string,
}) {
  return (
    <Flexbox flexDirection='column'>
      <Flexbox flexDirection='row' justifyContent='space-around'>
        {horizontalElement('Attack:', props.attack)}
        {horizontalElement('Damage:', props.damage)}
        {horizontalElement('Damage Type:', props.damageType)}
        {horizontalElement('Range:', props.range)}
      </Flexbox>
      <Flexbox>
        {verticalElement('Description', props.description)}
      </Flexbox>
    </Flexbox>
  );
};
