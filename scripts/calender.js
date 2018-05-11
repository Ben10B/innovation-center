var month = document.getElementById("the-month");
var monthColor = document.getElementById("month");
var year = document.getElementById("the-year");
var day = document.getElementById('days');
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var nameofevent = document.getElementsByClassName('event-name');
var descriptionofevent = document.getElementsByClassName('eventdescription');


var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear();
var currentDay = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthIndex = 0;

var event;
var request = new XMLHttpRequest();

function loadFormData() {
    request.open('GET', './json/events.json');
    request.onload = formLoadComplete;
    request.send();
}
function formLoadComplete(evt) {
    event = JSON.parse(request.responseText);
    var eventName = document.forms["eventform"]["eventname"].value;
    var eventDesc = document.forms["eventform"]["eventdesc"].value;
    eventName = event[0].EventName;
    eventDesc = event[0].EventDescription;
    console.log(eventName + " " + eventDesc);
}

function switchMonths(index) {
    navigateCalender(monthIndex += index);
    getDays(monthIndex, currentYear);
}

function getCurrentMonth() {
    monthIndex = currentMonth;
    navigateCalender(monthIndex);
    getDays(currentMonth, currentYear);
}

function getDays(currentMonth, currentYear) {
    var date = new Date(currentYear, currentMonth, 1);
    var days = [];
    var ulist = document.createElement("ul");
    var list = document.createElement("li");

    while (date.getMonth() === currentMonth) {
        days.push(new Date(date).toUTCString().substring(0, 7));
        date.setDate(date.getDate() + 1);
    }
    list.innerHTML = "";
    ulist.innerHTML = "";
    day.innerHTML = "";
    days.forEach(function (theday) {
        list = document.createElement("li");
        list.ondblclick = function () { createModal() };
        list.onclick = function() {displayEvent()};
        list.innerHTML = theday;
        ulist.appendChild(list);
    });
    day.appendChild(ulist);
}

var formBtn = document.getElementById('form-button');
formBtn.onclick = function() {
    loadFormData();
};

function displayEvent() {

}

function createModal() {
    var modal = document.getElementById('myCalenderModal');
    var span = document.getElementsByClassName("calender-close")[0];
        modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function navigateCalender(index) {
    year.innerHTML = currentYear;
    if (index < 0) {
        monthIndex = months.length - 1;
    }
    if (index > 11) {
        monthIndex = 0;
    }
    month.innerHTML = months[monthIndex];

    if (month.innerHTML == "January") {
        monthColor.style.backgroundColor = "#FC0";
        month.style.color = "#000";
        year.style.color = "#000";
        prev.style.color = "#000";
        next.style.color = "#000";
    }
    else if (month.innerHTML == "February") {
        monthColor.style.backgroundColor = "#000";
        month.style.color = "#fff";
        year.style.color = "#fff";
        prev.style.color = "#fff";
        next.style.color = "#fff";
    }
    else if (month.innerHTML == "March") {
        monthColor.style.backgroundColor = "#FC0";
        month.style.color = "#000";
        year.style.color = "#000";
        prev.style.color = "#000";
        next.style.color = "#000";
    }
    else if (month.innerHTML == "April") {
        monthColor.style.backgroundColor = "#000";
        month.style.color = "#fff";
        year.style.color = "#fff";
        prev.style.color = "#fff";
        next.style.color = "#fff";
    }
    else if (month.innerHTML == "May") {
        monthColor.style.backgroundColor = "#FC0";
        month.style.color = "#000";
        year.style.color = "#000";
        prev.style.color = "#000";
        next.style.color = "#000";
    }
    else if (month.innerHTML == "June") {
        monthColor.style.backgroundColor = "#000";
        month.style.color = "#fff";
        year.style.color = "#fff";
        prev.style.color = "#fff";
        next.style.color = "#fff";
    }
    else if (month.innerHTML == "July") {
        monthColor.style.backgroundColor = "#FC0";
        month.style.color = "#000";
        year.style.color = "#000";
        prev.style.color = "#000";
        next.style.color = "#000";
    }
    else if (month.innerHTML == "August") {
        monthColor.style.backgroundColor = "#000";
        month.style.color = "#fff";
        year.style.color = "#fff";
        prev.style.color = "#fff";
        next.style.color = "#fff";
    }
    else if (month.innerHTML == "September") {
        monthColor.style.backgroundColor = "#FC0";
        month.style.color = "#000";
        year.style.color = "#000";
        prev.style.color = "#000";
        next.style.color = "#000";
    }
    else if (month.innerHTML == "October") {
        monthColor.style.backgroundColor = "#000";
        month.style.color = "#fff";
        year.style.color = "#fff";
        prev.style.color = "#fff";
        next.style.color = "#fff";
    }
    else if (month.innerHTML == "November") {
        monthColor.style.backgroundColor = "#FC0";
        month.style.color = "#000";
        year.style.color = "#000";
        prev.style.color = "#000";
        next.style.color = "#000";
    }
    else if (month.innerHTML == "December") {
        monthColor.style.backgroundColor = "#000";
        month.style.color = "#fff";
        year.style.color = "#fff";
        prev.style.color = "#fff";
        next.style.color = "#fff";
    }
} 