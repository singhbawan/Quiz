var ques = [
  [
    "Inside which HTML element do we put the JavaScript? ",
    "&lt;script&gt;",
    "&lt;js&gt;",
    "&lt;javascript&gt;",
    "&lt;scripting&gt;",
    "OFo0WzE9fg==",
  ],
  [
    'How do you write "Hello World" in an alert box? ',
    'msg("Hello World");',
    'msgBox("Hello World");',
    'alert("Hello World");',
    'alertBox("Hello World");',
    "cDhLejVMeDY=",
  ],
  [
    "JavaScript is a ___ -side programming language. ",
    "Client",
    "Both",
    "Server",
    "None",
    "P1cmQ0swbXA=",
  ],
  [
    "How do you find the minimum of x and y using JavaScript?",
    "Math.min(x,y)",
    "min(x,y);",
    "Math.min(xy)",
    "min(xy);",
    "OFo0WzE9fg==",
  ],
  [
    "Which JavaScript label catches all the values, except for the ones specified? ",
    "catch",
    "label",
    "default",
    "try",
    "cDhLejVMeDY=",
  ],
  [
    "Which are the correct “if” statements to execute certain code if “x” is equal to 2? ",
    "if(x 2)",
    "if(x = 2)",
    "if(x != 2 )",
    "if(x == 2)",
    "USVkTmQySlI=",
  ],
  [
    "Which built-in method returns the length of the string?",
    "size()",
    "index()",
    "max()",
    "length()",
    "USVkTmQySlI=",
  ],
  [
    "Which of the following function of Array object removes the last element from an array and returns that element?",
    "push()",
    "pop()",
    "join()",
    "map()",
    "P1cmQ0swbXA=",
  ],
  [
    "Which built-in method calls a function for each element in the array? ",
    "forEach()",
    "loop()",
    "while()",
    "None of the above",
    "OFo0WzE9fg==",
  ],
  [
    "Which of the following type of variable is visible everywhere in your JavaScript code?",
    "global variable",
    "local variable",
    "Both of the above",
    "None of the above",
    "OFo0WzE9fg==",
  ],
];

ques = shuffleArray(ques);

var main1 = document.querySelector("#main1");
var footer1 = document.querySelector("#footer1");
var start1 = document.querySelector("#start1");
var timerEl = document.querySelector("#timer");

var count = 0;
var options;
var time = 30;
var timerInterval;
var timeTaken = 0;
var correctAnswers = 0;

start1.addEventListener("click", function () {
  timerInterval = setInterval(runTimer, 1000);
  updateQues(count);
});
