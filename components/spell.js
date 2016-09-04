/* @flow */

'use strict';

const React = require("react");

type SpellProps = {
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  range: React.PropTypes.string.isRequired,
  components: React.PropTypes.string.isRequired,
  material: React.PropTypes.string.isRequired,
  ritual: React.PropTypes.string.isRequired,
  duration: React.PropTypes.string.isRequired,
  concentration: React.PropTypes.string.isRequired,
  casting_time: React.PropTypes.string.isRequired,
  level: React.PropTypes.string.isRequired,
  school: React.PropTypes.string.isRequired,
  klass: React.PropTypes.string.isRequired,
};

class Spell extends React.Component {
  props: SpellProps;

  constructor(props: SpellProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Desc: {this.props.desc}</p>
        <p>Range: {this.props.range}</p>
        <p>Components: {this.props.components}</p>
        <p>Material: {this.props.material}</p>
        <p>Ritual: {this.props.ritual}</p>
        <p>Duration: {this.props.duration}</p>
        <p>Concentration: {this.props.concentration}</p>
        <p>Casting time: {this.props.casting_time}</p>
        <p>Level: {this.props.level}</p>
        <p>School: {this.props.school}</p>
        <p>Class: {this.props.klass}</p>
      </div>
    );
  }
}

module.exports = Spell;

