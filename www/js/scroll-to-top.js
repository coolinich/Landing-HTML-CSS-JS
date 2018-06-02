const inner = $('.inner');
const scrollToTop = $('.scroll-top');
const scrollToAbout = $('.scroll-about'); 
var innerHeight = inner.outerHeight();

// Place scroll button on inner for scrolling to About
function scrollAbout(){
    innerHeight = inner.outerHeight();
    scrollToAbout.css({
         'top': innerHeight - 35
    });
}

// Scroll to top by click on scroll-top button
function onScrollTopBtn(e) {
    let pos = $(window).scrollTop(); 
    if (pos > windowHeight) { 
        scrollToTop.css({
            'display': 'block',
            'top': (windowHeight - 45)
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


$(window).on('load', scrollTo); //scroll to element with data-scroll attribute
$(window).on('scroll', onScrollTopBtn); //event on scroll-top button
$(document).ready(scrollAbout); //set initial position for scrollToAbout button
$(window).on('orientationchange', scrollAbout); //set position for scrollToAbout button
window.onresize = scrollAbout; //set position for scrollToAbout button
