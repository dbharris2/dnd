/* @flow */

import React from 'react';

import Background from './background';
import Button from './button';
import TitleSubtitle from './title_subtitle';

type CharacterButtonProps = {
  backgroundHeight: number,
  backgroundWidth: number,
  imageHeight: number,
  imageWidth: number,
  imageUri: string,
  onClick: func,
  title: string,
  titleFontSize: number,
};

export default function CharacterButton(props: CharacterButtonProps) {
  return (
    <Button
      onClick={props.onClick}>
      <Background
        alignItems='center'
        background='clear'
        border='1px black solid'
        borderRadius='10%'
        flexDirection='column'
        height={props.backgroundHeight}
        justifyContent='center'
        width={props.backgroundWidth}
        >
        <TitleSubtitle
          imageUri={props.imageUri}
          imageWidth={props.imageWidth}
          imageHeight={props.imageHeight}
          title={props.title}
          titleFontSize={props.titleFontSize}
          />
      </Background>
    </Button>
  );
};
