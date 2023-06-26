var loginLink = document.getElementById('login-link');
var registrationLink = document.getElementById('registration-link');
var logoutLink = document.getElementById('logout-link');

var loggedUser = localStorage.getItem('loggedUser');

if (loggedUser) {
  loginLink.style.display = 'none';
  registrationLink.style.display = 'none';
  logoutLink.style.display = 'inline-block';
} else {
  loginLink.style.display = 'inline-block';
  registrationLink.style.display = 'inline-block';
  logoutLink.style.display = 'none';
}

loginLink.addEventListener('click', function() {
  window.location.href = 'login.html';
});

registrationLink.addEventListener('click', function() {
  window.location.href = 'registration.html';
});

logoutLink.addEventListener('click', function() {
  localStorage.removeItem('loggedUser');
  window.location.href = 'index.html';
});