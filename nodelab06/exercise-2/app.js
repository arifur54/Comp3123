var express = require('express');
var app = express();

app.listen(3000);

// app.get('/greet', function(req, res){
//     res.send('GET recived: ' + req.requestTime);
//     res.send("Hello")
// })

var requestTime = function(req, res, next){
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)

app.get('/greet', function(req, res){
    console.log('GET recived: ' + req.requestTime);
    res.send("Hello")
})

app.post('/greetpost', function(req,res){
    console.log(`Post recived:${req.requestTime} `)
    res.send("Post Has been Send")
})

app.put('/greetput', function(req, res){
    console.log(`Put received: ${req.requestTime}`)
    res.send("Put!!")
})

app.delete('/greetdelete', function(req,res){
    console.log(`Delete: ${req.requestTime} `)
    res.send("Delete")
})

