// Get the modal
var locationModal = document.getElementById('location');

// Get the button that opens the modal
var openLocationBtn = document.getElementsByClassName('location-open');

// Get the button that closes the modal
var closeLocationBtn = document.getElementById('location-close');

// When the user clicks on the button, open the modal
openLocationBtn[0].onclick = function () {
  locationModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeLocationBtn.onclick = function () {
  locationModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == locationModal) {
    locationModal.style.display = 'none';
  }
};
