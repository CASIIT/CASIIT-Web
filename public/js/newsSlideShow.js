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

// let newsImages = document.getElementsByClassName("newsImage");
// Array.from(newsImages).forEach(element => {
//     element.style.zIndex = "relative";
// });  

// let newsSlides = document.getElementsByClassName("news__slide");
// Array.from(newsSlides).forEach(element => {
//     element.style.position = "relative";
// });

document.getElementsByClassName("news__slideshowContainer")[0].style.position = "relative";
document.getElementsByClassName("news__slideshowContainer")[0].style.zIndex = "-1";