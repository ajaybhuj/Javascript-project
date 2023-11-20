# Javascript-project

# Project 1: Color Switcher
This project is a simple JavaScript-based background color switcher. It consists of a web page with four colored buttons (grey, white, blue, and yellow). When a user clicks on one of these buttons, the background color of the entire page changes to the corresponding color.

Here's a brief description of the components:

HTML: The structure of the web page, including buttons with different IDs representing colors.

CSS: Styles for the buttons and layout of the page.

JavaScript (index.js): The script handles the functionality. It selects the body of the page and all buttons with the class "button." It adds a click event listener to each button. When a button is clicked, it checks the ID of the button and sets the background color of the body accordingly.

Overall, this project provides a straightforward example of using JavaScript to dynamically change the background color of a webpage based on user interaction with buttons.

## HTML & CSS Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
    <style>
      html {
        margin: 0;
      }

      span {
        display: block;
      }
      .canvas {
        margin: 100px auto 100px;
        width: 80%;
        text-align: center;
      }

      .button {
        width: 100px;
        height: 100px;
        border: solid black 2px;
        display: inline-block;
      }

      #grey {
        background: grey;
      }

      #white {
        background: white;
      }
      #blue {
        background: blue;
      }
      #yellow {
        background: yellow;
      }
    </style>
  </head>
  <body>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

## Javascript Code

```javascript
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

# Project ScreenShot

![project screenShot](https://github.com/ajaybhuj/Javascript-project/blob/main/Color%20Scheme%20Switcher/screenshot.png)
