function questionToggle(object) {
    object.classList.toggle("expanded");
    var content = object.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = "0px";
        content.style.paddingBottom = "0px";
    } else {
        content.style.paddingTop = "30px";
        content.style.paddingBottom = (30 + content.scrollHeight) + "px";
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.scrollHeight);
    }
}