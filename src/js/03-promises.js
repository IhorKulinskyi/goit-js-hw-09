import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name*="delay"]'),
  step: document.querySelector('[name*="step"]'),
  amount: document.querySelector('[name*="amount"]'),
};

const notifyConfig = {
  closeButton: true,
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const firstDelay = Number(refs.firstDelay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  let delayValue = firstDelay;

  for (let i = 1; i <= amount; i += 1) {
    delayValue += step;
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          notifyConfig
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          notifyConfig
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
