const button = document.getElementById('btn-submit');
const email = document.getElementById('email');
const password = document.getElementById('password');

function alertSubmit() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

button.addEventListener('click', alertSubmit);
