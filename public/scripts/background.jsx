/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

type BackgroundProps = {
  background: string,
  border: string,
  borderRadius: string,
  height: string,
  width: string,
};

/**
<Background
  alignItems='center'
  background='clear'
  border='1px black solid'
  borderRadius='10%'
  display='flex'
  height='100px'
  justifyContent='center'
  width='100px'
  >
  Hello!
</Background>
 */

export default function Background(props: BackgroundProps) {
  const containerStyle = {
    alignItems: props.alignItems,
    background: props.background,
    border: props.border,
    borderRadius: props.borderRadius,
    display: props.display,
    height: props.height,
    justifyContent: props.justifyContent,
    width: props.width,
  };
  return (
    <Flexbox flexDirection="column" style={containerStyle}>
      {props.children}
    </Flexbox>
  );
};
