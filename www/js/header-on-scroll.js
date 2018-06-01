const header = $('#header'); // находим элемент
const inner = $('.inner');
const scrollToTop = $('.scroll-top');
const scrollToAbout = $('.scroll-about'); 
const windowHeight = $(window).height(); // узнаем высоту экран
const headerHeight = header.outerHeight(); // узнаем высоту шапки
const innerHeight = inner.outerHeight();

// Show scroll button on inner for scrolling to About
function onLoad(){
     scrollToAbout.css({
         'top': (innerHeight - 35)
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

$(document).ready(onLoad); //set initial position for scrollToAbout button
$(window).on('scroll', onScroll); // вешаем событие на скролл в окне
$(window).on('scroll', onScrollTopBtn); //event on scroll-top button

// Scroll to element
const scrollBtn = $('[data-scroll]'); // ищем все элементы у которого есмть атрибут data-scroll

function onClick(e) {
    e.preventDefault(); // отменить стандартное действие
    const target = $(this).attr('data-scroll'); // получаем значение атрибута data-scroll 
    const dist = $(target).offset().top; // меряем растояние до блока
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing'); // анимируем скролл до нужного блока 
}

scrollBtn.on('click', onClick); // отслеживаем событие клик на все элементы с атрр data-scroll
