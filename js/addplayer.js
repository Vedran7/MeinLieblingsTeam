var vornameCorrect = false;

$('#vorname').bind('input propertychange', function() {

    var vorname = document.getElementById('vorname').value

    if (vorname.length > 3) {
      document.getElementById('vornameOutput').innerHTML = "&#10004;"
      vornameCorrect = true;
    }else{
      document.getElementById('vornameOutput').innerHTML = "&#10006;"
      vornameCorrect = false;
    }

});
