(function ($) {
    "use strict";
/*----------------------------------------*/
/*  slick use */
/*----------------------------------------*/

    $('.client-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2300,
        responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    }
                }
        ]
      });
      $('.testimonial-item-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2300,

        
      });
                 
/*----------------------------------------*/
/*  use scroll up iq */
/*----------------------------------------*/
        $.scrollUp({
            scrollText: '<i class="fas fa-arrow-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'slide'

        });

/*----------------------------------------*/
/*  use wow js  */
/*----------------------------------------*/

new WOW().init();

/*---------------------
menu-stick
--------------------- */
var s = $("#sticker");
var pos = s.position();

$(window).on('scroll', function() {
	var windowpos = $(window).scrollTop();
	if (windowpos > pos.top) {
		s.addClass("stick");
	} else {
		s.removeClass("stick");	
	}
});


})(jQuery);