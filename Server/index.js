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

   if (typeof fav != 'undefined' && fav == 'true') {
      res.send(favorit(players));
   }else if (typeof searchChar !='undefined') {
      res.send(search(players,searchChar));
   }else{
      res.send(players);
   }

})

function favorit(players,res){
  var json = '[';
  for (var i = 0; i < players.length; i++) {
    if (players[i].favorit == true) {
      if (i!=0) {
        json+=',';
      }
      json+=JSON.stringify(players[i]);
    }
  }
  json+=']';
  return JSON.parse(json);
}

function search(players,searchChar){
  
  res.status(404).send("Oh uh, something went wrong");
}




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
