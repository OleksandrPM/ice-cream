(() => {
  const refs = {
    openReadMorelBtn: document.querySelector('[js-read-more-open]'),
    closeReadMoreBtn: document.querySelector('[js-read-more-close]'),
    readMoreModal: document.querySelector('[js-read-more]'),
  };

  refs.openReadMorelBtn.addEventListener('click', toggleModal);
  refs.closeReadMoreBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.readMoreModal.classList.toggle('backdrop--is-hidden');
  }
})();
