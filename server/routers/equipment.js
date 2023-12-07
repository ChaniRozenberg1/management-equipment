const express = require('express');
const router = express.Router();
const equipmentModel = require('../models/equipment');

router.get('/', async (request, response) => {
    const equipments = await equipmentModel.find(request.body).sort(request.query.sort || 'owner');
    try {
        response.send(equipments);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.post('/', async (request, response) => {
    try {
        const equipment = await new equipmentModel(request.body).save();
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})
router.put('/:id', async (request, response) => {
    try {
        console.log(request.body);
        let obj = {
            // _id: request.params.id,
            owner: request.body.owner,
            site: request.body.site,
            computerID: parseInt(request.body.computerID),
            headphonesID: parseInt(request.body.headphonesID),
            mouseID: parseInt(request.body.mouseID),
            keyboardID: parseInt(request.body.keyboardID),
            batteryID: parseInt(request.body.batteryID),
            screenID: parseInt(request.body.screenID),
            bagID: parseInt(request.body.bagID)
        }
        const equipment = await equipmentModel.updateOne(obj);
        console.log(equipment+"equipment updated");
        response.send(equipment);
    }
    catch (error) {
        console.log("error: " + error);
        response.status(500).send(error);
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const equipment = await equipmentModel.deleteOne({ "_id": request.params.id });
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.get('/:id', async (request, response) => {
    const equipment = await equipmentModel.find({ "_id": request.params.id });
    try {
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

module.exports = router