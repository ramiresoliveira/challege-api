const router = require('express').Router()
const flowController = require('../controller/flow-controller')

router.get('/', flowController.find)
router.post('/', flowController.save)
router.put('/', flowController.update)
router.delete('/', flowController.delete)

module.exports = router