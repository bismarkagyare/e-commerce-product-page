const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart');
// const cartIcon = document.querySelector('.icon-cart');
const iconSpan = document.querySelector('.icon-span');
const previewImages = document.querySelectorAll('.preview-images img');
const productImage = document.querySelector('.big-img');

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

previewImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    const imageUrl = img.getAttribute('src');
    productImage.setAttribute('src', imageUrl);

    previewImages.forEach((otherImg) => {
      if (otherImg !== img) {
        otherImg.classList.remove('active');
      }
    });
    img.classList.add('active');
  });

  if (index === 0) {
    img.classList.add('active');
  }
});

function updateCount() {
  digit.textContent = count;
}

function displayCountInIcon() {
  iconSpan.textContent = count;
  iconSpan.style.display = 'block';
}
