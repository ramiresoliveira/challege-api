const router = require('express').Router()
const viewerController = require('../controller/viewer-controller')

router.get('/', viewerController.find)
router.post('/', viewerController.save)

module.exports = router