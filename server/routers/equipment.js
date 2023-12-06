const express = require('express');
const router = express.Router();
const equipmentModel = require('../models/equipment');


router.get('/' , async (_, response) => {
    const equipments = await equipmentModel.find({});
    try{        
        response.send(equipments);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.post('/' , async (request, response) => {
    try{
        const equipment = await new equipmentModel(request.body).save();
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.put('/:id' , async (request, response) => {
    try{
        const equipment = await equipmentModel.updateOne(
            {
                _id: request.params.id,
                owner: request.body.owner,
                site: request.body.site,
                computerID: request.body.computerID,
                headphonesID: request.body.headphonesID,
                mouseID: request.body.mouseID,
                keyboardID: request.body.keyboardID,
                batteryID: request.body.batteryID,
                screenID: request.body.screenID,
                bagID: request.body.bagID
            }
            );
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.delete('/:id' , async (request, response) => {
    try{
        const equipment = await equipmentModel.deleteOne({"_id": request.params.id});
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.get('/:id' , async (request, response) => {
    const equipment = await equipmentModel.find({"_id": request.params.id});
    try{
        response.send(equipment);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

module.exports = router