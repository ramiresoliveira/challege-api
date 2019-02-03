const router = require('express').Router()
const activityController = require('../controller/activity-controller')

router.get('/', activityController.find)
router.post('/', activityController.save)

module.exports = router