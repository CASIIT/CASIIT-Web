function logoAutoHideForHomePage() {
    if ($(window).scrollTop() > scrollTopMax) {
        document.getElementById("headerLogo").style.opacity = "1";
    }
    else {
        document.getElementById("headerLogo").style.opacity = "0";

    }
}

document.body.onscroll = logoAutoHideForHomePage;
document.getElementById("headerLogo").style.opacity = 0;
