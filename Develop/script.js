var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, hh:mm a"));

var currentHour = parseInt(today.format("HH"));
console.log(currentHour);


var saveBtn = $(".btnSave");


saveBtn.on("click",function(){

    // grab value from textarea
    var task = $(this).siblings(".textArea").val();
    // use as val for local Storage
    // grab key to save to local storage: div row id name
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task)
}) 


//retrieving what saved in the textAr from local storage
$(".row").each(function(){

   var textAr = $(this).children(".textArea");

    var time = $(this).attr("id");
    
    var event = localStorage.getItem(time);

    textAr.text(event)

    
// splitting id name in to 2 arrays to refer to just the number after "r" in "hour"
    var int = parseInt(time.split('r')[1])
    console.log (int)

// changing color base on current time vs. task time
    if(currentHour > int){
      console.log(  "past")
        $(this).addClass('past')
    } else if(currentHour === int){
        $(this).addClass('present')
        console.log('present')

    }else{
        $(this).addClass('future')

        console.log('future')
    }

})

//get item from LS by key name

//append value to textarea
