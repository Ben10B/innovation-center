//Slideshow
var slideIndex = 1;
if(document.getElementsByClassName("slideShow-container").length !== 0){
    slideShow(slideIndex);
}
function slideShow(index){
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    if(index > slides.length || slideIndex > slides.length) slideIndex = 1;
    if(index < 1 || slideIndex < 1) slideIndex = slides.length;
    slides[slideIndex-1].style.display = "block";
    //Dots
    if(document.getElementsByClassName("indicator").length !== 0){
        var dots = document.getElementsByClassName("indicator");
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeI", "");
        }
        dots[slideIndex-1].className += " activeI"; 
    }
    slideIndex++;
    setTimeout(slideShow, 3000);
}
function toggle(x){
    // slideShow(slideIndex += x);
    var slides = document.getElementsByClassName("mySlides");
    slideIndex += x;

    if (slideIndex > slides.length) { slideIndex = 1; }
    else if(slideIndex < 1){ slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
function current(x) {
    slideShow(slide = x);
}
//Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
if (modal !== null) {
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
//Quote of the day
var data;
var request = new XMLHttpRequest();
if (document.getElementById("dailyMessage") !== null) {
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

    for (var i = 0; i < 7; i++) {
        if (d.getDay() === i) {
            messageContainer.innerHTML = "" + data.messages[i];
        }
    }
    console.log("new message");
}
//Scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
    if (document.getElementById("toTopBtn") !== null) {
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
if (document.getElementsByClassName("parallax") !== null) {
    setParallax();
}
function setParallax() {
    var parallax = document.getElementsByClassName("parallax");
    var img = [];
    for (var i = 0; i < parallax.length; i++) {
        img.push(parallax[i].getElementsByTagName("img")[0]);
    }
    for (var i = 0; i < img.length; i++) {
        parallax[i].style.backgroundImage = "url('" + img[i].src + "')";
        img[i].style.display = "none";
    }
}
var parallaxIndex = 1;
if (document.getElementsByClassName("parallax-show")[0] !== undefined) {
    setParallaxShow();
}
function setParallaxShow() {
    var parallax = document.getElementsByClassName("parallax-show")[0];
    console.log(parallax);
    var img = [];
    for (var i = 0; i < parallax.getElementsByTagName("img").length; i++) {
        img.push(parallax.getElementsByTagName("img")[i]);
        img[i].style.display = "none";
    }
    if(parallaxIndex > img.length) parallaxIndex = 1;
    if(parallaxIndex < 1) parallaxIndex = img.length;

    parallax.style.backgroundImage = "url('" + img[parallaxIndex - 1].src + "')";

    parallaxIndex++;
    setTimeout(setParallaxShow, 5000);
}
//Sticky Navbar
window.onscroll = function () { stickNavbar() };
var navbar = document.getElementsByClassName("fancyNavbar")[0];
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky && window.innerWidth >= 800) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
