// allows jQuery to run, Wraps all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function(){

//add coded to apply the past, present, or future class to each time block by comparing the id to the current hour.
var rows = document.querySelectorAll(".row")
for (let i = 0; i < rows.length; i++) {  
  if (dayjs().hour() > rows[i].getAttribute("data-hour")) {
    rows[i].classList.add("past")
  }
  else if (dayjs().hour() < rows[i].getAttribute("data-hour")){
    rows[i].classList.add("future")
  }
  else {rows[i].classList.add("present")}
}

//setting a variable to get element by ID
var dayDisplayEl = $('#currentDay');

//setting a variable to create element
var textarea = $('<textarea>')
var containerEl = document.getElementsByClassName(".container-lg px-5")

 //Add code to display the current date in the header of the page.
$(function (displayDate) {
  var rightNow = dayjs().format('dddd, MMMM DD, YYYY');
  dayDisplayEl.text(rightNow);
});

//this = line 105 in index
//line 23 saves description to local storage, line 24 keeps text shown when saved
$(".saveBtn").click(function(){
  var value = $(this).siblings(".description").val()
  var time = $(this).parent().attr("id")
    localStorage.setItem(time,value)
    localStorage.getItem(time,value)
setTimeout(function(){
  $(".notification").removeClass("hide")
},3000) 
 });

})