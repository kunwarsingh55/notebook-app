const express = require('express');
const router = express.Router();
const userModel = require('../models/User');


router.post('/create', (req, res)=>{
    
    console.log(req.body)
    const newUser = userModel(req.body);
    newUser.save();
    res.json({"message":"ok"})
})

module.exports = router;