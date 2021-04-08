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

    $('.domestic-economy__product-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.domestic-economy__product-slider-nav'
    });
    $('.domestic-economy__product-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.domestic-economy__product-slider-for',
        dots: false,
        focusOnSelect: true,
    });





    $('.domestic-economy__about-btn, .domestic-economy__overload-close').click(function(e){
        e.preventDefault();
        $('.domestic-economy__overload').toggleClass('active');
        $('.domestic-economy__wrapper').toggleClass('domestic-economy__overload--active');
    });

    $(".domestic-economy__filter-active").click(function(){
        $(this).next('ul').slideToggle(200);
    });

    $(document).ready(function() {
        $('.domestic-economy__product-count-minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.domestic-economy__product-count-plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });


});