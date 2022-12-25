// Get the modal
var productsModal = document.getElementById('products');

// Get the button that opens the modal
var openProductsBtn = document.getElementsByClassName('products-open')[0];

// Get the button that closes the modal
var closeProductsBtn = document.getElementById('products-close');

// When the user clicks on the button, open the modal
openProductsBtn.onclick = function () {
  productsModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeProductsBtn.onclick = function () {
  productsModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    productsModal.style.display = 'none';
  }
};
