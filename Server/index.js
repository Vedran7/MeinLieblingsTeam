var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());


app.get('/api/players', function (req, res) {
   var fav = req.query.favorites;

   var fs=require('fs');
   var data=fs.readFileSync('players.json');
   var players=JSON.parse(data);

   var json;

   if (typeof fav != 'undefined' && fav == 'true') {
     for (var i = 0; i < players.length; i++) {
       if (players[i].favorit == false) {
         //players[i].splice(i,i);
         //i--;
         json.push(players[i]);
       }
     }
     console.log(json);
   }

   res.header('Content-Type', 'application/json');
   res.send(players);
})





var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
