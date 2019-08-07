$( document ).ready(function() {

var owl = $('#carouselsec .owl-carousel');
   owl.owlCarousel({
       loop: true,
       items: 1,
       autoplay: 3000,
       thumbs: true,
       thumbImage: true,
       thumbContainerClass: 'owl-thumbs',
       thumbItemClass: 'owl-thumb-item',
       navText: ["<i class='fa fa-angle-left' style='color = 'white'; background-color:transparent;'></i>","<i class='fa fa-angle-right' style='color = 'white';></i> "],
       nav:true
   });



       var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is <= 640px
            769: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }

    });




// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $iso.isotope({ filter: selector });
  return false;
});





$('.owl-carousel.owl-carousel-service').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                dots : false,
             


                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: false
                  },
                      900: {
                    items: 4,
                    nav: false
                  },
                  1000: {
                    items: 5,
                    nav: true,
                    loop: false,
                    margin: 20
        },
           1200: {
                    items: 8,
                    nav: true,
                    loop: false,
                    margin: 20
        },
           1400: {
                    items: 8,
                    nav: true,
                    loop: false,
                    margin: 20
        },

    }
})

   $( ".owl-prev").html('<i class="ion-arrow-left-c" style="color:#5ca609"></i>');
   $( ".owl-next").html('<i class="ion-arrow-right-c" style="color:#5ca609"></i>');



$('.circle').on('click', function(){
  $(this).toggleClass('filled');
});




$('.panel-heading a').click(function() {
    $('.panel-heading').removeClass('active');
    
    //If the panel was open and would be closed by this click, do not active it
    if(!$(this).closest('.panel').find('.panel-collapse').hasClass('show'))
        $(this).parents('.panel-heading').addClass('active');
 });




$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $iso.isotope({ filter: selector });
  return false;
});




 $('.owl-carouselportfoiliotwo ').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                dots : false,
             


                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: false
                  },
                      900: {
                    items: 3,
                    nav: false
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 20
        }
    }
})

   $( ".owl-prev").html('<i class="ion-arrow-left-c" style="color:#5ca609"></i>');
   $( ".owl-next").html('<i class="ion-arrow-right-c" style="color:#5ca609"></i>');

// Regular map
$(function () {

    function initMap() {

        var location = new google.maps.LatLng(51.315292, 0.985963);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});





});