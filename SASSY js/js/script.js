//Slideshow
var slide = 1;
if(document.getElementsByClassName("slideShow-container").length !== 0){
    slideShow(slide);
}
function slideShow(index){
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("indicator");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeI", "");
    }
    if(index > slides.length) slide = 1;
    if(index < 1) slide = slides.length;
    slides[slide-1].style.display = "block";
    dots[slide-1].className += " activeI"; 
}
function toggle(x){
    slideShow(slide += x);
}
function current(x){
    slideShow(slide = x);
}
//Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
if(modal !== null){
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }     
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
//Quote of the day
var data;
var request = new XMLHttpRequest();
if(document.getElementById("dailyMessage") !== null){
    loadData();
} 
function loadData() {
  request.open('GET', './json/messages.json');
  request.onload = loadComplete;
  request.send();
}
function loadComplete(evt) {
    data = JSON.parse(request.responseText);
    var d = new Date();
    var messageContainer = document.getElementById("dailyMessage");

    for(var i = 0; i < 7; i++){
        if(d.getDay() === i){
            messageContainer.innerHTML = ""+data.messages[i];
        }
    }
    console.log("new message");
}
//Scroll to top
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function() {
    if(document.getElementById("toTopBtn") !== null){
        scrollFunction()
    }
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTopBtn").style.display = "inline-block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}
//Parallax
if(document.getElementsByClassName("parallax") !== null){
    setParallax();
}
function setParallax(){
    // var parallax = document.getElementsByClassName("parallax")[0];
    // var img = parallax.getElementsByTagName("img")[0];
    // parallax.style.backgroundImage = "url('"+img.src+"')";
    // img.style.display = "none";
    var parallax = document.getElementsByClassName("parallax");
    var img = [];
    for (var i = 0; i < parallax.length; i++) {
        img.push(parallax[i].getElementsByTagName("img")[0]); 
    }
    for (var i = 0; i < img.length; i++) {
        parallax[i].style.backgroundImage = "url('"+img[i].src+"')";
        img[i].style.display = "none";
    }
}
//Creates the nav bar from a fancyNavbar class
// if(document.getElementsByClassName("fancyNavbar")[0] !== null) {
//     var fancyNavbar = document.getElementsByClassName("fancyNavbar")[0];
//     var ul = document.createElement("ul");
//     ul.className = "row";
//     for(var i = 0; i < 6; i++) {
//         var li = document.createElement("li");
//         li.className = "dropdown-nav";
//         var a = document.createElement("a");
//         var iTag = document.createElement("i");
//         var p = document.createElement("p");
//         p.className = "txt-center";
//         var dropdown = document.createElement("div");
//         dropdown.className = "dropdown-content";
//         switch (i) {
//             case 0:
//                 li.id = "red";
//                 iTag.className = "fas fa-info-circle";
//                 p.innerHTML = "Information";
//                 var add = document.createElement("a");                
//                 add.innerHTML = "Fill 1";
//                 dropdown.appendChild(add);
//                 var add1 = document.createElement("a");                
//                 add1.innerHTML = "Fill 2";
//                 dropdown.appendChild(add1);
//                 var add2 = document.createElement("a");                
//                 add2.innerHTML = "Fill 3";
//                 dropdown.appendChild(add2);
//                 break;
//             case 1:
//                 li.id = "tGreen";
//                 iTag.className = "fas fa-plug";
//                 p.innerHTML = "Connect";
//                 var add = document.createElement("a");
//                 add.innerHTML = "Contact";
//                 dropdown.appendChild(add);
//                 break;
//             case 2:
//                 li.id = "fGreen";
//                 iTag.className = "fas fa-comments";
//                 p.innerHTML = "Discussion";

//                 break;
//             case 3:
//                 li.id = "cyan";
//                 iTag.className = "fas fa-newspaper";
//                 p.innerHTML = "Advertise";

//                 break;
//             case 4:
//                 li.id = "blue";
//                 iTag.className = "fas fa-calendar-alt";
//                 p.innerHTML = "Calendar";
//                 break;
//             case 5:
//                 li.id = "grape";
//                 iTag.className = "fas fa-trophy";
//                 p.innerHTML = "Current";
//                 var add = document.createElement("a");
//                 add.innerHTML = "Current Projects";
//                 dropdown.appendChild(add);
//                 var add1 = document.createElement("a");
//                 add1.innerHTML = "Awards";
//                 dropdown.appendChild(add1);
//                 break;
//         }
//         a.appendChild(iTag);
//         a.appendChild(p);
//         li.appendChild(a);
//         li.appendChild(dropdown);
//         ul.appendChild(li);
//     }
//     fancyNavbar.appendChild(ul);
//     var div = document.createElement("div");
//     div.id = "navExtend";
//     fancyNavbar.appendChild(div);
// }
//Sticky Navbar
window.onscroll = function() {stickNavbar()};
var navbar = document.getElementsByClassName("fancyNavbar")[0];
var sticky = navbar.offsetTop;

function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


/* <li class="changeTo-red-1s"><a class="column"><i class="fas fa-info-circle"></i><p class="txt-center">Information</p></a></li>
<li class="changeTo-tGreen-1s"><a class="column"><i class="fas fa-plug"></i><p class="txt-center">Connect</p></a></li>
<li class="changeTo-fGreen-1s"><a class="column"><i class="fas fa-comments"></i><p class="txt-center">Discussion</p></a></li>
<li class="changeTo-cyan-1s"><a class="column"><i class="fas fa-newspaper"></i><p class="txt-center">Advertise</p></a></li>
<li class="changeTo-blue-1s"><a class="column"><i class="fas fa-calendar-alt"></i><p class="txt-center">Calendar</p></a></li>
<li class="changeTo-grape-1s"><a class="column"><i class="fas fa-trophy"></i><p class="txt-center">Current</p></a></li> */