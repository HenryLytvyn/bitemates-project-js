document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Зупиняє стандартну відправку форми

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Тут можна робити що завгодно, наприклад, відправити на сервер через fetch:
    console.log("Email:", email);
    console.log("Message:", message);

    // Можна показати повідомлення користувачу
    alert("Форма успішно оброблена!");

    // Або відправити на сервер:
    /*
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message })
    }).then(response => {
      // обробка відповіді
    });
    */
  });