/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import CharacterButton from './character_button';

type Character = {
  backgroundHeight: number,
  backgroundWidth: number,
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
        backgroundWidth={character.backgroundWidth}
        backgroundHeight={character.backgroundHeight}
        imageUri={character.imageUri}
        imageWidth={character.imageWidth}
        imageHeight={character.imageHeight}
        onClick={character.onClick}
        title={character.name}
        titleFontSize={20}
        />
    );
  });

  return (
    <Flexbox flexDirection='row'>
      {characters}
    </Flexbox>
  );
};
