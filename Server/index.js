var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());


app.get('/api/players', function (req, res) {
   var fav = req.query.favorites;

   var fs=require('fs');
   var data=fs.readFileSync('players.json');
   var players=JSON.parse(data);

   var json = '[';
   res.header('Content-Type', 'application/json');

   if (typeof fav != 'undefined' && fav == 'true') {
     for (var i = 0; i < players.length; i++) {
       if (players[i].favorit == true) {
         if (i!=0) {
           json+=',';
         }
         json+=JSON.stringify(players[i]);
       }
     }
     json+=']';
     console.log(json);
     res.send(JSON.parse(json));

   }else{
      res.send(players);
   }

})





var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
