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

/**
 This component creates a basic title, subtitle, and image arrangement.
 If a uri, title, and subtitle are provided, you will see an output similar to
 the output below.

 |       | Title    |
 | Image | -------- |
 |       | Subtitle |
 */
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
