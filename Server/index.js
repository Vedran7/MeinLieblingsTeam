var express = require('express');
var app = express();
var players = require('./players.json');
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use(express.static('html'));



io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
  });


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8081, function(){
  var host = http.address().address
  var port = http.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});

/*
var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
*/

app.get('/api/players', function(req, res) {
  var fav = req.query.favorites;
  var searchChar = req.query.search;

  res.header('Content-Type', 'application/json');

  if (typeof fav !== 'undefined' && fav == 'true') {
    res.send(favorit());
  } else if (typeof searchChar !== 'undefined') {
    var buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (typeof searchChar !== 'string' || searchChar.length > 1 || buchstaben.indexOf(searchChar.charAt(0)) < 0) {
      res.status(400).send('Wrong input');
    } else {
      res.send(search(searchChar));
    }
  } else {
    res.send(players);
  }
})

app.delete('/api/players/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  var fs = require('fs');
  var data = fs.readFileSync('players.json');
  var players = JSON.parse(data);
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (id != players[i]._id) {
      if (first) {
        first = false;
      } else {
        json += ',';
      }
      json += JSON.stringify(players[i]);
    }
  }
  json += ']';
  fs.writeFile("players.json", json);
})

app.post('/api/players', function(req, res) {
  res.header('Content-Type', 'Application/Json');
  var json = '[{"message":"Spieler wurde erfolgreich gespeichert"}]'
  res.send(JSON.parse(json));
})

app.put('/api/players/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  res.header('Content-Type', 'Application/Json');
  var json = '[{"message":"Spieler mit der ID ' + id + ' wurde erfolgreich geupdatet"}]'
  res.send(JSON.parse(json));
})

function favorit() {
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (players[i].favorit == true) {
      if (first) {
        first = false;
      } else {
        json += ',';
      }
      json += JSON.stringify(players[i]);
    }
  }
  json += ']';
  return JSON.parse(json);
}

function search(searchChar) {
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (players[i].name.indexOf(searchChar) == 0) {
      if (first) {
        first = false;
      } else {
        json += ',';
      }
      json += JSON.stringify(players[i]);
    }
  }
  json += ']';
  return JSON.parse(json);
}
