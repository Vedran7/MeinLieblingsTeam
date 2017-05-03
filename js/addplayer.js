var vornameCorrect = false;
var nameCorrect = false;
var jahrCorrect = false;
var vereinCorrect = false;
var hcoachCorrect = false;
var acoachCorrect = false;
var numberCorrect = false;


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
  }
);

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
