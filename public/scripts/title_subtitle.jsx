/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import NetworkImage from './network_image';

type TitleSubtitleProps = {
  imageHeight: number,
  imageWidth: number,
  imageUri: string,
  subtitle: string,
  title: string,
};

export default function TitleSubtitle(props: TitleSubtitleProps) {
  return (
    <Flexbox flexDirection='row'>
      <Flexbox>
        <NetworkImage
          uri={props.imageUri}
          width={props.imageWidth}
          height={props.imageHeight}
          />
      </Flexbox>
      <Flexbox flexDirection='column'>
        <Flexbox>
          {props.title}
        </Flexbox>
        <Flexbox>
          {props.subtitle}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};
