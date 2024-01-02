function generateAnswer() {
  let numbers = [];
  while (numbers.length < 3) {
      let num = Math.floor(Math.random() * 10);
      if (!numbers.includes(num)) {
          numbers.push(num);
      }
  }
  return numbers;
}

const answer = generateAnswer();
let attempts = 0;
const maxAttempts = 9;

function check_numbers() {
  if (attempts < maxAttempts) {
      let userGuess = [
          document.getElementById('number1').value,
          document.getElementById('number2').value,
          document.getElementById('number3').value
      ].map(Number);

      if (new Set(userGuess).size !== userGuess.length) {
          alert("숫자를 중복되지 않게 입력해주세요!");
          return;
      }

      let result = checkGuess(userGuess);
      displayResult(userGuess.join(" "), result.strikes, result.balls);
      attempts++;

      if (result.strikes === 3) {
          showGameResult("success");
          return;
      }

      if (attempts === maxAttempts) {
          showGameResult("fail");
      }
  }
}


function checkGuess(guess) {
  let strikes = 0;
  let balls = 0;

  guess.forEach((num, idx) => {
      if (num === answer[idx]) {
          strikes++;
      } else if (answer.includes(num)) {
          balls++;
      }
  });

  return { strikes, balls };
}

function displayResult(guess, strikes, balls) {
  let resultElement = document.querySelector('.result-display');
  let resultHTML = '';

  if (strikes === 0 && balls === 0) {
      resultHTML = `<div class="check-result">
          <div class="left">${guess}</div> :
          <div class="right">
              <div class="out num-result">O</div>
          </div>
      </div>`;
  } else {
      resultHTML = `<div class="check-result">
          <div class="left">${guess}</div> :
          <div class="right">
              ${strikes} <div class="strike num-result">S</div>
              ${balls} <div class="ball num-result">B</div>
          </div>
      </div>`;
  }
  resultElement.innerHTML += resultHTML;
}


function showGameResult(result) {
  let resultElement = document.querySelector('.game-result');
  if (result === "success") {
    resultElement.innerHTML = '<img src="./img/success.png" alt="Success">';
} else if (result === "fail") {
    resultElement.innerHTML = '<img src="./img/fail.png" alt="Fail">';
}
}