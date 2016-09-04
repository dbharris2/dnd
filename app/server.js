/* @flow */

'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Spell = require('../components/spell');
const SpellsList = require('../components/spells_list');
const express = require('express');
const fs = require('fs');
const path = require('path');

const SPELLS_FILE = path.join(__dirname, '../json/spells.json');

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  fs.readFile(SPELLS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const spells = JSON.parse(data);
    const reactHtml = ReactDOMServer.renderToString(
      <SpellsList spells={spells} />
    );
    res.render('index.ejs', {reactOutput: reactHtml});
  });
});

const server = app.listen(8081, function () {
  const host: string = server.address().address;
  const port: string = server.address().port;

  if (host === '::') {
    console.log("Sever listening at localhost:%s", port);
  } else {
    console.log("Sever listening at http://%s:%s", host, port);
  }
});

