jQuery(document).ready(function ($) {

    $('.domestic-economy__favorites-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.domestic-economy__favorites-slider-prev'),
        nextArrow: $('.domestic-economy__favorites-slider-next'),
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.domestic-economy__about-btn, .domestic-economy__overload-close').click(function(e){
        e.preventDefault();
        $('.domestic-economy__overload').toggleClass('active');
        $('.domestic-economy__wrapper').toggleClass('domestic-economy__overload--active');
    });


});