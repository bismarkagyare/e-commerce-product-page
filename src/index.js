const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart');
const cartIcon = document.querySelector('.icon-cart');
const iconSpan = document.querySelector('.icon-span');
const previewImages = document.querySelectorAll('.preview-images img');
const productImage = document.querySelector('.big-img');
const popupContainer = document.querySelector('.popup-container');

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
  updatePopupDisplay(count);
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

cartIcon.addEventListener('click', () => {
  if (popupContainer) {
    popupContainer.style.display =
      popupContainer.style.display === 'none' ? 'block' : 'none';
  }
});

const updateCount = () => {
  digit.textContent = count;
};

const displayCountInIcon = () => {
  iconSpan.textContent = count;
  iconSpan.style.display = 'block';
};

const updatePopupDisplay = (quantity) => {
  const price = 125.0;
  const totalAmount = price * quantity;
  const popupQuantity = document.querySelector('.popup-info p span#quantity');
  const popupTotal = document.querySelector('.popup-info p span#total');

  if (popupQuantity && popupTotal) {
    popupQuantity.textContent = quantity;
    popupTotal.textContent = `$${totalAmount.toFixed(2)}`;

    popupQuantity.style.color = 'hsl(219, 9%, 45%)';
    popupTotal.style.fontWeight = 'bold';
  }
};
