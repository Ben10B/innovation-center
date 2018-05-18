/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//this creates the footer
if (document.getElementById('footer') != undefined) {
  //creates social media section
  var footer = document.getElementById('footer');
  var footerHold = document.createElement("div");
  footerHold.id = "footer-hold";
  footerHold.className = "row";
  //copyright
  var copyright = document.createElement("p");
  copyright.className = "bold";
  copyright.id = "copyright";
  copyright.innerHTML = "&copy; Neumont College of Computer Science Copyright";
  //placing copyright
  footerHold.appendChild(copyright);
  //creates link list
  var linkHolder = document.createElement("div");
  linkHolder.id = "link-holder";
  var footerCols = [];
  //change this number to amount of columns there are
  for (var i = 0; i < 2; i++) {
    footerCols[i] = document.createElement("ul");
    footerCols[i].className = "footer-col";
  }
  var links = [];
  //change this number to the amount of links there are
  for (var i = 0; i < 6; i++) {
    links[i] = document.createElement("a");
  }
  //all link information
  links[0].className = "highlight-1";
  links[0].innerHTML = "Information";
  links[0].href = "index.html";
  links[1].className = "highlight-2";
  links[1].innerHTML = "Contact Us";
  links[1].href = "contact.html";
  links[2].className = "highlight-4";
  links[2].innerHTML = "Advertise for Expertise";
  links[2].href = "advertise.html";
  links[3].className = "highlight-5";
  links[3].innerHTML = "Calendar";
  links[3].href = "calendar.html";
  links[4].className = "highlight-6";
  links[4].innerHTML = "Current Projects";
  links[4].href = "currentProjects.html";
  links[5].className = "highlight-6";
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
  <p class="bold">&copy; Temporary</p>         
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

/***/ })
/******/ ]);