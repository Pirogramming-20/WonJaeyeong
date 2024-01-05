let startTime;
let updatedTime;
let savedTime = 0;
let tInterval;
let running = 0;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - savedTime;
    tInterval = setInterval(getShowTime, 10);
    running = 1;
    document.getElementById('startbutton').disabled = true;
  }
}

function stopTimer() {
  clearInterval(tInterval);
  savedTime = new Date().getTime() - startTime;
  running = 0;
  document.getElementById('startbutton').disabled = false;
}

function resetTimer() {
  clearInterval(tInterval);
  savedTime = 0;
  running = 0;
  document.getElementById('stopwatch').innerHTML = '00:00';
  document.getElementById('startbutton').disabled = false;
}

function getShowTime() {
  updatedTime = new Date().getTime();
  let difference = updatedTime - startTime;

  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 10);

  seconds = seconds < 10 ? '0' + seconds : seconds;
  milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

  document.getElementById('stopwatch').innerHTML = seconds + ':' + milliseconds;
}

function stopTimer() {
  clearInterval(tInterval);
  savedTime = new Date().getTime() - startTime;
  running = 0;
  document.getElementById('startbutton').disabled = false;
  recordTime();
}
function toggleSelection(item) {
  item.classList.toggle('selected');
}

function deleteSelectedRecords() {
  let selectedItems = document.querySelectorAll('.rec-items .selected');
  selectedItems.forEach(function (item) {
    item.remove();
  });
}

document
  .querySelector('.trashBtn')
  .addEventListener('click', deleteSelectedRecords);

function recordTime() {
  let recordedTime = document.getElementById('stopwatch').innerHTML;
  let ul = document.querySelector('.rec-items');
  let li = document.createElement('li');
  li.className = 'rec-items';

  let iconSpan = document.createElement('span');
  iconSpan.className = 'fa-regular fa-circle allcheckBtn';
  iconSpan.addEventListener('click', function () {
    this.classList.toggle('fa-circle');
    this.classList.toggle('fa-check-circle');
    this.parentElement.classList.toggle('selected');
  });

  li.appendChild(iconSpan);
  let timeText = document.createTextNode(' ' + recordedTime);
  li.appendChild(timeText);
  ul.appendChild(li);
}

function clearList() {
  let selectedItems = document.querySelectorAll('.rec-items .selected');
  selectedItems.forEach(function (item) {
    item.remove();
  });
}
