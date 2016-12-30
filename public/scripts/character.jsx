/* @flow */

import React from 'react';
import Collapsible from 'react-collapsible';

import CharacterAttributes from './character_attributes';
import CharacterGeneral from './character_general';
import CharacterSpells from './character_spells';
import CharacterWeapons from './character_weapons';

function label(text: string) {
  return (
    <h3>{text}</h3>
  );
}

import CharacterEquipment from './character_equipment';

type CharacterProps = {
  armorClass: string,
  attributes: {},
  cantrips: {},
  class: string,
  equipment: {},
  hitDice: string,
  languages: [],
  level: string,
  maxHP: string,
  name: string,
  proficiency: string,
  race: string,
  senses: [],
  speed: string,
  spells: {},
  weapons: {},
};

export default function Character(props: CharacterProps) {
  const style: Object = {
    textAlign: 'center',
  };
  return (
    <div>
      <h2 style={style}>{props.name}</h2>
      <CharacterGeneral
        armorClass={props.armorClass}
        class={props.class}
        hitDice={props.hitDice}
        languages={props.languages}
        level={props.level}
        maxHP={props.maxHP}
        proficiency={props.proficiency}
        race={props.race}
        senses={props.senses}
        speed={props.speed}
        />
      <br />
      <CharacterAttributes attributes={props.attributes} />
      <br />
      <Collapsible trigger={label("Equipment")} open={true}>
        <CharacterEquipment equipment={props.equipment} />
      </Collapsible>
      <br />
      <Collapsible trigger={label("Weapons")} open={true}>
        <CharacterWeapons weapons={props.weapons} />
      </Collapsible>
      <br />
      <Collapsible trigger={label("Cantrips")} open={true}>
        <CharacterSpells spells={props.cantrips} />
      </Collapsible>
      <br />
      <Collapsible trigger={label("Spells")} open={true}>
        <CharacterSpells spells={props.spells} />
      </Collapsible>
    </div>
  );
};
