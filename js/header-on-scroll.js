const header = $('#header');
const windowHeight = $(window).height(); // find height of window
const headerHeight = header.outerHeight();

function onScroll(e) {
    let pos = $(window).scrollTop(); // find current position of scroll

    if (pos > headerHeight + 100) { // if user scrolled more than header height + 100px
        header.css({
            'position': 'fixed',
            'top': -(headerHeight + 50),
            'background-color': '#000'
        });
    }
    if (pos > windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });
    }

    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        });
    }
}

$(window).on('scroll', onScroll);
