
var currentDay = $('#currentDay');



//the current day is displayed at the top of the calendar 
function displayToday() {
    var today = moment().format('dddd, MMMM Do YYYY');
    currentDay.text(today);
   
}

  setInterval(displayToday);
  
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future 

var time = [9,10,11,12,1,2,3,4,5]; 
var table = $("table-text")
var past = $(.past)
var present = $(.past)
var future = $(.past)
var currentTime = $()

for (var i = 0; i < table.length; i++) { 

// If the current time is  

if (time[i] = currenttime) { 
    //change color to green if in the past
    //change color to 





    .past {
        background-color: #d3d3d3;
        color: red;
      }
      
      .present {
        background-color: #ff6961;
        color: green;
      }
      
      .future {
        background-color: #77dd77;
        color: white;
      }  
//WHEN I click into a timeblock 
//THEN I can enter an event 

//Use jQuery to dynamically enter event into timeblock?



//WHEN I click the save button for that timeblock 
//THEN the text for that event is saved in local storage 

function saveLocal(event) { 

    event.preventDefault(); 
    
    var newA = $('#words'); 
    
    newA.append('<li>' + wordsB + '</li>'); 
    
    } 
    
    newA.on('save', saveLocal); 

}
  


//WHEN I refresh the page 
//THEN the saved events persist