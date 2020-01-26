function testlokaleSpeicherung() {
  try {
    return 'sessionStorage' in window && window['sessionStorage'] !== null;
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
    with (sessionStorage) {
      setItem("name", document.getElementById("name").value);
      setItem("vorname", document.getElementById("vorname").value);
      setItem("strasse", document.getElementById("strasse").value);
      setItem("plz", document.getElementById("plz").value);
      setItem("ort", document.getElementById("ort").value);
      setItem("kommentar", document.getElementById("kommentar").value);
      setItem("metadaten", JSON.stringify({
        'browser' : navigator.userAgent,
        'zeit' : new Date().toString()
      }));
    }
    location.href = "kap14_8.html";
  };
}

window.onload = init; 