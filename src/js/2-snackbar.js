import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Getting the delay value and state from the form
  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  // Creating a promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Processing the fulfillment or rejection of a promise
  promise
    .then(delay => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        icon: false,
        position: 'topRight',
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        icon: false,
        position: 'topRight',
        timeout: 3000,
      });
    });

  // Clearing the input field after clicking a button
  event.target.delay.value = '';
});