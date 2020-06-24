const express = require('express');
const router = express.Router();

router.get('/infoTechCourses', (req, res) => {
    res.render('informationTechnology');
});

router.get('/interactiveMedia', (req, res) => {
    res.render('interactiveMedia');
});

router.get('/appliedSciences', (req, res) => {
    res.render('appliedSciences');
})