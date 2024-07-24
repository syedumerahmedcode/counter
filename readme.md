# counter

## Table of content

- [Introduction](#introduction)
- [Out Of Scope](#out-of-scope)
- [Project structure](#project-structure)
- [index.html](#indexhtml)
- [app.js](#appjs)
- [styles.css](#stylescss)
- [Technologies Used](#technologies-used)
- [Prerequisities](#prerequisities)
- [Commands](#commands)
- [Contribution](#contribution)
- [References](#references)
- [Contact Information](#contact-information)

## Introduction

The project is called counter and via this project, the user can increase or decrease the counter when the user click a button. This program can be used to keep track of repeatable task which increases or decreases over time. Additionally, the user can also reset the counter when needed.

The application is coded in Visual Studio Code and deployed using Live server extension. This project another one in a series of basic javascript project created for better understanding of the technology and how things work. The inspiration for this project is coming from this [Udemy](https://www.udemy.com/course/javascript-tutorial-for-beginners-w/) course.

## Out Of Scope

Since this is an beginner project in which the focus is just to learn the some basic javascript, testing is out of scope of this project. Similarly, continous delivery(either via Docker or github Pilot) is out of scope of this project.

## Project structure

The project consists of 3 main files which are described below:

- index.html
- app.js
- styles.css

Additionally, a _setup_ folder is also created which contains the initial project in its basic form and it was used as basis for the finished project.

## index.html

The head of the HTML page contains the title _Counter_ and it also contains the reference to the stylesheet _styles.css_.

```javascript
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Counter</title>

  <!-- styles -->
  <link rel="stylesheet" href="styles.css" />
</head>
```

In the `<body>` section, the `<div>` contains three buttons, namely `decrease`, `reset` and `increase`.

```javascript
<body>
  <main>
    <div class="container">
      <h1>Counter</h1>
      <span id="value">0</span>
    </div>
    <div class="button-container">
      <button class="btn decrease">decrease</button>
      <button class="btn reset">reset</button>
      <button class="btn increase">increase</button>
    </div>
  </main>
  <!--javascript-->
  <script src="app.js"></script>
</body>
```

## app.js

First, we find out the `value` and `btns`.

```javascript
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
```

Instead of calling AddEventListener for each button one by one, we will use forEach() method instead. Here, based on the clas of the button clicked, we either _increase_, _decrease_ or _reset_ the counter. Once the counter is updated, we check if the counter is **greater** than ZERO, **less** than ZERO or **equal** to ZERO ,and based on the result, we change the color to **green**,**red** or **black** respectively.

```javascript
btns.forEach(function (btn) {
  btn.addEventListener(click, function (eventObject) {
    const blackColor = "#222";
    const greenColor = "green";
    const redColor = "red";
    const styles = eventObject.currentTarget.classList;
    const decrease = "decrease";
    const increase = "increase";
    // console.log(styles);
    if (styles.contains(decrease)) {
      count--;
    } else if (styles.contains(increase)) {
      count++;
    } else {
      count = ZERO;
    }
    if (count > ZERO) {
      value.style.color = greenColor;
    }
    if (count < ZERO) {
      value.style.color = redColor;
    }
    if (count === ZERO) {
      value.style.color = blackColor;
    }
    value.textContent = count;
  });
});
```

## styles.css

The css file consists of various sections such as `Fonts` , `Variables`, `Global Styles`, `Nav` and `Container`.

## Technologies Used

- [Javascript](https://www.w3schools.com/js/): JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions(A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable). While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based(Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object. In simple words: this type of style allows the creation of an object without first defining its class.), multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
- [HTML5](https://www.w3schools.com/html/default.asp): HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). HTML5 is the latest version of HTML.
- [Visual Studio Code](https://code.visualstudio.com/Download): Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Launch a development local Server with live reload feature for static & dynamic pages

## Prerequisities

Since this project is constructed using Visual Studio Code and Live Server, therefore, that is the recommended prerequisite for this project. Someone trying to run the project via other means are welcome to do so but then they would have to figure out the tech stack(IDE+Web Server) combination themselves.

## Commands

In Visual Studio Code, please go to index.html. Once there, right click-->Open with Live Server. On the user's local machine, the application is accessible under `http://127.0.0.1:5500`.

## Contribution

Feature requests, issues, pull requests and questions are welcome.

## References

- [1](https://www.udemy.com/course/javascript-tutorial-for-beginners-w/): Javascript Tutorial and Projects Course (2022)
  Learn Javascript by Building 30+ Interesting Projects **(Primary resource)**
- [2](https://github.com/john-smilga/javascript-basic-projects/tree/master/02-counter): Original source code of the project **(Primary Resource) (Github)**
- [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript): JavaScript | MDN
- [4](https://developer.mozilla.org/en-US/docs/Glossary/HTML5): HTML5 - MDN Web Docs Glossary: Definitions of Web-related terms | MDN

## Contact Information

How to reach me? At [github specific gmail account](mailto:syedumerahmedcode@gmail.com?subject=%5BGitHub%5D%20Hello%20from%20Github). 
