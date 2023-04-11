import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  mins: document.querySelector('span[data-minutes]'),
  secs: document.querySelector('span[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
};

let timerId = null;

refs.startBtn.disabled = true;

const notifyOptions = {
  timeout: 1500,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  backOverlayClickToClose: true,
  position: 'center-center',
  clickToClose: true,
  cssAnimationStyle: 'from-bottom',
};

const confettiConfig = {
  particleCount: 100,
  angle: 45,
  spread: 60,
  startVelocity: 30,
  decay: 0.92,
  gravity: 1,
  colors: [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
  ],
  shapes: ['circle', 'square'],
  emojis: ['🌈', '🦄'],
  zIndex: 10000,
};

const jsConfetti = new JSConfetti();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timerValue = selectedDates[0] - Date.now();
    if (timerValue > 0) {
      const convertTimerValue = convertMs(timerValue);
      updateClockFace(convertTimerValue);
      refs.startBtn.disabled = false;

      const startTimerOnClick = () => {
        startTimer(selectedDates[0]);
        refs.startBtn.disabled = true;
        refs.startBtn.removeEventListener('click', startTimerOnClick);
      };

      refs.startBtn.addEventListener('click', startTimerOnClick);
      console.log('ready to start timer');
    } else {
      Notify.failure('Please choose a date in the future', notifyOptions);
    }
  },
};

flatpickr(refs.dateInput, options);

function startTimer(startTime) {
  clearInterval(timerId);
  console.log('timer is on');
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;
    const formatTime = convertMs(deltaTime);
    if (deltaTime < 0) {
      clearInterval(timerId);
        Notify.success('Hurrraaaay', notifyOptions);
        jsConfetti.addConfetti(confettiConfig);
      return;
    }
    updateClockFace(formatTime);
  }, 1000);
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = minutes;
  refs.secs.textContent = seconds;
  console.log('updating clockface');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));

  const hours = pad(Math.floor((ms % day) / hour));

  const minutes = pad(Math.floor(((ms % day) % hour) / minute));

  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
