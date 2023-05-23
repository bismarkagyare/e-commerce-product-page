const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart img');

let count = 0;
increaseBtn.addEventListener('click', () => {
  count++;
  digit.textContent = count;
});
