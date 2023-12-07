const unnecessaryEquipmentModel = require('../models/unnecessaryEquipment');

module.exports = {
    buildUnnecessaryEquipmentModels: function(equipment) {
        let equipmentArray = []
        equipmentDict.forEach(e => {
            equipmentArray.push(new unnecessaryEquipmentModel({ 
                equipmentName: Object.values(e)[0],
                equipmentID: equipment[Object.keys(e)[0] + 'ID'],
                site: equipment.site
            }))
        })
        return equipmentArray
    }
}


let equipmentDict = [
    {'computer': 'מחשב'},
    {'headphones': 'אזניות'},
    {'mouse': 'עכבר'},
    {'keyboard': 'מקלדת'},
    {'battery': 'מטען'},
    {'screen': 'מסך'},
    {'bag': 'תיק'}
]