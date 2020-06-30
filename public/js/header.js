let scrollTopMax = 150;
function adjustHeaderColor() {
    if ($(window).scrollTop() > scrollTopMax) {
        document.getElementById("header").style.backgroundColor = "#f5f5f5";
    }
    else {
        document.getElementById("header").style.backgroundColor = "#ffffff";

    }
}

function highlightActiveLink(linkText, linkLocationClassName = "header__nav__listItem__a") {
    let elements = Array.from(document.getElementsByClassName(linkLocationClassName));
    elements.forEach(element => {
        console.log(element.innerText);
        if (element.innerText.toLowerCase() == linkText) {
            element.classList.add("nav_active");
        }
    });
}

document.body.addEventListener("scroll", adjustHeaderColor);