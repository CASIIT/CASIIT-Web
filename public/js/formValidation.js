let name = document.getElementById("name");
name.pattern = "\^[a-z]* [a-z]*$\i";

name.addEventListener("input", (event) => {
    if (name.validity.patternMismatch()) {
        email.setCustomValidity("Please enter your real full name");
    }
});