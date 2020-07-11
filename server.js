const express = require('express');
const router = express.Router();
const session = require('express-session');
const emailSender = require('./sendEmail');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const nodemailer = require('nodemailer');
const e = require('express');

const app = express();

let faqs = [{
        question: "What does CASIIT stand for?",
        answer: "CASIIT stands for Center for Applied Sciences, Interactive and Information Technology."
    },
    {
        question: "Can I pursue multiple paths at once?",
        answer: "Yes, in fact, we encourage students to try many of the wide variety of courses that CASIIT has to offer."
    },
    {
        question: "I missed joining CASIIT as a freshman, can I still join the program?",
        answer: "Students can join CASIIT in any year by applying to the program in January."
    },
    {
        question: "Why the switch from the IT Program?",
        answer: "The new CASIIT program better encompasses the course options and pathways that we offer, they can not simply be classified as Information Technology. Our new name also allows for growth in our program."
    },
    {
        question: "Why do I need to take ITE115?",
        answer: "ITE115 is Computer Applications and Concepts. The concepts in this course are required by almost every college in every degree program, and it is the prerequisite to all dual enrolled IT courses at Battlefield High School and NVCC."
    },
    {
        question: "Is there any cost for the courses offered by the CASIIT Program?",
        answer: "Dual enrollment courses will require the cost of the associated college book/s."
    }
];

app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', {
        newsPosts: [
            { heading: "Hello", content: "This is the post content This is the post content This is the post content This is the post content This is the post content This is the post content This is the post content This is the post content This is the post content This is the post content This is the post content " },
            { heading: "Hello", content: "This is the post content 2" },
            { heading: "Hello", content: "This is the post content 3" }
        ]
    });
});

app.get('/FAQ', (req, res) => {
    res.render('FAQ', {
        questionsList: faqs,
        data: {
            name: "",
            email: "",
            question: ""
        },
        error: {
            nameError: "",
            emailError: "",
            questionError: ""
        },
        msg: ""
    });
});

app.get('/dual-enrollment', (req, res) => {
    res.render('dual-enrollment');
});

app.get('/early-college-scholars', (req, res) => {
    res.render('early-college-scholars');
});

app.use('/courses', require('./coursesRouter'));

app.get('/online', (req, res) => {
    res.render('online');
});

app.get('/calendar', (req, res) => {
    res.render('calendar');
});

app.get('/points', (req, res) => {
    res.render('points');
});

app.post('/sendEmail', [
        check('name').trim().notEmpty().withMessage("What's your name?").matches(/^[a-z_. -]+$/i).withMessage("Please enter a valid name"),
        check('email').isEmail().withMessage("Please enter a valid email"),
        check('questionInput').trim().notEmpty().withMessage("What's your question?")
    ],
    (req, res) => {
        let errors = validationResult(req);
        const { name, email, questionInput } = req.body;
        if (!errors.isEmpty()) {
            nameError = errors.array().find(e => e.param == "name");
            if (nameError) {
                nameError = nameError.msg;
            }

            emailError = errors.array().find(e => e.param == "email");
            if (emailError) {
                emailError = emailError.msg;
            }

            questionError = errors.array().find(e => e.param == "questionInput");
            if (questionError) {
                questionError = questionError.msg;
            }

            errors = { nameError: nameError, emailError: emailError, questionError: questionError }
            data = { name: name, email: email, question: questionInput };
            res.render('FAQ', {
                questionsList: faqs,
                data: data,
                error: errors,
                msg: "Please fix the errors and try again"
            });

            // return res.status(422).json({ errors: errors.array() });

        } else { //there are no errors 
            emailSender.sEmail(req.body.name, req.body.email, req.body.questionInput).then((info) => {
                    console.log("Email Sent: " + info.response);
                    res.render('FAQ', {
                        questionsList: faqs,
                        data: {
                            name: "",
                            email: "",
                            question: ""
                        },
                        error: {
                            nameError: "",
                            emailError: "",
                            questionError: ""
                        },
                        msg: "Your message was succesfully sent.  We will get back to you soon"
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render('FAQ', {
                        questionsList: faqs,
                        data: { name: name, email: email, question: questionInput },
                        error: {
                            nameError: "",
                            emailError: "",
                            questionError: ""
                        },
                        msg: "Your message could not be sent.  Please try again"
                    });
                });
        }
    });
//         console.log(emailResult);
//         console.log("EMail sender was just logged");
//         let sendMessage;
//         if (emailResult.code == -11) {
//             sendMessage = "Sorry, your email could not be sent"
//             sendData = { name: name, email: email, question: questionInput };
//         } else {
//             sendMessage = "Your message was succesfully sent.  We'll get back to you soon."
//         }
//         res.render('FAQ', {
//             questionsList: faqs,
//             data: sendData,
//             error: {
//                 nameError: "",
//                 emailError: "",
//                 questionError: ""
//             },
//             msg: sendMessage
//         });
//     }
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));