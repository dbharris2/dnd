/* @flow */

import React from 'react';
import Collapsible from 'react-collapsible';

import CharacterSpell from './character_spell';
import TitledIcon from './titled_icon';

function titledSpell(name: string, uri: string) {
  return (
    <TitledIcon title={name} uri={uri} />
  );
}

export default function CharacterSpells(props: {
  spells: array,
}) {
  const characterSpells: Object = props.spells.map((spell) => {
    return (
      <Collapsible
        trigger={titledSpell(spell.name, spell.imageUri)}
        open={true}
        >
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
