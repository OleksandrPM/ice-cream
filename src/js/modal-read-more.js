// Get the modal
var readMoreModal = document.getElementById('js-read-more');

// Get the button that opens the modal
var openReadMoreBtn = document.getElementsByClassName('js-read-more-open');

// Get the button that closes the modal
var closeReadMoreBtn = document.getElementById('js-read-more-close');

// When the user clicks on the button, open the modal
openReadMoreBtn[0].onclick = function () {
  readMoreModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeReadMoreBtn.onclick = function () {
  readMoreModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == readMoreModal) {
    readMoreModal.style.display = 'none';
  }
};
