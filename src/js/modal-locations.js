(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-locations-open]'),
    closeModalBtn: document.querySelector('[data-modal-locations-close]'),
    modal: document.querySelector('[data-modal-locations]'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }
})();