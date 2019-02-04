const trackModel = require('../models/track-model')

exports.find = async (req, res) => {
    try {
        let viewer = await trackModel.find({})
        res.status(200).json(viewer)    
    } catch(err){
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        action: req.body.action,
        object: req.body.object,
        type: req.body.type
    }
    try {
        let newViewer = await new trackModel(data).save()
        res.status(201).json(newViewer);
    } catch(err) {
        res.status(500).json(err);
    }
    
}
