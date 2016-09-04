/* @flow */

'use strict';

const React = require("react");
const Spell = require('../components/spell');

type SpellsListProps = {
  spells: React.PropTypes.object.isRequired,
};

class SpellsList extends React.Component {
  props: SpellsListProps;

  constructor(props: SpellsListProps) {
    super(props);
  }

  render() {
    const spells_list = this.props.spells.map(function(spell) {
      return (
        <Spell 
         key={spell.name}
         name={spell.name} 
         desc={spell.desc}
         range={spell.range}
         components={spell.components}
         material={spell.material}
         ritual={spell.ritual}
         duration={spell.duration}
         concentration={spell.concentration}
         casting_time={spell.casting_time}
         level={spell.level}
         school={spell.school}
         klass={spell.class} />
      );
    });
    return (
      <div>
        {spells_list}
      </div>
    );
  }
}

module.exports = SpellsList;
