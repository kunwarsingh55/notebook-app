const express = require('express');
const router = express.Router();


router.get('/getNotes', (req, res)=>{
    res.end('/getNotes');
})

module.exports = router;