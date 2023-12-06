const mongoose = require('mongoose')

const ProblemSchema = mongoose.Schema({
    name: String,
    date: Date,
    problem: String
});

module.exports = mongoose.model('problems', ProblemSchema);