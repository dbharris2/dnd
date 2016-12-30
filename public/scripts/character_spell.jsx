/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

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

function verticalElement(title: string, description: string) {
  const style: Object = {
    paddingTop: '10px',
  };
  return (
    <Flexbox flexDirection='column' style={style}>
      <Flexbox>
        <b>{title}</b>
      </Flexbox>
      <Flexbox>
        {description}
      </Flexbox>
    </Flexbox>
  );
}

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
