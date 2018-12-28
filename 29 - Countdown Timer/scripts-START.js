let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(second) {
  //Wes said setInterval(() => second--, 1000); sometimes does not work
  //e.g. when you scroll away the interval will stops.
  //Probably because browser does something funcky, efficiency, display etc.

  //Clear the existing countdown
  clearInterval(countdown);

  const now = Date.now();
  const then = now + (second * 1000);

  //We have to manually display the time once becuase setInterval does not run
  //rightaway for the first lap
  displayTimeLeft(second);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondLeft);
  }, 1000);
}

function displayTimeLeft(second) {
  const minute = Math.floor(second / 60);
  const remainderSecond = second % 60;
  const display = `${minute}:${remainderSecond < 10 ? '0' + remainderSecond : remainderSecond}`;

  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' + minute : minute}${hour > 12 ? 'pm' : 'am'}`;
}

function startTimer() {
  const second = parseInt(this.dataset.time);
  console.log(second);
  timer(second);
}



buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault(); //prevent page from reloading
  const minute = this.minutes.value;

  timer(minute * 60);
  this.reset();
});
