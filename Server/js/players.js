var xhr = new XMLHttpRequest();

loadAllPlayers();

function loadAllPlayers(){
  document.getElementById('spieler-tabelle').innerHTML = "<table class='table'><thead><tr><th>Name</th><th>Verein</th><th>Coach</th><th>Position</th><th>Nummer</th><th>Jahr</th></tr></thead></table>";
  document.getElementById("allPlayers").className = "btn btn-default active";
  document.getElementById("favPlayers").className = "btn btn-default";
  xhr.open('GET', 'http://localhost:8081/api/players');
  xhr.responseType = 'json';
  xhr.addEventListener("readystatechange", processRequest, false);
  xhr.send();
}

function loadFavouritePlayers(){
  document.getElementById('spieler-tabelle').innerHTML = "<table class='table'><thead><tr><th>Name</th><th>Verein</th><th>Coach</th><th>Position</th><th>Nummer</th><th>Jahr</th></tr></thead></table>";
  document.getElementById("allPlayers").className = "btn btn-default";
  document.getElementById("favPlayers").className = "btn btn-default active";
  xhr.open('GET', 'http://localhost:8081/api/players?favorites=true');
  xhr.responseType = 'json';
  xhr.addEventListener("readystatechange", processRequest, false);
  xhr.send();
}

function processRequest() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = xhr.response;

    if (data !== null) {
        console.log(data);
        console.log(data.length);

        var html = "<table class='table'><thead><tr><th>Name</th><th>Verein</th><th>Coach</th><th>Position</th><th>Nummer</th><th>Jahr</th></tr></thead><tbody>";

        for (var i=0;i<data.length;i++){
          var name = data[i].name;
          var vorname = data[i].vorname;
          var verein = data[i].club;
          var coach = data[i].coach;
          var position = data[i].position;
          var nummer = data[i].number;
          var jahr = data[i].year;
          html = html + "<tr><td>"+vorname+" "+name+"</td>";
          html = html + "<td>"+verein+"</td>";
          html = html + "<td>"+coach+"</td>";
          html = html + "<td>"+position+"</td>";
          html = html + "<td>"+nummer+"</td>";
          html = html + "<td>"+jahr+"</td></tr>";
        }

        html = html + "</tbody></table>";

        document.getElementById('spieler-tabelle').innerHTML = html;
    }
  }
}
