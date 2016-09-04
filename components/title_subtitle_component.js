/* @flow */

'use strict';

const React = require('react');

function TitleSubtitleComponent(
  props: {
    title: string,
    subtitle: string,
  }
) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

module.exports = TitleSubtitleComponent;
