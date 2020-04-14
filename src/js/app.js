import generateRandom from './random';

document.addEventListener('DOMContentLoaded', () => {
  generatePassword();
});

const generator = document.querySelector('#generator');
const length = document.querySelector('#length');

generator.addEventListener('submit', (event) => {
  event.preventDefault();
  generatePassword();
});

length.addEventListener('change', () => {
  generatePassword();
});

const generatePassword = () => {
  const options = document.querySelectorAll('.option:checked');
  const passwordLength = document.querySelector('#length').value;
  const selectedOptions = [];
  let passwordOutput = document.querySelector('#password');
  let password = '';

  options.forEach((option) => {
    selectedOptions.push(option.id);
  });

  const random = (max, min = 0) => Math.floor(Math.random() * max + min);

  if (passwordLength >= 4 && passwordLength <= 50) {
    for (let i = 0; i < passwordLength; i++) {
      let randomCharacter = selectedOptions[random(selectedOptions.length)];
      password += generateRandom[randomCharacter]();
      passwordOutput.value = password;
    }
  }
};

const copy = document.querySelector('#copy');

copy.addEventListener('click', () => {
  const password = document.querySelector('#password');
  password.select();
  document.execCommand('copy');
});