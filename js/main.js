$(function () {
  $(".humberger-menu").click(function () {
    $("body").addClass("menu-visible");
  });
  $(".side-menu .close-btn, .overlay").click(function () {
    $("body").removeClass("menu-visible");
  });
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 150) {
      $(".back-to-top").fadeIn();
      $(".top-navigation").addClass("fixed");
    } else {
      $(".back-to-top").fadeOut();
      $(".top-navigation").removeClass("fixed");
    }
  });
});

$(".scrollUp").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
});

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