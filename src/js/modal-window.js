import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  
  function openModal() {
    modalBackdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden'; 
  }

  
  function closeModal() {
    modalBackdrop.classList.add('is-hidden');
    document.body.style.overflow = ''; 
  }

  
  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const comment = form.elements.message.value.trim();

    const data = { email, comment };

    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong when submitting the application');
      }

      openModal(); 
      form.reset(); 
    } catch (error) {
      iziToast.error({
        title: 'Помилка',
        message: error.message || 'An error occurred. Try again!',
        position: 'topRight',
      });
    }
  });
});



