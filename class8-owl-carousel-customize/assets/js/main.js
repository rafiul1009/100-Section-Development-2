(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {
        $(".product-carousel").owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    });


    jQuery(window).load(function () {


    });


}(jQuery));	