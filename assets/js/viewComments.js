const imageDiv = document.getElementById("imageDiv");

let imageName = localStorage.getItem("name");
let imageArtist = localStorage.getItem("artist");
let imagePrice = localStorage.getItem("price");
let imageAge = JSON.parse(localStorage.getItem("age"));
let imageSrc = localStorage.getItem("image");

let image = document.createElement("img");
image.src = imageSrc;
image.classList.add("img-fluid", "rounded");
image.style.width = "450px";
image.style.height = "300px";
image.addEventListener("click", function(){openModal(imageSrc)});

imageDiv.classList.add("d-flex", "justify-content-center", "img-container");
imageDiv.appendChild(image);

const info = document.getElementById("info");
info.textContent = "Name: " + imageName + "\nArtist: " + imageArtist + "\nPrice: " + imagePrice + " | " + "Age: " + imageAge;

var table = document.getElementById("tableId");
var comments = JSON.parse(localStorage.getItem("comments"));


// Kreiranje prvog reda za zaglavlje
var headerRow = table.insertRow(0);

// Kreiranje prvog zaglavlja za User
var userHeader = document.createElement("th");
userHeader.innerHTML = "User";
headerRow.appendChild(userHeader);

// Kreiranje drugog zaglavlja za OfferedPrice
var commentHeader = document.createElement("th");
commentHeader.innerHTML = "Comment";
headerRow.appendChild(commentHeader);

for (var i = 0, j = 0; i < comments.length; i++) {
    var comment = comments[i];
  
    var id = localStorage.getItem("artworkId");
    var type = localStorage.getItem("type");
    if (parseInt(id) == comment.artworkId && type == comment.artworkType) {
            // Kreiranje novog reda u tabeli
        var row = table.insertRow(j + 1);
    
        // Ubacivanje vrednosti u kolone
        var userCell = row.insertCell(0);
        var commentCell = row.insertCell(1);
    
        // Postavljanje vrednosti u kolone
        userCell.innerHTML = comment.user;
        commentCell.innerHTML = comment.commentText;
        j++;
    }

  }



const modal = document.createElement("div");
modal.classList.add("modal", "fade");
modal.id = "imageModal";
modal.tabIndex = "-1";
modal.setAttribute("role", "dialog");
modal.setAttribute("aria-labelledby", "imageModalLabel");
modal.setAttribute("aria-hidden", "true");

const modalDialog = document.createElement("div");
modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "modal-lg");
modalDialog.setAttribute("role", "document");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const modalBody = document.createElement("div");
modalBody.classList.add("modal-body");

const modalImage = document.createElement("img");
modalImage.src = "";
modalImage.classList.add("img-fluid");

modalBody.appendChild(modalImage);
modalContent.appendChild(modalBody);
modalDialog.appendChild(modalContent);
modal.appendChild(modalDialog);

document.body.appendChild(modal);

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    $("#imageModal").modal("show");
}



