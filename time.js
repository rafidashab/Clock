function initLocalClocks() {

  var today = new Date(); // Creates a date object

  //store the current hours
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  
  var hour_angle = (hours * 30) + (minutes / 2); // 6:59 would translate to 180+ (30) = 210 which is almost equal to 7
  var minutes_angle = minutes * 6;
  var seconds_angle = seconds * 6;

  var x = document.querySelectorAll(".hours-container");
  x[0].style.transform = "rotateZ(" + hour_angle + "deg)";

  var x = document.querySelectorAll(".minutes-container");
  x[0].style.transform =  "rotateZ(" + minutes_angle + "deg)";

  var x = document.querySelectorAll(".seconds-container");
  x[0].style.transform =  "rotateZ(" + seconds_angle + "deg)";

  requestAnimationFrame(initLocalClocks);
}

// function test() {
//   document.body.style.backgroundColor = "Black"
// }
