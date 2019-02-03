const stepModel = require('../models/step-model')

exports.find = async (req, res) => {
    try {
        let step = await stepModel.find({})
        res.status(200).json(step)    
    } catch(err){
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        name: req.body.name,
        description: req.body.description,
        idFlow: req.body.idFlow,
        idCompany: req.body.idCompany,
        type: req.body.type,
        innerText: req.body.innerText,
        enabled: req.body.enabled
    }

    try {
        let lastStep = await stepModel.findOne({'idCompany': data.idCompany}).sort('-createdAt')
        let newStep = await new stepModel(data).save()
        if (lastStep) {
            await stepModel.findByIdAndUpdate(lastStep.id, {'idNextStep': newStep.id}, {new: false})
        }
        res.status(201).json(newStep);
    } catch(err) {
       res.status(500).json(err);
    }
}
