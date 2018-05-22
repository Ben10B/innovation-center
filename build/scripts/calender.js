var prev = document.getElementById("prev");
var next = document.getElementById("next");
//Previous and Next button
var month = document.getElementById("the-month");
var monthColor = document.getElementById("month");
//Month stuff
var year = document.getElementById("the-year");
var day = document.getElementById('days');
//Year
var eventName = document.forms["eventform"]["eventname"];
var eventDesc = document.forms["eventform"]["eventdesc"];
//JSON
var ulist = document.createElement("ul");
var list = document.createElement("li");
//List

var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear();
var currentDay = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthIndex = 0;
var days;
var selectedDate;
var current = months[currentMonth].substring(0, 3) + " " + currentDay

function switchMonths(index) {
    navigateCalender(monthIndex += index);
    getDays(monthIndex, currentYear, currentDay);
}

function getCurrentMonth() {
    monthIndex = currentMonth;
    navigateCalender(monthIndex);
    getDays(currentMonth, currentYear, currentDay);
}

function getDays(currentMonth, currentYear, currentDay) {
    var date = new Date(currentYear, currentMonth, 1);
    days = [];
    while (date.getMonth() === currentMonth) {
        days.push(new Date(date).toUTCString().substring(0, 7));
        date.setDate(date.getDate() + 1);
    }
    list.innerHTML = "";
    ulist.innerHTML = "";
    day.innerHTML = "";
    days.forEach(function (theday) {
        list = document.createElement("li");
        list.innerHTML = theday;
        ulist.appendChild(list);

        // var div = document.createElement("h3");
        // div.className = "events";  

        // var title = document.createElement("h3");
        // title.className = "title";  
        // title.innerHTML = "Events";  

        // var titleName = document.createElement("p");
        // titleName.className = "name-title";    
        // titleName.innerHTML = "Event Name";

        // var nametitle = document.createElement("p");
        // nametitle.className = "event-name";
        // nametitle.innerHTML = "Practice";

        // var titleDesc = document.createElement("p");
        // titleDesc.className = "desc-title";
        // titleDesc.innerHTML = "Description";    

        // var desctitle = document.createElement("p");
        // desctitle.className = "eventdescription";
        // desctitle.innerHTML = "Practice";        

        // div.appendChild(title);
        // div.appendChild(titleName);
        // div.appendChild(nametitle);         
        // div.appendChild(titleDesc);                    
        // div.appendChild(desctitle); 
        // events.appendChild(div);       
        // div.style.display = "none";
        // if(theday == currentDay) {
        //     div.style.display = "block";                                
        // }
        list.ondblclick = function () { createModal() };
        list.onclick = function () {
            selectedDate = months[monthIndex].substring(0, 3) + theday.substring(4, 7);
            loadData();
        };
    });
    day.appendChild(ulist);
}
// var eventname = document.getElementsByClassName('name-title');
// var eventdescription = document.getElementsByClassName('desc-title');
// var nameofevent = document.getElementsByClassName('event-name');
// var descriptionofevent = document.getElementsByClassName('eventdescription');

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
    var formBtn = document.getElementById('form-button');
    formBtn.onclick = function () {
        loadData();
        modal.style.display = "none";
    };
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

var data;
var request = new XMLHttpRequest();
var events = document.getElementById("event-display");

function loadData() {
    events.innerHTML = "";
    request.open('GET', '../json/events.json');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);
    for (var i = 0; i < data.length; i++) {
        if(data[i].when == current && selectedDate == null) {            
            var div = document.createElement("div");
            div.className = "events";

            var h1 = document.createElement("h1");
            h1.className = "title";
            h1.innerHTML = "Event";

            var p1 = document.createElement("p");
            p1.className = "event-name";
            p1.innerHTML = data[i].eventname;

            var p2 = document.createElement("p");
            p2.className = "event-time";
            p2.innerHTML = data[i].when;

            var p3 = document.createElement("p");
            p3.className = "event-location";
            p3.innerHTML = data[i].location;

            div.appendChild(h1);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            events.appendChild(div);
        }
        if (selectedDate == data[i].when) {
            var div = document.createElement("div");
            div.className = "events";

            var h1 = document.createElement("h1");
            h1.className = "title";
            h1.innerHTML = "Event";

            var p1 = document.createElement("p");
            p1.className = "event-name";
            p1.innerHTML = data[i].eventname;

            var p2 = document.createElement("p");
            p2.className = "event-time";
            p2.innerHTML = data[i].when;

            var p3 = document.createElement("p");
            p3.className = "event-location";
            p3.innerHTML = data[i].location;

            div.appendChild(h1);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            events.appendChild(div);
        }
    }
}

loadData();
// eventName.value = event[0].EventName;
// eventDesc.value = event[0].EventDescription;
// eventname.innerHTML = eventName.value;
// descriptionofevent.innerHTML = eventDesc.value;     
// eventName.value = "";
// eventDesc.value = "";    