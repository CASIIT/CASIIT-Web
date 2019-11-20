const express = require('express');
const session = require('express-session');

const app = express();

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
        questionsList: [{
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
        ]
    });
});

app.get('/dual-enrollment', (req, res) => {
    res.render('dual-enrollment');
});

app.get('/early-college-scholars', (req, res) => {
    res.render('early-college-scholars');
});

app.get('/courses', (req, res) => {
    res.render('courses');
});

app.get('/online', (req, res) => {
    res.render('online');
});

app.get('/calendar', (req, res) => {
    res.render('calendar');
});

app.get('/points', (req, res) => {
    res.render('points');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));