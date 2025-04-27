import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Функція для відкриття модального вікна
  function openModal() {
    modalBackdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden'; // Заборона прокручування
  }

  // Функція для закриття модального вікна
  function closeModal() {
    modalBackdrop.classList.add('is-hidden');
    document.body.style.overflow = ''; // Відновлення прокручування
  }

  // Подія закриття модалки (по кнопці або кліку на фон)
  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Закриття модалки за натисканням Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Логіка для відправки форми
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
        throw new Error('Щось пішло не так при відправці заявки');
      }

      iziToast.success({
        title: 'Успішно!',
        message: 'Вашу заявку на співпрацю відправлено!',
        position: 'topRight',
      });

      openModal(); // Відкриваємо модальне вікно після успішної відправки
      form.reset(); // Очищаємо форму
    } catch (error) {
      iziToast.error({
        title: 'Помилка',
        message: error.message || 'Сталася помилка. Спробуйте ще раз!',
        position: 'topRight',
      });
    }
  });
});



// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.getElementById('contactForm');
// const modalBackdrop = document.getElementById('modalBackdrop');
// const modalCloseBtn = document.getElementById('modalCloseBtn');

// // Функція для відкриття модального вікна
// function openModal() {
//   modalBackdrop.classList.remove('is-hidden');
//   document.body.style.overflow = 'hidden'; // Заборона прокручування
// }

// // Функція для закриття модального вікна
// function closeModal() {
//   modalBackdrop.classList.add('is-hidden');
//   document.body.style.overflow = ''; // Відновлення прокручування
// }

// // Подія закриття модалки (по кнопці або кліку на фон)
// modalCloseBtn.addEventListener('click', closeModal);
// modalBackdrop.addEventListener('click', (e) => {
//   if (e.target === modalBackdrop) {
//     closeModal();
//   }
// });

// // Закриття модалки за натисканням Esc
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeModal();
//   }
// });

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.getElementById('contactForm');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const email = form.elements.email.value.trim();
//   const comment = form.elements.message.value.trim();

//   const data = {
//     email,
//     comment,
//   };

//   try {
//     const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', // важливо!
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error('Щось пішло не так при відправці заявки');
//     }

//     iziToast.success({
//       title: 'Успішно!',
//       message: 'Вашу заявку на співпрацю відправлено!',
//       position: 'topRight',
//     });

//     form.reset();
//   } catch (error) {
//     iziToast.error({
//       title: 'Помилка',
//       message: error.message || 'Сталася помилка. Спробуйте ще раз!',
//       position: 'topRight',
//     });
//   }
// });
// // import iziToast from 'izitoast';
// // import 'izitoast/dist/css/iziToast.min.css';

// // const form = document.getElementById('contactForm');
// // const backdrop = document.getElementById('modalBackdrop');
// // const closeBtn = document.getElementById('modalCloseBtn');

// // form.addEventListener('submit', async (event) => {
// //   event.preventDefault();

// //   const email = form.elements.email.value.trim();
// //   const comment = form.elements.message.value.trim();

// //   const data = {
// //     email,
// //     comment,
// //   };

// //   try {
// //     const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(data),
// //     });

// //     if (!response.ok) {
// //       throw new Error('Щось пішло не так при відправці заявки');
// //     }

// //     openModal();
// //     form.reset();
// //   } catch (error) {
// //     iziToast.error({
// //       title: 'Помилка',
// //       message: error.message || 'Сталася помилка. Спробуйте ще раз!',
// //       position: 'topRight',
// //     });
// //   }
// // });

// // // Функції модалки
// // function openModal() {
// //   backdrop.classList.remove('is-hidden');
// //   document.body.style.overflow = 'hidden'; // заборона скролу сторінки
// // }

// // function closeModal() {
// //   backdrop.classList.add('is-hidden');
// //   document.body.style.overflow = ''; // відновлення скролу сторінки
// // }

// // // Закриття модалки
// // closeBtn.addEventListener('click', closeModal);
// // backdrop.addEventListener('click', (e) => {
// //   if (e.target === backdrop) {
// //     closeModal();
// //   }
// // });

// // document.addEventListener('keydown', (e) => {
// //   if (e.key === 'Escape') {
// //     closeModal();
// //   }
// // });


