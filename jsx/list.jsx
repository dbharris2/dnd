/* @flow */

import React from 'react';

type ListProps = {
  items: React.PropTypes.array.isRequired,
  componentBlock: React.PropTypes.func.isRequired,
};

export default function List(props: ListProps) {
  const componentBlock = props.componentBlock;
  const items = props.items.map(function(item) {
    return componentBlock(item);
  });

  return (
    <div>
      {items}
    </div>
  );
};
