function zeichnen() {
	var zeichnenbereich =
	document.getElementById('cv1').getContext('2d');
	with(zeichnenbereich) {
		font = "20px Arial";
		fillStyle = "red";
		fillText("42", 150, 70);
		strokeText("42", 150, 70);
		scale(1.3,14);
		fillText("42", 150, 15);
		strokeText("42", 150, 15);
	}
}
function init() {
	zeichnen();
}
window.onload=init;