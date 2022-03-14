const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.getUsers)
router.get('/:id', userController.getAUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.post('/login', userController.loginUser)

module.exports = router