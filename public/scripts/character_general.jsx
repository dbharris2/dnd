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
          <Flexbox>
            {horizontalElement('Race:', props.race)}
          </Flexbox>
          <Flexbox>
            {horizontalElement('Armor Class:', props.armorClass)}
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection='column'>
          <Flexbox>
            {horizontalElement('Class:', props.class)}
          </Flexbox>
          <Flexbox>
            {horizontalElement('Hit dice:', props.hitDice)}
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection='column'>
          <Flexbox>
            {horizontalElement('Level:', props.level)}
          </Flexbox>
          <Flexbox>
            {horizontalElement('Max HP:', props.maxHP)}
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection='column'>
          <Flexbox>
            {horizontalElement('Proficiency:', props.proficiency)}
          </Flexbox>
          <Flexbox>
            {horizontalElement('Speed:', props.speed)}
          </Flexbox>
        </Flexbox>
      </Flexbox>
      <Flexbox flexDirection='row' justifyContent='space-around' paddingTop='10px'>
        {renderArrayWithTitle(props.senses, 'Senses')}
        {renderArrayWithTitle(props.languages, 'Languages')}
      </Flexbox>
    </Flexbox>
  );
};
