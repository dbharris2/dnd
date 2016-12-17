var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var GREEN_ARCHER_FILE = path.join(__dirname, 'json/greenArcher.json');
var MONSTERS_FILE = path.join(__dirname, 'json/monsters.json');
var SPELLS_FILE = path.join(__dirname, 'json/spells.json');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

loadJson(app, '/api/greenArcher', GREEN_ARCHER_FILE);
loadJson(app, '/api/monsters', MONSTERS_FILE);
loadJson(app, '/api/spells', SPELLS_FILE);

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

function loadJson(app, apiPath, filePath) {
  app.get(apiPath, function(req, res) {
    fs.readFile(filePath, function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });
}
