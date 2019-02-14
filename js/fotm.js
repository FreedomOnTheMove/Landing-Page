! function($) {
    "use strict";

    var FOTM = function() {};

    FOTM.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    FOTM.prototype.initClientSlider = function() {
        $("#testimonials-box").owlCarousel({
            autoPlay: 15000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: false,
        });
    },

    FOTM.prototype.init = function() {
        this.initStickyMenu();
        this.initClientSlider();
    },
    $.FOTM = new FOTM, $.FOTM.Constructor = FOTM
}(window.jQuery),

function($) {
    "use strict";
    $.FOTM.init();

}(window.jQuery);