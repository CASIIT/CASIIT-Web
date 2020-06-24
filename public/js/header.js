let scrollTopMax = 150;
function adjustHeaderColor() {
    if ($(window).scrollTop() > scrollTopMax) {
        document.getElementById("header").style.backgroundColor = "#f5f5f5";
    }
    else {
        document.getElementById("header").style.backgroundColor = "#ffffff";

    }
}


document.body.onscroll = adjustHeaderColor;