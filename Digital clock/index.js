const clock = document.getElementById("clock");
const cal = document.getElementById("date");
let date = new Date();
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  // console.log(date.toLocaleTimeString());
}, 1000);

cal.innerHTML = date.toLocaleDateString();
