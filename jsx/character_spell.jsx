/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import {horizontalElement, verticalElement} from './render_helpers.jsx';

export default function CharacterSpell(props: {
  castingTime: string,
  description: string,
  duration: string,
  higherLevel: ?string,
  level: string,
  range: string,
}) {
  return (
    <Flexbox flexDirection='column'>
      <Flexbox flexDirection='row' justifyContent='space-around'>
        {horizontalElement('Level:', props.level)}
        {horizontalElement('Range:', props.range)}
        {horizontalElement('Casting Time:', props.castingTime)}
        {horizontalElement('Duration:', props.duration)}
      </Flexbox>
      {verticalElement('Description', props.description)}
      {
        props.higherLevel != null ?
          verticalElement('Higher Level', props.higherLevel) :
          <div></div>
      }
    </Flexbox>
  );
};
