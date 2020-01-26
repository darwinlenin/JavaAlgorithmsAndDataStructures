function success(position) {
  document.getElementById('karte').innerHTML = "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
}

function error(msg) {
  cdocument.getElementById('karte').innerHTML = msg;
}

function init() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Fehler bei der Geolokalisierung!");
  }
}

window.onload = init; 