window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  var img = new Image();
  img.src = 'images/b6.png';
  var pattern = zb.createPattern(img, "repeat");
  zb.fillStyle = pattern;
  zb.fillRect(20, 20, 350, 350);
  img.src = 'images/b4.png';
  pattern = zb.createPattern(img, "no-repeat");
  zb.fillStyle = pattern;
  zb.font = "560px Times New Roman";
  zb.fillText("42", 55, 420);
};
