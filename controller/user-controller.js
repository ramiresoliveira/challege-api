const userModel = require('../models/user-model')
const companyModel = require('../models/company-model')
const ObjectId = require('mongoose').Types.ObjectId
exports.find = async (req, res) => {
    try {
        let user = await userModel.find({})
        res.status(200).json(user)    
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.save = async (req, res) => {
    let data = {
        name: req.body.name,
        idCompany: req.body.idCompany,
        email: req.body.email,
        password: req.body.password,
        enabled: req.body.enabled,
        roles: req.body.roles
    }

    try {
        let newUser = await new userModel(data).save()
        res.status(201).json(newUser);
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
    if (req.body.email) data.email = req.body.email
    if (req.body.password) data.password = req.body.password
    if (req.body.enabled) data.enabled = req.body.enabled
    if (req.body.roles) data.roles = req.body.roles

    try {
        let newUser = await userModel.findByIdAndUpdate(id, data,{new: false})
        res.status(202).json({"id": newUser.id})
    } catch(err) {
        console.log('erro')
        res.status(500).json(err)
    }
}

exports.delete = async (req, res) => {
    
    let id = req.body.id
    if(!id){
        res.status(400).json({"message": "Informe o Id"})
    }
    try {
        let company = await companyModel.find({idOwner: id})
        if(Object.entries(company).length === 0 ) {
            let user = await userModel.findByIdAndDelete(id)
            res.status(202).json({"id": user.id})    
        } else {
            res.status(400).json({"message": "Este usuário é dono de uma empresa", "data": company})
        }
    } catch(err){
        res.status(500).json(err)
    }
}