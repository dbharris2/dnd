/* @flow */

'use strict';

const React = require("react");
const SpellComponent = require('../components/spell_component');

function SpellsListComponent(
  props: {
    spells: object,
  }
) {
  const spells_list = props.spells.map(function(spell) {
    return (
      <SpellComponent 
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

module.exports = SpellsListComponent;
