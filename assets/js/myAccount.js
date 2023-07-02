var offersTable = document.getElementById("offersTableId");
var commentsTable = document.getElementById("commentsTableId");
var offers = JSON.parse(localStorage.getItem("offers"));
var allComments = JSON.parse(localStorage.getItem("comments"));
offers.sort(function(a, b) {
    return b.offeredPrice - a.offeredPrice;
});
// Kreiranje prvog reda za zaglavlje


var offersHeaderRow = offersTable.insertRow(0);
var commentsHeaderRow = commentsTable.insertRow(0);

var offerPriceHeader = document.createElement("th");
var offerArtworkHeader = document.createElement("th");
var offerArtworkTypeHeader = document.createElement("th");

var commentHeader = document.createElement("th");
var commentArtworkHeader = document.createElement("th");
var commentArtworkType = document.createElement("th");


offerPriceHeader.innerHTML = "Offered price";
offerArtworkHeader.innerHTML = "Artwork name";
offerArtworkTypeHeader.innerHTML = "Artwork type";


commentHeader.innerHTML = "Comment";
commentArtworkHeader.innerHTML = "Artwork name";
commentArtworkType.innerHTML = "Artwork type";

offersHeaderRow.appendChild(offerArtworkHeader);
offersHeaderRow.appendChild(offerArtworkTypeHeader);
offersHeaderRow.appendChild(offerPriceHeader);


commentsHeaderRow.appendChild(commentArtworkHeader);
commentsHeaderRow.appendChild(commentArtworkType);
commentsHeaderRow.appendChild(commentHeader);


var user = JSON.parse(localStorage.getItem("loggedUser"));
var username = user[0].username;

for (var i = 0, j = 0; i < offers.length; i++) {
    var offer = offers[i];

    var artworkId = offer.artworkId;
    var artworkType = offer.artworkType;

    if (offer.user == username) {

        var artworkName = findArtworkName(artworkId, artworkType);

        // Kreiranje novog reda u tabeli
        var row = offersTable.insertRow(j + 1);
    
        // Ubacivanje vrednosti u kolone
        var artworkNameCell = row.insertCell(0);
        var artworkTypeCell = row.insertCell(1);
        var offeredPriceCell = row.insertCell(2);
    
        // Postavljanje vrednosti u kolone
        artworkNameCell.innerHTML = artworkName;
        artworkTypeCell.innerHTML = offer.artworkType;
        offeredPriceCell.innerHTML = offer.offeredPrice;
        j++;
    }
  
  }

  for (var i = 0, j = 0; i < allComments.length; i++) {
    var comment = allComments[i];

    var artworkId = comment.artworkId;
    var artworkType = comment.artworkType;

    if (comment.user == username) {

        var artworkName = findArtworkName(artworkId, artworkType);

        // Kreiranje novog reda u tabeli
        var row = commentsTable.insertRow(j + 1);
    
        // Ubacivanje vrednosti u kolone
        var artworkNameCell = row.insertCell(0);
        var artworkTypeCell = row.insertCell(1);
        var artworkComment = row.insertCell(2);
    
        // Postavljanje vrednosti u kolone
        artworkNameCell.innerHTML = artworkName;
        artworkTypeCell.innerHTML = comment.artworkType;
        artworkComment.innerHTML = comment.commentText;
        j++;
    }
  
  }

function findArtworkName(artworkId, artworkType) {
    
    console.log(artworkId);

    switch(artworkType) {
        case "painting" :
            var paintings = JSON.parse(localStorage.getItem("paintings"));
            var painting = paintings.find(painting => painting.id == parseInt(artworkId));
            return painting.name;

        case "sculpture" :
            var sculptures = JSON.parse(localStorage.getItem("sculptures"));
            var sculpture = sculptures.find(sculpture => sculpture.id == parseInt(artworkId));
            return sculpture.name;


        case "other" :
            var other = JSON.parse(localStorage.getItem("other"));
            var otherInstance = other.find(otherInstance => otherInstance.id == parseInt(artworkId));
            return otherInstance.name;

    }


}