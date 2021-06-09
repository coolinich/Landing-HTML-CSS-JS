const inner = $('.inner');
const scrollToTop = $('.scroll-top');
const scrollToAbout = $('.scroll-about'); 
var innerHeight;
var winHeight;

// Place scroll button on inner for scrolling to About
function scrollAbout(){
    innerHeight = inner.outerHeight();
    scrollToAbout.css({
         'top': innerHeight - 35
    });
}

// Scroll to top by click on scroll-top button
function onScrollTopBtn(e) {
    winHeight = $(window).height();
    let pos = $(window).scrollTop(); 
    if (pos > winHeight) { 
        scrollToTop.css({
            'display': 'block',
            'top': (winHeight - 45)
        });
    }
    if (pos < innerHeight) {
        scrollToTop.css({
            'display': 'none'
        });
    }
} 

//Scroll to menu-item section
function scrollTo(){
    // Scroll to element
    const scrollBtn = $('[data-scroll]');

    function onScroll(e) {
        e.preventDefault();

        // Close slick nav
        $('.header-nav').slicknav('close');
        let target = $(this).attr('data-scroll');
        let dist = $(target).offset().top;
        $('html, body').animate({scrollTop: dist}, 1000, 'swing');
    }

    scrollBtn.on('click', onScroll);
}

//Call Events listeners
$(document).ready(scrollAbout); //set initial position for scrollToAbout button
$(window).on('load', scrollTo); //scroll to element with data-scroll attribute
window.onresize = function() { scrollAbout(); onScrollTopBtn(); }; //correct position of buttons if window has been resized
$(window).on('scroll', onScrollTopBtn); //event on scroll-top button