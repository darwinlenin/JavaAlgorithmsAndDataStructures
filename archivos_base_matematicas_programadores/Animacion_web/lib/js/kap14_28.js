function zeichnen() {
	var zeichnenbereich =
	document.getElementById('cv1').getContext('2d');
	var bild = new Image();
	bild.src="images/b4.png";
	with(zeichnenbereich) {
		beginPath();
		moveTo(20,50);
		lineTo(100,100);
		lineTo(400,80);
		lineTo(110,350);
		closePath();
		clip();
		drawImage(bild,10,50);
	}
}

function init() {
	zeichnen();
}

window.onload=init;