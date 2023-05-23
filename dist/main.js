/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const decreaseBtn = document.querySelector('.minus');
const increaseBtn = document.querySelector('.plus');
const digit = document.querySelector('.select-items p');
const addBtn = document.querySelector('.add-to-cart img');

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

function updateCount() {
  digit.textContent = count;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlY3JlYXNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnVzJyk7XG5jb25zdCBpbmNyZWFzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzJyk7XG5jb25zdCBkaWdpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtaXRlbXMgcCcpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1jYXJ0IGltZycpO1xuXG5sZXQgY291bnQgPSAwO1xuXG5pbmNyZWFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY291bnQrKztcbiAgdXBkYXRlQ291bnQoKTtcbn0pO1xuXG5kZWNyZWFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGNvdW50ID4gMCkge1xuICAgIGNvdW50LS07XG4gICAgdXBkYXRlQ291bnQoKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50KCkge1xuICBkaWdpdC50ZXh0Q29udGVudCA9IGNvdW50O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9