/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pELGtDQUFrQyxNQUFNO0FBQ3hDLCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tbWVyY2UtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWNyZWFzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51cycpO1xuY29uc3QgaW5jcmVhc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xuY29uc3QgZGlnaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWl0ZW1zIHAnKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tY2FydCcpO1xuY29uc3QgY2FydEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi1jYXJ0Jyk7XG5jb25zdCBpY29uU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLXNwYW4nKTtcbmNvbnN0IHByZXZpZXdJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldy1pbWFnZXMgaW1nJyk7XG5jb25zdCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmlnLWltZycpO1xuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XG5jb25zdCBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGVudCcpO1xuXG5sZXQgY291bnQgPSAwO1xuXG5pbmNyZWFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY291bnQrKztcbiAgdXBkYXRlQ291bnQoKTtcbn0pO1xuXG5kZWNyZWFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGNvdW50ID4gMCkge1xuICAgIGNvdW50LS07XG4gICAgdXBkYXRlQ291bnQoKTtcbiAgfVxufSk7XG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUNvdW50SW5JY29uKCk7XG59KTtcblxucHJldmlld0ltYWdlcy5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XG4gIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbWFnZVVybCA9IGltZy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIHByb2R1Y3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlVXJsKTtcblxuICAgIHByZXZpZXdJbWFnZXMuZm9yRWFjaCgob3RoZXJJbWcpID0+IHtcbiAgICAgIGlmIChvdGhlckltZyAhPT0gaW1nKSB7XG4gICAgICAgIG90aGVySW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG5cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59KTtcblxuY2FydEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChwb3B1cENvbnRhaW5lcikge1xuICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgfVxuICB1cGRhdGVQb3B1cERpc3BsYXkoKTtcbn0pO1xuXG5jb25zdCB1cGRhdGVDb3VudCA9ICgpID0+IHtcbiAgZGlnaXQudGV4dENvbnRlbnQgPSBjb3VudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlDb3VudEluSWNvbiA9ICgpID0+IHtcbiAgaWNvblNwYW4udGV4dENvbnRlbnQgPSBjb3VudDtcbiAgaWNvblNwYW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5jb25zdCB1cGRhdGVQb3B1cERpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHByaWNlID0gMTI1LjA7XG4gIGNvbnN0IHRvdGFsQW1vdW50ID0gcHJpY2UgKiBjb3VudDtcblxuICBpZiAoY291bnQgPT09IDApIHtcbiAgICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGgyPkNhcnQ8L2gyPlxuICAgICAgPHAgY2xhc3M9XCJlbXB0eS1jYXJ0XCI+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPlxuICAgIGA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcG9wdXBJbmZvSFRNTCA9IGBcbiAgICAgIDxoMj5DYXJ0PC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1pbmZvXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJwb3AtaW1nXCIgc3JjPVwiLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0xLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtbXNnXCI+XG4gICAgICAgICAgPHA+RmFsbCBsaW1pdGVkIGVkaXRpb24gc25lYWtlcnM8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWluZm9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1wcmljZVwiPiQke3ByaWNlLnRvRml4ZWQoMil9PC9zcGFuPiB4XG4gICAgICAgICAgICA8c3BhbiBpZD1cInF1YW50aXR5XCI+JHtjb3VudH08L3NwYW4+ICRcbiAgICAgICAgICAgIDxzcGFuIGlkPVwidG90YWxcIj4ke3RvdGFsQW1vdW50LnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvaWNvbi1kZWxldGUuc3ZnXCIgY2xhc3M9XCJwb3B1cC1kZWxldGVcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNoZWNrb3V0XCI+Y2hlY2tvdXQ8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgcG9wdXBDb250ZW50LmlubmVySFRNTCA9IHBvcHVwSW5mb0hUTUw7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=