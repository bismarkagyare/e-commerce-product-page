const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart img');

let count = 0;
increaseBtn.addEventListener('click', () => {
  count++;
  digit.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  if (count === 0) {
    digit.textContent = count;
  } else {
    count--;
    digit.textContent = count;
  }
});
