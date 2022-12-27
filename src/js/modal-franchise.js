(() => {
  const refs = {
    openFranchiseBtn: document.querySelectorAll('[js-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[js-franchise-close]'),
    franchiseModal: document.querySelector('[js-franchise]'),
  };

  refs.openFranchiseBtn[0].addEventListener('click', toggleModal);
  refs.closeFranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.franchiseModal.classList.toggle('backdrop--is-hidden');
  }
})();
