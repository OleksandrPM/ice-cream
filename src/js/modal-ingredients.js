// Get the modal
var ingredientsModal = document.getElementById('ingredients');

// Get the button that opens the modal
var openIngredientsBtn = document.getElementsByClassName('ingredients-open')[0];

// Get the button that closes the modal
var closeIngredientsBtn = document.getElementById('ingredients-close');

// When the user clicks on the button, open the modal
openIngredientsBtn.onclick = function () {
  ingredientsModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeIngredientsBtn.onclick = function () {
  ingredientsModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    ingredientsModal.style.display = 'none';
  }
};
