/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import CharacterButton from './character_button';

type Character = {
  imageHeight: number,
  imageWidth: number,
  imageUri: string,
  name: string,
  onClick: func,
}

type CharacterButtonsProps = {
  characters: Array<Character>,
};

export default function CharacterButtons(props: CharacterButtonsProps) {
  const characters = props.characters.map((character) => {
    return (
      <CharacterButton
        imageUri={character.imageUri}
        imageWidth={character.imageWidth}
        imageHeight={character.imageHeight}
        onClick={character.onClick}
        title={character.name}
        titleFontSize={14}
        />
    );
  });

  return (
    <Flexbox flexDirection='column'>
      {characters}
    </Flexbox>
  );
};
