const express = require('express');
const router = express.Router();
const {Mail, Liste, Send, DateFinde} = require('../controllers/user');


// route middlewares
router.get('/Mail',Liste)
router.post('/Mail', Mail);
router.post('/send/:Email', Send);
router.post('/DateTime', DateFinde);



module.exports = router;