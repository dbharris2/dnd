/* @flow */

'use strict';

const React = require("react");

function SpellComponent(
  props: {
    name: string,
    desc: string,
    range: string,
    components: string,
    material: string,
    ritual: string,
    duration: string,
    concentration: string,
    casting_time: string,
    level: string,
    school: string,
    klass: string,
  }
) {
  return (
    <div className='panel panel-primary'>
      <div className='panel-heading'>{props.name}</div>
      <div className='panel-body'>
        <p>Desc: {props.desc}</p>
        <p>Range: {props.range}</p>
        <p>Components: {props.components}</p>
        <p>Material: {props.material}</p>
        <p>Ritual: {props.ritual}</p>
        <p>Duration: {props.duration}</p>
        <p>Concentration: {props.concentration}</p>
        <p>Casting time: {props.casting_time}</p>
        <p>Level: {props.level}</p>
        <p>School: {props.school}</p>
        <p>Class: {props.klass}</p>
      </div>
    </div>
  );
}

module.exports = SpellComponent;
