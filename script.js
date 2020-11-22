
var currentDay = $('#currentDay');

//the current day is displayed at the top of the calendar 
function displayToday() {
    var today = moment().format('dddd, MMMM Do YYYY');
    currentDay.text(today);
   
}

  setInterval(displayToday);
  
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future 



 
 

 

 
 




//WHEN I click into a timeblock 
//THEN I can enter an event 

 

//WHEN I click the save button for that timeblock 
//THEN the text for that event is saved in local storage 

 

//WHEN I refresh the page 
//THEN the saved events persist