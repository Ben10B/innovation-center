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
    div.className = "projects";
    var div1 = document.createElement("div");
    div1.className = "flx-row-container bg-black wdth-100";
    var div2 = document.createElement("div");
    div2.className = "flx-col-container padding";
    var div3 = document.createElement("div");
    div3.className = "flx-col-container hght-100";
    var img = document.createElement("img");
    img.src = data[i].image;
    var name = document.createElement("h1");
    name.innerHTML = "Project " + (i + 1) + ": " + data[i].title;
    name.className = "proj-name";
    var desc = document.createElement("p");
    desc.innerHTML = data[i].description;
    desc.className = "proj-desc cutoff";
    div2.appendChild(name);
    div2.appendChild(desc);
    div3.appendChild(img);
    div.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div3);   
    var br = document.createElement('br'); 
    div.appendChild(br);
    currentProjects.appendChild(div);   
  }
}

loadData();