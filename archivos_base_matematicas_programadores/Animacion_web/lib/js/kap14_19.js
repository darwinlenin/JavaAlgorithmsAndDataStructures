window.onload=function () {
  var zb =
  document.getElementById('cv2').getContext('2d');
  var bild = new Image();
  bild.src="images/b4.png";
  var qb =
  document.getElementById('cv1').getContext('2d');
  var rb1 = qb.createRadialGradient(120,75,20,125,45,200);
  rb1.addColorStop(0,'yellow');
  rb1.addColorStop(1,'darkblue');
  qb.fillStyle = rb1;
  qb.fillRect(5,5,640,240);

  zb.drawImage(document.getElementById('cv1'),
  33,71,104,124,21,20,600,300);
  zb.drawImage(bild,
  50,71,120,150,80,120,120,150);
};