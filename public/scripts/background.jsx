/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

type BackgroundProps = {
  alignItems: string,
  background: string,
  border: string,
  borderRadius: string,
  height: string,
  flexDirection: string,
  justifyContent: string,
  width: string,
};

export default function Background(props: BackgroundProps) {
  const containerStyle = {
    alignItems: props.alignItems,
    background: props.background,
    border: props.border,
    borderRadius: props.borderRadius,
    height: props.height,
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    width: props.width,
  };
  return (
    <Flexbox style={containerStyle}>
      {props.children}
    </Flexbox>
  );
};
