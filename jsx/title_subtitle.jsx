/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import NetworkImage from './network_image';

type TitleSubtitleProps = {
  imageHeight: number,
  imageWidth: number,
  imageUri: string,
  subtitle: string,
  subtitleFontSize: number,
  title: string,
  titleFontSize: number,
};

/**
 This component creates a basic title, subtitle, and image arrangement.
 If a uri, title, and subtitle are provided, you will see an output similar to
 the output below.

 |       | Title    |
 | Image | -------- |
 |       | Subtitle |

 If you don't provide a subtitle, you'll see something similar to this.

 |       |       |
 | Image | Title |
 |       |       |
 */
export default function TitleSubtitle(props: TitleSubtitleProps) {
  const columnStyle = {
    alignItems: 'flex-start',
    justifyContent: 'center',
  };
  const subtitleStyle = {
    alignItems: 'center',
    fontSize: props.subtitleFontSize + 'px',
  };
  const titleStyle = {
    alignItems: 'center',
    flexGrow: props.subtitle == null ? 1 : 0,
    fontSize: props.titleFontSize + 'px',
  };
  return (
    <Flexbox flexDirection='row'>
      <Flexbox>
        <NetworkImage
          uri={props.imageUri}
          width={props.imageWidth}
          height={props.imageHeight}
          />
      </Flexbox>
      <Flexbox flexDirection='column' style={columnStyle}>
        <Flexbox style={titleStyle}>
          {props.title}
        </Flexbox>
        <Flexbox style={subtitleStyle}>
          {props.subtitle}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};
