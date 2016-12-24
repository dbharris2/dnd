import React from 'react';

type ButtonProps = {
  className: string,
  onClick: func,
  text: string,
  containerDivStyle: Object,
};

export default function Button(props: ButtonProps) {
  return (
    <div style={props.containerDivStyle}>
      <button
        type="button"
        className={props.className}
        onClick={props.onClick}
        key={props.text}
        >
        {props.text}
      </button>
    </div>
  );
};
