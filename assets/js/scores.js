var highscorearr = getScore();
var tableEl = document.querySelector("#table1");
var clearScoreEl = document.querySelector("#clearScore");

clearScoreEl.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

highscorearr.forEach((score) => {
  var tableRow = document.createElement("tr");
  tableRow.innerHTML = `
                <td>${score[0]}</td>
                <td>${score[1]}</td>
                <td>${score[2]}</td>
                    `;
  tableEl.append(tableRow);
});

// updateScore();
