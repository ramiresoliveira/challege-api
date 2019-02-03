const viewerModel = require('../models/viewer-model')
const uuidv1 = require('uuid/v1')

exports.find = async (req, res) => {
    try {
        let viewer = await viewerModel.find({})
        res.status(200).json(viewer)    
    } catch(err){
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        clientId: req.body.clientId,
        customFields: req.body.customFields,
        enabled: req.body.enabled
    }

    if (!data.clientId) {
        data.uuId = uuidv1()
    }

    try {
        let newViewer = await new viewerModel(data).save()
        res.status(201).json(newViewer);
    } catch(err) {
       res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    let id = req.body.id
    if(!id) {
        res.status(400).json({"message": "Informe o Id"})
    }
    let data = {}
    if (req.body.customFields) data.customFields = req.body.customFields
    if (req.body.enabled) data.enabled = req.body.enabled
    
    try {
        let newViewer = await viewerModel.findByIdAndUpdate(id, data,{new: false})
        res.status(202).json({"id": newViewer.id})
    } catch(err) {
        res.status(500).json(err)
    }
}