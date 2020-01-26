var counter = 0;
function testlokaleSpeicherung() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e) {
    return false;
  }
}

function init() {
  if (testlokaleSpeicherung() == false) {
    alert("Die lokale Speicherung ist nicht möglich");
    return;
  }
  document.getElementById("b1").onclick = function() {
    localStorage.setItem("key" + counter++, Math.random());
  };
  document.getElementById("b2").onclick = function() {
    document.getElementById("ausgabe").innerHTML = "";
    var j = 0;
    for (i in localStorage) {
      document.getElementById("ausgabe").innerHTML += localStorage.key(j++) + ": " + localStorage.getItem(i) + "<br />";
    }
  };
  document.getElementById("b3").onclick = function() {
    counter = 0;
    localStorage.clear();
  };
}

window.onload = init; 