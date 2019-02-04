const companyModel = require('../models/company-model')
const subscriptionModel = require('../models/subscription-model')
const planModel = require('../models/plan-model')
const invoiceModel = require('../models/invoice-model')

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
        description: req.body.description,
        idOwner: req.body.idOwner
    }
    let subscription = req.body.subscription
    try{
        let newCompany = await new companyModel(data).save()
        addSubscription(newCompany.id,subscription)
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
        if (req.body.subscription){
            let subscriptionData = req.body.subscription
            addSubscription(newCompany._id, subscriptionData)
        }
        res.status(202).json({"id": newCompany.id})
    } catch(err) {
        res.status(500).json(err)
    }
}

addSubscription = async (idCompany, subscriptionData) => {
    
    let subscriptionObj = await subscriptionModel.findOne({idCompany: idCompany})
    if (subscriptionObj === null) {
        subscriptionData.idCompany = idCompany
        subscriptionObj = await new subscriptionModel(subscriptionData).save()
    } else{
        let obj = {}
        if (subscriptionData.status) obj.status = subscriptionData.status
        await subscriptionModel.findByIdAndUpdate(subscriptionObj._id, obj, {new: false})
    }
    addInvoice(subscriptionData, subscriptionObj._id)
}

addInvoice = async (subscriptionData, subscriptionId) => {
    let idPlan = subscriptionData.idPlan
    let planObj = await planModel.findById(idPlan)
    let invoiceObj = []
    if (planObj) {
        invoiceObj.value = planObj.value
    }
    invoiceObj.dueDate = subscriptionData.dueDate
    invoiceObj.idSubscription = subscriptionId
    await new invoiceModel(invoiceObj).save()
}