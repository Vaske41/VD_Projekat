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


document.getElementById("send-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission (to keep the page from refreshing)

    var comment = document.getElementById("comment").value;

    addComment(comment);

});

function addComment(comment) {

    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    var artworkId = localStorage.getItem('artworkId');
    var type = localStorage.getItem('type');
    var comments = JSON.parse(localStorage.getItem('comments'));

    comments.push({
      artworkId: parseInt(artworkId),
      user: loggedUser[0].username,
      artworkType: type,
      commentText: comment
    });
    
    localStorage.setItem('comments', JSON.stringify(comments));

    switch(type) {
        case "painting" : 
            window.location.href = "paintings.html";
            break;
        case "sculpture" :
            window.location.href = "sculptures.html";
            break;
        case "other" :
            window.location.href = "other.html";
    }
    

}