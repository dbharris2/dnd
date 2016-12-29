/* @flow */

import React from 'react';

type ButtonProps = {
  className: string,
  onClick: func,
};

export default function Button(props: ButtonProps) {
  const style = {
    backgroundColor: 'white',
    border: 'none',
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
