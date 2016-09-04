/* @flow */

'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const SpellComponent = require('../components/spell_component');
const SpellsListComponent = require('../components/spells_list_component');
const TitleSubtitleComponent = require('../components/title_subtitle_component');
const express = require('express');
const fs = require('fs');
const path = require('path');

const SPELLS_FILE = path.join(__dirname, '../json/spells.json');

const app = express();

app.get('/', function(req, res) {
  fs.readFile(SPELLS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const spells = JSON.parse(data);
    const spellsList = ReactDOMServer.renderToString(
      <SpellsListComponent spells={spells} />
    );
    const spellJumbotron = ReactDOMServer.renderToString(
      <TitleSubtitleComponent 
       title='DnD Spells' 
       subtitle='Enjoy learning about all the different spells!' />
    );
    res.render('index.ejs', {
      spellJumbotron: spellJumbotron,
      spellsList: spellsList,
    });
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
