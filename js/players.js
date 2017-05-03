var xhr = new XMLHttpRequest();

xhr.open('GET', ' http://188.166.165.74:13337/api/players');
xhr.responseType = 'json';
xhr.addEventListener("readystatechange", processRequest, false);
xhr.send();

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = xhr.response;

    if (data !== null) {
        console.log(data); // Parsed JSON object

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
  }else {
    console.log(xhr.readyState);
  }
}
