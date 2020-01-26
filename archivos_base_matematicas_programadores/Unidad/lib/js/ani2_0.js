var mB1 = new Image();
var mB2 = new Image();
mB1.src = "img/a.gif";
mB2.src = "img/b.gif";
counter = 0;
function ani() {
	counter++;
	document.getElementById("bild").src = mB1.src;
	document.getElementById("bild").style.height += 5;
	if (counter < 40)
		window.setTimeout("ani()", 50);
	else
		document.getElementById("bild").src = mB2.src;

}
window.onload = function() {
	document.getElementById("bild").onclick = ani;
};