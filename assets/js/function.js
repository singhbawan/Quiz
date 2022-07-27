// Update the questions on the screen and listen for response, Call logAnswer function when input recieved

function updateQues(num) {
  main1.innerHTML = `
    <h1>Quiz</h1>
    <div>
        <h3 id="question">${ques[num][0]}</h3>
        <ul id="options">
            <li class="option" data-option="8Z4[1=~">${ques[num][1]}</li>
            <li class="option" data-option="?W&CK0mp">${ques[num][2]}</li>
            <li class="option" data-option="Q%dNd2JR">${ques[num][4]}</li>
            <li class="option" data-option="p8Kz5Lx6">${ques[num][3]}</li>
        </ul>            
    </div>`;

  options = document.querySelector("#options");
  setTimeout(() => {
    options.addEventListener("click", function (event) {
      var optionSelected = event.target;
      if (optionSelected.matches(".option")) {
        logAnswer(optionSelected, num);
      }
    });
  }, 250);
}

function logAnswer(optionSelected, num) {
  if (optionSelected.dataset.option == atob(ques[num][5])) {
    correctAnswers++;
    time += 5;
    footer1.innerHTML = `
        <div>
            <h3>Right</h3>
        </div>
        `;
  } else {
    time -= 10;
    footer1.innerHTML = `
            <div>
                <h3>Wrong</h3>
            </div>
            `;
  }

  count++;
  if (count == ques.length) {
    clearTimer();
    endQuiz();
  } else {
    updateQues(count);
  }
}

function runTimer() {
  time--;
  timerEl.innerHTML = `
    timer = ${time}
    `;
  if (time <= 0) {
    clearTimer();
    endQuiz();
  }
}

function clearTimer() {
  timeTaken = time;
  if (timeTaken < 0) {
    timeTaken = 0;
  }
  timerEl.innerHTML = `
    time's up!
    `;
  clearInterval(timerInterval);
}

function endQuiz() {
  main1.innerHTML = `
    <h1>QUIZ END</h1>
    <div>
        <p>Correct Answers = ${correctAnswers}</p>
        <p>Unattempted Questions = ${ques.length - count}</p>
        <p>Wrong Answers = ${count - correctAnswers}</p>
        <p>Time Left = ${timeTaken}</p>
    </div>
    <a href="./index.html">Take Quiz again!</a>
    `;

  updateScore("bawan", timeTaken, correctAnswers);

  footer1.innerHTML = `
    <div>
        <h3></h3>
    </div>
    `;
}

function shuffleArray(array) {
  var i,
    lastItem = array.length - 1,
    placeholder;

  while (lastItem) {
    i = Math.floor(Math.random() * lastItem);
    placeholder = array[i];
    array[i] = array[lastItem];
    array[lastItem] = placeholder;
    lastItem--;
  }
  return array;
}

function setHighScore(name, bestTime) {
  localStorage.setItem("name", name);
  localStorage.setItem("time", bestTime);
}

function updateScore(name, time, score) {
  var currHS = getScore();
  currHS.push([name, time, score]);

  localStorage.setItem("currHighScore", JSON.stringify(currHS));
}

function getScore() {
  var currHS = JSON.parse(localStorage.getItem("currHighScore"));
  if (!currHS) {
    currHS = [];
  }

  // currHS.sort((a, b) => b[2] - a[2]);

  currHS.sort(function (a, b) {
    if (b[2] - a[2]) {
      return b[2] - a[2];
    } else {
      return b[1] - a[1];
    }
  });

  return currHS;
}
