'use strict';

function modal({trigerSelector, closeSelector, overlaySelector, modalSelector}) {

    const btnShowModals = document.querySelectorAll(trigerSelector),
          btnCloseModal = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector),
          modal = document.querySelector(modalSelector);

    function showModal() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    function closeModal() {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    btnShowModals.forEach(item => {
        item.addEventListener('click',showModal)
    });

    btnCloseModal.addEventListener('click', closeModal);

    overlay.addEventListener('click', closeModal)

    document.addEventListener('keydown', (e) => {
        if(!modal.classList.contains('hidden') && e.key === 'Escape') closeModal();
    });
}

modal ({
    trigerSelector:'.show-modal-window', 
    overlaySelector: '.overlay',
    closeSelector: '.close-modal-window',
    modalSelector: '.modal-window'
})