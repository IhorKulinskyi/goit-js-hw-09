const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
  };

  let timerId = null;

  refs.stopBtn.disabled = true;
  
  refs.startBtn.addEventListener('click', changeColor);
  refs.stopBtn.addEventListener('click', stopChangeColor);
  
  function changeColor() {
   timerId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }
  
  function stopChangeColor() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
