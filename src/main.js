//this creates the footer
if(document.getElementById('footer') != undefined) {
  //creates social media section
  var footer = document.getElementById('footer');
  var footerHold = document.createElement("div");
  footerHold.id = "footer-hold";
  footerHold.className = "row";
  var randomDiv = document.createElement("div");
  var footerMedia = document.createElement("div");  
  footerMedia.className = "footer-media row";
  //creating icons
  var icon0 = document.createElement("i");
  icon0.className = "fab fa-twitter";
  var a0 = document.createElement("a");
  var p0 = document.createElement("p");
  p0.innerHTML = "Visit our Twitter! (talk to Jerry Pay to see if they have social media)";
  //copyright
  var copyright = document.createElement("p");
  copyright.className = "bold";
  copyright.innerHTML = "&copy; Neumont College of Computer Science Copyright";
  //placing everything correctly
  a0.appendChild(p0);
  footerMedia.appendChild(icon0);
  footerMedia.appendChild(a0);
  randomDiv.appendChild(footerMedia);
  randomDiv.appendChild(copyright);
  footerHold.appendChild(randomDiv);
  //creates link list
  var linkHolder = document.createElement("div");  
  linkHolder.id = "link-holder";
  var footerCols = [];
  //change this number to amount of columns there are
  for(var i = 0; i < 2; i++) {
    footerCols[i] = document.createElement("ul");
    footerCols[i].className = "footer-col";
  }
  var links = [];
  //change this number to the amount of links there are
  for(var i = 0; i < 6; i++) {
    links[i] = document.createElement("a");
  }
  //all link information
  links[0].className = "highlight-1";
  links[0].innerHTML = "Information";
  links[0].href = "index.html";
  links[1].className = "highlight-2";
  links[1].innerHTML = "Contact Us";
  links[1].href = "contact.html";
  links[2].className = "highlight-3";
  links[2].innerHTML = "Advertise for Expertise";
  links[2].href = "advertise.html";
  links[3].className = "highlight-4";
  links[3].innerHTML = "Calendar";
  links[3].href = "calendar.html";
  links[4].className = "highlight-5";
  links[4].innerHTML = "Current Projects";
  links[4].href = "currentProjects.html";
  links[5].className = "highlight-5";
  links[5].innerHTML = "Awards";
  links[5].href = "currentProjects.html";
  //placing things correctly
  footerCols[0].appendChild(links[0]);
  footerCols[0].appendChild(links[1]);
  footerCols[0].appendChild(links[2]);
  footerCols[1].appendChild(links[3]);
  footerCols[1].appendChild(links[4]);
  footerCols[1].appendChild(links[5]);
  linkHolder.appendChild(footerCols[0]);
  linkHolder.appendChild(footerCols[1]);
  footerHold.appendChild(linkHolder);
  //adds to html
  footer.appendChild(footerHold);
}
//output
/* <div id="footer-hold" class="row">
        <div>
          <div class="footer-media row">
            <i class="fab fa-twitter"></i>
            <a href="#"><p>Visit our Twitter! (talk to Jerry Pay to see if they have social media)</p></a>
          </div>
          <p class="bold">&copy; Temporary</p>         
        </div>
        <div id="link-holder">
          <ul class="footer-col">
            <a href="index.html" class="highlight-1">Information</a>
            <a href="contact.html" class="highlight-2">Contact Us</a>
            <a href="advertise.html" class="highlight-3">Advertise for Expertise</a>
          </ul>
          <ul class="footer-col">
            <a href="calender.html" class="highlight-4">Calendar</a>
            <a href="currentProjects.html" class="highlight-5">Current Projects</a>
            <a href="currentProjects.html" class="highlight-5">Awards</a>
          </ul>
        </div>
      </div> */