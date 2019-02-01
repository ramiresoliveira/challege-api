const router = require('express').Router()
const roleController = require('../controller/role-controller')

router.get('/', roleController.find)
router.post('/', roleController.save)
router.put('/', roleController.update)
router.delete('/', roleController.delete)

module.exports = router