/* @flow */

import React from 'react';
import Collapsible from 'react-collapsible';

import CharacterSpells from './character_spells';

function label(text: string) {
  return (
    <h3>{text}</h3>
  );
}

import CharacterEquipment from './character_equipment';
import {
  renderArrayWithTitle,
  renderEntry,
} from './render_helpers.jsx'

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
  return (
    <div>
      <h3>General</h3>
      {renderEntry('Name', props.name)}
      {renderEntry('Race', props.race)}
      {renderEntry('Class', props.class)}
      <br />

      {renderEntry('Proficiency', props.proficiency)}
      {renderEntry('Level', props.level)}
      {renderEntry('Armor Class', props.armorClass)}
      {renderEntry('Max HP', props.maxHP)}
      {renderEntry('Hit Dice', props.hitDice)}
      {renderEntry('Speed', props.speed)}
      <br />

      {
        props.senses != null ?
          renderArrayWithTitle(props.senses, 'Senses') :
          <div></div>
      }
      {
        props.languages != null ?
          renderArrayWithTitle(props.languages, 'Languages') :
          <div></div>
      }
      <br />

      <h3>Attributes</h3>
      <CharacterEquipment equipment={props.attributes} />
      <br />
      <Collapsible trigger={label("Equipment")} open={true}>
        <CharacterEquipment equipment={props.equipment} />
      </Collapsible>
      <br />
      <Collapsible trigger={label("Weapons")} open={true}>
        <CharacterEquipment equipment={props.weapons} />
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
