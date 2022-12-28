(() => {
  const refs = {
    openProductslBtn: document.querySelectorAll('.js-products-open'),
    closeProductsBtn: document.querySelector('.js-products-close'),
    productsModal: document.querySelector('.js-products'),
  };

  refs.openProductslBtn[0].addEventListener('click', toggleModal);
  refs.openProductslBtn[1].addEventListener('click', toggleModal);
  refs.closeProductsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.productsModal.classList.toggle('backdrop--is-hidden');
  }
})();
