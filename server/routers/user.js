const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const equipmentModel = require('../models/equipment');
const equipmentBL = require('../BL/equipment');

router.get('/' , async (request, response) => {
    const users = await userModel.find(request.body).sort(request.query.sort || 'owner');
    try{        
        response.send(users);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.post('/' , async (request, response) => {
    try{
        const users = await new userModel(request.body).save();
        response.send(users);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.put('/:id' , async (request, response) => {
    try{
        const users = await userModel.updateOne(
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
        response.send(users);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.delete('/:id' , async (request, response) => {
    try{
        const user = await userModel.findOneAndDelete({"_id": request.params.id});
        if(user) {
            const equipmentArray = equipmentBL.buildEquipmentModels(user)
            equipmentArray.forEach(async e => {
                await new equipmentModel(e).save();
            });
        }
        response.send(user);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

module.exports = router