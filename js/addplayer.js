var vornameCorrect = false;
var nameCorrect = false;
var jahrCorrect = false;
var vereinCorrect = false;
var hcoachCorrect = false;
var acoachCorrect = false;
var numberCorrect = false;


$('#vorname').bind('input propertychange',
function() {
var vorname = document.getElementById('vorname').value
    if (vorname.length > 3) {
      document.getElementById('vornameOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('vornameOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

$('#name').bind('input propertychange',
function() {
var vorname = document.getElementById('name').value
    if (vorname.length > 3) {
      document.getElementById('nameOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('nameOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

$('#jahr').bind('input propertychange',
function() {
var vorname = document.getElementById('jahr').value
    if (vorname.length > 3) {
      document.getElementById('jahrOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('jahrOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

$('#verein').bind('input propertychange',
function() {
var vorname = document.getElementById('verein').value
    if (vorname.length > 3) {
      document.getElementById('vereinOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('vereinOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

$('#hcoach').bind('input propertychange',
function() {
var vorname = document.getElementById('hcoach').value
    if (vorname.length > 3) {
      document.getElementById('hcoachOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('hcoachOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

$('#acoach').bind('input propertychange',
function() {
var vorname = document.getElementById('acoach').value
    if (vorname.length > 3) {
      document.getElementById('acoachOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('acoachOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

$('#number').bind('input propertychange',
function() {
var vorname = document.getElementById('number').value
    if (vorname.length > 3) {
      document.getElementById('numberOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('numberOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});

function senden(){
  if (vornameCorrect) {

  }
}
