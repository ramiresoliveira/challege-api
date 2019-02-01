const roleModel = require('../models/role-model')

exports.find = async (req, res) => {
    try {
        let role = await roleModel.find({})
        res.status(200).json(role)    
    } catch(err){
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        name: req.body.name,
        idCompany: req.body.idCompany,
        enabled: req.body.enabled
    }

    try {
        let newRole = await new roleModel(data).save()
        res.status(201).json(newRole);
    } catch(err) {
       res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    let dataReq = req.body
    let {id, ...data} = {
        id: dataReq.id,
        name: req.body.name,
        enabled: req.body.enabled
    }
    
    try {
        let newRole = await roleModel.findByIdAndUpdate(id, data,{new: false, runValidators: true})
        res.status(202).json({"id": newRole.id})
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.delete = async (req, res) => {
    let id = req.body.id
    if(!id){
        res.status(400).json({"message": "Informe o Id"})
    }
    try {
        let role = await roleModel.findByIdAndDelete(id)
        res.status(202).json(role)
    } catch(err) {
        res.status(500).json(err)
    }
}