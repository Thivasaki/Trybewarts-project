const button = document.getElementById('btn-submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const infoCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const dadForm = document.getElementsByTagName('main')[0];
const formDad = document.querySelectorAll('.remove');

function alertSubmit() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');  
}

function enableButton() {
  submitButton.disabled = false;
}

function counterText() {
  counter.innerText = (500 - textArea.value.length);
}

function cleanUpForm() {
  for (let index = (formDad.length - 1); index >= 0; index -= 1) {
    formDad[index].remove();
  }
}

function createForm(event) {
  event.preventDefault();  
  let inputName = document.getElementById('input-name').value;
  let inputLastName = document.getElementById('input-lastname').value;
  let inputEmail = document.getElementById('input-email').value;
  let inputHouse = document.getElementById('house').value;
  let InputFamilyFront = document.getElementById('family-front');
  let InputFamilyBack = document.getElementById('family-back');
  let InputFamilyFull = document.getElementById('family-full');
  if (InputFamilyFront.checked === true){
    let inputFamily = InputFamilyFront.value;
  } else if (InputFamilyBack.checked === true){
    let inputFamily = InputFamilyBack.value;
  }else if (InputFamilyFull.checked === true){
    let inputFamily = InputFamilyFull.value;
  }
  let newName = 'Nome: ' + inputName + ' ' + inputLastName;
  let newEmail = 'Email: ' + inputEmail;
  let newHouse = 'Casa: ' + inputHouse;
  let newFamily = 'Família: ' + inputFamily;
  let newClass = 'Matérias: Matérias, Marcadas, Aqui';
  let newRate = 'Avaliação: NotaAqui';
  let newComments = 'Observações: Observações aqui';
  let newForm = document.createElement('form');
  newForm.id = 'form-data';
  cleanUpForm();
  dadForm.appendChild(newForm);

  let newLabelName = document.createElement('label');
  newLabelName.innerText = newName;
  newForm.appendChild(newLabelName);

  let newLabelEmail = document.createElement('label');
  newLabelEmail.innerText = newEmail;
  newForm.appendChild(newLabelEmail);


  let newLabelHouse = document.createElement('label');
  newLabelHouse.innerText = newHouse;
  newForm.appendChild(newLabelHouse);

  
  let newLabelFamily = document.createElement('label');
  newLabelFamily.innerText = newFamily;
  newForm.appendChild(newLabelFamily);

  
  let newLabelClass = document.createElement('label');
  newLabelClass.innerText = newClass;
  newForm.appendChild(newLabelClass);

  
  let newLabelRate = document.createElement('label');
  newLabelRate.innerText = newRate;
  newForm.appendChild(newLabelRate);

  
  let newLabelComments = document.createElement('label');
  newLabelComments.innerText = newComments;
  newForm.appendChild(newLabelComments);

}

button.addEventListener('click', alertSubmit);
infoCheckbox.addEventListener('click', enableButton);
textArea.addEventListener('keyup', counterText);
submitButton.addEventListener('click', createForm);
