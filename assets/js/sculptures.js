const sculpturesLeftContainer = document.getElementById("sculptures-left");
const sculpturesMiddleContainer = document.getElementById("sculptures-middle");
const sculpturesRightContainer = document.getElementById("sculptures-right");

const infoLeft = document.getElementById("info-left");
const infoMiddle = document.getElementById("info-middle");
const infoRight = document.getElementById("info-right");

const buttons1Left = document.getElementById("buttons1-left");
const buttons1Middle = document.getElementById("buttons1-middle");
const buttons1Right = document.getElementById("buttons1-right");

const buttons2Left = document.getElementById("buttons2-left");
const buttons2Middle = document.getElementById("buttons2-middle");
const buttons2Right = document.getElementById("buttons2-right");

const initialImages = [];
const images = [];
const imagesContainers = [];
const arrowsContainers = [];
const previousButtons = [];
const nextButtons = [];
let currentImageIndexes = [];
const imagesCount = sculptures.length;

const infoContainers = [];

const sendOfferContainer = [];
const writeCommentContainer = [];

const viewOffersContainer = [];
const viewCommentsContainer = [];

for(let i = 0; i < imagesCount; i++) {

    let imageName = sculptures[i].name;
    let imageArtist = sculptures[i].artist;
    let imagePrice = sculptures[i].price;
    let imageAge = sculptures[i].age;

    const infoContainer = i % 3 === 0 ? infoLeft : (i % 3 === 1 ? infoMiddle : infoRight);

    infoContainer.textContent = "Name: " + imageName + "\nArtist: " + imageArtist + "\nPrice: " + imagePrice + " | " + "Age: " + imageAge;

    let sendOffer = document.createElement("button");
    sendOffer.textContent = "Send offer";
    sendOffer.classList.add("btn", "btn-success");



    let writeComment = document.createElement("button");
    writeComment.textContent = "Write comment";
    writeComment.classList.add("btn", "btn-success");

    sendOfferContainer.push(sendOffer);
    writeCommentContainer.push(writeComment);

    let buttons1Div = i % 3 === 0 ? buttons1Left : (i % 3 === 1 ? buttons1Middle : buttons1Right);
    buttons1Div.appendChild(sendOfferContainer[i]);
    buttons1Div.appendChild(writeCommentContainer[i]);

    let viewOffers = document.createElement("button");
    viewOffers.textContent = "View offers";
    viewOffers.classList.add("btn", "btn-info");

    let viewComments = document.createElement("button");
    viewComments.textContent = "View comments";
    viewComments.classList.add("btn", "btn-info");

    viewOffersContainer.push(viewOffers);
    viewCommentsContainer.push(viewComments);

    let buttons2Div = i % 3 === 0 ? buttons2Left : (i % 3 === 1 ? buttons2Middle : buttons2Right);
    buttons2Div.appendChild(viewOffersContainer[i]);
    buttons2Div.appendChild(viewCommentsContainer[i]);




    currentImageIndexes.push(0);

    initialImages.push(sculptures[i].pictures[0]);
    images.push(document.createElement("img"));
    images[i].src = initialImages[i];
    images[i].classList.add("img-fluid", "rounded", "img-thumbnail");
    images[i].style.width = "450px";
    images[i].style.height = "300px";
    images[i].addEventListener("click", function(){openModal(sculptures[i])});



    imagesContainers.push(document.createElement("div"));
    imagesContainers[i].classList.add("d-flex", "justify-content-center", "img-container");
    imagesContainers[i].appendChild(images[i]);




    previousButtons.push(document.createElement("button"));
    previousButtons[i].classList.add("btn", "btn-secondary");
    previousButtons[i].innerHTML = '<i class="bi bi-arrow-left"></i>';
    previousButtons[i].addEventListener("click", function() {showPreviousImage(sculptures[i])});

    nextButtons.push(document.createElement("button"));
    nextButtons[i].classList.add("btn", "btn-secondary");
    nextButtons[i].innerHTML = '<i class="bi bi-arrow-right"></i>';
    nextButtons[i].addEventListener("click", function() {showNextImage(sculptures[i])});

    arrowsContainers.push(document.createElement("div"));
    arrowsContainers[i].classList.add("text-center");
    arrowsContainers[i].appendChild(previousButtons[i]);
    arrowsContainers[i].appendChild(nextButtons[i]);

    let container = i % 3 === 0 ? sculpturesLeftContainer : (i % 3 === 1 ? sculpturesMiddleContainer : sculpturesRightContainer);
    container.appendChild(imagesContainers[i]);
    container.appendChild(arrowsContainers[i]);


}

function showPreviousImage(sculpture) {
    let sculptureIndex = sculptures.indexOf(sculpture);
    currentImageIndexes[sculptureIndex] = (currentImageIndexes[sculptureIndex] - 1 + imagesCount) % imagesCount;
    images[sculptureIndex].src = sculpture.pictures[currentImageIndexes[sculptureIndex]];
}

function showNextImage(sculpture) {
    let sculptureIndex = sculptures.indexOf(sculpture);
    currentImageIndexes[sculptureIndex] = (currentImageIndexes[sculptureIndex] + 1) % imagesCount;
    images[sculptureIndex].src = sculpture.pictures[currentImageIndexes[sculptureIndex]];

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

function openModal(sculpture) {
    let sculptureIndex = sculptures.indexOf(sculpture);
    modalImage.src = sculpture.pictures[currentImageIndexes[sculptureIndex]];
    $("#imageModal").modal("show");
}
