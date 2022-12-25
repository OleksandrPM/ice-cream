// Get the modal
var aboutModal = document.getElementById('about');

// Get the button that opens the modal
var openAboutBtn = document.getElementsByClassName('about-open')[0];

// Get the button that closes the modal
var closeAboutBtn = document.getElementById('about-close');

// When the user clicks on the button, open the modal
openAboutBtn.onclick = function () {
  aboutModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeAboutBtn.onclick = function () {
  aboutModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    aboutModal.style.display = 'none';
  }
};
