$(function () {
    $('.mainSlide').slick({
        arrows: false,
    });

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    })
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 100) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });
});