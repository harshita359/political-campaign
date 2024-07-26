/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */



function showVWSearch() {
    jQuery(".serach_outer").slideDown(700);
    jQuery('.serach_outer').addClass("show-vw-search");
    jQuery('.serach_outer').removeClass("hide-vw-search");
}

function closeVWSearch() {
    jQuery(".serach_outer").slideUp(700);
    jQuery('.serach_outer').removeClass("show-vw-search");
    jQuery('.serach_outer').addClass("hide-vw-search");
}

/* Mobile responsive Menu*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// For FAQ section
jQuery(".toggle-accordion").on("click", function() {
    var accordionId = jQuery(this).attr("accordion-id"),
        numPanelOpen = jQuery(accordionId + ' .collapse.in').length;

    jQuery(this).toggleClass("active");

    if (numPanelOpen == 0) {
        openAllPanels(accordionId);
    } else {
        closeAllPanels(accordionId);
    }
})

openAllPanels = function(aId) {
    console.log("setAllPanelOpen");
    jQuery(aId + ' .panel-collapse:not(".in")').collapse('show');
}
closeAllPanels = function(aId) {
    console.log("setAllPanelclose");
    jQuery(aId + ' .panel-collapse.in').collapse('hide');
}

jQuery(function() {
    //----- OPEN
    jQuery('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    jQuery('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
});

jQuery('document').ready(function() {

    var feature_loop = "";
    var policy_loop = "";
    var promise_loop = "";
    var testimonial_loop = "";
    var partners_loop = "";
    var team_loop = "";
    var latest_news_loop = "";

    if (jQuery("#vw-feature-loop").text() == 'true') {
        feature_loop = true;
    } else {
        feature_loop = false;
    }
    if (jQuery("#vw-promise-loop").text() == 'true') {
        promise_loop = true;
    } else {
        promise_loop = false;
    }
    if (jQuery("#vw-records-loop").text() == 'true') {
        vw_records_loop = true;
    } else {
        vw_records_loop = false;
    }
    if (jQuery("#vw-partners-loop").text() == 'true') {
        partners_loop = true;
    } else {
        partners_loop = false;
    }

    if (jQuery("#vw-Team-loop").text() == 'true') {
        team_loop = true;
    } else {
        team_loop = false;
    }
    if (jQuery("#vw-blog-loop").text() == 'true') {
        latest_news_loop = true;
    } else {
        latest_news_loop = false;
    }

    var owl = jQuery('#our-feature .owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: feature_loop,
        dots: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });

    var owl = jQuery('#our-promise .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: promise_loop,
        dots: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
    var owl = jQuery('#vw-policy .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: policy_loop,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            700: {
                items: 3
            },
            900: {
                items: 5
            },
            1000: {
                items: 5
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
    var owl = jQuery('#our-records .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: vw_records_loop,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            900: {
                items: 3
            },
            1000: {
                items: 3
            },
            1100: {
                items: 4
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });

    var owl = jQuery('#vw-our-partners .owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: partners_loop,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            700: {
                items: 3
            },
            900: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });

    var owl = jQuery('#vw-testimonial .owl-carousel');
    owl.owlCarousel({
        margin: 25,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: testimonial_loop,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            650: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
    var owl = jQuery('#our-team .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: team_loop,
        dots: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
    var owl = jQuery('#vw-latest-news .owl-carousel');
    owl.owlCarousel({
        margin: 25,
        nav: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: latest_news_loop,
        dots: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            650: {
                items: 2
            },
            1000: {
                items: 2
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
    new WOW().init();
});

var interval = null;

function show_loading_box() {
    jQuery(".eco-nature-loading-box").css("display", "none");
    clearInterval(interval);
}
jQuery('document').ready(function() {

    interval = setInterval(show_loading_box, 1000);

    // ------ Counter -------
    var count_no = "yes";
    jQuery('#our-records').on('appear', function() {
        if (count_no == "yes") {
            count_no = "no";
            jQuery('.vw-count').each(function() {
                jQuery(this).prop('Counter', 0).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 30000,
                    easing: 'swing',
                    step: function(now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
    jQuery('#our-records').appear();

    // ------------ Scroll Top ---------------

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            jQuery('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            jQuery('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    jQuery('#return-to-top').click(function() { // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 2000);
    });

    // ------------ Sticky Navbar -------------------

    var stickyon = jQuery('#sticky-onoff').text().trim();
    var a1 = stickyon.length;
    window.onscroll = function() {
        if (a1 == 3) {
            myScrollNav();
        }
    }

    var navbar = document.getElementById("vw-sticky-menu");
    var sticky = navbar.offsetTop;

    function myScrollNav() {
        if (window.pageYOffset > sticky) {
            //alert(window.pageYOffset);
            navbar.classList.add("sticky");
            navbar.classList.add("stickynavbar");
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.remove("stickynavbar");
        }
    }

    var total_visitor = parseInt(jQuery('#vw-total-visitors').text());
    jQuery('#vw-testimonial .owl-dots').addClass('custom-dots');
    jQuery('#vw-testimonial .owl-dots').removeClass('owl-dots');
    for (i = 1; i <= total_visitor; i++) {
        jQuery('#vw-testimonial .custom-dots button:nth-child(' + i + ')').append('<span class="vw-custom-dots">0' + i + '</span>');
    }

    jQuery('#vw-testimonial li a').click(function() {
        jQuery('#vw-testimonial  li a').removeClass('active');
    });

    jQuery('#myBtn').click(function() {
        jQuery("#myNewModal").css("display", "block");
    });
    jQuery('.close-one').click(function() {
        jQuery("#myNewModal").css("display", "none");
    });

    jQuery('#myvideoBtn').click(function() {
        jQuery("#myvideoModal").css("display", "block");
    });
    jQuery('.close-one').click(function() {
        jQuery("#myvideoModal").css("display", "none");
    });

    interval = setInterval(show_loading_box, 1000);

    var p1 = "yes";
    jQuery("#skills-box").on('appear', function() {
        if (p1 == "yes") {
            p1 = "no";
            jQuery(this).find(".progress_bar_8").each(function() {
                jQuery(this).find(".vc_bar").delay(0).animate({
                    width: jQuery(this).attr("data-percent"),
                }, 1000);
            });
        }
    });
    jQuery("#skills-box").appear();

    jQuery('.close-one').click(function() {
        jQuery('.modal-backdrop').remove();
        jQuery('.modal-open').css("overflow-y", "scroll");
        jQuery('.modal-open').css("padding-right", "0");
    });
    // jQuery("body").removeClass("modal-open");
    // jQuery(".modal-backdrop").remove();

});
// ------------ Video Popup ----------



jQuery(function($) {
    "use strict";
    jQuery('.menu > ul').superfish({
        delay: 500,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        speed: 'fast'
    });
});