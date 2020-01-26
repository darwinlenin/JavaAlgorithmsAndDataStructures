window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  var rg = zb.createRadialGradient(120, 75, 20, 125, 75, 200);
  rg.addColorStop(0, 'yellow');
  rg.addColorStop(1, 'gray');
  with (zb) {
    font = "66px Arial";
    shadowOffsetX = 10;
    shadowOffsetY = 10;
    shadowColor = "gray";
    fillStyle = "Red";
    fillText("Die Antwort", 250, 370);
    strokeStyle = "brown";
    font = "166px Courier";
    shadowOffsetX = -10;
    shadowOffsetY = -10;
    shadowColor = "green";
    strokeText("ist", 360, 120);
    fillStyle = rg;
    strokeStyle = "Blue";
    font = "360px Times New Roman";
    shadowOffsetX = -10;
    shadowOffsetY = 10;
    shadowColor = "lightray";
    shadowBlur = 10;
    fillText("42", 25, 270);
    strokeText("42", 25, 270);
  }
}; 