/* @flow */

import React from 'react';
import Radium from 'radium';

type ButtonProps = {
  className: string,
  onClick: func,
};

function Button(props: ButtonProps) {
  const style: Object = {
    backgroundColor: 'white',
    border: 'none',
    outline: 'none',
    ':hover': {
      backgroundColor: '#EEEEEE',
    },
  };
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.onClick}
      style={style}
      >
      {props.children}
    </button>
  );
};

module.exports = Radium(Button);
