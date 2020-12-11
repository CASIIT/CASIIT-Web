class FAQManager {
    constructor() {
        this.buttonIsCollapse = false;
    }

    // setButtonCollapse(isCollapse) {
    //     this.buttonIsCollapse = isCollapse;
    //     this.updateCollapseButton();
    // }

    // updateCollapseButton() {
    //     let button = document.getElementById("collapseButton");
    //     if (this.buttonIsCollapse) {
    //         button.innerText = "Collapse All -";
    //         button.onclick = faqM.collapseAllQuestions;
    //         console.log("Setting collapse questions");
    //     }
    //     else {
    //         button.innerText = "Expand All +";
    //         button.onclick = faqM.expandAllQuestions;
    //         console.log("Setting expand questions");
    //     }
    // }

    questionToggle(object) {
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

            // this.setButtonCollapse(true);
        }
    }

    collapseAllQuestions() {
        let questions = Array.from(document.getElementsByClassName("questions__content"));
        questions.forEach(question => {
            question.previousElementSibling.classList.remove("expanded");
            question.style.maxHeight = null;
            question.style.paddingTop = "0px";
            question.style.paddingBottom = "0px";
        });

        // this.setButtonCollapse(false);
    }

    // expandAllQuestions() {
    //     let questions = Array.from(document.getElementsByClassName("questions__content"));
    //     questions.forEach(question => {
    //         question.previousElementSibling.classList.add("expanded");
    //         question.style.paddingTop = "30px";
    //         question.style.paddingBottom = (30 + question.scrollHeight) + "px";
    //         question.style.maxHeight = question.scrollHeight + "px";
    //     });

    //     this.setButtonCollapse(true);
    // }

}

faqM = new FAQManager();



// let buttonIsCollapse = true;

// function questionToggle(object) {
//     object.classList.toggle("expanded");
//     var content = object.nextElementSibling;
//     if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//         content.style.paddingTop = "0px";
//         content.style.paddingBottom = "0px";
//     } else {
//         content.style.paddingTop = "30px";
//         content.style.paddingBottom = (30 + content.scrollHeight) + "px";
//         content.style.maxHeight = content.scrollHeight + "px";
//         console.log(content.scrollHeight);

//         buttonIsCollapse = true;
//     }
// }

// function collapseAllQuestions() {
//     let questions = Array.from(document.getElementsByClassName("questions__content"));
//     questions.forEach(question => {
//         question.previousElementSibling.classList.remove("expanded");
//         question.style.maxHeight = null;
//         question.style.paddingTop = "0px";
//         question.style.paddingBottom = "0px";
//     });

//     buttonIsCollapse = false;
// }