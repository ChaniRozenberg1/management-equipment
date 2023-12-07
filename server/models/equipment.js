mongoose = require('mongoose')

const equipmentSchema = mongoose.Schema({
    equipmentName: String,
    equipmentID: Number,
    site: String
});

module.exports = mongoose.model('equipments', equipmentSchema);