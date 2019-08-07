jQuery(document).ready(function($){


  $(function(){
  
  createSticky($(".navbar,.main-nav,.nav-header"));

});

function createSticky(sticky) {
  
  if (typeof sticky !== "undefined") {

    var pos = sticky.offset().top,
        win = $(window);
      
    win.on("scroll", function() {
        win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
    });     
  }
}








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



    $(function() {
        var owl = $('.filter-item').owlCarousel({
            loop    :true,
            autoplay:false,
            margin  :10,
            nav     :true,
            autoplayHoverPause: true,
            navText: ["<i class='ion-android-arrow-back'></i>","<i class='ion-android-arrow-forward'></i>"],
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        /* animate filter */
        var owlAnimateFilter = function(even) {
            $(this)
                .addClass('__loading')
                .delay(70 * $(this).parent().index())
                .queue(function() {
                    $(this).dequeue().removeClass('__loading')
                })
        };

        $('.filter-menu').on('click', '.filter-btn', function(e) {


            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('btn-active')) return;

            /* active current */
            $(this).addClass('btn-active').siblings().removeClass('btn-active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) {
                $(_owl).find('.item').each(owlAnimateFilter);
            });
        });





    })







});



