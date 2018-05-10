var currentProjects = document.getElementById("currentProjects");

var data;
var request = new XMLHttpRequest();

function loadData() {
  request.open('GET', '../json/currentProjects.json');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  data = JSON.parse(request.responseText);
  for(var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.className = "proj-box";
    var img = document.createElement("img");
    img.src = data[i].image;
    var name = document.createElement("a");
    name.innerHTML = data[i].title;
    name.href = data[i].link;
    var need = document.createElement("p");
    need.innerHTML = data[i].need;
    need.className = "bold";
    var desc = document.createElement("p");
    desc.innerHTML = data[i].description;
    desc.className = "cutoff";
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(need);    
    div.appendChild(desc);
    currentProjects.appendChild(div);    
  }
}

loadData();