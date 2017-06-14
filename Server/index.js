var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());


app.get('/api/players', function (req, res) {
   var fav = req.query.favorites;
   var searchChar = req.query.search;

   var fs=require('fs');
   var data=fs.readFileSync('players.json');
   var players=JSON.parse(data);

   res.header('Content-Type', 'application/json');

   if (typeof fav !== 'undefined' && fav == 'true') {
      res.send(favorit(players));
   }else if (typeof searchChar !=='undefined') {
      var buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (typeof searchChar !== 'string' || searchChar.length > 1 || buchstaben.indexOf(searchChar.charAt(0)) < 0) {
        res.status(400).send('Wrong input');
      }else{
        console.log(search(players,searchChar).length);
        res.send(search(players,searchChar));
      }
   }else{
      res.send(players);
   }
})

app.post('/api/players', function (req, res) {
   res.header('Content-Type','Application/Json');
   var json = '[{"message":"Spieler wurde erfolgreich gespeichert"}]'
   res.send(JSON.parse(json));
})

app.put('/api/players/:id', function (req, res) {
   var id = req.params.id;
   console.log(id);
   res.header('Content-Type','Application/Json');
   var json = '[{"message":"Spieler mit der ID '+ id +' wurde erfolgreich geupdatet"}]'
   res.send(JSON.parse(json));
})

function favorit(players,res){
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (players[i].favorit == true) {
      if (first) {
        first = false;
      }else{
        json+=',';
      }
      json+=JSON.stringify(players[i]);
    }
  }
  json+=']';
  return JSON.parse(json);
}

function search(players,searchChar){
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++){
    if (players[i].name.indexOf(searchChar) == 0) {
      if (first) {
        first = false;
      }else{
        json+=',';
      }
      json+=JSON.stringify(players[i]);
    }
  }
  json+=']';
  return JSON.parse(json);
}




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
