/* @flow */

import React from 'react';
import Collapsible from 'react-collapsible';

import CharacterSpell from './character_spell';

function label(text: string) {
  return (
    <h4>{text}</h4>
  );
}

export default function CharacterSpells(props: {
  spells: array,
}) {
  const characterSpells: Object = props.spells.map((spell) => {
    return (
      <Collapsible trigger={label(spell.name)} open={true}>
        <CharacterSpell
          castingTime={spell.casting_time}
          description={spell.desc}
          duration={spell.duration}
          higherLevel={spell.higher_level}
          level={spell.level}
          range={spell.range}
          />
      </Collapsible>
    );
  });

  return (
    <div>
      {characterSpells}
    </div>
  );
};
