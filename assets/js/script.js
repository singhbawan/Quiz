var ques = [
  ["Ques1 ", "true", "opt2", "opt3", "opt4", "OFo0WzE9fg=="],
  ["Ques2 ", "opt1", "opt2", "true", "opt4", "cDhLejVMeDY="],
  ["Ques3 ", "opt1", "true", "opt3", "opt4", "P1cmQ0swbXA="],
  ["Ques4 ", "true", "opt2", "opt3", "opt4", "OFo0WzE9fg=="],
  ["Ques5 ", "opt1", "opt2", "true", "opt4", "cDhLejVMeDY="],
  ["Ques6 ", "opt1", "opt2", "opt3", "true", "USVkTmQySlI="],
  ["Ques7 ", "opt1", "opt2", "opt3", "true", "USVkTmQySlI="],
  ["Ques8 ", "opt1", "true", "opt3", "opt4", "P1cmQ0swbXA="],
  ["Ques9 ", "true", "opt2", "opt3", "opt4", "OFo0WzE9fg=="],
  ["Ques10 ", "true", "opt2", "opt3", "opt4", "OFo0WzE9fg=="],
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
