$(document).ready(function(){
    let artists = JSON.parse(localStorage.getItem("artists"));
    artists.forEach(artist => {
        $("#artists").append(`<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item">
          <img src="${artist.image}" class="img-fluid" alt="">
          <div class="gallery-links d-flex align-items-center justify-content-center">
            <a href="${artist.image}" title="${artist.forename} ${artist.surname}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          </div>
        </div>
        </div>
        <div class="col-xl-5 col-lg-4 col-md-2 text-center w-75">
            <p><strong>Forename: </strong>${artist.forename}</p>
            <p><strong>Surname: </strong>${artist.surname}</p>
            <p>${artist.bioEN}</p>
            <p><button class="btn btn-success">Artwork overview</button></p>
        </div>
        
      `);
    });
});