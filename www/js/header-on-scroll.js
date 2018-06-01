const header = $('#header'); // находим элемент
const windowHeight = $(window).height(); // узнаем высоту экран
const headerHeight = header.outerHeight(); // узнаем высоту шапки

function onScroll(e) {
    let pos = $(window).scrollTop(); // определяем позицию скрола 

    if (pos > headerHeight + 100) { // если проскролели больше высоты шапки +100пикс
        header.css({
            'position': 'fixed',
            'top': -(headerHeight + 50),
            'background-color': '#000'
        });
    }
    if (pos > windowHeight) { // если проскролели больше высоты экрана
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });
    }

    if (pos < headerHeight + 100) { // если проскролели меньше высоты шапки
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        });
    }
}

$(window).on('scroll', onScroll); // вешаем событие на скролл в окне