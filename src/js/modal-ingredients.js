// Get the modal
var ingredientsModal = document.getElementById('ingredients');

// Get the button that opens the modal
var openIngredientsBtn = document.getElementsByClassName('ingredients-open');

// Get the button that closes the modal
var closeIngredientsBtn = document.getElementById('ingredients-close');

// When the user clicks on the open button, open the modal
openIngredientsBtn[0].onclick = function () {
  ingredientsModal.style.display = 'block';
};
openIngredientsBtn[1].onclick = function () {
  ingredientsModal.style.display = 'block';
};
openIngredientsBtn[2].onclick = function () {
  ingredientsModal.style.display = 'block';
};

// When the user clicks on the close button, close the modal
closeIngredientsBtn.onclick = function () {
  ingredientsModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    ingredientsModal.style.display = 'none';
  }
};

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[ingredients-open]'),
//     closeModalBtn: document.querySelector('[ingredients-close]'),
//     modal: document.querySelector('[ingredients]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();
