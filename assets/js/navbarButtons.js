var logoutLink = document.getElementById('logout-link');
var myAccountLink = document.getElementById('my-account-link');


logoutLink.addEventListener('click', function() {
  localStorage.removeItem('loggedUser');
  window.location.href = 'login.html';
});