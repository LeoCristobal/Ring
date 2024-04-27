const ringBox = document.querySelector('.ring-box');
const ring = document.querySelector('.ring');
const openBtn = document.querySelector('.open-btn');

openBtn.addEventListener('click', () => {
  ring.classList.toggle('show');
});