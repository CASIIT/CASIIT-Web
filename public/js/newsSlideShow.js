function slideShowInit() {
    $('.news__slideshowContainer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev news__slideShowArrow">Previous</button>',
        nextArrow: '<button type="button" class="slick-next news__slideShowArrow">Next</button>'
    });
}