const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const signupContainer = document.querySelector('.signup-container');
const loginContainer = document.querySelector('.login-container');

signupLink.addEventListener('click', () => {
  loginContainer.classList.add('hidden');
  signupContainer.classList.remove('hidden');
});

loginLink.addEventListener('click', () => {
  signupContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');
});
