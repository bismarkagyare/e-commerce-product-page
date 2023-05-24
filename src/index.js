const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart');
// const cartIcon = document.querySelector('.icon-cart');
const iconSpan = document.querySelector('.icon-span');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  updateCount();
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

addBtn.addEventListener('click', () => {
  displayCountInIcon();
});

function updateCount() {
  digit.textContent = count;
}

function displayCountInIcon() {
  iconSpan.textContent = count;
}
