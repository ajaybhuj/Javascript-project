# Javascript-project
# Project 1: Color Switcher
``` javascript

const body = document.querySelector("body");
const btns = body.querySelectorAll(".button");

btns.forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

    



```
