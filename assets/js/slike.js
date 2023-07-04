let allPaintings = JSON.parse(localStorage.getItem("paintings"));
let allArtists = JSON.parse(localStorage.getItem("artists"));

$("#artworkNameSearch").click(function(){
    let artworkName = $("#artworkName").val();
    console.log(artworkName);
    let newPaintings = allPaintings.filter(p=>p.name.includes(artworkName));
    $("#paintings div.col-xl-4").remove();
    console.log(newPaintings);
    for(let i=0;i<newPaintings.length;i++){
        $("#paintings").append(`
        <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
        <img src="${newPaintings[i].pictures[0]}" class="img-fluid" alt="">
        <div class="gallery-links d-flex align-items-center justify-content-center">
          <a href="${newPaintings[i].pictures[0]}" title="The Night Watch" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          <a href="pojedinacni-pregled.html" onclick="setIdType(${newPaintings[i].id}, 'painting')" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
      </div>`);
    }
    
});

$("#artistNameSearch").click(function(){
    let artistName = $("#artistName").val();
    console.log(allArtists);
    console.log(artistName);
    let newPaintings = [];
    for(let i=0;i<allPaintings.length;i++){
        let artist = allArtists.find(a=>a.id==parseInt(allPaintings[i].artistId));
        if(artist.forename.includes(artistName)){
            newPaintings.push(allPaintings[i]);
        }
    }
    $("#paintings div.col-xl-4").remove();
    console.log(newPaintings);
    for(let i=0;i<newPaintings.length;i++){
        $("#paintings").append(`
        <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
        <img src="${newPaintings[i].pictures[0]}" class="img-fluid" alt="">
        <div class="gallery-links d-flex align-items-center justify-content-center">
          <a href="${newPaintings[i].pictures[0]}" title="The Night Watch" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          <a href="pojedinacni-pregled.html" onclick="setIdType(${newPaintings[i].id}, 'painting')" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
      </div>`);
    }
    
});


$("#artworkNameSort").click(function(){
    let newPaintings = allPaintings;
    newPaintings.sort(
        function(p1, p2){
            if(p1.name>p2.name){
                return 1;
            }
            else if(p1.name<p2.name){
                return -1;
            }
            return 0;
        }
    );
    $("#paintings div.col-xl-4").remove();
    for(let i=0;i<newPaintings.length;i++){
        $("#paintings").append(`
        <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
        <img src="${newPaintings[i].pictures[0]}" class="img-fluid" alt="">
        <div class="gallery-links d-flex align-items-center justify-content-center">
          <a href="${newPaintings[i].pictures[0]}" title="The Night Watch" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          <a href="pojedinacni-pregled.html" onclick="setIdType(${newPaintings[i].id}, 'painting')" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
      </div>`);
    }
});

$("#artistNameSort").click(function(){
    let newPaintings = allPaintings;
    newPaintings.sort(
        function(p1, p2){
            let a1 = artists.find(a=>a.id==p1.artistId);
            let a2 = artists.find(a=>a.id==p2.artistId);
            if(a1.forename>a2.forename){
                return 1;
            }
            else if(a1.forename<a2.forename){
                return -1;
            }
            return 0;
        }
    );
    $("#paintings div.col-xl-4").remove();
    for(let i=0;i<newPaintings.length;i++){
        $("#paintings").append(`
        <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
        <img src="${newPaintings[i].pictures[0]}" class="img-fluid" alt="">
        <div class="gallery-links d-flex align-items-center justify-content-center">
          <a href="${newPaintings[i].pictures[0]}" title="The Night Watch" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          <a href="pojedinacni-pregled.html" onclick="setIdType(${newPaintings[i].id}, 'painting')" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
      </div>`);
    }
});