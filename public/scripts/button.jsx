const React: any = require('react');

export default function Button(props: {
  className: string,
  onClick: func,
  text: string,
}) {
  return (
    <div>
    <button
      type="button"
      className="btn btn-primary"
      onClick={props.onClick}
      key={props.text}
      >
      {props.text}
    </button>
    </div>
  );
};
