/* @flow */

import React from 'react';
import Collapsible from 'react-collapsible';
import Flexbox from 'flexbox-react';

import CharacterWeapon from './character_weapon';
import TitledIcon from './titled_icon';

function titledWeapon(name: string, uri: string) {
  return (
    <TitledIcon title={name} uri={uri} />
  );
}

export default function CharacterWeapons(props: {
  weapons: Object,
}) {
  const characterWeapons: Object = props.weapons.map((weapon) => {
    return (
      <Collapsible
        trigger={titledWeapon(weapon.name, weapon.imageUri)}
        open={true}
        >
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
