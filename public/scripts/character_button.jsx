/* @flow */

import React from 'react';

import Button from './button';
import TitleSubtitle from './title_subtitle';

type CharacterButtonProps = {
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
      onClick={props.onClick}
      >
        <TitleSubtitle
          imageUri={props.imageUri}
          imageWidth={props.imageWidth}
          imageHeight={props.imageHeight}
          title={props.title}
          titleFontSize={props.titleFontSize}
          />
    </Button>
  );
};
