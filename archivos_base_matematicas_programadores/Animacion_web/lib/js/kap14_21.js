window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  var rg1 = zb.createRadialGradient(120, 75, 20, 125, 75, 200);
  rg1.addColorStop(0, 'yellow');
  rg1.addColorStop(1, 'gray');
  with (zb) {
    font = "66px Arial";
    fillStyle = "Red";
    fillText("Die Antwort", 250, 370);
    strokeStyle = "Blue";
    font = "160px Courier";
    strokeText("ist", 360, 120);
    fillStyle = rg1;
    strokeStyle = "Blue";
    font = "360px Times New Roman";
    fillText("42", 25, 270);
    strokeText("42", 25, 270);
  }
}; 