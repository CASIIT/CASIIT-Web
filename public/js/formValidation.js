const name = document.getElementById("name");
const email = document.getElementById("email");
const question = document.getElementById("questionInput");
const askQuestionForm = document.getElementById("askQuestionForm");
let nameErrors = document.getElementById("nameErrors");
let emailErrors = document.getElementById("emailErrors");
let questionErrors = document.getElementById("questionErrors");

function validateName(n) {
    let regex = new RegExp("\^[a-z_. -]+$", "i");
    return regex.test(n);
}

function validateEmail(e) {
    return e.validity.valid;
}

function validateQuestion(q) {
    return q.trim().length > 0;
}

function validateForm(n, e, q) {
    let valid = validateName(n) && validateEmail(e) && validateQuestion(q);
    console.log(valid);
    return valid;
}

name.addEventListener("blur", (event) => {
    if (!validateName(name.value.trim())) {
        nameErrors.innerText = "Please enter your first and last name";
    } else {
        nameErrors.innerText = "";
    }
});

email.addEventListener("blur", (event) => {
    email.value = email.value.trim();
    if (!validateEmail(email)) {
        emailErrors.innerText = "Please enter a valid email address";
    } else {
        emailErrors.innerText = "";
    }
});

question.addEventListener("blur", (event) => {
    console.log("Validating question");
    if (!validateQuestion(question.value)) {
        questionErrors.innerText = "What's your question?"
    } else {
        questionErrors.innerText = "";
    }
});

email.addEventListener("input", (event) => {
    if (email.value.trimLeft() != email.value) {
        email.value = email.value.trimLeft();
    }
});

console.log("Adding event listener");
askQuestionForm.addEventListener("submit", (event) => {
    let isValid = validateForm(name.value, email, question.value);
    if (!isValid) {
        event.preventDefault();
    }
    return isValid;
});