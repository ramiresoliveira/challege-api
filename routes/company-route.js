const router = require('express').Router()
const companyController = require('../controller/company-controller')

router.get('/', companyController.find)
router.post('/', companyController.save)
router.put('/', companyController.update)

module.exports = router