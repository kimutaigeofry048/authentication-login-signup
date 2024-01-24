
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.form-switch').addEventListener('click', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginLink = document.getElementById('login-form-link');
    const registerLink = document.getElementById('register-form-link');

    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      loginLink.classList.add('active');
      registerLink.classList.remove('active');
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
      loginLink.classList.remove('active');
      registerLink.classList.add('active');
    }
  });
});
