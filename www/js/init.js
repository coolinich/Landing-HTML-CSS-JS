$( function() {
    // init tabs
    $( "#services-tabs" ).tabs();
    $( "#tabs-portfolio" ).tabs();
    //init carousel
    $('.reviews-carousel').slick({
        dots: true
    });
    //init slicknav (responsive menu)
    $('.header-nav').slicknav({
        appendTo: '#header .container-fluid',
        label: ''
    });
} );