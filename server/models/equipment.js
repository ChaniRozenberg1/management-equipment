const mongoose = require('mongoose')

const EquipmentSchema = mongoose.Schema({
    owner: String,
    site: String,
    computerID: {type: Number, unique: true},
    headphonesID: {type: Number, unique: true},
    mouseID: {type: Number, unique: true},
    keyboardID: {type: Number, unique: true},
    batteryID: {type: Number, unique: true},
    screenID: {type: Number, unique: true},
    bagID: {type: Number, unique: true}
});
module.exports = mongoose.model('equipments', EquipmentSchema);