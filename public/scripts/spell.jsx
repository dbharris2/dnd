/* @flow */

const React: any = require('react');

export default function Spell(props: {
  closeButtonText: string,
  description: string,
  name: string,
  onCloseButtonClick: () => void,
}) {
  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        {props.description}
      </div>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.onCloseButtonClick}
        >
        {props.closeButtonText}
      </button>
    </div>
  );
};
