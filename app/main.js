/* @flow */

const React = require('react/addons');
const Spell = require('./components/spell');

const mountNode = document.getElementById('react-main-mount');
React.render(new Spell({}), mountNode);

