var connection = new WebSocket('ws://localhost:1337');
window.onload = function() {
  document.getElementById('btn').onclick = function() {
    connection.send(Math.random());
  };
};
connection.onopen = function() {
  connection.send("Login");
};
connection.onerror = function(error) {
  document.getElementById('info').innerHTML = 'WebSocket-Fehler:  ' + error;
};
connection.onmessage = function(e) {
  document.getElementById('info').innerHTML = e.data;
};
