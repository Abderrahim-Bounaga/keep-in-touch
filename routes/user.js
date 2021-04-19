const express = require('express');
const router = express.Router();
const {Mail, Liste, Send} = require('../controllers/user');


// route middlewares
router.get('/Mail',Liste)
router.post('/Mail', Mail);
router.post('/send/:Email', Send);



module.exports = router;