// Update the questions on the screen and listen for response, Call logAnswer function when input recieved

function updateQues(num) {
  main1.innerHTML = `
  <div class = "question-wrapper">
        
        <h3 id="question" class = "question">${ques[num][0]}</h3>
        <ul id="options" class = "options">
            <li class="option btn" data-option="8Z4[1=~">${ques[num][1]}</li>
            <li class="option btn" data-option="?W&CK0mp">${ques[num][2]}</li>
            <li class="option btn" data-option="Q%dNd2JR">${ques[num][4]}</li>
            <li class="option btn" data-option="p8Kz5Lx6">${ques[num][3]}</li>
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
        <div class = "right">
            <h3>Right</h3>
        </div>
        `;
  } else {
    time -= 10;
    footer1.innerHTML = `
            <div class = "wrong">
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
    Time: ${time}
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
    Time's up!
    `;
  clearInterval(timerInterval);
}

function endQuiz() {
  main1.innerHTML = `
    <h1 class ="title">QUIZ END</h1>
    <div class = "wrapper">
    <div>
        <p class="score">Correct Answers = ${correctAnswers}</p>
        <p class="score">Unattempted Questions = ${ques.length - count}</p>
        <p class="score">Wrong Answers = ${count - correctAnswers}</p>
        <p class="score">Time Left = ${timeTaken}</p>
    </div>
    <div class= "form">
    <label for="name" class="form-input score">Insert name to save the score:</label>
    <br>
    <input class="form-input" type="text" id="name1" name="name" required minlength="4" maxlength="16" size="16"
        placeholder="Full Name" />
    <br>
    <input class="form-input btn" id="submit1" type="submit" value="Submit">
    </div>
    </div>
    <a class="btn" href="./index.html">Take Quiz again!</a>
    `;

  document.querySelector("#submit1").addEventListener("click", function () {
    var playerName = document.querySelector("#name1").value;
    updateScore(playerName, timeTaken, correctAnswers);
    document.querySelector("#name1").value = "";
  });

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

  currHS.sort(function (a, b) {
    return b[2] - a[2] ? b[2] - a[2] : b[1] - a[1];
  });

  return currHS;
}
