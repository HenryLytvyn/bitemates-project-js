const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const emailSuccessIcon = document.getElementById('email-success-icon');

emailInput.addEventListener('input', function () {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (pattern.test(emailInput.value.trim())) {
    emailInput.classList.remove('invalid');
    emailError.hidden = true;
    emailSuccessIcon.hidden = false;
  } else {
    emailInput.classList.add('invalid');
    emailError.hidden = false;
    emailSuccessIcon.hidden = true;
  }
});