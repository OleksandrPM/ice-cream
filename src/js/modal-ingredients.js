(() => {
  const refs = {
    openIngredientsBtn: document.querySelectorAll('[js-ingredients-open]'),
    closeIngredientsBtn: document.querySelector('[js-ingredients-close]'),
    ingredientsModal: document.querySelector('[js-ingredients]'),
  };

  refs.openIngredientsBtn[0].addEventListener('click', openIngredients);
  refs.openIngredientsBtn[1].addEventListener('click', openIngredients);
  refs.openIngredientsBtn[2].addEventListener('click', openIngredients);
  refs.closeIngredientsBtn.addEventListener('click', closeIngredients);

  function openIngredients() {
    refs.ingredientsModal.classList.remove('backdrop--is-hidden');
  }

  function closeIngredients() {
    refs.ingredientsModal.classList.add('backdrop--is-hidden');
  }
})();
