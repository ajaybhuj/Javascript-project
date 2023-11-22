//generating random color :HEX
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // color=color+hex[Math.floor(Math.random() * 16)]
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
const start = document
  .querySelector("#start")
  .addEventListener("click", startChangingColor);

const stop = document
  .querySelector("#stop")
  .addEventListener("click", stopChangingColor);
