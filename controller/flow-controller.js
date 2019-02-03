const flowModel = require('../models/flow-model')

exports.find = async (req, res) => {
    try {
        let flow = await flowModel.find({})
        res.status(200).json(flow)    
    } catch(err){
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        name: req.body.name,
        description: req.body.description,
        idStarStep: req.body.idStarStep,
        idCompany: req.body.idCompany,
        enabled: req.body.enabled
    }

    try {
        let newFlow = await new flowModel(data).save()
        res.status(201).json(newFlow);
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
    if (req.body.name) data.name = req.body.name
    if (req.body.description) data.description = req.body.description
    if (req.body.idStarStep) data.idStarStep = req.body.idStarStep
    if (req.body.enabled) data.enabled = req.body.enabled
    
    try {
        let newFlow = await flowModel.findByIdAndUpdate(id, data,{new: false})
        res.status(202).json({"id": newFlow.id})
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.delete = async (req, res) => {
    let id = req.body.id
    if(!id) {
        res.status(400).json({"message": "Informe o Id"})
    }
    try {
        let role = await flowModel.findByIdAndDelete(id)
        res.status(202).json({"id": role.id})
    } catch(err) {
        res.status(500).json(err)
    }
}