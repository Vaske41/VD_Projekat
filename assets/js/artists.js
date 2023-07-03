$(document).ready(function(){
    let artists = JSON.parse(localStorage.getItem("artists"));
    artists.forEach(artist => {
        $("#artists").append(`<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item">
          <img src="${artist.image}" class="img-fluid" alt="">
        </div>
        </div>
        <div class="col-xl-5 col-lg-4 col-md-2 w-75">
            <p><strong>Forename: </strong>${artist.forename}</p>
            <p><strong>Surname: </strong>${artist.surname}</p>
            <p>${artist.bioEN}</p>
            <p><button class="btn btn-success" onclick="generatePDF(${artist.id})">Artwork overview</button></p>
        </div>
        
      `);
    });
});



var props = {
  outputType: jsPDFInvoiceTemplate.OutputType.Save,
  returnJsPDFDocObject: true,
  fileName: "Invoice 2021",
  orientationLandscape: false,
  compress: true,
  logo: {
      src: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: 'JPG', //optional, when src= data:uri (nodejs case)
      width: 26.33, //aspect ratio = width/height
      height: 26.66,
      margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
      }
  },
  business: {
    name: "Business Name",
    address: "Artwork overview"
  },
  stamp: {
      inAllPages: true, //by default = false, just in the last page
      src: "https://www.pexels.com/photo/person-sitting-facing-laptop-computer-with-sketch-pad-57690/",
      type: 'JPG', //optional, when src= data:uri (nodejs case)
      width: 20, //aspect ratio = width/height
      height: 20,
      margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
      }
  },
  invoice: {
      
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        {
          title: "#", 
          style: { 
            width: 10 
          } 
        }, 
        { 
          title: "Name",
          style: {
            width: 30
          } 
        }, 
        { title: "Price"},
        {title: "Age"},
        { title: "Type"},

      ],
      table: Array.from(Array(4), (item, index)=>([
          index + 1,
          "There are many variations ",
          200.5,
          "painting",
      ])),
  },
  pageEnable: true,
  pageLabel: "Page ",
};

console.log(props.invoice.table);


function generatePDF(id){
  props.fileName = artists[id - 1].forename + " " + artists[id - 1].surname + " - Artwork overview";
  props.business.name = artists[id - 1].forename + " " + artists[id - 1].surname;
  let artwork = [];
  let paintings = JSON.parse(localStorage.getItem("paintings"));
  let sculptures = JSON.parse(localStorage.getItem("sculptures"));
  let other = JSON.parse(localStorage.getItem("other"));
  paintings.forEach(painting => {
    if(painting.artistId == id){
      artwork.push(painting);
    }
  });
  sculptures.forEach(sculpture => {
    if(sculpture.artistId == id){
      artwork.push(sculpture);
    }
  });
  other.forEach(o => {
    if(o.artistId == id){
      artwork.push(o);
    }
  });
  let table = [];
  for(let i=0;i<artwork.length;i++){
    table.push([i+1, artwork[i].name, artwork[i].price, artwork[i].age, artwork[i].type]);
  }
  props.invoice.table = table;
  var pdfObject = jsPDFInvoiceTemplate.default(props);
  console.log("Object created: ", pdfObject);
}