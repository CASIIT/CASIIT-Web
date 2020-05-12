function adjustHeaderColor() {
    if ($(window).scrollTop() > 150) {
        document.getElementById("header").style.backgroundColor = "#f5f5f5";
        document.getElementById("headerLogo").style.opacity = "1";
    }
    else {
        document.getElementById("header").style.backgroundColor = "#ffffff";
        document.getElementById("headerLogo").style.opacity = "0";

    }
}

document.body.onscroll = adjustHeaderColor;