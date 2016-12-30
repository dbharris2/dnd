/* @flow */

import React from 'react';
import Collapsible from 'react-collapsible';

import CharacterWeapon from './character_weapon';

function label(text: string) {
  return (
    <h4>{text}</h4>
  );
}

export default function CharacterWeapons(props: {
  weapons: Object,
}) {
  const characterWeapons: Object = props.weapons.map((weapon) => {
    return (
      <Collapsible trigger={label(weapon.name)} open={true}>
        <CharacterWeapon
          attack={weapon.attack}
          damage={weapon.damage}
          damageType={weapon.damage_type}
          description={weapon.description}
          name={weapon.name}
          range={weapon.range}
          />
      </Collapsible>
    );
  });
  return (
    <div>
      {characterWeapons}
    </div>
  );
};
