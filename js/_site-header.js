///*------------------------------------*\
//    #SITE-HEADER
//\*------------------------------------*/

/**
* Source: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.owmxfl4l5
*/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
//var header = $('#js-site-header');

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#js-site-header').removeClass('nav-down').addClass('is-hidden');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#js-site-header').removeClass('is-hidden').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}