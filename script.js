// Display the current date and time
function displayDateTime() {
    var todayDate = dayjs().format('dddd, MMM Do YYYY');
    $('#currentDay').text(todayDate);
    
    setInterval(function(){
      var currentTime = dayjs().format('h:mm:ss A');
      $('#currentTime').text(currentTime);
    }, 1000);
  }
  
  // Color-code time blocks based on current time
  var blockHour;

  function colorCodeBlocks() {
    var currentHour = dayjs().hour();
    console.log('Current hour:', currentHour);
  
    $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log('Block hour:', blockHour);
  
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
       
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }

    });
  }
 
  // Save task text to local storage
  $(".saveBtn").on("click", function () {
    var taskText = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id");
  
    localStorage.setItem(taskTime, taskText);
  });
  
  // Load saved tasks from local storage
  function loadSavedTasks() {
    $(".time-block").each(function(){
      var taskTime = $(this).attr("id");
      var taskText = localStorage.getItem(taskTime);
  
      if (taskText) {
        $(this).find(".description").val(taskText);
      }
    });
  }
  
  $(document).ready(function(){
    displayDateTime();
    colorCodeBlocks();
    loadSavedTasks();
  });
  
  // Call colorCodeBlocks() every minute to update time block colors
  setInterval(colorCodeBlocks, 60000);
  
  var currentHour = dayjs().hour();
  console.log('Current hour:', currentHour);
  
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
   
  })
  
  
