window.onload=function () {
  var zb =
  document.getElementsByTagName('canvas')[0].getContext('2d');
  var bild = new Image();
  bild.src="images/b4.png";
  zb.drawImage(bild,10,50);
};