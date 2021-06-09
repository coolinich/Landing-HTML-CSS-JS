$( function() {
    // init tabs
    $( "#services-tabs" ).tabs();
    $( "#tabs-portfolio" ).tabs();
    //init carousel
    $('.reviews-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>'
    });
    //init slicknav (responsive menu)
    $('.header-nav').slicknav({
        appendTo: '#header .container-fluid',
        label: ''
    });
} );