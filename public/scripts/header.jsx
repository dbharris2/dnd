const React: any = require('react');

export default function Header() {
  const style = {
    textAlign: 'center'
  };

  return (
    <div className='jumbotron' style={style}>
      <h1>DnD</h1>
      <p>Enjoy learning about DnD!</p>
    </div>
  );
};
