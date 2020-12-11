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
    res.render('interactiveMedia', {
        interactiveMediaCourses: [
            {
                id: "#915060",
                name: "Advanced Placement Studio Art (Drawing)"
            },
            {
                id: "#914860",
                name: "Advanced Placement Studio Art (2-D Design)"
            },
            {
                id: "",
                name: "Pre-AP Art Portfolio"
            },
            {
                id: "#915320",
                name: "CASIIT Graphic Design"
            },
            {
                id: "#918000",
                name: "CASIIT Computer Graphics I"
            },
            {
                id: "#918100",
                name: "CASIIT Computer Graphics II"
            },
            {
                id: "#918001",
                name: "CASIIT Multimedia Software Design and Development I"
            },
            {
                id: "#919020",
                name: "Photography I"
            },
            {
                id: "#919120",
                name: "Photography II"
            }
        ]
    });
});

router.get('/appliedSciences', (req, res) => {
    res.render('appliedSciences', {
        appliedSciencesCourses: [
            {
                id: "#318400",
                name: "Advanced Computer Mathematics (Java)"
            },
            {
                id: "#318560",
                name: "Advanced Placement Computer Science A (Java)"
            },
            {
                id: "",
                name: "Data Structures And Algorithms"
            },
            {
                id: "",
                name: "Advanced Computer Studies"
            },
            {
                id: "#845020",
                name: "Engineering Exploration / Robotics I"
            },
            {
                id: "#845100",
                name: "Engineering Analysis and Applications / Robotics II"
            },
            {
                id: "#841420",
                name: "Sustainability and Renewable Technology"
            }
        ]
    });
});

router.use(express.static('public'));

module.exports = router;