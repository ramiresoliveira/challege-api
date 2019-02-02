const router = require('express').Router()
const userController = require('../controller/user-controller')

router.get('/', userController.find)
router.post('/', userController.save)
router.put('/', userController.update)
router.delete('/', userController.delete)

module.exports = router