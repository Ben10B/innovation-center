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
    div.className = "proj-box row";
    var div1 = document.createElement("div");
    div1.className = "proj-picture flex-1";
    var img = document.createElement("img");
    img.src = data[i].image;
    var div2 = document.createElement("div");
    div2.className = "proj-info flex-2 txt-center";
    var name = document.createElement("p");
    name.innerHTML = data[i].title;
    //name.href = "//" + data[i].link;
    name.className = "proj-name";
    var author = document.createElement("p");
    author.innerHTML = data[i].author;
    author.className = "proj-need bold";
    var desc = document.createElement("p");
    desc.innerHTML = data[i].description;
    desc.className = "proj-desc cutoff";
    div2.appendChild(name);
    div2.appendChild(author);    
    div2.appendChild(desc);
    div1.appendChild(img);
    if(i % 2 == 1) {
      div.appendChild(div1);
      div.appendChild(div2);
    }
    else {
      div.appendChild(div2);
      div.appendChild(div1);
    }
    currentProjects.appendChild(div);    
  }
  //setSameHeight();
}

function setSameHeight() {
  var projboxes = document.getElementsByClassName("proj-box");
  var tallest = 0;
  for(var i = 0; i < projboxes.length; i++) {
    if(projboxes[i].offsetHeight > tallest) {
      tallest = projboxes[i].offsetHeight;
    }
  }
  for(var i = 0; i < projboxes.length; i++) {
    projboxes[i].style.height = tallest + "px";
  }
}

loadData();