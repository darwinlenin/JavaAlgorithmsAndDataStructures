function success(position) {
  initialize(position.coords.latitude, position.coords.longitude);
}

function initialize(b, l) {
  var latlng = new google.maps.LatLng(b, l);
  var myOptions = {
    zoom : 18,
    center : latlng,
    mapTypeId : google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById("karte"), myOptions);
  var marker = new google.maps.Marker({
    position : latlng,
    map : map,
    title : "Hier befinden Sie sich"
  });
}

function error(msg) {
  alert(msg);
}

function init() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Fehler bei der Geolokalisierung!");
  }
}

window.onload = init; 