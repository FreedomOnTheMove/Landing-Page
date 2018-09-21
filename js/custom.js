/*
-----------------------------------------------------------------------
* Template Name    : Zimiki | Responsive Bootstrap 4 Landing Template * 
* Author           : ThemeBoxBetter                                   *
* Version          : 1.0.0                                            *
* Created          : April 2018                                       *
* File Description : Main JS file of the template                     * 
*----------------------------------------------------------------------
*/


! function($) {
    "use strict";

    var ZimikiApp = function() {};

    //scroll
    ZimikiApp.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    //Smooth
    ZimikiApp.prototype.initSmoothLink = function() {
        $('.navbar-nav a, .scroll_down a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    //Client Slider 
    ZimikiApp.prototype.initClientSlider = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 15000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    ZimikiApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initClientSlider();
    },
    //init
    $.ZimikiApp = new ZimikiApp, $.ZimikiApp.Constructor = ZimikiApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ZimikiApp.init();
}(window.jQuery);