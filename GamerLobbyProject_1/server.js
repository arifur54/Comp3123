const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dbPath = `mongodb://paroject1:project123@ds117834.mlab.com:17834/comp3123_project_database`;
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// Connecting to Database
mongoose.connect(dbPath);

// Database Connection Returing true
mongoose.connection.on('connected', () =>{
    console.log("connected to Database ")
})

//Database Connection Retruring false
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('error in DB connection => '+ err)
    }
})


// Cros MiddleWare
app.use(cors());

//body parser
app.use(bodyParser.json());

//create a new server by listening to port
app.listen(port, () => {
    console.log(`listning to ${port}`)
})

