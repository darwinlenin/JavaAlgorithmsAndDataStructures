function init() {
  document.getElementById("ausgabe").innerHTML = "";
  with (sessionStorage) {
    document.getElementById("ausgabe").innerHTML += getItem("name") + "<br />" + getItem("vorname") + "<br />" + getItem("strasse") + "<br />" + getItem("plz") + "<br />" + getItem("ort") + "<br />" + getItem("kommentar") + "<hr />" + JSON.parse(getItem("metadaten")).browser + "<hr />" + JSON.parse(getItem("metadaten")).zeit;
  }
}

window.onload = init; 