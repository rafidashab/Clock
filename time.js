function initLocalClocks() {

  var today = new Date(); //fucking date
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var hour_angle = (hours * 30) + (minutes / 2);
  var minutes_angle = minutes * 6;
  var seconds_angle = seconds * 6;

  var x = document.querySelectorAll(".hours-container");
  x[0].style.transform = "rotateZ(" + hour_angle + "deg)";

  var x = document.querySelectorAll(".minutes-container");
  x[0].style.transform =  "rotateZ(" + minutes_angle + "deg)";

  var x = document.querySelectorAll(".seconds-container");
  x[0].style.transform =  "rotateZ(" + seconds_angle + "deg)";

}

function test() {
  document.body.style.backgroundColor = "Black"
}
