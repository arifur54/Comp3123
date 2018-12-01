const express = require('express');
const router = express.Router();

const pikachu = require('../models/pikacu');

router.get("/pikas", (req, res, next) => {
    pikachu.find(function(err, pikacuStats ){
        if(err){
            res.json({msg: "Failed To Retrive Contacts"})
        }else{
            res.json(pikacuStats)
        }
    })
    
})

router.post('/pika', (req, res, next)=>{
    let newPika = new pikachu({
        HP: req.body.HP,
        Color: req.body.Color,
        Power: req.body.Power
    });


    pikachu.create(newPika,(err)=>{
        if(err){
            res.json({msg: "Not Added"})
        }else{
            res.json({msg: "Added"})
        }
    });
     
});

// router.get("/pikachu", getPikachus)

module.exports = router;