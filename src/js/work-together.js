import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('#contactForm'); 

form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  // Збираємо дані з форми
  const formData = new FormData(form);

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/requests', { 
      method: 'POST',
      body: formData,
    });
     
    

    if (!response.ok) {
      throw new Error('Something went wrong when submitting the application.');
    }

    iziToast.success({
      title: 'Thank you for your interest in cooperation!',
      message: 'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
      position: 'center',
    });

    form.reset(); // очищення форми після успішного відправлення

  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: error.message || 'An error occurred. Try again!',
      position: 'center',
    });

    // Форму не очищаємо у разі помилки
  }
});





// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Зупиняє стандартну відправку форми

//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Тут можна робити що завгодно, наприклад, відправити на сервер через fetch:
//     console.log("Email:", email);
//     console.log("Message:", message);

//     // Можна показати повідомлення користувачу
//     alert("Форма успішно оброблена!");

//     // Або відправити на сервер:
//     /*
//     fetch('/api/send', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, message })
//     }).then(response => {
//       // обробка відповіді
//     });
//     */
//   });