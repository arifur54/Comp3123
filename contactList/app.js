const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const dbCon= "mongodb://testdb:test123@ds019638.mlab.com:19638/test_database";

const app = express();
// port no
const port = 3000;

// connect to mongoDb
mongoose.connect(dbCon);

// On Database connection return true or else throw err
mongoose.connection.on('connected', () =>{
    console.log("connected to Database ")
})

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('error in DB connection'+ err)
    }
})

//defining routes
const routes = require('./routes/routes');
const routes2 = require('./routes/routes2');

// Adding MiddleWare
app.use(cors());

// body-parser
app.use(bodyParser.json());

// Static files -- Joining current dir to public dir (__dirname) represents curr Dir 
app.use(express.static(path.join(__dirname, 'public')))


app.use('/api', routes);
app.use('/ord', routes2);


// Testing Server
app.get('/',(req, res) => {
    res.send('test');
})



app.listen(port, () =>{
    console.log(`listning to port ${3000}`);
})

