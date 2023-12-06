const mongoose = require('mongoose')

const ProblemSchema = mongoose.Schema({
    id: String,
    name: String,
    date: Date,
    problem: String
});

module.exports = mongoose.model('Problem', ProblemSchema);