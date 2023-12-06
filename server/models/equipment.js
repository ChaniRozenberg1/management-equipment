const mongoose = require('mongoose')

const EquipmentSchema = mongoose.Schema({
    owner: {type: String, unique: true},
    site: String,
    computeID: {type: String, unique: true},
    headphonesID: {type: String, unique: true},
    mouseID: {type: String, unique: true},
    keyboardID: {type: String, unique: true},
    batteryID: {type: String, unique: true},
    screenID: {type: String, unique: true},
    bagID: {type: String, unique: true}
});
module.exports = mongoose.model('equipments', EquipmentSchema);