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

function checkAllSelected() {
  let allItems = document.querySelectorAll('.rec-items li');
  let selectedItems = document.querySelectorAll('.rec-items .selected');
  let allCheckIcon = document.querySelector('.allcheckBtn i');

  // 모든 항목이 선택된 경우
  if (allItems.length === selectedItems.length) {
    allCheckIcon.classList.remove('fa-circle');
    allCheckIcon.classList.add('fa-check-circle');
  } else {
    allCheckIcon.classList.remove('fa-check-circle');
    allCheckIcon.classList.add('fa-circle');
  }
}

function toggleSelection(item) {
  item.classList.toggle('selected');
  checkAllSelected();
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
    checkAllSelected();
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

function allcheckList() {
  let allCheckIcon = document.querySelector('.allcheckBtn i');
  let isSelecting = allCheckIcon.classList.contains('fa-circle');
  let icons = document.querySelectorAll(
    '.rec-items .fa-circle, .rec-items .fa-check-circle'
  );

  icons.forEach(function (icon) {
    if (isSelecting) {
      icon.classList.remove('fa-circle');
      icon.classList.add('fa-check-circle');
      icon.parentElement.classList.add('selected');
    } else {
      icon.classList.remove('fa-check-circle');
      icon.classList.add('fa-circle');
      icon.parentElement.classList.remove('selected');
    }
  });

  // allcheckBtn 아이콘 클래스 토글
  allCheckIcon.classList.toggle('fa-circle');
  allCheckIcon.classList.toggle('fa-check-circle');
}
