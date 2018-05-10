var currentProjects = document.getElementById("currentProjects");

var data;
var request = new XMLHttpRequest();

function loadData() {
  request.open('GET', './currentProjects.json');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  data = JSON.parse(request.responseText);
  for(var i = 0; i < data.length; i++) {
    var section = document.createElement("section");
    section.className = "proj-box";

  }
}

loadData();