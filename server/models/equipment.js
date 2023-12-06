const mongoose = require('mongoose')

const EquipmentSchema = mongoose.Schema({
    id: String,
    name: String,
    owner: String,
    Location: LocationEnum,
});
module.exports = mongoose.model('Equipment', EquipmentSchema);

const LocationEnum = {
    ASHDOD: 'אשדוד',
    DIMONA: 'דימונה',
    ARAD: 'ערד'
};