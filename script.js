const button = document.getElementById('btn-submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const infoCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function alertSubmit() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

function enableButton() {
  submitButton.disabled = false;
}

button.addEventListener('click', alertSubmit);
infoCheckbox.addEventListener('click', enableButton);
