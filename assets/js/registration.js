

document.getElementById("register-btn").addEventListener("click", function(event) {

    event.preventDefault();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordconfirm = document.getElementById("passwordconfirm").value;


    registerFunction(firstname, lastname, email, username, password, passwordconfirm)


});


function registerFunction(firstname, lastname, email, username, password, passwordconfirm) {
  var user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    username: username,
    password: password,
    passwordconfirm: passwordconfirm
  };

  var storedUsers = localStorage.getItem('users');

  if (!storedUsers) {
    storedUsers = [];
  } else {
    storedUsers = JSON.parse(storedUsers);
  }

  if (registrationFormIsValid(username, email, password, passwordconfirm, storedUsers)) {
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    var loggedUser = localStorage.getItem('loggedUser');
    if (!loggedUser) {
      loggedUser = [];
      loggedUser.push(user);
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    } 

    window.location.href = "index.html";
  }


}

function registrationFormIsValid(username, email, password, passwordconfirm, storedUsers) {
  var existingUserSameUsername = storedUsers.find(function(existingUserSameUsername) {
    return existingUserSameUsername.username === username;
  });

  if (existingUserSameUsername) {
    var errorSpan = document.getElementById("error-reg");

    errorSpan.textContent = "User with the same username already exists!";
    errorSpan.style.color = "red";
    errorSpan.style.display = "flex";
    errorSpan.style.justifyContent = "center";
    errorSpan.style.alignItems = "center";
    return false;
  }

  var existingUserSameEmail = storedUsers.find(function(existingUserSameEmail) {
    return existingUserSameEmail.email === email;
  });

  if (existingUserSameEmail) {
    var errorSpan = document.getElementById("error-reg");

    errorSpan.textContent = "User with the same email already exists!";
    errorSpan.style.color = "red";
    errorSpan.style.display = "flex";
    errorSpan.style.justifyContent = "center";
    errorSpan.style.alignItems = "center";
    return false;
  }

  if (password !== passwordconfirm) {
    var errorSpan = document.getElementById("error-reg");

    errorSpan.textContent = "Different password and password confirmation!";
    errorSpan.style.color = "red";
    errorSpan.style.display = "flex";
    errorSpan.style.justifyContent = "center";
    errorSpan.style.alignItems = "center";
    return false;
  } 
  var errorSpan = document.getElementById("error-reg");
  errorSpan.textContent = "";
  return true;

}