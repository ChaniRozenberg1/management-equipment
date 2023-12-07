const express = require('express');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');
const equipmentRouter = require('./routers/equipment');
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

app.use(cors());

app.use('/', bodyParse.json())

app.use('/equipment', equipmentRouter);

app.listen(5000, () => {console.log("run on localhost:5000")})
