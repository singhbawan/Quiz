function updateQues(num) {
  main1.innerHTML = `
    <h1>Quiz</h1>
    <div>
        <h3 id="question">${ques[num][0]}</h3>
        <ul id="options">
            <li id="opt1" data-option="8Z4[1=~">${ques[num][1]}</li>
            <li id="opt2" data-option="?W&CK0mp">${ques[num][2]}</li>
            <li id="opt3" data-option="p8Kz5Lx6">${ques[num][3]}</li>
            <li id="opt4" data-option="Q%dNd2JR">${ques[num][4]}</li>
        </ul>            
    </div>`;

  options = document.querySelector("#options");

  options.addEventListener("click", function (event) {
    var optionSelected = event.target;
    answerLog(optionSelected, num);
  });
}

function answerLog(optionSelected, num) {
  if (optionSelected.dataset.option == ques[num][5]) {
    time += 5;
    console.log("true");
    footer1.innerHTML = `
        <div>
            <h3>Right</h3>
        </div>
        `;
  } else {
    time -= 10;
    console.log("false");
    footer1.innerHTML = `
            <div>
                <h3>Wrong</h3>
            </div>
            `;
  }

  count++;
  if (count == ques.length) {
    main1.innerHTML = `<h1>QUIZ END</h1>`;
    footer1.innerHTML = `
    <div>
        <h3></h3>
    </div>
    `;
    clearTimer();
  }

  updateQues(count);
}

function timer12() {
  time--;
  timerEl.innerHTML = `
    timer = ${time}
    `;
  if (time <= 0) {
    clearTimer();
  }
}

function clearTimer() {
  timeTaken = time;
  timerEl.innerHTML = `
    time's up!
    `;
  clearInterval(timerInterval);
}
