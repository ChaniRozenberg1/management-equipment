mongoose = require('mongoose')

const UnnecessaryEquipmentSchema = mongoose.Schema({
    equipmentName: String,
    equipmentID: Number,
    site: String
});

module.exports = mongoose.model('unnecessaryEquipments', UnnecessaryEquipmentSchema);