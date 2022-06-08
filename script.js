const button = document.getElementById('btn-submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const infoCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const dadForm = document.getElementById('form-data');

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
  document.getElementById('evaluation-form').style.display = 'none';
}

function nameFormsData() {
  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const newName = `Nome: ${inputName} ${inputLastName}`;
  const newLabelName = document.createElement('label');
  newLabelName.innerText = newName;
  dadForm.appendChild(newLabelName);
}

function emailFormsData() {
  const inputEmail = document.getElementById('input-email').value;
  const newEmail = `Email: ${inputEmail}`;
  const newLabelEmail = document.createElement('label');
  newLabelEmail.innerText = newEmail;
  dadForm.appendChild(newLabelEmail);
}

function houseFormsData() {
  const inputHouse = document.getElementById('house').value;
  const newHouse = `Casa: ${inputHouse}`;
  const newLabelHouse = document.createElement('label');
  newLabelHouse.innerText = newHouse;
  dadForm.appendChild(newLabelHouse);
}

function familyForms() {
  for (let i = 0; i < document.getElementById('family').children.length; i += 1) {
    if (document.getElementById('family').children[i].checked === true) {
      const newFamily = `Família: ${document.getElementById('family').children[i].value}`;
      const newLabelFamily = document.createElement('label');
      newLabelFamily.innerText = newFamily;
      dadForm.appendChild(newLabelFamily);
    }
  }
}

function classFormsData() {
  const classArray = [];
  for (let i = 0; i < document.getElementById('class').children.length; i += 1) {
    if (document.getElementById('class').children[i].checked === true) {
      classArray.push(` ${document.getElementById('class').children[i].value}`);
    }
  }
  const newClass = `Matérias: ${classArray}`;
  const newLabelClass = document.createElement('label');
  newLabelClass.innerText = newClass;
  dadForm.appendChild(newLabelClass);
}

function rateFormsData() {
  for (let i = 0; i < document.querySelectorAll('.rate').length; i += 1) {
    if (document.querySelectorAll('.rate')[i].checked === true) {
      const newRate = `Avaliação: ${document.querySelectorAll('.rate')[i].value}`;
      const newLabelRate = document.createElement('label');
      newLabelRate.innerText = newRate;
      dadForm.appendChild(newLabelRate);
    }
  }
}

function commentsFormsData() {
  const inputComments = textArea.value;
  const newComments = `Observações: ${inputComments}`;
  const newLabelComments = document.createElement('label');
  newLabelComments.innerText = newComments;
  dadForm.appendChild(newLabelComments);
}

function createForm(event) {
  event.preventDefault();
  cleanUpForm();
  nameFormsData();
  emailFormsData();
  houseFormsData();
  familyForms();
  classFormsData();
  rateFormsData();
  commentsFormsData();
}

button.addEventListener('click', alertSubmit);
infoCheckbox.addEventListener('click', enableButton);
textArea.addEventListener('keyup', counterText);
submitButton.addEventListener('click', createForm);
