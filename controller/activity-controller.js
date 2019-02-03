const activityModel = require('../models/activity-model')

exports.find = async (req, res) => {
    try {
        let viewer = await activityModel.find({})
        res.status(200).json(viewer)    
    } catch(err){
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        idFlow: req.body.idFlow,
        idStep: req.body.idStep,
        ownerViewer: req.body.ownerViewer,
        type: req.body.type
    }
    if ((!data.idFlow) && (!data.idStep)) {
        res.status(400).json({"message": "Informe o idFlow ou idStep"})
    } else{
        try {
            let newViewer = await new activityModel(data).save()
            res.status(201).json(newViewer);
        } catch(err) {
           res.status(500).json(err);
        }
    }
}
