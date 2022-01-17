(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  // const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
	// 	bodyScrollLock[scrollLockMethod](document.body);

  function toggleModal() {
    refs.modal.classList.toggle('visually__hidden');
  }
})();