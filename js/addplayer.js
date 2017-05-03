var vornameCorrect = false;
var nameCorrect = false;
var jahrCorrect = false;
var vereinCorrect = false;
var hcoachCorrect = false;
var acoachCorrect = false;
var numberCorrect = false;

var buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÄÖÜßäöüß"

<<<<<<< HEAD
$('#vorname').bind('input propertychange',
  function() {
    var vorname = document.getElementById('vorname').value;
    if (vorname.length > 3) {
      document.getElementById('vornameOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    } else {
      document.getElementById('vornameOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }
  }
);

$('#name').bind('input propertychange',
  function() {
    var name = document.getElementById('name').value;
    if (name.length > 3) {
      document.getElementById('nameOutput').innerHTML = "&#10004;"
      nameCorrect = true;
    } else {
      document.getElementById('nameOutput').innerHTML = "&#10006;"
      nameCorrect = false;
    }
  }
);
=======
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
  var vorname = document.getElementById('vorname').value
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
  var vorname = document.getElementById('name').value
  if (vorname.length > 0 && buchstabenPruefen(vorname)) {
    document.getElementById('nameOutput').innerHTML = "&#10004;"
    vornameCorrect = true;
  }else {
    document.getElementById('nameOutput').innerHTML = "&#10006;"
    vornameCorrect = false;
  }
});
>>>>>>> origin/master

$('#jahr').bind('input propertychange',
  function() {
    var jahr = document.getElementById('jahr').value;
    if (jahr.length == 4 && jahr <= 2015 && jahr > 0) {
      document.getElementById('jahrOutput').innerHTML = "&#10004;"
      jahrCorrect = true;
    } else {
      document.getElementById('jahrOutput').innerHTML = "&#10006;"
<<<<<<< HEAD
      jahrCorrect = false;
    }
  }
);
=======
      vornameCorrect = false;
    }

});

$('#verein').bind('input propertychange',
function() {
  var vorname = document.getElementById('verein').value
  if (vorname.length > 0 && buchstabenPruefen(vorname)) {
    document.getElementById('vereinOutput').innerHTML = "&#10004;"
    vornameCorrect = true;
  }else {
    document.getElementById('vereinOutput').innerHTML = "&#10006;"
    vornameCorrect = false;
  }
});

$('#hcoach').bind('input propertychange',
function() {
  var vorname = document.getElementById('hcoach').value
  if (vorname.length > 0 && buchstabenPruefen(vorname)) {
    document.getElementById('hcoachOutput').innerHTML = "&#10004;"
    vornameCorrect = true;
  }else {
    document.getElementById('hcoachOutput').innerHTML = "&#10006;"
    vornameCorrect = false;
  }
});

$('#acoach').bind('input propertychange',
function() {
  var vorname = document.getElementById('acoach').value
  if (vorname.length > 0 && buchstabenPruefen(vorname)) {
    document.getElementById('acoachOutput').innerHTML = "&#10004;"
    vornameCorrect = true;
  }else {
    document.getElementById('acoachOutput').innerHTML = "&#10006;"
    vornameCorrect = false;
  }
});
>>>>>>> origin/master

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

function validateForm() {
  if (vornameCorrect && nameCorrect && jahrCorrect && vereinCorrect && hcoachCorrect && acoachCorrect && numberCorrect) {
    alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
  }
}
