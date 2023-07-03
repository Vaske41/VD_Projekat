let artwork;
let artist;
let user;
$(document).ready(function(){
    let type = localStorage.getItem("type");
    let id = localStorage.getItem("id");
    if(type=="painting"){
        let allPaintings = JSON.parse(localStorage.getItem("paintings"));
        artwork = allPaintings.find(p=>p.id==id);
    }
    else if(type=="sculpture"){
        let allSculptures = JSON.parse(localStorage.getItem("sculptures"));
        artwork = allSculptures.find(p=>p.id==id);
    }
    else{
        let others = JSON.parse(localStorage.getItem("other"));
        artwork = others.find(p=>p.id==id);
    }
    let allArtists = JSON.parse(localStorage.getItem('artists'));
    artist = allArtists.find(a=>a.id==artwork.artistId);
    user = localStorage.getItem('user');
    $("#name").html(artwork.name);
    $("#artist").html(artist.forename + " " + artist.surname);
    $("#price").html(artwork.price);
    $("#age").html(artwork.age);
    for(let i=0;i<artwork.pictures.length;i++){
        if(i==0){
            $('#crs').append(`
            <div class="carousel-item active">
                <img src="${artwork.pictures[i]}" class="d-block w-100">
            </div>
        `);
        }
        else{
            $('#crs').append(`
            <div class="carousel-item">
                <img src="${artwork.pictures[i]}" class="d-block w-100">
            </div>
        `);
        }
    }

    let allOffers = JSON.parse(localStorage.getItem('offers'));
    let allComments = JSON.parse(localStorage.getItem('comments'));
    for(let i=0;i<allOffers.length;i++){
        if(allOffers[i].artworkType==artwork.type && allOffers[i].artworkId==artwork.id){
            $("#offerTable").append(`<tr>
            <td>${artwork.name}</td>
            <td class>${user}</td>
            <td class>${allOffers[i].offeredPrice}</td>
          </tr>`).append()
        }
    }
    console.log(allComments);
    for(let i=0;i<allComments.length;i++){
        if(allComments[i].artworkType==artwork.type && allComments[i].artworkId==artwork.id){
            $("#commentTable").append(`<tr>
            <td class>${user}</td>
            <td class>${allComments[i].commentText}</td>
          </tr>`).append()
        }
    }
        
    $("#crs").find("div:first").remove();
    
    $("#sendOffer").click(function(){
        let amount = $("#amount").val();
        if(amount > 0){
            let allOffers = JSON.parse(localStorage.getItem('offers'));
            allOffers.push({
                artworkId: artwork.id,
                user: user,
                artworkType: artwork.type,
                offeredPrice: parseInt(amount),
            });
            localStorage.setItem('offers', JSON.stringify(allOffers));
        }
        if(artwork.type=="painting"){
            window.location.assign("paintings.html");
            return;
        }
        else if(artwork.type=="sculpture"){
            window.location.assign("sculptures.html");
            return;
        }
        else{
            window.location.assign("other.html");
            return;
        }
    });
    $("#sendComment").click(function(){
        let amount = $("#comment").val();
        if(amount > 0){
            let allComments = JSON.parse(localStorage.getItem('comments'));
            allComments.push({
                artworkId: artwork.id,
                user: user,
                artworkType: artwork.type,
                commentText: comment,
            });
            localStorage.setItem('comments', JSON.stringify(allComments));
        }
        if(artwork.type=="painting"){
            window.location.href("paintings.html");
        }
        else if(artwork.type=="sculpture"){
            window.location.href("sculptures.html");
        }
        else{
            window.location.href("other.html");
        }
    });
});