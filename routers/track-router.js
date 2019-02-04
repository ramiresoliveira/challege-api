const router = require('express').Router()
const trackController = require('../controller/track-controller')

router.get('/', trackController.find)
router.post('/', trackController.save)

module.exports = router