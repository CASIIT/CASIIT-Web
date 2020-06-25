const express = require('express');
const router = express.Router();

router.get('/infoTechCourses', (req, res) => {
    res.render('informationTechnology', {
        iTCourses: [{
            id: "#667020",
            name: "Information Technology Fundamentals"
        },
        {
            id: "#854281",
            name: "Computer Networking Hardware Operations I- Dual Enrolled"
        },
        {
            id: "#854281 + #854381",
            name: "Computer Networking Hardware Operations I- Dual Enrolled + Computer Networking Hardware Operations II - Dual Enrolled"
        },
        {
            id: "#854481 + #854581",
            name: "Computer Networking Hardware Operations III +  Computer Networking Hardware Operations IV – Dual Enrolled"
        },
        {
            id: "#663020",
            name: "Web Technologies"
        },
        {
            id: "",
            name: "Advanced Web Technologies – Dual Enrolled"
        },
        {
            id: "",
            name: "CASIIT Programming - Dual Enrolled"
        },
        {
            id: "#666080",
            name: "Database Design and Management (Oracle) - Dual Enrolled",
            grade: "11-12"
        },
        {
            id: "#666280",
            name: "Advanced Database Design and Management (Oracle) - Dual Enrolled",
            grade: "11-12"
        },
        {
            id: "#863080",
            name: "Cybersecurity Network Systems - Dual Enrolled",
            grade: "11-12"
        }
        ]

    })
});

router.get('/interactiveMedia', (req, res) => {
    res.render('interactiveMedia');
});

router.get('/appliedSciences', (req, res) => {
    res.render('appliedSciences');
});

router.use(express.static('public'));

module.exports = router;