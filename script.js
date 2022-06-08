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
  let inputFamilyFront = document.getElementById('family-front');
  let inputFamilyBack = document.getElementById('family-back');
  let inputFamilyFull = document.getElementById('family-full');
  let inputFamily = '';
  let classDad = document.getElementsByClassName('subject');
  let inputClass = '';
  let inputRateDad = document.getElementsByClassName('rate');
  let inputRate = '';
  let inputComments = textArea.value;
   
  if (inputFamilyFront.checked) {
   inputFamily = inputFamilyFront.value;    
  } else if (inputFamilyBack.checked) {
    inputFamily = inputFamilyBack.value;    
  } else if (inputFamilyFull.checked) {
    inputFamily = inputFamilyFull.value;    
  }

  for (let aux = 0; aux < classDad.length; aux += 1) {
    if (inputClass === ''){
      if (classDad[aux].checked) {
        inputClass += classDad[aux].value;
      } 
    }
      else {
        if (classDad[aux].checked) {
          inputClass += (', ' + classDad[aux].value);
        } 
  }
}
for (let aux2 = 0; aux2 < inputRateDad.length; aux2 += 1) {

  if (inputRateDad[aux2].checked) {
    inputRate = inputRateDad[aux2].value;
  }
}

  let newName = 'Nome: ' + inputName + ' ' + inputLastName;
  let newEmail = 'Email: ' + inputEmail;
  let newHouse = 'Casa: ' + inputHouse;
  let newFamily = 'Família: ' + inputFamily;
  let newClass = 'Matérias: ' + inputClass;
  let newRate = 'Avaliação: ' + inputRate;
  let newComments = 'Observações: ' + inputComments;
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

  
  const newLabelComments = document.createElement('label');
  newLabelComments.innerText = newComments;
  newForm.appendChild(newLabelComments);

}

button.addEventListener('click', alertSubmit);
infoCheckbox.addEventListener('click', enableButton);
textArea.addEventListener('keyup', counterText);
submitButton.addEventListener('click', createForm);
