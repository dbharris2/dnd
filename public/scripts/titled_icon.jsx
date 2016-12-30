import React from 'react';
import Flexbox from 'flexbox-react';

import NetworkImage from './network_image';

export default function TitledIcon(props: {
  title: string,
  uri: string,
}) {
  return (
    <Flexbox flexDirection='row' alignItems='center'>
      <Flexbox>
        <NetworkImage
          uri={props.uri}
          width={26}
          height={26}
          />
      </Flexbox>
      <Flexbox paddingLeft='5px'>
        <h4>{props.title}</h4>
      </Flexbox>
    </Flexbox>
  );
}
