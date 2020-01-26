function zeichnen() {
	var zeichnenbereich =
	document.getElementById('cv1').getContext('2d');

	with(zeichnenbereich) {
		font = "400px Arial";
		fillStyle = pattern;
		fillText("42", 150, 370);
		strokeText("42", 150, 370);
	}
}

function init() {
	zeichnen();
}

window.onload=init;

window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  var img = new Image();
  img.src = 'images/b6.png';
  
  with (zb) {
    // Ein einfaches Polygon - geschlossen und gefüllt
  var pattern=createPattern(img, "repeat"); 
    fillStyle = pattern;
    beginPath();
    moveTo(20, 20);
    lineTo(100, 100);
    lineTo(320, 10);
    lineTo(110, 180);
    closePath();
    fill();
    // Kreissegment - geschlossen und gefüllt
    beginPath();
    moveTo(200, 300);
    arc(200, 250, 150, 1.5, 5.3, false);
    closePath();
    fill();

    // eine Ellipse aus zwei kubischen Bézierkurven - geschlossen
    beginPath();
    moveTo(400, 150);
    bezierCurveTo(300, 155, 300, 245, 400, 250);
    moveTo(400, 150);
    bezierCurveTo(500, 155, 500, 245, 400, 250);
    fill();
  }
};
