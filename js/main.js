if ($('.banner-img-slider').length) {
    var swiper = new Swiper('.banner-img-slider', {
        effect: 'fade',
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

}


if ($('.testimonial-slider').length) {
    var swiper = new Swiper('.testimonial-slider', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        initialSlide: 1,
        keyboardControl: true,
        mousewheelControl: false,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        navigation: {
            nextEl: '.swiper-button-nex',
            prevEl: '.swiper-button-pre'
        }
    });

}


$(function () {
    $(".sidebar-active").click(function () {
        $("body").addClass("mobile-menu-visible");
    });
    $(".nav-menu-wrap .menu-backdrop, .nav-menu-wrap .close-btn, .overlay").click(function () {
        $("body").removeClass("mobile-menu-visible");
    });

})


$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            $(".back-to-top").fadeIn();
            $(".header-navigation").addClass("fixed");
        } else {
            $(".back-to-top").fadeOut();
            $(".header-navigation").removeClass("fixed");
        }
    });

})

$(".scrollUp").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
});