var vornameCorrect = false;
var nameCorrect = false;
var jahrCorrect = false;
var vereinCorrect = false;
var hcoachCorrect = false;
var acoachCorrect = false;
var numberCorrect = false;

var buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÄÖÜßäöüß";

function buchstabenPruefen(input){
  for (var i=0;i<input.length;i++) {
    if (buchstaben.indexOf(input.charAt(i))<0) {
        return false;
    }
  }
  return true;
}

$('#vorname').bind('input propertychange',
function() {
  var vorname = document.getElementById('vorname').value;
  if (vorname.length > 0 && buchstabenPruefen(vorname)) {
    document.getElementById('vornameOutput').innerHTML = "&#10004;"
    vornameCorrect = true;
  }else {
    document.getElementById('vornameOutput').innerHTML = "&#10006;"
    vornameCorrect = false;
  }
});

$('#name').bind('input propertychange',
function() {
  var name = document.getElementById('name').value;
  if (name.length > 0 && buchstabenPruefen(name)) {
    document.getElementById('nameOutput').innerHTML = "&#10004;"
    nameCorrect = true;
  }else {
    document.getElementById('nameOutput').innerHTML = "&#10006;"
    nameCorrect = false;
  }
});

$('#jahr').bind('input propertychange',
  function() {
    var jahr = document.getElementById('jahr').value;
    if (jahr.length == 4 && jahr <= 2015 && jahr > 0) {
      document.getElementById('jahrOutput').innerHTML = "&#10004;"
      jahrCorrect = true;
    } else {
      document.getElementById('jahrOutput').innerHTML = "&#10006;"
      jahrCorrect = false;
    }
  });

$('#verein').bind('input propertychange',
function() {
  var verein = document.getElementById('verein').value;
  if (verein.length > 0 && buchstabenPruefen(verein)) {
    document.getElementById('vereinOutput').innerHTML = "&#10004;"
    vereinCorrect = true;
  }else {
    document.getElementById('vereinOutput').innerHTML = "&#10006;"
    vereinCorrect = false;
  }
});

$('#hcoach').bind('input propertychange',
function() {
  var hcoach = document.getElementById('hcoach').value;
  if (hcoach.length > 0 && buchstabenPruefen(hcoach)) {
    document.getElementById('hcoachOutput').innerHTML = "&#10004;"
    hcoachCorrect = true;
  }else {
    document.getElementById('hcoachOutput').innerHTML = "&#10006;"
    hcoachCorrect = false;
  }
});

$('#acoach').bind('input propertychange',
function() {
  var acoach = document.getElementById('acoach').value;
  if (vorname.acoach > 0 && buchstabenPruefen(acoach)) {
    document.getElementById('acoachOutput').innerHTML = "&#10004;"
    acoachCorrect = true;
  }else {
    document.getElementById('acoachOutput').innerHTML = "&#10006;"
    acoachCorrect = false;
  }
});

$('#number').bind('input propertychange',
  function() {
    var number = document.getElementById('number').value;
    if (number.length <= 2 && number >= 4 && number <= 15) {
      document.getElementById('numberOutput').innerHTML = "&#10004;"
      numberCorrect = true;
    } else {
      document.getElementById('numberOutput').innerHTML = "&#10006;"
      numberCorrect = false;
    }
  }
);

/*
function validateForm() {
  if (vornameCorrect && nameCorrect && jahrCorrect && vereinCorrect && hcoachCorrect && acoachCorrect && numberCorrect) {
    var vorname = document.getElementById('vorname').value
    var name = document.getElementById('name').value
    var jahr = document.getElementById('jahr').value;
    var verein = document.getElementById('verein').value
    var hcoach = document.getElementById('hcoach').value
    var acoach = document.getElementById('acoach').value
    var number = document.getElementById('number').value;

    var formData = new FormData();

  	formData.append('vorname', vorname);
  	formData.append('name', name);
    formData.append('jahr', jahr);
    formData.append('verein', verein);
    formData.append('hcoach', hcoach);
    formData.append('acoach', acoach);
    formData.append('number', number);

  	var xhr = new XMLHttpRequest();
  	xhr.open('POST', 'http://188.166.165.74:13337/api/players', true);
  	xhr.onload = function(e) { ... };

  	xhr.send(formData);
  }else {
    alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
  }
}
*/
