const React: any = require('react');

export default function NetworkImage(props: {
  uri: string,
  width: number,
  height: number,
}) {
  return (
    <div>
      <img
        src={props.uri}
        width={props.width}
        height={props.height} 
        />
    </div>
  );
};
