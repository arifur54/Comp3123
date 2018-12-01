const express = require('express');
const router = express.Router();
 
const Contact = require('../models/contact');



// add Data
router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });


    Contact.create(newContact,(err)=>{
        if(err){
            res.json({msg: "Not Added"})
        }else{
            res.json({msg: "Added"})
        }
    });
     
});
// router.get("/pikas", (req, res, next) => {
//     pikachu.find(function(err, pikacuStats ){
//         if(err){
//             res.json({msg: "Failed To Retrive Contacts"})
//         }else{
//             res.json(pikacuStats);
//         }
//     })
    
// })

// retrive data 
router.get("/contacts", (req, res, next) => {
    Contact.find(function(err, contacts){
        if(err){
            res.json({msg: "Failed To Retrive Contacts"})
        }else{
            res.json(contacts);
        }
    })
    
})


// deleting contacts
router.delete('/contact/:id',(req, res, next)=>{
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

// must export routes
module.exports = router;