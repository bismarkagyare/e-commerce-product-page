const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart');
const cartIcon = document.querySelector('.icon-cart');
const iconSpan = document.querySelector('.icon-span');
const previewImages = document.querySelectorAll('.preview-images img');
const productImage = document.querySelector('.big-img');
const popupContainer = document.querySelector('.popup-container');
const popupContent = document.querySelector('.popup-content');

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

cartIcon.addEventListener('click', () => {
  if (popupContainer) {
    popupContainer.style.display =
      popupContainer.style.display === 'none' ? 'block' : 'none';
  }
  updatePopupDisplay();
});

const updateCount = () => {
  digit.textContent = count;
};

const displayCountInIcon = () => {
  iconSpan.textContent = count;
  iconSpan.style.display = 'block';
};

const updatePopupDisplay = () => {
  const price = 125.0;
  const totalAmount = price * count;

  if (count === 0) {
    popupContent.innerHTML = `
      <h2>Cart</h2>
      <p class="empty-cart">Your cart is empty</p>
    `;
  } else {
    const popupInfoHTML = `
      <h2>Cart</h2>
      <div class="popup-info">
        <img class="pop-img" src="./images/image-product-1.jpg" alt="" />
        <div class="pop-msg">
          <p>Fall limited edition sneakers</p>
          <p class="item-info">
            <span class="item-price">$${price.toFixed(2)}</span> x
            <span id="quantity">${count}</span> $
            <span id="total">${totalAmount.toFixed(2)}</span>
          </p>
        </div>
        <img src="./images/icon-delete.svg" class="popup-delete" alt="" />
      </div>
      <button class="btn checkout">checkout</button>
    `;

    popupContent.innerHTML = popupInfoHTML;
  }
};
