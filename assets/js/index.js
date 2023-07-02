/**
* Template Name: PhotoFolio
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      });
    }
  
    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
      if (!navbarlink.hash) return;
  
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
  
      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  
    navDropdowns.forEach(el => {
      el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');
  
          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });
  
    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  
    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper('.slides-3', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
  
        1200: {
          slidesPerView: 3,
        }
      }
    });
  
    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  
  });




  const artists = [
    {
        id: 1,
        forename: "Sergio",
        surname: "Vasquez",
        bioEN: "Sergio Vasquez is a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. One of the most influential artists of the 21st century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
        bioSRB: "Sergio Vasquez je Španski umetnik koji je većinu svog života provero u Francuskoj. Smatra se jednim od najuticajnijih umetnika 21. veka i poznat je najviše po Kubizmu.",
        image: "assets/img/artists/sergio.jpg"
    },
    {
        id: 2,
        forename: "Ivan",
        surname: "Obodin",
        bioEN: "Ivan Konstantinovich Aivazovsky is a Russian-Armenian Romantic painter who is considered one of the greatest masters of marine art.",
        bioSRB: "Ivan Konstantinović Ajvazovski je rusko'jermenski slikar romantizma koji se smatra jednim od najvećih majstora marinske umetnosti.",
        image: "assets/img/artists/ivan.jpg"
    },
    {
        id: 3,
        forename: "Isa",
        surname: "Genzken",
        bioEN: "Isa Genzken (born 27 November 1948) is a German artist who lives and works in Berlin. Her primary media are sculpture and installation, using a wide variety of materials, including concrete, plaster, wood and textile. She also works with photography, video, film and collage.",
        bioSRB: "Isa Genzken je nemačka umetnica koja živi i radi u Berlinu. Njen primarni mediji su skulptura i instalacija, koristeći širok spektar materijala, uključujući beton, gips, drvo i tekstil. Takođe se bavi fotografijom, videom, filmom i kolažom.",
        image: "assets/img/artists/isa.jpg"
    },
  ];
  

  const paintings = [
    {
        id : 1,
        name : "The Night Watch",
        artist : "Rembrandt Harmenszoon van Rijn",
        artistId : 1,
        price : 500,
        age : 381,
        pictures : ["assets/img/paintings/painting1.jpg", "assets/img/paintings/painting2.jpg", "assets/img/paintings/painting3.jpg"],
        type : "painting",
        typeSRB: "slika",
    },
    {
      id : 2,
      name : "Guernica",
      artist : "Pablo Picasso",
      artistId : 2,
      price : 700,
      age : 86,
      pictures : ["assets/img/paintings/painting4.jpg", "assets/img/paintings/painting5.jpg", "assets/img/paintings/painting6.jpg"],
      type : "painting",
      typeSRB: "slika",
    },
    {
      id : 3,
      name : "The Last Supper",
      artist : "Leonardo da Vinci",
      artistId : 3,
      price : 300,
      age : 525,
      pictures : ["assets/img/paintings/painting7.jpg", "assets/img/paintings/painting8.jpg", "assets/img/paintings/painting9.jpg"],
      type : "painting",
      typeSRB: "slika",
    },
  ];

  const sculptures = [
    {
      id : 1,
      name : "Terracotta Army",
      artist : "Emperor Qin Shihuang",
      artistId : 1,
      price : 500,
      age : 2270,
      pictures : ["assets/img/sculptures/sculpture1.jpg", "assets/img/sculptures/sculpture2.jpg", "assets/img/sculptures/sculpture3.jpg"],
      type : "sculpture",
      typeSRB: "skulptura",
    },
    {
      id : 2,
      name : "Mount Rushmore National Memorial",
      artist : "Gutzon Borglum & Lincoln Borglum",
      artistId : 2,
      price : 500,
      age : 82,
      pictures : ["assets/img/sculptures/sculpture4.jpg", "assets/img/sculptures/sculpture5.jpg", "assets/img/sculptures/sculpture6.jpg"],
      type : "sculpture",
      typeSRB: "skulptura",
    },
    {
      id : 3,
      name : "Great Sphinx of Giza",
      artist : "Francis Frith",
      artistId : 3,
      price : 500,
      age : 4500,
      pictures : ["assets/img/sculptures/sculpture7.jpg", "assets/img/sculptures/sculpture8.jpg", "assets/img/sculptures/sculpture9.jpg"],
      type : "sculpture",
      typeSRB: "skulptura",
    },
  ]

  const other = [
    {
      id : 1,
      name : "Colosseum",
      artist : "Joseph Mallord William Turner",
      artistId : 1,
      price : 500,
      age : 72,
      pictures : ["assets/img/other/other1.jpg","assets/img/other/other2.jpg", "assets/img/other/other3.jpg"],
      type : "other",
      typeSRB: "ostalo",
    },
    {
      id : 2,
      name : "Taj Mahal",
      artist : "Ustad Ahmad Lahori",
      artistId : 2,
      price : 500,
      age : 370,
      pictures : ["assets/img/other/other4.jpg","assets/img/other/other5.jpg", "assets/img/other/other6.jpg"],
      type : "other",
      typeSRB: "ostalo",
    },
    {
      id : 3,
      name : "Great Wall of China",
      artist : "Qin Shi Huang",
      artistId : 3,
      price : 500,
      age : 3000,
      pictures : ["assets/img/other/other7.jpg","assets/img/other/other8.jpg", "assets/img/other/other9.jpg"],
      type : "other",
      typeSRB: "ostalo",
    },
  ]

  var offers = [
    {
      artworkId : 1,
      user : "User1",
      artworkType : "painting",
      offeredPrice : 450,
    },
    {
      artworkId : 1,
      user : "User2",
      artworkType : "sculpture",
      offeredPrice : 450,
    },
    {
      artworkId : 1,
      user : "User3",
      artworkType : "other",
      offeredPrice : 450,
    },
    {
      artworkId : 2,
      user : "User4",
      artworkType : "painting",
      offeredPrice : 450,
    },
    {
      artworkId : 2,
      user : "User5",
      artworkType : "sculpture",
      offeredPrice : 450,
    },
    {
      artworkId : 2,
      user : "User6",
      artworkType : "other",
      offeredPrice : 450,
    },
    {
      artworkId : 3,
      user : "User7",
      artworkType : "painting",
      offeredPrice : 450,
    },
    {
      artworkId : 3,
      user : "User8",
      artworkType : "sculpture",
      offeredPrice : 450,
    },
    {
      artworkId : 3,
      user : "User9",
      artworkType : "other",
      offeredPrice : 450,
    }
  ]

  const comments = [
    {
      artworkId : 1,
      user : "user1",
      artworkType : "painting",
      commentText : "komentar1"
    },
    {
      artworkId : 1,
      user : "user2",
      artworkType : "painting",
      commentText : "komentar2"
    },
    {
      artworkId : 2,
      user : "user1",
      artworkType : "painting",
      commentText : "komentar1"
    },
    {
      artworkId : 2,
      user : "user2",
      artworkType : "painting",
      commentText : "komentar1"
    },
    {
      artworkId : 3,
      user : "User2",
      artworkType : "painting",
      commentText : "komentar1"
    },
    {
      artworkId : 3,
      user : "User2",
      artworkType : "painting",
      commentText : "komentar2"
    },
    {
      artworkId : 1,
      user : "User2",
      artworkType : "sculpture",
      commentText : "komentar1"
    },
    {
      artworkId : 1,
      user : "User2",
      artworkType : "sculpture",
      commentText : "komentar2"
    },
    {
      artworkId : 2,
      user : "User2",
      artworkType : "sculpture",
      commentText : "komentar1"
    },
    {
      artworkId : 2,
      user : "User2",
      artworkType : "sculpture",
      commentText : "komentar2"
    },
    {
      artworkId : 3,
      user : "User2",
      artworkType : "sculpture",
      commentText : "komentar1"
    },
    {
      artworkId : 3,
      user : "User2",
      artworkType : "sculpture",
      commentText : "komentar2"
    },
    {
      artworkId : 1,
      user : "User2",
      artworkType : "other",
      commentText : "komentar1"
    },
    {
      artworkId : 1,
      user : "User2",
      artworkType : "other",
      commentText : "komentar2"
    },
  ]

  $(document).ready(function(){

    var offers1 = JSON.parse(localStorage.getItem("offers"));
    if (!offers1) {
      localStorage.setItem("offers", JSON.stringify(offers));
    }

    var comments1 = JSON.parse(localStorage.getItem("comments"));
    if (!comments1) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }

    localStorage.setItem("artists", JSON.stringify(artists));
    localStorage.setItem("paintings", JSON.stringify(paintings));
    localStorage.setItem("sculptures", JSON.stringify(sculptures));
    localStorage.setItem("other", JSON.stringify(other));
  });




  