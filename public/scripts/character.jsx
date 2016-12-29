/* @flow */

import React from 'react';

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

      <h3>Equipment</h3>
      <CharacterEquipment equipment={props.equipment} />

      <h3>Weapons</h3>
      <CharacterEquipment equipment={props.weapons} />

      <h3>Cantrips</h3>
      <CharacterEquipment equipment={props.cantrips} />

      <h3>Spells</h3>
      <CharacterEquipment equipment={props.spells} />
    </div>
  );
};
