const router = require('express').Router()
const stepController = require('../controller/step-controller')

router.get('/', stepController.find)
router.post('/', stepController.save)

module.exports = router