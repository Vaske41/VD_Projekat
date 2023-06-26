
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission (to keep the page from refreshing)

    // Dobijanje unetih vrednosti korisničkog imena i lozinke
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username)
    console.log(password)

    // Poziv funkcije i prenos unetih vrednosti kao argumente
    loginFunction(username, password);
  });

  // Primer funkcije koju želite da pozovete
  function loginFunction(username, password) {


    if (localStorage.getItem('users')==null) {
        console.log("Nema korisnika")
        return

    } else {
        var storedUsers = JSON.parse(localStorage.getItem('users'))
        var user = storedUsers.find(user=>user.username == username && user.password == password);
        if (user) {
            var errorSpan = document.getElementById("error-span");
            errorSpan.textContent = "";

            var loggedUser = localStorage.getItem('loggedUser');
            if (!loggedUser) {
              loggedUser = [];
              loggedUser.push(user);
              localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            } 

            window.location.href="index.html";


        } else {

            var errorSpan = document.getElementById("error-span");
            errorSpan.textContent = "Invalid username or password!"
            errorSpan.style.color = "red";
            errorSpan.style.display = "flex";
            errorSpan.style.justifyContent = "center";
            errorSpan.style.alignItems = "center";

            console.log("Nema korisnika")
        }
    }

  }