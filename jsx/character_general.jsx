/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import {renderArrayWithTitle, horizontalElement} from './render_helpers.jsx'

export default function CharacterGeneral(props: {
  armorClass: string,
  class: string,
  hitDice: string,
  languages: [],
  level: string,
  maxHP: string,
  proficiency: string,
  race: string,
  senses: [],
  speed: string,
}) {
  return (
    <Flexbox flexDirection='column'>
      <Flexbox flexDirection='row' justifyContent='space-around'>
        <Flexbox flexDirection='column'>
          {horizontalElement('Race:', props.race)}
          {horizontalElement('Armor Class:', props.armorClass)}
        </Flexbox>
        <Flexbox flexDirection='column'>
          {horizontalElement('Class:', props.class)}
          {horizontalElement('Hit dice:', props.hitDice)}
        </Flexbox>
        <Flexbox flexDirection='column'>
          {horizontalElement('Level:', props.level)}
          {horizontalElement('Max HP:', props.maxHP)}
        </Flexbox>
        <Flexbox flexDirection='column'>
          {horizontalElement('Proficiency:', props.proficiency)}
          {horizontalElement('Speed:', props.speed)}
        </Flexbox>
      </Flexbox>
      <Flexbox flexDirection='row' justifyContent='space-around' paddingTop='10px'>
        {renderArrayWithTitle(props.senses, 'Senses')}
        {renderArrayWithTitle(props.languages, 'Languages')}
      </Flexbox>
    </Flexbox>
  );
};
