const companyModel = require('../models/company-model')

exports.find = async (req, res) => {
    try {
        let company = await companyModel.find({})
        res.status(200).json(company)
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        name: req.body.name,
        description: req.body.description
    }
    try{
        let newCompany = await new companyModel().save()
        res.status(201).json(newCompany);
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
    if (req.body.idOwner) data.idOwner = req.body.idOwner

    try {
        let newCompany = await companyModel.findByIdAndUpdate(id, data, {new: false})
        res.status(202).json({"id": newCompany.id})
    } catch(err) {
        res.status(500).json(err)
    }
}