/* @flow */

import React from 'react';

type ListProps = {
  items: React.PropTypes.array.isRequired,
  componentBlock: React.PropTypes.func.isRequired,
};

export default class List extends React.Component {
  props: ListProps;

  state: {};

  constructor(props: ListProps): void {
    super(props);
  }

  render() {
    const componentBlock = this.props.componentBlock;
    const items = this.props.items.map(function(item) {
      return componentBlock(item);
    });

    return (
      <div>
        {items}
      </div>
    );
  }
};
