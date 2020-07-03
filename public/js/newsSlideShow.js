function slideShowInit() {
    $('.news__slideshowContainer').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,

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
document.getElementsByClassName("news__slideshowContainer")[0].style.zIndex = "0";