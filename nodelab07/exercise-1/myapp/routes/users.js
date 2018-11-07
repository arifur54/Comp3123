var express = require('express');
var bodyparser = require('body-parser');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.use(bodyparser.urlencoded({extended:true}));

router.post('/users', function(req, res){
    res.render('users',{firstName: "Test", lastName: "User"});
    res.end()
})


module.exports = router;
