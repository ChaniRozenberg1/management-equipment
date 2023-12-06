const express = require('express');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://GYC:GYC2023@cluster0.zsh6qds.mongodb.net/');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use('/',bodyParse.json())

app.use(cors());

app.listen(5000, ()=>{console.log("run on localhost:5000")})
