let counter = document.getElementById('counter');
let count = 0;
let isPaused = false;
let intervalID;

function startCounter() {
  intervalID = setInterval(() => {
    if (!isPaused) {
      count++;
      counter.textContent = count;
    }
  }, 1000);
}

startCounter();

let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minusButton.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

let heartButton = document.getElementById('heart');
let likesList = document.querySelector('.likes');
let likes = {};

heartButton.addEventListener('click', () => {
  likes[count] = (likes[count] || 0) + 1;
  let likeItem = document.querySelector(`[data-num="${count}"]`);
  if (likeItem) {
    likeItem.textContent = `${count} has been liked ${likes[count]} times`;
  } else {
    likeItem = document.createElement('li');
    likeItem.setAttribute('data-num', count);
    likeItem.textContent = `${count} has been liked ${likes[count]} times`;
    likesList.appendChild(likeItem);
  }
});

let pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(intervalID);
    pauseButton.textContent = 'resume';
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
  } else {
    startCounter();
    pauseButton.textContent = 'pause';
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
  }
});

let commentForm = document.getElementById('comment-form');
let commentInput = document.getElementById('comment-input');
let commentsList = document.getElementById('list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let comment = document.createElement('p');
  comment.textContent = commentInput.value;
  commentsList.appendChild(comment);
  commentInput.value = '';
});
