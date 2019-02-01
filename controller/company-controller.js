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
    let dataReq = req.body
    let {id, ...data} = {
        id: dataReq.id,
        name: dataReq.name,
        description: dataReq.description
    }
    try {
        let newCompany = await companyModel.findByIdAndUpdate(id, data, {new: false, runValidators: true})
        res.status(202).json({"id": newCompany.id})
    } catch(err) {
        res.status(500).json(err)
    }
}