let scrollTopMax = 150;
function adjustHeaderColor() {
    console.log("Function");
    if (window.scrollY > scrollTopMax) {
        // document.getElementById("header").style.borderBottom = "1px solid black";
        // document.getElementById("header").style.backgroundColor = "whitesmoke";
        document.getElementById("header").style.boxShadow = "0px 5px 6px -6px grey";        
        console.log("Entered if");
    }
    else {
        document.getElementById("header").style.backgroundColor = "#fffffff2";

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

// document.body.addEventListener("scroll", adjustHeaderColor);s
window.onscroll = adjustHeaderColor;