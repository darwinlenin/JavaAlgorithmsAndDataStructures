window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  with (zb) {
    // Ein einfaches Polygon - geschlossen und gefüllt
    fillStyle = "rgba(0, 20, 200, 0.4)";
    beginPath();
    moveTo(20, 20);
    lineTo(100, 100);
    lineTo(320, 10);
    lineTo(110, 180);
    closePath();
    fill();
    // Kreissegment - geschlossen und gefüllt
    fillStyle = "rgba(0, 250, 10, 0.4)";
    beginPath();
    moveTo(200, 300);
    arc(200, 250, 150, 1.5, 5.3, false);
    closePath();
    fill();
    // Zwei offene verbundene Linien
    strokeStyle = "rgba(0, 50, 255, 0.7)";
    lineWidth = 10;
    beginPath();
    moveTo(400, 450);
    lineTo(10, 10);
    lineWidth = 10;
    lineTo(500, 100);
    stroke();
    // eine quadratische Bézierkurve - offen
    strokeStyle = "rgba(255, 50, 10, 0.4)";
    lineWidth = 10;
    beginPath();
    moveTo(400, 450);
    quadraticCurveTo(200, 200, 500, 350);
    stroke();
    // eine Ellipse aus zwei kubischen Bézierkurven - geschlossen
    fillStyle = "rgba(255, 0, 0, 0.8)";
    beginPath();
    moveTo(400, 150);
    bezierCurveTo(300, 155, 300, 245, 400, 250);
    moveTo(400, 150);
    bezierCurveTo(500, 155, 500, 245, 400, 250);
    fill();
  }
};
