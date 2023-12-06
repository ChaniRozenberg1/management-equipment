const express = require('express');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


mongouri = process.env.MONGOURI
console.log(mongouri);
mongoose.connect(mongouri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use('/',bodyParse.json())

// app.post('/',express.json(), (req, res) => {
//     try {
//         res.status(200).send(req.body);  
//     } catch (error) {
//         res.send("Error");  
//     }
// }); 


app.use(cors());

app.listen(5000, ()=>{console.log("run on localhost:5000")})
