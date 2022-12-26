// Get the modal
var franchiseModal = document.getElementById('franchise');

// Get the button that opens the modal
var openFranchiseBtn = document.getElementsByClassName('franchise-open');

// Get the button that closes the modal
var closeFranchiseBtn = document.getElementById('franchise-close');

// When the user clicks on the button, open the modal
openFranchiseBtn[0].onclick = function () {
  franchiseModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeFranchiseBtn.onclick = function () {
  franchiseModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == franchiseModal) {
    franchiseModal.style.display = 'none';
  }
};
