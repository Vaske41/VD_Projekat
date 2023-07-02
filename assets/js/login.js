const users = [
  {
    id: 1,
    forename: "Petar",
    surname: "Petrovic",
    username: "pera",
    password: "pera123"
  },
  {
    id: 2,
    forename: "Marko",
    surname: "Markovic",
    username: "mare",
    password: "mare123"
  },
  {
    id: 3,
    forename: "Zika",
    surname: "Zikic",
    username: "zika",
    password: "zika123"
  },
]

localStorage.setItem("users", JSON.stringify(users));


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

      var user = users.find(user=>user.username == username && user.password == password);
      if (user) {
          var errorSpan = document.getElementById("error-span");
          errorSpan.textContent = "";

          var loggedUser = [];
          loggedUser.push(user);
          localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
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